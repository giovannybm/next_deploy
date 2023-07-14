"use client";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";

export default function InstallBar() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>();

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e: Event) => {
      e.preventDefault();

      setDeferredPrompt(e);
    });
  });
  const intallPrompt = () => {
    deferredPrompt.prompt();
  };
  return (
    <AppBar position="fixed" color={"primary"} sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Button variant="contained" onClick={intallPrompt}>
          Instalar
        </Button>
      </Toolbar>
    </AppBar>
  );
}
