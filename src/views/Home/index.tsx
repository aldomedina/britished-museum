import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Layout from "../../containers/Layout";
import HomeBanner from "./components/Banner";
import CollectionSection from "./components/Collection";
import Exhibition from "./components/Exhibition";
import SupportBanner from "./components/SupportBanner";

const HomePage = () => {
  return (
    <Layout>
      <div>
        <Hero />
        <HomeBanner />
        <Exhibition />
        <SupportBanner />
        <CollectionSection />
      </div>
    </Layout>
  );
};

export default HomePage;
