'use client';
import { useEffect, useState } from 'react';
import { isDesktop } from 'react-device-detect';

import { AppBar, Toolbar, Button, Slide, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { InstallBarProps } from '@/interfaces';

export default function InstallBar<Props>({ className }: InstallBarProps) {
	const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

	const [trigger, setTrigger] = useState(false);

	const [desktop, setDesktop] = useState(true);

	const [isIOS, setIsIOS] = useState(false);

	useEffect(() => {
		setDesktop(isDesktop);

		window.addEventListener('beforeinstallprompt', (e: Event) => {
			e.preventDefault();

			setDeferredPrompt(e);
		});
	}, []);

	const intallPrompt = async () => {
		if (!deferredPrompt) {
			// The deferred prompt isn't available.
			console.log('oops, no prompt event guardado en window');
			return;
		}
		await deferredPrompt.prompt();
		const { outcome } = await deferredPrompt.userChoice;
		// De manera opcional, envía analíticos del resultado que eligió el usuario
		console.log(`User response to the install prompt: ${outcome}`);
		// Como ya usamos el mensaje, no lo podemos usar de nuevo, este es descartado
		setDeferredPrompt(null);
	};
	const toggleCloseBar = () => {
		setTrigger(!trigger);
	};
	function isThisDeviceRunningiOS() {
		if (
			[
				'iPad Simulator',
				'iPhone Simulator',
				'iPod Simulator',
				'iPad',
				'iPhone',
				'iPod',
			].includes(navigator.platform)
		) {
			setIsIOS(true);
		}
		// iPad on iOS 13
		else if (navigator.userAgent.includes('Mac') && 'ontouchend' in document) {
			setIsIOS(true);
		} else {
			setIsIOS(false);
		}
	}

	if (!desktop && !isIOS) {
		return (
			<div className={className}>
				<Slide appear={false} direction="up" in={!trigger}>
					<AppBar
						position="fixed"
						color="inherit"
						sx={{ top: 'auto', bottom: 0 }}
					>
						<Toolbar>
							<Box sx={{ flexGrow: 1 }}>
								<Button variant="contained" onClick={intallPrompt}>
									Instalar
								</Button>
							</Box>
							<Box sx={{ flexGrow: 0 }}>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={toggleCloseBar}
									color="inherit"
								>
									<CloseIcon />
								</IconButton>
							</Box>
						</Toolbar>
					</AppBar>
				</Slide>
			</div>
		);
	} else {
		return <></>;
	}
}
