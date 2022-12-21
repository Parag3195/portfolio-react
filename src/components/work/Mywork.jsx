import React from 'react'
import "./mywork.css"
import work1 from "./../work/work-1.png"
import work2 from "./../work/work-2.png"
import work4 from "./../work/work-4.png"
import work5 from "./../work/work-5.png"

const Mywork = () => {
  return (
    <div id="portfolio">
    <div className="container">
        <h1 className="section_title">My Work</h1>
        <h3 className="section_subtitle">most recent work</h3>
        <div className="work-list">

        <div className="work">
            <img src={work4}alt="work-3.jpg" />

                <div className="layer">
                    <h3>Facebook</h3>
                    <p>Visit</p>
                    <a href="https://parag3195.github.io/Facebook_dark/"><i class='bx bxs-right-top-arrow-circle'></i></a>
                </div>
            </div>

            <div className="work">
            <img src={work2}alt="work-2.jpg" />

                <div className="layer">
                    <h3>Raut Agro Services</h3>
                    <p>Visit</p>
                    <a href="https://parag3195.github.io/Raut-Agro/"><i class='bx bxs-right-top-arrow-circle'></i></a>
                </div>
            </div>
            <div alt="work1" className="work">
                <img src={work1}alt="work-1.jpg" />
                <div className="layer">
                    <h3>Food Delivery Service</h3>
                    <p>Visit</p>

                    <a href="https://parag3195.github.io/cartzilla/"><i class='bx bxs-right-top-arrow-circle'></i></a>
                </div>
            </div>
           
            
            <div className="work">
            <img src={work5}alt="work-5.jpg" />

                <div className="layer">
                    <h3>Food Search</h3>
                    <p>Visit</p>
                    <a href="https://parag3195.github.io/foodsearch/"><i class='bx bxs-right-top-arrow-circle'></i></a>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default Mywork