import { handleConfigTenant } from "@/utils";
import { configTenant } from "./configTenant";

const fileIcons = [48, 72, 96, 144, 192, 512];

export function generateConfigPWA(tenant: string) {
  const { ...PWA } = handleConfigTenant(tenant);

  const manifestParams = {
    name: PWA.title || configTenant["novo"].PWA?.name,
    short_name: PWA.short_name || configTenant["novo"].PWA?.short_name,
    description: PWA.description || configTenant["novo"].PWA?.description,
    theme_color: "#11B719",
    display: "standalone",
    start_url: `/${tenant}/signin`,
    icons: fileIcons.map((icon: any) => ({
      src: getImages(tenant, `${icon}.png`),
      sizes: `${icon}x${icon}`,
      type: `image/png`,
    })),
  };

  let manifest = JSON.stringify(manifestParams);

  return manifest;
}

function getImages(tenant: string, file: string) {
  let validateImage;

  try {
    require(`%/images/${tenant}/appIcons/${file}`);
    validateImage = `/images/${tenant}/appIcons/${file}`;
  } catch (e) {
    require(`%/images/novo/appIcons/${file}`);
    validateImage = `/images/novo/appIcons/${file}`;
  }
  return validateImage;
}
