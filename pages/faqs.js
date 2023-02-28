import PageBanner from "../src/components/PageBanner";

import Layout from "../src/layout/Layout";

import Faqs from "@/src/components/faq/Faqs";

import Contact from "@/src/components/faq/Contact";



const Faq = () => {

  return (

    <Layout header={3} footer={4}>

      <PageBanner pageName={"Cesta pitanja"} />

      <Faqs/>

      <Contact/>

    </Layout>

  );

};

export default Faq;
