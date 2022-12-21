import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState (index);
    }
  return (
   <section className="qualification section">
    <h2 className="section_title">Qualification</h2>
    <span className="section_subtitle">My personal journey</span>

    <div className="qualification_container container">
        <div className="qualification_tabs">
            <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button  button--flex"}
            onClick={()=> toggleTab(1)}>
                <i className="uil uil-graduation-cap qualification_icon"></i>Education
            </div>

            <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button  button--flex"}
             onClick={()=> toggleTab(2)}>
                <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
            </div>
        </div>

        <div className="qualification_sections">
            <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content "}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Post Graduation</h3>
                        <span className="qualification_subtitle">ME (CAD CAM)</span>
                        <p>CGPI- 7.67</p>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 
                        </div>
                    </div>

                    <div>
                       <span className="qualification_rounder"></span> 
                       <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                       <span className="qualification_rounder"></span> 
                       <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Graduation</h3>
                        <span className="qualification_subtitle">BE (Mechanical)</span> 
                        <p>CGPI- 7.29</p>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i> 2018
                        </div>
                    </div>

                    
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Class XII</h3>
                        <span className="qualification_subtitle">Maharashtra State Board</span>
                        <p>63%</p>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i> 2013
                        </div>
                    </div>

                    <div>
                       <span className="qualification_rounder"></span> 
                       <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                       <span className="qualification_rounder"></span> 
                       <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Class X</h3>
                        <span className="qualification_subtitle">Maharashtra State Board</span>
                        <p>91.82%</p>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i> 2011
                        </div>
                    </div>

                    
                </div>
            </div>

            {/* ============ exp ============== */}
            <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content "}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Frontend Developer</h3>
                        <span className="qualification_subtitle">SevenMentor & Training Pvt Ltd.</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i> 6 months
                        </div>
                    </div>

                    <div>
                       <span className="qualification_rounder"></span> 
                       <span className="qualification_line"></span>
                    </div>
                </div>

                {/* <div className="qualification_data">
                    <div></div>

                    <div>
                       <span className="qualification_rounder"></span> 
                       <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Ux Designer</h3>
                        <span className="qualification_subtitle">Apple Inc - Spain</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>2020 - 2021
                        </div>
                    </div>

                    
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Web Designer</h3>
                        <span className="qualification_subtitle">Figma - Spain</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>2018 - 2020
                        </div>
                    </div>

                    <div>
                       <span className="qualification_rounder"></span> 
                       <span className="qualification_line"></span>
                    </div>
                </div> */}

                
            </div>
        </div>
    </div>
   </section>
  )
}

export default Qualification