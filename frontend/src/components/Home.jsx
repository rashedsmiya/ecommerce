import React from "react";
 
import LatestProducts from "./common/LatesProducts";
import FeaturedProducts from "./common/FeaturedProducts";
import Hero from "./common/Hero";
import Layout from "./common/Layout";

const Home = () => {
    return (
        <>

        <Layout> 
          <Hero/>

         <LatestProducts/>

         <FeaturedProducts/> 
        </Layout>

        </>
    );
}
export default Home;