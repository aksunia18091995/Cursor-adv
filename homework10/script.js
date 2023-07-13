const sounds = ['sound/1.mp3', 'sound/2.mp3', 'sound/3.mp3', 'sound/4.mp3', 'sound/5.mp3', 'sound/6.mp3', 'sound/7.mp3', 'sound/8.mp3', 'sound/9.mp3', 'sound/0.mp3'];

const blocks = document.querySelectorAll('.block');

blocks.forEach((block) => {
  block.addEventListener('click', () => {
    const soundIndex = block.dataset.sound;
    const sound = new Audio(sounds[soundIndex]);
    sound.play();
    block.classList.add('active');
    setTimeout(() => {
      block.classList.remove('active');
    }, 500);
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key;
  let soundIndex = null;

  if (key >= '0' && key <= '9') {
    soundIndex = Number(key);
  }

  if (soundIndex !== null) {
    const sound = new Audio(sounds[soundIndex]);
    sound.play();
    const correspondingBlock = Array.from(blocks).find((block) => block.dataset.sound === String(soundIndex));
    correspondingBlock.classList.add('active');

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    correspondingBlock.appendChild(bubble);

    setTimeout(() => {
      correspondingBlock.classList.remove('active');
      correspondingBlock.removeChild(bubble);
    }, 500);
  }
});

