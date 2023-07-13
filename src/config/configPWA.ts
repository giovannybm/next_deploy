import { handleConfigTenant } from "@/utils";
import { configTenant } from "./configTenant";

const fileIcons = [48, 72, 96, 144, 192, 512];

export function configPWA(tenant: string) {
  const { ...PWA } = handleConfigTenant(tenant);

  const manifestParams = {
    name: PWA.title || configTenant["novo"].PWA?.name,
    short_name: PWA.short_name || configTenant["novo"].PWA?.short_name,
    description: PWA.description || configTenant["novo"].PWA?.description,
    theme_color: "#11B719",
    display: "standalone",
    start_url: `${process.env.NEXT_PUBLIC_PATH_URL}/${tenant}/signin`,
    icons: fileIcons.map((icon: any) => ({
      src: getImages(tenant, `${icon}.png`),
      sizes: `${icon}x${icon}`,
      type: `image/png`,
    })),
  };

  let jsonse = JSON.stringify(manifestParams);
  var blob = new Blob([jsonse], { type: "application/json" }); // pass a useful mime
  var url = URL.createObjectURL(blob);

  return url;
}

function getImages(tenant: string, file: string) {
  let validateImage;

  try {
    require(`%/images/${tenant}/appIcons/${file}`);
    validateImage = `${process.env.NEXT_PUBLIC_PATH_URL}/images/${tenant}/appIcons/${file}`;
  } catch (e) {
    require(`%/images/novo/appIcons/${file}`);
    validateImage = `${process.env.NEXT_PUBLIC_PATH_URL}/images/novo/appIcons/${file}`;
  }
  return validateImage;
}
