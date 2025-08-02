
import '../styles/globals.css';
import type { AppProps } from 'next/app';
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
        router.replace('/');
      }
    }
  }, [router.pathname]);
  return <Component {...pageProps} />;
}

export default MyApp;
