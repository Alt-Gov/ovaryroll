(function () {
    const EGG_COLORS = {
        pink: '#ff647d',
        purple: '#9d45a2',
        blue: '#165D8B',
        gold: '#EBA030'
    };

    const SVG_PATHS = [
        // Cleaned Asset 1
        "M0,28.32c9.48-1.83,18.87-4.05,28.26-6.31C68.05,12.45,108.66,5.46,149.45,1.76c10.22-.93,20.47-1.55,30.73-1.73,8.76-.15,15.84,0,22.44,6.5,13.56,13.35,14.23,33.56,18.5,50.95,4.51,18.36,14.81,34.33,30.83,44.63,14.7,9.45,31.77,14.83,49.13,16.43,8.74.81,17.72.81,26.43-.34,9.56-1.27,13.65-9.42,15.93-17.84,2.15-7.97,3.03-16.48,7.27-23.72s12.4-11.86,20.3-13.71c15.95-3.73,33.53,4.66,40.47,19.6,3.71,7.99,5.59,17.47,3.78,26.19-1.81,8.74-7.19,17.24-12.47,24.3-10.82,14.44-26.18,26.79-25.81,46.54.36,19.46,16.94,27.14,32.51,33.61,8.24,3.42,16.93,6.93,26,6.86,9.87-.08,16.82-5.5,24.6-10.82,14.71-10.06,30.03-19.29,47.94-22.04,18.51-2.85,36.34-2.93,54.44,2.21,13.84,3.93,27.69,10.48,36.96,21.84,2.31,2.83,4.29,5.93,5.88,9.21,1.78,3.68,1.93,7.43,3.67,11.11,3.66,7.75,6.65,15.86,11.61,22.92,9.12,12.99,23.34,23.14,38.13,28.72,29.28,11.04,65.62,1.7,86.09-21.84",
        // Cleaned Asset 2
        "M0,23.04c16.74-2.88,33.78-5.77,50.63-3.59,16.85,2.17,33.78,10.21,42.61,24.72,7.47,12.28,10.61,29.96,24.44,33.85,11.46,3.22,22.68-5.9,29.62-15.56,6.95-9.67,12.74-21.15,23.44-26.36,15.34-7.46,36.39,4.51,37.83,21.51,1.19,14.12-9.01,26.76-20.46,35.11-11.45,8.35-24.78,14.22-34.88,24.16-10.1,9.93-16.29,26.11-9.19,38.37,6.32,10.91,20.93,14.51,33.31,12.09,12.37-2.42,23.22-9.52,34.16-15.8,18.94-10.86,43.74-19.27,61.49-6.57,25.86,18.48,12.27,61.46,29.41,88.23,9.18,14.34,26.49,22.01,43.48,23,23.76,1.38,47.89-9.5,62.6-28.21,20.78-26.45,21.25-63.37,16.86-96.72-4.39-33.35-12.67-67.22-6-100.19,1.44-7.11,3.69-14.32,8.47-19.77C434.89,3.21,446.3.37,457.03.04c16.61-.52,34.2,4.59,45.06,17.18,16.91,19.61,12.43,49.23,6.02,74.32-4,15.66-6.1,36.69,8.44,43.75,8.72,4.23,19.59.36,26.53-6.41,6.94-6.77,10.96-15.9,15.32-24.55,2.68-5.31,6-10.93,11.58-12.97,4.35-1.59,9.16-.64,13.7.24,43.01,8.32,87.51,8.86,130.7,1.6",
        // Cleaned Asset 3
        "M0,51.45c26.04,12.29,57.55-1.68,85.39,5.65,21.46,5.65,37.71,23.17,50,41.64,12.29,18.47,22.04,38.83,37.01,55.2,19.96,21.83,47.89,34.97,76.48,42.57,7.03,1.87,14.52,3.42,21.49,1.34,15.55-4.66,20.57-24.21,20.31-40.44-.34-21.2-5.25-42.31-14.3-61.48-6.43-13.62-14.95-26.35-19.49-40.72s-4.37-31.45,5.37-42.95c10.35-12.21,28.88-14.67,44.25-10.17,15.37,4.5,28.34,14.65,40.9,24.58,35.5,28.07,71.01,56.14,106.51,84.21,12.07,9.54,28.69,19.45,41.63,11.12,4.22-2.71,7.14-6.98,10.13-11,7.44-10.02,16.28-19.43,27.54-24.79,11.26-5.37,25.35-6.06,35.81.74,5.46,3.55,9.56,8.82,13.14,14.27,12.12,18.47,19.19,39.7,28.34,59.81,9.15,20.11,21.19,39.97,39.92,51.69,18.73,11.72,45.52,12.89,61.48-2.38",
        // Cleaned Asset 4
        "M0,289.26c15.94,8.21,35.49,7.73,52.13,1.07,16.65-6.65,30.57-18.97,41.51-33.17,8.97-11.65,16.63-25.11,29.35-32.46,35.19-20.35,83.82,17.65,118.87-2.93,16.72-9.81,24.29-30.65,23.95-50.03-.34-19.38-7.18-37.97-13.16-56.41s-11.21-37.86-8.25-57.02c3.83-24.81,22.41-46.77,46.24-54.66,30.75-10.18,64.38,2.41,92.23,18.94,14,8.3,27.67,17.92,37.05,31.22,20.64,29.26,15.99,69.85,1.8,102.72-10.57,24.49-26.23,50.46-18.26,75.92,5.61,17.92,21.79,30.32,38.05,39.71,16.64,9.6,35.06,17.5,54.26,17.11,19.2-.39,39.2-10.82,46.04-28.77,11.15-29.26-15.5-60.11-13.62-91.36,1.34-22.15,18.88-42.31,40.64-46.69,14.57-2.93,29.81.69,43.29,6.95,38,17.63,24.59,62.56,66.31,95.15,14.36,11.22,28.12,15.97,32.73,17.44,20.23,6.45,38.05,5.15,48.3,3.58"
    ];
    
    let selectedAvatar = null;
    let roundCount = parseInt(localStorage.getItem('resistanceRollRounds')) || 0;
    const triedAvatars = JSON.parse(localStorage.getItem('triedAvatars')) || [];

    const avatarButtons = document.querySelectorAll('.avatar');
    const canvas = document.getElementById('roll-canvas');
    const gameSection = document.getElementById('game-canvas');
    const messageSection = document.getElementById('result');
    const messageBox = document.getElementById('message');
    const context = canvas.getContext('2d');

    const avatarData = [
        {
            message: 'Nice roll! Reproductive rights are human rights.',
            sectionId: 'repo-rights',
            color: EGG_COLORS.pink
        },
        {
            message: 'Healthcare matters — and so does your roll.',
            sectionId: 'health-care',
            color: EGG_COLORS.purple
        },
        {
            message: 'You rolled for equity. You legend.',
            sectionId: 'equal-employment',
            color: EGG_COLORS.blue
        },
        {
            message: 'Voting protections unlocked. Keep it rolling.',
            sectionId: 'voting-protections',
            color: EGG_COLORS.gold
        }
    ];

    canvas.width = 900;
    canvas.height = 600;
    gameSection.classList.add('hidden'); // Hide canvas initially

    avatarButtons.forEach(button => {
        const id = parseInt(button.dataset.id);
        if (triedAvatars.includes(id)) {
            button.classList.add('tried');
        }

        button.addEventListener('click', () => {
            selectedAvatar = parseInt(button.dataset.id);
            pathD = SVG_PATHS[selectedAvatar - 1];
            avatarButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            messageSection.classList.add('hidden');
            gameSection.classList.remove('hidden');
            context.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(window.__eggAnimFrame);
            runGame();
        });
    });

    let pathD = SVG_PATHS[0]; // default fallback

    function runGame() {
        if (window.__rollTempSvg) {
            document.body.removeChild(window.__rollTempSvg);
        }
        const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        tempPath.setAttribute('d', pathD);
        tempSvg.setAttribute('viewBox', '0 0 900 600');
        tempSvg.setAttribute('width', '900');
        tempSvg.setAttribute('height', '600');
        tempSvg.appendChild(tempPath);
        tempSvg.style.position = 'absolute';
        tempSvg.style.width = '0';
        tempSvg.style.height = '0';
        tempSvg.style.overflow = 'hidden';
        document.body.appendChild(tempSvg);
        window.__rollTempSvg = tempSvg;

        const totalLength = tempPath.getTotalLength();
        let distance = 0;
        const step = 0.006; // 20% faster
        const velocity = step * totalLength;
        const eggColor = getOvaryColor();
        const scaleX = 1.2;
        const scaleY = (canvas.height / 600) * 1.2;
        const horizontalOffset = (canvas.width - 900) / 2;

        function drawEgg(x, y, angle) {
            const width = 40;
            const height = 55;
            context.save();
            context.translate(x, y);
            context.rotate(angle);
            context.beginPath();
            context.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
            context.fillStyle = eggColor;
            context.fill();
            context.closePath();
            context.restore();
        }

        function drawFinishLine() {
            const startX = canvas.width - 80 + 10;
            const squareSize = 10;
            const cols = 4;
            const rows = Math.ceil(canvas.height / squareSize);

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    context.fillStyle = (row + col) % 2 === 0 ? '#000' : '#fff';
                    context.fillRect(startX + col * squareSize, row * squareSize, squareSize, squareSize);
                }
            }
        }

        let lastPoint = null;
        let lastAngle = 0;
        function update() {
            if (distance + velocity < totalLength) {
                window.__eggAnimFrame = requestAnimationFrame(update);

                context.clearRect(0, 0, canvas.width, canvas.height);
                drawFinishLine();

                const steps = 300;
                context.beginPath();
                for (let i = 0; i <= steps; i++) {
                    const len = (i / steps) * totalLength;
                    const rawPoint = tempPath.getPointAtLength(len);
                    const point = {
                        x: rawPoint.x * scaleX + horizontalOffset,
                        y: rawPoint.y * scaleY
                    };
                    if (i === 0) {
                        context.moveTo(point.x, point.y);
                    } else {
                        context.lineTo(point.x, point.y);
                    }
                }
                context.strokeStyle = '#ccc';
                context.lineWidth = 2;
                context.stroke();

                const rawCurrent = tempPath.getPointAtLength(distance);
                const current = {
                    x: rawCurrent.x * scaleX + horizontalOffset,
                    y: rawCurrent.y * scaleY
                };
                const rawNext = tempPath.getPointAtLength(Math.min(distance + velocity * 0.5, totalLength));
                const next = {
                    x: rawNext.x * scaleX + horizontalOffset,
                    y: rawNext.y * scaleY
                };
                const angle = Math.atan2(next.y - current.y, next.x - current.x);
                lastPoint = current;
                lastAngle = angle;

                drawEgg(current.x, current.y, angle);
                distance += velocity;
            } else {
                drawEgg(lastPoint.x, lastPoint.y, lastAngle);
                cancelAnimationFrame(window.__eggAnimFrame);
                if (document.body.contains(tempSvg)) {
                    document.body.removeChild(tempSvg);
                }
                roundCount++;
                localStorage.setItem('resistanceRollRounds', roundCount);
                if (!triedAvatars.includes(selectedAvatar)) {
                    triedAvatars.push(selectedAvatar);
                    localStorage.setItem('triedAvatars', JSON.stringify(triedAvatars));
                }
                gameSection.classList.add('hidden');
                messageSection.classList.remove('hidden');
                showResultForAvatar(selectedAvatar);
            }
        }
        update();
    }

    function getOvaryColor() {
        return avatarData[selectedAvatar - 1].color;
    }

    function showResultForAvatar(index) {
        const data = avatarData[index - 1];

        const triedAllAvatars = [1, 2, 3, 4].every(id => triedAvatars.includes(id));

        if (triedAllAvatars) {
            messageBox.innerHTML = `Eggstraordinary work, super reSister! Nothing can slow your roll.`;
        } else {
            messageBox.textContent = data.message;
        }

        document.querySelectorAll('#info-sections > section').forEach(section => {
            section.classList.add('hidden');
        });

        const sectionToShow = document.getElementById(data.sectionId);
        if (sectionToShow) {
            sectionToShow.classList.remove('hidden');
        }

        document.getElementById('info-sections').classList.remove('hidden');
    }

    function launchConfetti() {
        const end = Date.now() + 1000;
        (function frame() {
            confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 } });
            confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 } });
            if (Date.now() < end) requestAnimationFrame(frame);
        })();
    }
})();
