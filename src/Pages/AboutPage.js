import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import Skills from '../Components/Skills';
function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title= {'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title= {'My Skills'} span={'My Skills'} />
            <div className="skills-container">
            <Skills skill={'Javascript'} progress={'70%'} width={'70%'} />
            <Skills skill={'React.Js'} progress={'70%'} width={'70%'} />
            <Skills skill={'Node.Js'} progress={'80%'} width={'80%'} />
            <Skills skill={'Express.Js'} progress={'60%'} width={'60%'} />
            <Skills skill={'SQL'} progress={'70%'} width={'70%'} />
            <Skills skill={'MySQL'} progress={'50%'} width={'50%'} />
            <Skills skill={'HTML'} progress={'80%'} width={'80%'} />
            <Skills skill={'CSS'} progress={'80%'} width={'80%'} />
            </div>
        </div>
    )
}

export default AboutPage;
