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
    screenshots:[
      {
        src: "/images/novo/app_screenshots/digital-banking-header.jpg",
        size: "1000x563",
        type: `image/jpg`,
        purpose: "any"
      },
      {
        src: "/images/novo/app_screenshots/Mockup_Clientes_Cubo_fin-compressed.png",
        size: "828x552",
        type: `image/png`,
        purpose: "any"
      },      {
        src: "/images/novo/app_screenshots/Online-Account-Opening.png",
        size: "422x422",
        type: `image/png`,
        purpose: "any"
      }
    ]
  };

  let manifest = JSON.stringify(manifestParams);

  return manifest;
}

function getImages(tenant: string, file: string) {
  let validateImage;

  try {
    require(`%/images/${tenant}/app_icons/${file}`);
    validateImage = `/images/${tenant}/app_icons/${file}`;
  } catch (e) {
    require(`%/images/novo/app_icons/${file}`);
    validateImage = `/images/novo/app_icons/${file}`;
  }
  return validateImage;
}
