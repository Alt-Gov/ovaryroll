(function () {
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
        sectionId: 'repo-rights'
      },
      {
        message: 'Healthcare matters — and so does your roll.',
        sectionId: 'health-care'
      },
      {
        message: 'You rolled for equity. You legend.',
        sectionId: 'equal-employment'
      },
      {
        message: 'Voting protections unlocked. Keep it rolling.',
        sectionId: 'voting-protections'
      }
    ];
  
    // Set static canvas size
    canvas.width = 800;
    canvas.height = 600;
  
    // Mark previously tried avatars
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
      let x = 50;
      let y = canvas.height / 2;
      let velocity = 1.5;
      const finishLine = canvas.width - 80;
      const pathVariation = Array.from({ length: finishLine }, (_, i) => Math.sin(i / 20) * 1.5);
  
      function drawEgg(x, y) {
        const width = 40;
        const height = 55;
        context.save();
        context.translate(x, y);
        context.beginPath();
        context.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
        context.fillStyle = getOvaryColor();
        context.fill();
        context.closePath();
        context.restore();
      }
  
      function drawFinishLine() {
        const startX = finishLine + 10;
        const startY = canvas.height / 2 - 40;
        const squareSize = 10;
        const rows = 8;
        const cols = 4;
  
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            context.fillStyle = (row + col) % 2 === 0 ? '#000' : '#fff';
            context.fillRect(startX + col * squareSize, startY + row * squareSize, squareSize, squareSize);
          }
        }
      }
  
      function update() {
        if (x < finishLine) {
          x += velocity;
          y = canvas.height / 2 + pathVariation[Math.floor(x)] || 0;
  
          context.clearRect(0, 0, canvas.width, canvas.height);
          drawEgg(x, y);
          drawFinishLine();
  
          requestAnimationFrame(update);
        } else {
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
      const baseColors = ['#f6c1c1', '#c1f6d4', '#c1d4f6', '#f6e6c1'];
      let color = baseColors[selectedAvatar - 1];
      if (roundCount === 1) {
        color = brighten(color);
      } else if (roundCount === 2) {
        return 'repeating-linear-gradient(45deg, ' + color + ', silver 10px)';
      } else if (roundCount === 3) {
        return 'repeating-linear-gradient(45deg, ' + color + ', gold 10px)';
      }
      return color;
    }
  
    function brighten(color) {
      return color.replace('c1', 'e1');
    }
  
    function showResultForAvatar(index) {
      const data = avatarData[index - 1];
  
      if (roundCount >= 4) {
        messageBox.innerHTML = `Eggstraordinary work, super reSister! Nothing can slow your roll.`;
        launchConfetti();
      } else {
        messageBox.textContent = data.message;
      }
  
      // Hide all info sections
      document.querySelectorAll('#info-sections > section').forEach(section => {
        section.classList.add('hidden');
      });
  
      // Show only the matching section
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
  