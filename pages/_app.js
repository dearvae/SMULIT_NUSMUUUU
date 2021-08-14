import '../styles/globals.css'
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const [language, setLanguage] = useState('en');

  return getLayout(<Component {...pageProps} language={language} setLanguage={setLanguage}/>)
}
