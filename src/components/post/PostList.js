import Slider from "react-slick";
import Post from "./Post";
import { index2Course, testimonialthree } from "../../sliderProps";

const PostList = () => {

    return (
        <Slider {...index2Course} className="coach-slider">

            <Post category="Administracija"
                title="Administrativni radnik (student ekonomije)"
                price="400 din/h"
                workTime="5 dana u nedelji"
                location="Beograd"
                img="assets/images/coachs/coach1.jpg"
            />

            <Post category="Sourcing"
                title="Sourcing za jednu community platformu"
                price="2$ po satu"
                workTime="5 dana 4 sata"
                location="Beograd"
                img="assets/images/coachs/coach2.jpg"
            />

            <Post category="Ugostiteljstvo"
                title="Sankerica/konobarica u jednom restoranu"
                price="6 sati 1500 din"
                workTime="fleksibilno"
                location="Beograd"
                img="assets/images/coachs/coach3.jpg"
            />

            <Post category="Administracija"
                title="Administrativni radnik (iskljucivo na duzi vremenski period)"
                price="250 din/h"
                workTime="7:30 - 15:30"
                location="Beograd"
                img="assets/images/coachs/coach1.jpg"
            />

            <Post category="Sourcing"
                title=" Sourcing za jednu community platformu"
                price="400 din/h"
                workTime="Radni dani 08-16h"
                location="Beograd (Merkator)"
                img="assets/images/coachs/coach2.jpg"
            />

            <Post category="Ugostiteljstvo"
                title="Rad u jednom renomiranom hotelu"
                price="256"
                workTime="svaki dan"
                location="Beograd"
                img="assets/images/coachs/coach3.jpg" />
        </Slider>
    )
}
export default PostList;