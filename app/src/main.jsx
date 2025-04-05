import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider, theme } from '@chakra-ui/react'
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { themes } from './theme/index.js'
import AuthProvider from './provider/AuthProvider.jsx';
import { CookiesProvider } from 'react-cookie';  

createRoot(document.getElementById('root')).render(
  <CookiesProvider>

  <AuthProvider>
  <ChakraProvider
  theme={themes}
  >
    <App />
  </ChakraProvider>
  </AuthProvider>
  </CookiesProvider>

)
