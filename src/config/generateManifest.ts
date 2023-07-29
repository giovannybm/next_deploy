import { handleConfigTenant } from "@/utils";
import { configTenant } from "./configTenant";

import { getImages } from "@/utils";

const fileIcons = [48, 72, 96, 144, 192, 512];

export function generateManifest(tenant: string) {
  const { PWA } = handleConfigTenant(tenant);

  const manifestParams = {
    name: PWA?.name || configTenant["novo"].PWA?.name,
    short_name: PWA?.short_name || configTenant["novo"].PWA?.short_name,
    description: PWA?.description || configTenant["novo"].PWA?.description,
    theme_color: PWA?.theme_color || configTenant["novo"].PWA?.theme_color,
    background_color:
      PWA?.background_color || configTenant["novo"].PWA?.background_color,
    start_url: `/${tenant}/signin`,
    icons: fileIcons.map((icon: any) => ({
      src: getImages(tenant, `pwa_icons/${icon}.png`).default.src,
      sizes: `${icon}x${icon}`,
      type: `image/png`,
    })),
    screenshots:
      PWA?.screenshots.map((e: any) => {
        let obj: any = Object.assign({}, e);
        obj["src"] = `/images/${tenant}/pwa_screenshots/${e.src}`;
        return obj;
      }) ||
      configTenant["novo"].PWA?.screenshots.map((e: any) => {
        let obj: any = Object.assign({}, e);
        obj["src"] = `/images/novo/pwa_screenshots/${e.src}`;
        return obj;
      }),
    display: "standalone",
    orientation:"portrait",
    
  };

  let manifest = JSON.stringify(manifestParams, null, 2);

  return manifest;
}
