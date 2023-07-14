import { Metadata } from "next";
import dynamic from "next/dynamic";
//Internal App
import { configTenant } from "@/config";
import { handleConfigTenant } from "@/utils";
import MuiProvider from "../Providers/MuiProvider";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { GenerateMetadataProps, RootLayoutProps } from "@/interfaces";

import "../global.css";

const SupporButton = dynamic(() => import("../components/UI/SupportButton"), {
  ssr: false,
});
const InstallBar = dynamic(() => import("../components/UI/InstallBar"), {
  ssr: false,
});
export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { title, description, favicon } = handleConfigTenant(params.tenant);
  const faviconDefault = handleConfigTenant("novo");

  const urlFavicon =
    params.tenant in configTenant && favicon !== ""
      ? favicon
      : faviconDefault?.favicon;

  return {
    title: title || "Admin Console",
    description: description,
    manifest: `manifest`,
    icons: [
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "32x32",
        url: urlFavicon,
      },
    ],
  };
}

export default async function SigninLayout({
  children,
  params,
}: RootLayoutProps) {
  return (
    <MuiProvider theme={params.tenant}>
      {children}
      <SupporButton tenant={params.tenant} />
 
        <InstallBar />
 
    </MuiProvider>
  );
}
