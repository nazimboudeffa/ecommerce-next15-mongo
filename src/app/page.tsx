"use client"
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

function Home() {

  return (
    <>
    <NavBar />
    <main className="min-h-screen flex flex-col justify-between">
      <Hero />
      <Problem />
      <Features />
    </main>
    <Footer />
    </>
  );
}

export default Home;