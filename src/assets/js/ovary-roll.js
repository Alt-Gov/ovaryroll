(function () {
    const EGG_COLORS = {
      pink: '#ff647d',
      purple: '#9d45a2',
      blue: '#165D8B',
      gold: '#EBA030'
    };
  
    const SVG_PATHS = [
      // Updated Asset 1
      "M.71,265.61c10.39,11.88,24.6,20.17,39.79,24.25s31.74,4.06,46.7-1.04c16.54-5.64,31.95-16.51,41.92-30.96,2.69-3.9,4.81-8.15,6.78-12.44.99-2.15,1.94-4.32,2.91-6.48,1.02-2.27,2.19-4.5,2.94-6.88s1.14-4.83,2.07-7.12,2.17-4.28,3.48-6.24c2.41-3.63,5.39-6.85,8.69-9.69,6.45-5.56,14.24-9.51,22.23-12.38,9.12-3.27,18.66-5.34,28.32-6.06s20.19-.19,30.16,1.24c9.2,1.32,17.96,4.12,26.29,8.22s16.05,9.1,23.65,14.33,14.46,9.98,23.47,10.63c9.98.72,19.66-3.25,28.68-7.01,6.54-2.72,13.15-5.53,18.99-9.58s10.69-9.26,13.2-15.99c2.75-7.37,2.33-15.94-.15-23.32-5.11-15.2-18.06-25.83-26.95-38.7-5.29-7.66-9.93-16.27-10.02-25.8-.08-8.43,2.6-17.56,7.75-24.3,4.33-5.66,10.6-9.8,17.41-11.81,7.24-2.13,14.8-1.75,21.82,1.02,3.69,1.46,7.2,3.63,10.03,6.41,3,2.94,4.95,6.62,6.29,10.57,2.78,8.16,3.37,16.96,7.09,24.81,1.59,3.36,3.83,6.37,6.81,8.6,3.43,2.57,7.42,3.24,11.58,3.67,10.16,1.05,20.47.64,30.57-.84,18.1-2.65,36.54-9.5,50.71-21.31,12.68-10.57,21.02-25.5,24.84-41.45,3.64-15.22,4.41-32.49,14.31-45.35,2.37-3.07,5.19-5.88,8.71-7.57,3.26-1.56,6.96-1.91,10.52-1.99,10.18-.23,20.45.49,30.59,1.31,20.88,1.68,41.69,4.38,62.36,7.78,20.63,3.4,41.12,7.56,61.46,12.41,9.94,2.37,19.88,4.76,29.92,6.71,1.32.26,2.7-.37,3.08-1.75.34-1.23-.41-2.82-1.75-3.08-10.36-2.01-20.6-4.5-30.87-6.93s-20.45-4.67-30.73-6.74c-20.56-4.13-41.27-7.52-62.09-10.13-10.43-1.31-20.9-2.44-31.38-3.28s-20.28-1.52-30.4-1.32c-3.89.08-7.88.47-11.52,1.94-3.96,1.6-7.24,4.21-10.04,7.41-5.44,6.21-8.81,13.81-11.05,21.7s-3.4,15.72-5.06,23.58-4.06,15.54-7.86,22.68c-3.75,7.06-8.64,13.42-14.58,18.78-6.5,5.86-14.26,10.3-22.24,13.81-17.7,7.78-37.83,10.55-57.02,8.66-3.65-.36-7.19-.94-10.01-3.45-2.44-2.17-4.11-5.08-5.28-8.1-3.2-8.28-3.71-17.32-7.25-25.5-6.73-15.58-25.75-22.29-41.56-18.27-7.41,1.89-14.35,5.98-19.46,11.68-5.87,6.54-9.19,15.13-10.32,23.77-.61,4.67-.49,9.41.58,14.01s3.09,9.15,5.44,13.33c4.25,7.58,9.78,14.31,15.37,20.92,9.49,11.21,19.92,24.38,16.66,40.12-2.88,13.91-16.64,20.49-28.63,25.53-8.62,3.63-17.75,7.63-27.29,7.4-8.75-.21-15.82-5.62-22.74-10.36-15.37-10.53-31.67-19.95-50.38-22.66-19.97-2.9-40.23-2.37-59.47,4.12-8.29,2.8-16.37,6.57-23.34,11.91-3.49,2.68-6.72,5.66-9.49,9.09-3.08,3.81-5.93,8.11-7.43,12.81-.75,2.35-1.16,4.82-2.06,7.12-.84,2.17-1.94,4.26-2.88,6.38-1.92,4.32-3.84,8.65-6.19,12.76-4.39,7.66-10.53,14.19-17.43,19.64-12.73,10.04-28.42,16.35-44.67,16.91s-30.99-3.52-44.19-11.54c-6.31-3.83-11.99-8.57-16.84-14.13-.89-1.02-2.63-.91-3.54,0-1.01,1.01-.89,2.52,0,3.54h0Z",
      // Leave other paths untouched
      "M3.15,27.96c25.09-4.31,53.12-8.77,75.95,5.62,4.51,2.84,8.61,6.4,11.9,10.61,3.09,3.97,5.27,8.57,7.34,13.13,3.85,8.47,7.6,18.27,15.94,23.35,4.78,2.91,10.55,3.68,15.95,2.34,5.82-1.44,10.98-5.05,15.23-9.18,8.19-7.95,12.7-18.78,20.68-26.91,3.47-3.53,7.6-6.44,12.42-7.56,4.13-.96,8.48-.57,12.6.78,8.24,2.69,15.41,9.53,17.14,18.17,2.14,10.66-4.33,21.23-11.69,28.54-8.66,8.6-19.79,13.99-29.87,20.68-5.12,3.4-10.17,7.14-14.34,11.69-3.91,4.27-7.01,9.23-9.09,14.64-3.95,10.3-3.03,22.44,5.17,30.44,7.48,7.3,18.83,9.74,28.97,8.44,12.85-1.65,24.16-8.58,35.14-14.98,10.26-5.98,21.09-11.22,32.88-13.34,10.37-1.87,21.63-.66,30,6.16,14.4,11.73,14.83,32.63,16.85,49.79,1.14,9.63,2.51,19.42,6.25,28.44,4.18,10.09,11.3,18.29,20.73,23.85,20.15,11.87,45.74,10.82,66.44.98,10.31-4.9,19.65-12.13,26.76-21.07,7.24-9.1,12.33-19.65,15.47-30.83,6.48-23.05,5.16-47.55,1.95-71.01-3.8-27.78-10.07-55.72-7.51-83.91.6-6.63,1.63-13.34,3.62-19.71,1.77-5.65,4.63-10.94,9.32-14.68,8.62-6.87,20.89-7.97,31.49-7.23s21.99,4.12,30.51,11.02c8.52,6.91,13.52,16.69,15.46,27.38,1.98,10.92.97,22.31-.96,33.16-1.86,10.47-5.24,20.65-6.34,31.26-.95,9.15-.4,19.51,5.74,26.89,3.31,3.97,8.17,6.41,13.26,7.02,5.73.69,11.63-1.06,16.55-3.96,10.83-6.39,16.2-18.31,21.6-29.1,2.29-4.57,4.89-9.89,9.72-12.25,2.67-1.31,5.78-1.25,8.67-.87,3.41.44,6.78,1.24,10.16,1.84,28.13,4.98,56.83,6.72,85.36,5.13,13.73-.77,27.41-2.31,40.98-4.58,1.33-.22,2.08-1.87,1.75-3.08-.39-1.41-1.74-1.97-3.08-1.75-28.05,4.7-56.65,6.06-85.03,4.15-14.08-.95-28.1-2.71-41.97-5.3-6.51-1.21-13.47-3-19.67.31-5.08,2.71-8.21,7.98-10.72,12.95-5.28,10.43-10.2,22.64-20.94,28.61-4.5,2.5-9.95,3.87-15.03,2.53-4.24-1.12-7.54-3.88-9.59-7.5-4.3-7.61-3.49-17.82-1.98-26.37.91-5.14,2.34-10.16,3.49-15.24,1.31-5.75,2.38-11.54,3.13-17.39,1.41-11.04,1.54-22.54-1.54-33.33s-9.65-20.32-19.01-26.7S476.14.52,464.72.06s-23.79,1.44-32.9,8.81c-10.15,8.21-12.63,22.37-14.06,34.61-1.63,13.94-.93,28.04.63,41.95,2.96,26.26,9.07,52.19,9.17,78.72.08,22.62-4.09,46.52-18.47,64.71-14.02,17.74-36.55,28.21-59.16,27.4-10.93-.39-21.88-3.58-30.97-9.75-8.49-5.78-14.23-14.16-17.32-23.83-5.84-18.22-3.93-37.98-9.97-56.15-2.95-8.89-8.11-16.8-16.04-22-9.79-6.41-21.87-6.96-33.04-4.66-11.75,2.41-22.62,7.77-32.91,13.77-10.46,6.1-21.59,13.2-33.96,14.26-9.4.81-20.47-1.78-26.12-9.98-6.15-8.93-3.62-20.42,1.73-29.07,6.31-10.22,16.95-16.57,26.95-22.68s20.76-12.95,28.03-23c6.46-8.93,9.72-20.68,5.21-31.18-3.72-8.63-12.07-15.05-21.11-17.27-4.59-1.13-9.49-1.22-14.07.05-5.16,1.43-9.72,4.6-13.47,8.36-8.14,8.15-12.68,19.15-20.94,27.17-3.99,3.87-8.9,7.3-14.5,8.2-4.56.73-9.29-.73-12.64-3.58s-5.72-6.74-7.76-10.74c-2.23-4.37-4.07-8.91-6.22-13.32-2.33-4.78-5.15-9.24-8.81-13.13-3.88-4.13-8.53-7.58-13.49-10.29-10.77-5.88-22.95-8.42-35.14-8.71-13.97-.34-27.84,2.05-41.56,4.41-1.33.23-2.08,1.87-1.75,3.08.39,1.41,1.74,1.98,3.08,1.75h0Z",
      "M.77,214.6c11.86,11.24,29.02,13.98,44.62,10.73,16.95-3.54,31.02-14.42,41.54-27.85,11.5-14.69,18.99-31.75,26.15-48.84,3.81-9.09,7.57-18.21,11.96-27.05,2.2-4.43,4.55-8.78,7.13-13,2.4-3.93,4.95-7.83,8.04-11.26s6.4-6.1,10.48-7.89c3.81-1.67,8.01-2.4,12.15-2.43,8.83-.05,17.18,3.1,24.4,8.05s13.54,11.9,18.9,19.03c2.79,3.71,5.41,7.69,9.01,10.69s7.6,4.68,12.13,5.19c8.78,1,17.57-3.05,24.84-7.56,3.98-2.47,7.7-5.3,11.37-8.2,4.31-3.41,8.61-6.81,12.92-10.22,17.23-13.62,34.46-27.25,51.69-40.87,8.61-6.81,17.23-13.62,25.84-20.43,8.09-6.39,16.08-12.93,24.34-19.1,14.05-10.49,30.16-19.94,48.33-18.45,7.4.61,14.95,3.15,20.59,8.09,6.01,5.26,9.41,12.73,10.4,20.59,2.34,18.66-7.06,35.51-15.55,51.36-4.79,8.93-9.18,18.01-12.49,27.61s-5.59,19.43-6.93,29.45c-2.11,15.78-2.94,34.01,5.62,48.2,3.83,6.35,9.82,11.33,17.21,12.81,9.79,1.97,20.02-1.42,29.31-4.28,17.41-5.35,34.36-12.85,49.25-23.42,7.41-5.26,14.33-11.24,20.41-18,6.48-7.19,12.05-15.16,17.22-23.33,9.91-15.64,18.49-32.27,30.59-46.4,11.14-13,25.18-23.84,42.39-26.9,18.28-3.25,36.86,1.3,55.23.76,8.94-.26,17.75-1.8,25.89-5.6,1.22-.57,1.53-2.33.9-3.42-.73-1.25-2.19-1.47-3.42-.9-16.71,7.8-36,4.49-53.7,3.42-9.22-.56-18.54-.65-27.64,1.19-8.52,1.71-16.59,5.34-23.76,10.22-14.69,9.99-25.62,24.39-34.99,39.26-10.17,16.14-19.03,33.34-31.79,47.67-11.96,13.43-27.03,23.64-43.25,31.23-8.16,3.82-16.62,6.95-25.23,9.58-4.56,1.39-9.16,2.73-13.84,3.66s-9.82,1.32-14.55-.16c-13.55-4.25-17.62-21.17-18.12-33.82-.37-9.33.62-18.84,2.3-28.01,1.82-9.9,4.62-19.62,8.38-28.96,7.22-17.95,19.55-33.92,24.14-52.92,3.96-16.36,1.64-35.38-12.56-46.15-13.3-10.1-32.07-9.73-47.01-3.85-8.88,3.5-16.95,8.6-24.61,14.24-8.32,6.12-16.32,12.68-24.42,19.08-17.16,13.57-34.33,27.14-51.49,40.71-8.61,6.81-17.23,13.62-25.84,20.43-4.31,3.41-8.61,6.81-12.92,10.22-3.68,2.91-7.35,5.82-11.3,8.38-6.83,4.43-15.13,8.78-23.55,7.8-9.12-1.06-13.77-9.32-18.89-15.9-11.07-14.21-26.2-26.91-45.12-27.09-9.21-.09-17.94,3.15-24.61,9.54s-11.72,15.22-16.07,23.51c-9.08,17.29-15.31,35.88-23.89,53.39-7.63,15.57-17.34,30.97-31.47,41.44-12.42,9.2-28.57,13.97-43.94,10.83-7.14-1.46-13.82-4.63-19.14-9.67-2.34-2.21-5.88,1.32-3.54,3.54h0Z",
      "M5.01,227.03c1.71-20.63,9.6-40.49,21.76-57.17s29.16-30.5,48.53-38.05c11.49-4.48,24.25-6.95,36.49-4.39,9.59,2,18.26,7.18,24.97,14.26,6.75,7.12,11.43,16.16,13.03,25.86,1.72,10.39-.6,21.06-3.56,31-5.9,19.83-16.79,41.18-10.49,62.27s26.73,32.03,46.92,33.35c12.3.8,24.7-2.08,36.08-6.58,11.22-4.44,22.05-10.27,32.02-17.07,9.09-6.2,17.62-13.6,23.56-22.97,6.27-9.9,8.72-21.61,7.5-33.23-2.57-24.57-17.3-45.51-25.02-68.51-6.91-20.58-10.03-43.42-4.47-64.69,2.75-10.53,7.72-20.39,14.83-28.65,7.66-8.91,17.18-15.95,27.11-22.14,20.2-12.61,43.05-23.61,67.17-25.15,11.3-.72,22.93.76,33.35,5.37,9.31,4.11,17.52,10.37,24.12,18.09,6.52,7.63,11.35,16.74,13.89,26.45,3.17,12.14,2.4,24.94-.07,37.13-5.27,25.99-17.86,50.2-19.86,76.89-1.54,20.58,4.83,43.73,22.67,55.89,16.06,10.94,36.27,8.65,54.29,5.14,9.45-1.84,18.82-4.1,28.34-5.5,8.7-1.28,17.84-1.82,26.38.07,4.29.95,8.35,2.46,12.14,4.65,4.67,2.7,8.67,6.33,12.27,10.34,7.47,8.3,13.21,17.98,20.42,26.5,15.12,17.86,35.66,31.86,59.46,33.93,11.44,1,23.11-.97,33.37-6.2,2.87-1.46.34-5.78-2.52-4.32-10.39,5.3-22.46,6.78-33.95,5.17-11.46-1.6-22.21-6.23-31.73-12.73s-17.49-14.58-24.44-23.51c-6.87-8.82-12.71-18.56-20.88-26.3-7.21-6.84-16.07-11.39-25.9-12.94-9.36-1.48-18.82-.65-28.12.85s-19,3.84-28.53,5.61c-8.95,1.66-18.1,2.89-27.22,2.09s-17.54-3.92-24.29-9.84c-7.51-6.59-12.29-15.69-14.81-25.27-6.36-24.19,2.53-48.73,10.01-71.57,7.78-23.77,14.9-49.91,5.58-74.33-7.45-19.52-23.33-35.58-43.07-42.63-23.34-8.33-48.79-3.22-70.97,6.17-11.19,4.74-21.9,10.62-32.11,17.19s-19.58,13.83-27.1,23.11c-7.04,8.69-12.03,18.81-14.78,29.65s-3.35,21.74-2.49,32.66,3.26,22.44,6.8,33.19c3.78,11.49,9.14,22.32,14.09,33.34s9.8,22.64,11.07,34.79c1.2,11.44-1.27,22.57-7.75,32.13-6.03,8.89-14.66,15.81-23.61,21.6-10.08,6.52-20.9,12.3-32.25,16.29-11.06,3.88-23.17,6.18-34.88,4.38-9.64-1.48-19.14-5.38-26.49-11.89-7.37-6.53-11.99-15.42-12.81-25.26-.88-10.51,1.96-20.87,5.16-30.78,6.46-20.06,15.74-41.45,8.34-62.6-3.38-9.67-9.5-18.39-17.47-24.84-8.41-6.8-18.4-10.9-29.19-11.75-12.85-1.01-25.69,2.44-37.32,7.68-9.65,4.35-18.59,10.16-26.65,17-15.99,13.58-28.28,31.43-35.44,51.13C3.01,206.92.84,216.91,0,227.03c-.11,1.35,1.23,2.5,2.5,2.5,1.45,0,2.39-1.15,2.5-2.5h0Z"
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
    messageSection.classList.add('hidden');
    gameSection.classList.remove('hidden');
    context.clearRect(0, 0, canvas.width, canvas.height);
    runGame();
  });

  function runGame() {
    const pathUrl = avatarButtons[selectedAvatar - 1].dataset.path;
    fetch(pathUrl)
      .then(response => response.text())
      .then(svgText => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const pathD = doc.querySelector('path').getAttribute('d');
    // Path is now loaded dynamically via fetch below

    // Create a temporary SVG path element to measure length
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

    const totalLength = tempPath.getTotalLength(); // Extend 20px before and after
    let distance = 0;
    const maxDistance = totalLength;
    const step = 0.005;
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

    function getPointAtT(t) {
  const point = tempPath.getPointAtLength(t * totalLength);
    return {
    x: point.x * scaleX + horizontalOffset,
    y: point.y * scaleY
  };
}

    let lastPoint = null;
    let lastAngle = 0;
    function update() {
      function drawDebugPath() {
        context.beginPath();
        const steps = 300;
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
      }
      if (distance < maxDistance) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawFinishLine();

        const rawCurrent = tempPath.getPointAtLength(distance);
        const current = {
          x: rawCurrent.x * scaleX + horizontalOffset,
          y: rawCurrent.y * scaleY
        };
        const rawNext = tempPath.getPointAtLength(Math.min(distance + velocity, maxDistance));
        const next = {
          x: rawNext.x * scaleX + horizontalOffset,
          y: rawNext.y * scaleY
        };
        const angle = Math.atan2(next.y - current.y, next.x - current.x);
        lastPoint = current;
        lastAngle = angle;

        drawEgg(current.x, current.y, angle);
        distance += velocity;

        requestAnimationFrame(update);
      } else {
        drawEgg(lastPoint.x, lastPoint.y, lastAngle);
        requestAnimationFrame(() => {
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
        });
      }
    }
    update();
      });
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
