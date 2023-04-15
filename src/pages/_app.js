import { AuthConsumer, AuthProvider } from '@/contexts/auth-context';
import store from '@/store/store';
import { createTheme } from '@/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { Provider } from 'react-redux';
import {Inter} from "next/font/google"

const inter = Inter({weight:["100","200","300","400","500","600","700","800","900"],display:"swap",subsets:["latin"]})
export default function App({ Component, pageProps }) {

  const theme = createTheme()

  return (
    <>
    <Head>
      <title>
        Quiz App
      </title>
      <meta name='viewport' content="initial-scale=1, width=device-width"/>
    </Head>
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <main className={inter.className}>
          <Component {...pageProps} />
          </main>
      
      </ThemeProvider>
      </AuthProvider>
    </Provider>
    </>
  )
}
