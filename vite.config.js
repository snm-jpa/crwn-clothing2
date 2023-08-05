import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), svgr()]
// })

//from https://dev.to/whchi/how-to-use-processenv-in-vite-ho9

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), svgr()],
    define: {
      'process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY': JSON.stringify(env.REACT_APP_STRIPE_PUBLISHABLE_KEY),
      'process.env.STRIPE_SECRET_KEY': JSON.stringify(env.STRIPE_SECRET_KEY),
    },
  };
})
