import PageBanner from "../src/components/PageBanner";

import Layout from "../src/layout/Layout";

import Pagination from "../src/Pagination";

import StatusFilter from "../src/components/post/filter/StatusFilter";

import Post from "../src/components/post/Post";

import JobTypeFilter from "@/src/components/post/filter/JobTypeFilter";

import GenderFilter from "@/src/components/post/filter/GenderFilter";


const PostGrid = () => {

  return (

    <Layout header={3} footer={4}>

      <PageBanner pageName={"Poslovi"} />

      <section className="course-left-area py-130 rpy-100">

        <div className="container">

          <div className="row large-gap">

            <div className="col-lg-4">

              <div className="course-sidebar rmb-55">

                <div className="widget widget-search wow fadeInUp delay-0-2s">

                  <form onSubmit={(e) => e.preventDefault()} action="#">

                    <input type="text" placeholder="Pretrazi" required="" />

                    <button

                      type="submit"

                      className="searchbutton fa fa-search"

                    />

                  </form>

                </div>
                
                <StatusFilter/>

                <GenderFilter/>

                <JobTypeFilter/>

              </div>

            </div>

            <div className="col-lg-8">

              <div className="course-grids">

                <div className="row">

                  <div className="col-md-6">

                    <Post category="Administracija"
                      title="Administrativni radnik"
                      price="250 din/h"
                      workTime="7:30 - 15:30"
                      location="Beograd"
                      img="assets/images/coachs/coach1.jpg"
                    />

                  </div>

                  <div className="col-md-6">
                    <Post category="Sourcing"
                      title=" Sourcing za jednu community platformu"
                      price="400 din/h"
                      workTime="Radni dani 08-16h"
                      location="Beograd (Merkator)"
                      img="assets/images/coachs/coach2.jpg"
                    />
                  </div>

                  <div className="col-md-6">

                    <Post category="Ugostiteljstvo"
                      title="Rad u jednom renomiranom hotelu"
                      price="256"
                      workTime="svaki dan"
                      location="Beograd"
                      img="assets/images/coachs/coach3.jpg" />

                  </div>

                  <div className="col-md-6">

                    <Post category="Laki fizicki poslovi"
                      title="Rad u butiku"
                      price="45000 + bonusi"
                      workTime="6,5 sati 6 dana u nedelji"
                      location="Beograd"
                      img="assets/images/coachs/coach4.jpg" />

                  </div>

                  <div className="col-md-6">

                    <Post category="Laki fizicki poslovi"
                      title="Lepljenje deklaracija"
                      price="300 rsd/h"
                      workTime="sutra od 06-14h ili 08-16h"
                      location="Nova Pazova"
                      img="assets/images/coachs/coach5.jpg" />

                  </div>

                  <div className="col-md-6">

                    <Post category="Marketing"
                      title="Rad u marketinskoj agenciji"
                      price="50 000 plata"
                      workTime="radni dani od 09-17h"
                      location="Beograd"
                      img="assets/images/coachs/coach6.jpg" />

                  </div>

                  <div className="col-md-6">

                    <Post category="Laki fizicki poslovi"
                      title="Deklarisanje"
                      price="350 rsd/h"
                      workTime="radni dani od 09-17h"
                      location="Krnjesevci"
                      img="assets/images/coachs/coach7.jpg" />

                  </div>

                  <div className="col-md-6">

                    <Post category="Laki fizicki poslovi"
                      title="Pakovanje paketica"
                      price="350 rsd/h"
                      workTime="sutra od -7-15h ili od 14-22h"
                      location="Altina"
                      img="assets/images/coachs/coach8.jpg" />

                  </div>

                </div>

                <ul className="pagination flex-wrap mt-20">

                  <Pagination

                    paginationCls={".course-grids .row .col-md-6"}

                    sort={4}

                  />

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section >

    </Layout >

  );

};

export default PostGrid;
