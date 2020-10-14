import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="background">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
