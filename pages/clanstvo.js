import PageBanner from "../src/components/PageBanner";

import Layout from "../src/layout/Layout";

import PartnerSection from "@/src/components/PartnerSection";

import RulesAndConditions from "@/src/components/membership/RulesAndConditions";

import Documentation from "@/src/components/membership/Documentation";

const MembershipConditions = () => {

    return (
        <Layout header={3} footer={4}>

            <PageBanner pageName={"Clanstvo"} />
          
            <RulesAndConditions />
           
            <Documentation/> 

            <PartnerSection />
            
        </Layout>
    );
};
export default MembershipConditions;