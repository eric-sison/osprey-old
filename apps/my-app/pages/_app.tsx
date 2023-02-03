import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeToggler from '../components/ThemeToggler';
import '../styles/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to my-app!</title>
      </Head>
      <ThemeProvider attribute="class" enableSystem={true}>
        <ThemeToggler />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
