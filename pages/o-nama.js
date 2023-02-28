import Services from "@/src/components/about/Services";

import PartnerSection from "@/src/components/PartnerSection";

import About from "@/src/components/about/About";

import PageBanner from "../src/components/PageBanner";

import Layout from "../src/layout/Layout";



const AboutUs = () => {

  return (

    <Layout header={3} footer={4}>

      <PageBanner pageName={"O nama"} />

      <About/>

      <Services />

      <PartnerSection />

    </Layout>

  );

};

export default AboutUs;
