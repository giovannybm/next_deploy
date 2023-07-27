import { handleConfigTenant } from "@/utils";
import { configTenant } from "./configTenant";

import { getImages } from "@/utils";

const fileIcons = [48, 72, 96, 144, 192, 512];

export function generateConfigPWA(tenant: string) {
  const { PWA } = handleConfigTenant(tenant);

  const manifestParams = {
    name: PWA?.name || configTenant["novo"].PWA?.name,
    short_name: PWA?.short_name || configTenant["novo"].PWA?.short_name,
    description: PWA?.description || configTenant["novo"].PWA?.description,
    theme_color: PWA?.theme_color || configTenant["novo"].PWA?.theme_color,
    background_color:
      PWA?.background_color || configTenant["novo"].PWA?.background_color,
    display: "standalone",
    start_url: `/${tenant}/signin`,
    icons: fileIcons.map((icon: any) => ({
      src: getImages(tenant, `pwa_icons/${icon}.png`).default.src,
      sizes: `${icon}x${icon}`,
      type: `image/png`,
    })),
    screenshots: PWA?.screenshots || configTenant["novo"].PWA?.screenshots,
  };

  let manifest = JSON.stringify(manifestParams);

  return manifest;
}

