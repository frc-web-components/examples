import './app.css'
import App from './App.svelte'
import { DashboardThemes, darkTheme } from "@frc-web-components/fwc/themes"


const app = new App({
  target: document.getElementById('app'),
})

export default app
