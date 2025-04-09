(function () {
    const EGG_COLORS = {
      pink: '#ff647d',
      purple: '#9d45a2',
      blue: '#165D8B',
      gold: '#EBA030'
    };
  
    const SVG_PATHS = [
      // Asset 1
      "M5.01,227.03c1.71-31.48,9.52-59.79,21.45-85.55,12.51-27.07,29.08-49.34,51.51-71.33,21.42-21.14,46.93-39.15,78.25-52.6,33.36-14.4,72.21-21.85,117.34-21.85,33.69,0,64.59,3.64,91.91,11.4,27.76,7.9,52.42,20.45,73.24,37.3,22.11,17.97,40.18,40.21,55.49,67.72,14.93,26.84,26.14,57.89,33.32,92.17,7.27,34.84,10.83,72.93,10.83,113.42,0,36.94-4.04,71.55-12.02,103.67-7.62,30.4-19.04,58.07-33.95,82.26-15.45,24.97-33.77,46.27-54.37,63.21-20.1,16.51-42.88,29.17-68.15,37.62-24.59,8.2-52.37,12.45-83.65,12.45-41.42,0-78.88-6.38-111.32-19.26-31.92-12.66-59.44-30.42-81.8-52.72-22.47-22.41-40.28-49.36-53.08-79.89-13.07-31.23-21.28-67.35-24.39-107.24-2.74-35.51-1.82-68.5,2.74-99.48Z",
      // Asset 2
      "M.71,265.61c10.39-47.5,34.84-86.2,72.68-115.42C110.3,122.27,157.54,108.74,217.3,108.74c49.89,0,93.25,10.83,129.08,32.15,37.02,22.09,65.76,54.7,85.48,97.19,19.39,41.63,29.43,90.76,29.43,146.41,0,57.6-10.04,106.73-29.43,148.02-19.72,41.63-48.46,72.39-85.48,90.88-35.83,18.5-79.2,27.84-129.08,27.84-58.76,0-105.89-12.87-141.54-38.27C35.19,582.84,10.73,545.16.71,495.33c-3.63-17.38-5.31-38.36-5.31-63.28,0-23.41,1.58-45.35,4.7-65.79,3.74-24.2,9.64-47.51,17.3-69.95Z",
      // Asset 3
      "M3.15,27.96c25.09-5.15,52.08-7.78,80.24-7.78,61.73,0,112.45,14.64,152.42,43.54,38.63,28.04,67.24,67.77,86.36,118.06,18.38,47.92,27.67,105.15,27.67,169.54,0,51.91-6.78,99.35-20.15,141.57-13.26,41.84-33.39,76.63-60.1,102.49-25.82,24.8-57.62,42.64-94.36,52.92-35.05,9.84-75.68,14.82-120.81,14.82-32.78,0-63.52-3.7-91.27-10.99-27.49-7.25-51.6-17.93-71.67-31.7-19.42-13.25-34.64-28.98-45.21-46.69-10.3-17.19-17.54-36.36-21.51-57.01-3.78-19.6-5.68-40.72-5.68-63.01,0-36.77,3.54-70.71,10.52-100.78,6.93-29.9,17.68-57.36,31.92-81.58,14.79-24.98,33.06-46.11,54.34-62.8,21.88-17.14,47.47-30.21,76.08-38.78Z",
      // Asset 4
      "M.77,214.6c11.86-18.76,27.34-35.68,46.1-50.18,21.27-16.11,44.74-28.42,69.59-36.47,26.1-8.42,54.72-12.7,85.03-12.7,57.12,0,106.67,11.92,147.27,35.41,39.95,23.05,69.77,56.41,89.31,99.19,19.02,41.13,28.65,90.14,28.65,145.01,0,46.7-7.84,91.26-23.29,132.5-15.34,40.96-38.18,75.36-67.82,101.95-29.08,26.08-64.5,45.92-105.22,58.99-38.35,12.34-82.63,18.59-131.56,18.59-51.37,0-96.84-8.2-135.86-24.39-39.41-16.39-70.84-39.43-93.41-68.5-21.81-27.97-36.67-60.59-44.14-96.82-7.14-34.65-7.95-73.26-2.43-114.74,5.03-38.5,15.91-72.97,32.29-102.66Z"
    ];
  
    let selectedAvatar = null;
    let roundCount = parseInt(localStorage.getItem('resistanceRollRounds')) || 0;
    const triedAvatars = JSON.parse(localStorage.getItem('triedAvatars')) || [];
  
    const avatarButtons = document.querySelectorAll('.avatar');
    const canvas = document.getElementById('roll-canvas');
    const gameSection = document.getElementById('game-canvas');
    const messageSection = document.getElementById('result');
    const messageBox = document.getElementById('message');
    const playAgainButton = document.getElementById('play-again');
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
  
    avatarButtons.forEach(button => {
      const id = parseInt(button.dataset.id);
      if (triedAvatars.includes(id)) {
        button.classList.add('tried');
      }
    });
  
    avatarButtons.forEach(button => {
      button.addEventListener('click', () => {
        selectedAvatar = parseInt(button.dataset.id);
        avatarButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        gameSection.classList.remove('hidden');
        runGame();
      });
    });
  
    playAgainButton.addEventListener('click', () => {
      location.reload();
    });
  
    function runGame() {
      const pathD = SVG_PATHS[0];
  
      // Create a temporary SVG path element to measure length
      const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      tempPath.setAttribute('d', pathD);
      tempSvg.setAttribute('viewBox', '0 0 900 600');
  tempSvg.setAttribute('width', '900');
  tempSvg.setAttribute('height', '600');
  tempSvg.appendChild(tempPath);
      // Hide temp SVG to avoid visual artifacts
  tempSvg.style.position = 'absolute';
  tempSvg.style.width = '0';
  tempSvg.style.height = '0';
  tempSvg.style.overflow = 'hidden';
  document.body.appendChild(tempSvg);
  
      const totalLength = tempPath.getTotalLength();
      let t = 0;
      const step = 0.006;
      const eggColor = getOvaryColor();
  
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
  
      function getPointAtT(t) {
    const point = tempPath.getPointAtLength(t * totalLength);
    const scale = 0.25;
    return {
      x: point.x * scale + 50, // add margin/centering
      y: point.y * scale + 50
    };
  }
  
      function update() {
        if (t <= 1) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          drawFinishLine();
  
          const current = getPointAtT(t);
          const next = getPointAtT(Math.min(t + step, 1));
          const angle = Math.atan2(next.y - current.y, next.x - current.x);
  
          drawEgg(current.x, current.y, angle);
          t += step;
  
          requestAnimationFrame(update);
        } else {
          document.body.removeChild(tempSvg);
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
  
      if (roundCount >= 4) {
        messageBox.innerHTML = `Eggstraordinary work, super reSister! Nothing can slow your roll.`;
        launchConfetti();
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
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  })();
  