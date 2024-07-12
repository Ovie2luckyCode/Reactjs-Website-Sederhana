import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Tutors from "../components/Tutors";
import Partner from "../components/Partner";
import Contact from "../components/Contact";
import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import { tutorsList, tutorsSection } from '../data/TutorsSection';
import { contactSection } from "../data/ContactSection";

import '../styles/Home.css'
import parse from'html-react-parser'
import { partnerSection,partnerList } from "../data/PartnersSection";
function Home() {
  return (
    <>
    <Navbar/>
    <div className="wrapper">
{/* <!-- untuk home --> */}
        <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
               {parse(homeSection.content)} 
            </div>
        </section>
{/* course */}
        <section id="courses">
            <div className="kolom">
                {parse(courseSection.content)}
            </div>
            <img src={courseSection.image}/>
        </section>
{/* tutors */}
    <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                </div>
        <Tutors tutorsList={tutorsList}/>
                </div>
    </section>
{/* partners */}
        <section id="partners"> 
            <div className="tengah">
                <div className="kolom">
                   {parse(partnerSection.content)}
                </div>

                <Partner partnerList={partnerList}/>
            </div>
        </section>
  



    </div>
    <Contact contactSection={contactSection}/>
    <Footer/>
  
    </>
  )
}

export default Home
