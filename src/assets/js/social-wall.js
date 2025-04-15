class SocialWall {
    constructor() {
        this.container = document.querySelector('.social-wall .container');
        this.grid = document.querySelector('.social-wall .masonry-grid');
        this.masonry = null;
        this.resizeTimeout = null;
        this.POST_LIMIT = 50;
        this.BSKY_API = 'https://api.bsky.app';
        this.REFRESH_INTERVAL = 15 * 60 * 1000; // 15 minutes

        if (!this.container || !this.grid) {
            console.warn('Social wall elements not found');
            return;
        }

        this.init();
    }

    async init() {
        this.initMasonry();
        await this.loadPosts();
        this.setupEventListeners();
        
        // Refresh posts periodically
        setInterval(async () => {
            await this.loadPosts();
        }, this.REFRESH_INTERVAL);
    }

    async loadPosts() {
        try {
            const res = await fetch(`${this.BSKY_API}/xrpc/app.bsky.feed.searchPosts?q=%23OvaryRoll&limit=${this.POST_LIMIT}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                throw new Error('Failed to fetch posts');
            }

            const data = await res.json();
            const posts = data.posts ? data.posts.map(post => {
                // Extract image from either embedded images or media
                let embed = null;
                if (post.embed?.images?.length > 0) {
                    embed = {
                        images: [{
                            fullsize: post.embed.images[0].fullsize,
                            thumb: post.embed.images[0].thumb,
                            alt: post.embed.images[0].alt
                        }]
                    };
                } else if (post.record?.embed?.images?.length > 0) {
                    embed = {
                        images: [{
                            fullsize: post.record.embed.images[0].fullsize,
                            thumb: post.record.embed.images[0].thumb,
                            alt: post.record.embed.images[0].alt
                        }]
                    };
                }

                return {
                    author: post.author.handle,
                    content: post.record.text,
                    timestamp: post.indexedAt,
                    avatar: post.author.avatar || null,
                    displayName: post.author.displayName || post.author.handle,
                    embed: embed
                };
            }) : [];

            if (posts.length === 0) {
                const noPostsEl = document.createElement('div');
                noPostsEl.className = 'no-posts';
                noPostsEl.innerHTML = `
                    <p>No posts yet. Be the first to share your #OvaryRoll experience!</p>
                `;
                this.grid.innerHTML = '';
                this.grid.appendChild(noPostsEl);
                return;
            }

            this.renderPosts(posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
            const errorEl = document.createElement('div');
            errorEl.className = 'error-message';
            errorEl.innerHTML = `
                <p>Unable to load posts at this time. Please try again later.</p>
                <small>${error.message}</small>
            `;
            this.grid.innerHTML = '';
            this.grid.appendChild(errorEl);
        }
    }

    initMasonry() {
        if (this.masonry) {
            this.masonry.destroy();
        }

        this.masonry = new Masonry(this.grid, {
            itemSelector: '.post',
            percentPosition: true,
            transitionDuration: '0.2s',
            initLayout: true,
            horizontalOrder: true,
            stagger: 30,
            resize: true
        });

        // Force layout after initialization
        setTimeout(() => {
            this.masonry.layout();
        }, 100);
    }

    setupEventListeners() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.initMasonry();
            }, 250);
        });
    }

    renderPosts(posts) {
        this.grid.innerHTML = '';
        
        const fragment = document.createDocumentFragment();
        posts.forEach(post => {
            const postElement = this.createPostElement(post);
            fragment.appendChild(postElement);
        });
        
        this.grid.appendChild(fragment);
        
        // Initialize masonry after all posts are added
        this.initMasonry();
        
        // Handle images
        const images = this.grid.querySelectorAll('img');
        if (images.length) {
            images.forEach(img => {
                if (img.complete) {
                    this.masonry.layout();
                } else {
                    img.addEventListener('load', () => this.masonry.layout());
                }
            });
        }
    }

    createPostElement(post) {
        const postEl = document.createElement('div');
        postEl.className = 'post';

        const innerEl = document.createElement('div');
        innerEl.className = 'post__inner';

        const headerEl = document.createElement('div');
        headerEl.className = 'post__header';
        
        const authorEl = document.createElement('div');
        authorEl.className = 'post__author';
        authorEl.innerHTML = `
            ${post.avatar ? `<img src="${post.avatar}" alt="${post.displayName}" class="post__avatar">` : ''}
            <span class="post__name">${post.displayName || post.author}</span>
            <span class="post__handle">@${post.author}</span>
        `;

        const timeEl = document.createElement('time');
        timeEl.className = 'post__time';
        timeEl.textContent = this.formatTimestamp(post.timestamp);

        headerEl.appendChild(authorEl);
        headerEl.appendChild(timeEl);

        const contentEl = document.createElement('div');
        contentEl.className = 'post__content';
        contentEl.innerHTML = this.formatContent(post.content);

        innerEl.appendChild(headerEl);
        innerEl.appendChild(contentEl);

        // Add image if present
        if (post.embed?.images?.[0]) {
            const mediaEl = document.createElement('div');
            mediaEl.className = 'post__media';
            
            const imgEl = document.createElement('img');
            imgEl.className = 'post__image';
            imgEl.src = post.embed.images[0].fullsize || post.embed.images[0].thumb;
            imgEl.alt = post.embed.images[0].alt || 'Post image';
            imgEl.loading = 'lazy';
            
            // Update masonry layout after image loads
            imgEl.onload = () => {
                if (this.masonry) {
                    this.masonry.layout();
                }
            };

            mediaEl.appendChild(imgEl);
            innerEl.appendChild(mediaEl);
        }

        postEl.appendChild(innerEl);
        return postEl;
    }

    formatContent(content) {
        // Format URLs, hashtags, and mentions
        return content
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
            .replace(/#(\w+)/g, '<a href="https://bsky.app/search?q=%23$1" target="_blank">#$1</a>')
            .replace(/@([a-zA-Z0-9.-]+)/g, '<a href="https://bsky.app/profile/$1" target="_blank">@$1</a>');
    }

    formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        // If less than 24 hours ago, show relative time
        if (diff < 24 * 60 * 60 * 1000) {
            const hours = Math.floor(diff / (60 * 60 * 1000));
            if (hours < 1) {
                const minutes = Math.floor(diff / (60 * 1000));
                return `${minutes}m ago`;
            }
            return `${hours}h ago`;
        }
        
        // Otherwise show date
        return date.toLocaleDateString();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SocialWall();
}); 