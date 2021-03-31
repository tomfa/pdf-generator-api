import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../providers/AuthProvider';
import { PageWrapper } from '../components/PageWrapper.styles';
import { Icon, IconType } from '../components/Icon';

export default function LoginPage() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      logout();
    }
    router.push('/');
  }, [router, isLoggedIn, logout]);

  return (
    <>
      <Head>
        <title>PDF Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <h1>Logging you out...</h1>
        <Icon icon={IconType.LOADING} size={100} />
      </PageWrapper>
    </>
  );
}