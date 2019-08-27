import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import Gallery from '@sections/Gallery';
import Problem from '@sections/Problem';
import Solution from '@sections/Solution';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Problem />
    <Solution />
    <About />
    <Brands />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
