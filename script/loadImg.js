export const loadImg = url => new Promise((resolve, reject) => {
  const img = new Image();
  img.width = 300;
  img.src = url;
  img.addEventListener('load', () => {
    resolve(img);
    // return;
  });
});
