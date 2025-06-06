import { preloadFont } from './font';
import { preloadImages, preloadStorage } from './local';

export default {
  install() {
    const preloads = [preloadFont('OakSans', 'OakSans-Black.woff2'), preloadStorage(), preloadImages()];

    Promise.all(preloads).then(() => {
      closeLoadingScreen();
    });
  },
};

function closeLoadingScreen() {
  const loadingScreen = document.querySelector('#loading-screen');

  if (!loadingScreen || !(loadingScreen instanceof HTMLElement)) return;
  loadingScreen.style.display = 'none';
}
