export function getImages(tenant: string, file: string) {
  let validateImage;
  
  try {
    validateImage = require(`%/images/${tenant}/${file}`);
  } catch (e) {
    validateImage = require(`%/images/azul/${file}`);
  }

  return validateImage;
}