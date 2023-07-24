export const configTenant: any = {
  novo: {
    title: "Empresas Novopayment",
    description: "Descripción Novo",
    favicon: `${process.env.NEXT_PUBLIC_PATH_URL}/images/novo/favicon.ico`,
    imagesFooter: ["novopayment", "pci"],
    networks: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
    PWA: {
      name: "Novopayment App PWA",
      short_name: "NovoPWA",
      description: "App for novopayment",
      theme_color: "#0A60F9",
      background_color: "#F3F3F3",
      screenshots: [
        {
          src: "/images/novo/app_screenshots/s1.jfif",
          size: "1000x600",
          type: `image/jpg`,
          purpose: "any",
        },
        {
          src: "/images/novo/app_screenshots/s2.jfif",
          size: "1000x600",
          type: `image/jpg`,
          purpose: "any",
        },
        {
          src: "/images/novo/app_screenshots/s3.jfif",
          size: "1000x600",
          type: `image/jpg`,
          purpose: "any",
        },
      ],
    },
  },
  bdb: {
    title: "Empresas Banco de Bogotá",
    description: "Descripción BDB",
    favicon: `${process.env.NEXT_PUBLIC_PATH_URL}/images/bdb/favicon.ico`,
    imagesFooter: ["img-logo-color"],
    networks: {
      facebook: "",
      instagram: "",
      twitter: "",
    },
    PWA: {
      name: "Banco de Bogotá App",
      short_name: "bogot APP",
      description: "App Banco de Bogotá",
      theme_color: "#023669",
      background_color: "#BFCBCB", 
      screenshots: [
        {
          src: "/images/novo/app_screenshots/sc1.jfif",
          size: "600x1000",
          type: `image/jpg`,
          purpose: "any",
        },
        {
          src: "/images/novo/app_screenshots/sc2.jfif",
          size: "600x1000",
          type: `image/jpg`,
          purpose: "any",
        },
        {
          src: "/images/novo/app_screenshots/sc3.jfif",
          size: "600x1000",
          type: `image/jpg`,
          purpose: "any",
        },        {
          src: "/images/novo/app_screenshots/sc4.jfif",
          size: "600x1000",
          type: `image/jpg`,
          purpose: "any",
        },
      ],
    },
  },
  coop: {
    title: "Empresas Coopcentral",
    description: "Descripción Coop",
    favicon: "",
    imagesFooter: ["img-logo-color", "pci"],
    networks: "",
  },
};
