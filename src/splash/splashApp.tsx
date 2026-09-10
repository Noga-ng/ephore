import { useEffect, useRef } from "react"
import Splash from "./splash"
import { WebviewWindow } from "@tauri-apps/api/webviewWindow"
import { getCurrentWindow } from "@tauri-apps/api/window"

export function SplashApp() {
    const started = useRef(false);
  useEffect(() => {
    if(started.current) return;
        started.current = true;

    const switchToMain = async () => {
      try {
        console.log('Splash : démarrage du timer')

        await new Promise((resolve) => {
          setTimeout(resolve, 2000)
        })

        console.log('Splash : création de Main')

        const main = new WebviewWindow('main', {
          url: 'index.html',
          title: 'Ephore',
          width: 1200,
          height: 720,
          minHeight:600,
          minWidth:500,
          maximized:true,
          resizable: true,
          fullscreen: false,
          decorations:true
        })

        // Attendre que la fenêtre principale soit créée

        await new Promise<void>((resolve, reject) => {
          main.once('tauri://created', () => {
            console.log('Main créée')
            resolve()
          })

          main.once('tauri://error', (error) => {
            console.error('Erreur création Main:', error)
            reject(error)
          })
        })

        await main.show()
        await main.setFocus()

        console.log('Main affichée')

        const splash = getCurrentWindow()

        await splash.close()

        console.log('Splash fermée')
      } catch (error) {
        console.error('Erreur Splash → Main:', error)
      }
    }

    switchToMain()
  }, [])

  return <Splash />
}