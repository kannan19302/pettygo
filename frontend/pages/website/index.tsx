import Head from 'next/head';

export default function WebsiteHome() {
  return (
    <>
      <Head><title>PettyGo Website</title></Head>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <img src="/logo.svg" alt="PettyGo Website" style={{ height: 60, marginBottom: 24 }} />
        <h1>Welcome to PettyGo Website</h1>
        <p>This is the public website landing page.</p>
      </main>
    </>
  );
}
