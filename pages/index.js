import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="background">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('munich-owls')) {
            window.location.href = "/map"
          }
        `
          }}
        />
      </Head>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
