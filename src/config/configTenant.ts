export const configTenant: any = {
	azul: {
		title: 'Empresas Azul',
		description: 'Descripción Azul',
		favicon: `${process.env.NEXT_PUBLIC_PATH_URL}/images/Azul/favicon.ico`,
		imagesFooter: ['novopayment', 'pci'],
		networks: {
			facebook: '',
			instagram: '',
			twitter: '',
			youtube: '',
			linkedin: '',
		},
		PWA: {
			name: 'Azul App',
			short_name: 'AzulPWA',
			description: 'App for Azul management',
			theme_color: '#0A60F9',
			background_color: '#F3F3F3',
			screenshots: [
				{
					src: 's1.jpg',
					sizes: '1000x600',
					type: `image/jpg`,
					purpose: 'any',
				},
				{
					src: 's2.jpg',
					sizes: '1000x600',
					type: `image/jpg`,
					purpose: 'any',
				},
				{
					src: 's3.jpg',
					sizes: '1000x600',
					type: `image/jpg`,
					purpose: 'any',
				},
			],
		},
	},
	amarillo: {
		title: 'Empresas Amarillo',
		description: 'Descripción Amarillo',
		favicon: `${process.env.NEXT_PUBLIC_PATH_URL}/images/amarillo/favicon.ico`,
		imagesFooter: ['img-logo-color'],
		networks: {
			facebook: '',
			instagram: '',
			twitter: '',
		},
		PWA: {
			name: 'Amarillo App',
			short_name: 'AMAPP',
			description: 'Amarillo App de Administración',
			theme_color: '#023669',
			background_color: '#BFCBCB',
			screenshots: [
				{
					src: 'sc1.png',
					sizes: '600x1000',
					type: `image/png`,
					purpose: 'any',
				},
				{
					src: 'sc2.png',
					sizes: '600x1000',
					type: `image/png`,
					purpose: 'any',
				},
				{
					src: 'sc3.png',
					sizes: '600x1000',
					type: `image/png`,
					purpose: 'any',
				},
			],
		},
	},
	rojo: {
		title: 'Empresas Rojo',
		description: 'Descripción Rojo',
		favicon: '',
		imagesFooter: ['img-logo-color', 'pci'],
		networks: '',
	},
};
