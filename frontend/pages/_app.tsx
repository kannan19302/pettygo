
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const publicPaths = ['/login', '/register'];
    if (typeof window !== 'undefined') {
      const isAuth = localStorage.getItem('hr-auth');
      if (!isAuth && !publicPaths.includes(router.pathname)) {
        router.replace('/login');
      }
      // If already logged in and on login/register, redirect to dashboard
      if (isAuth && publicPaths.includes(router.pathname)) {
        router.replace('/pettygo');
      }
    }
  }, [router.pathname]);
  return (
    <SWRConfig value={{ fetcher: (url: string) => fetch(url).then(res => res.json()) }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
