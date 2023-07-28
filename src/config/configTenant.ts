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
      name: "Novopayment App",
      short_name: "NovoPWA",
      description: "App for novopayment",
      theme_color: "#0A60F9",
      background_color: "#F3F3F3",
      screenshots: [
        {
          src: "s1.jpg",
          sizes: "1000x600",
          type: `image/jpg`,
          purpose: "any",
        },
        {
          src: "s2.jpg",
          sizes: "1000x600",
          type: `image/jpg`,
          purpose: "any",
        },
        {
          src: "s3.jpg",
          sizes: "1000x600",
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
          src: "sc1.jpg",
          sizes: "600x1000",
          type: `image/jpg`,
          purpose: "any",
        },
        {
          src: "sc2.jpg",
          sizes: "600x1000",
          type: `image/jpg`,
          purpose: "any",
        },
        {
          src: "sc3.jpg",
          sizes: "600x1000",
          type: `image/jpg`,
          purpose: "any",
        },
        {
          src: "sc4.jpg",
          sizes: "600x1000",
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
