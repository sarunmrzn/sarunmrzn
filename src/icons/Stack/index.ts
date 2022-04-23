const files = require.context("./images", false, /\.(png|jpe?g|svg)|webp$/);
export const images = files
  .keys()
  .map(files)
  .map((image: any) => {
    return {
      src: image.default,
    };
  });
