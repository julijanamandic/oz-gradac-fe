import Index3Slider from "../src/components/slider/Index3Slider";
import Layout from "../src/layout/Layout";
import PostList from "@/src/components/post/PostList";
import CallTo from "@/src/components/indexComponents/CallTo";
import About from "@/src/components/indexComponents/About";
import CounterSection from "@/src/components/indexComponents/Counter";
import WhyChoose from "@/src/components/indexComponents/WhyChoose";
import PartnerSection from "@/src/components/PartnerSection";

const Index3 = () => {
    return (
        <Layout header={3} footer={4}>
            <Index3Slider />
            <About/>
            <CallTo />
            <section className="coach-section-two bg-light-two rel z-1 pt-185 rpt-150 pb-130 rpb-100">
                <div className="container for-circle rpt-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-8">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title-three">
                                    Najnoviji <span>oglasi</span>
                                </span>
                                <h2>Pogledaj najaktuelnije oglase</h2>
                            </div>
                        </div>
                    </div>
                    <PostList />
                </div>
            </section>
            <CounterSection/>
            <WhyChoose/>
            <PartnerSection/>
        </Layout>
    );
};
export default Index3;
