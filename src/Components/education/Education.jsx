import React, {useState} from 'react'
import './education.css'

const Education = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
    <section className="education section">
        <h2 className="section_title">Education</h2>
        <span className="section_subtitle">What I have Learnt</span>

        <div className="education_container container">
            <div className="education_tabs">
                <div onClick={()=>toggleTab(1)} className={toggleState===1 ? "education_button education_active button_flex" : "education_button button_flex"}>
                    <i className="uil uil-graduation-cap education_icon"></i>{" "}
                     Education
                </div>

                <div onClick={()=>toggleTab(2)} className={toggleState===2 ? "education_button education_active button_flex" : "education_button button_flex"}>
                    <i className="uil uil-briefcase-alt education_icon"></i>{" "}
                     Experience
                </div>
            </div>
            <div className="education_sections">
                <div className={toggleState===1 ? "education_content education_content-active" : "education_content"}>
                    <div className="education_data">
                        <div>
                            <h3 className="education_title">NIT Silchar</h3>
                            <span className="education_subtitle">Computer Science Engineering</span>
                            <span className="education_subtitle">CGPA - 8.30</span>
                            <div className="education_calendar">
                                <i className="uil uil-calendar-alt"></i>2021-Present
                            </div>
                        </div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                    </div>

                    <div className="education_data">
                        <div></div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                            
                        </div>
                        <div>
                            <h3 className="education_title">Sasi Junior College</h3>
                            <span className="education_subtitle">MPC</span>
                            <span className="education_subtitle">Percentage - 97.2</span>
                            <div className="education_calendar">
                                <i className="uil uil-calendar-alt"></i>2019-2021
                            </div>
                        </div>
                        
                    </div>

                    <div className="education_data">
                        <div>
                            <h3 className="education_title">Bhashyam Public School</h3>
                            <span className="education_subtitle">Upto 10th Class</span>
                            <div className="education_calendar">
                                <i className="uil uil-calendar-alt"></i>2019-2014
                            </div>
                        </div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                    </div>

                    <div className="education_data">
                        <div></div>
                        <div>
                            <span className="education_rounder"></span>
                        </div>
                        <div>
                            <h3 className="education_title">Gowthami E.M School</h3>
                            <span className="education_subtitle">Upto 5th class</span>
                            <div className="education_calendar">
                                <i className="uil uil-calendar-alt"></i>2007-2014
                            </div>
                        </div>
                        
                    </div>   
                </div>

                <div className={toggleState===2 ? "education_content education_content-active" : "education_content"}>
                    

                    <div className="education_data">
                        <div></div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                            
                        </div>
                        <div>
                            <h3 className="education_title">Web Development</h3>
                            <span className="education_subtitle">Advanced</span>
                            <div className="education_calendar">
                                <i className="uil uil-calendar-alt"></i>2022-Present
                            </div>
                        </div>
                        
                    </div>

                    <div className="education_data">
                        <div>
                            <h3 className="education_title">Competitive Programmer</h3>
                            <span className="education_subtitle">Advanced</span>
                            <div className="education_calendar">
                                <i className="uil uil-calendar-alt"></i>2021-Present
                            </div>
                        </div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
