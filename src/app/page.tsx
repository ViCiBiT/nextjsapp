// pages/index.tsx

import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Welcome to our landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to Our Product</h1>
            <p className="mt-4 text-xl">Innovate, Improve, Inspire</p>
            <Link href="/signup">

            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-center">Features</h2>
            <div className="flex flex-wrap mt-8">
              <div className="w-full p-4 md:w-1/3">
                <div className="p-6 text-center bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold">Feature One</h3>
                  <p className="mt-4">Description of feature one.</p>
                </div>
              </div>
              <div className="w-full p-4 md:w-1/3">
                <div className="p-6 text-center bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold">Feature Two</h3>
                  <p className="mt-4">Description of feature two.</p>
                </div>
              </div>
              <div className="w-full p-4 md:w-1/3">
                <div className="p-6 text-center bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold">Feature Three</h3>
                  <p className="mt-4">Description of feature three.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-8 text-center text-white">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-lg">Join us today and make a difference!</p>
            <Link href="/signup">

            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-800">
          <div className="container mx-auto px-8 text-center text-white">
            <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
