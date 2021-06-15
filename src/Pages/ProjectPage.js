import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title'
import { Mainlayout} from '../styles/layout'
import ProjectCard from '../Components/ProjectCard'
//import Particle from '../Components/Particle';
import design from '../images/pro1.PNG'
import design1 from '../images/pro2.png'
import design2 from '../images/pro3.png'
function ProjectPage() {
    return (
        <Mainlayout>
            <ProjectPageStyled>
            <Title title={'PROJECT'} span={'PROJECT'}/>
            <div className="service">
                <ProjectCard image={design} title={'WebDesign'} paragraph={'gshthrththrthhbf'}/>
                <ProjectCard image={design1} title={'WebDesign'} paragraph={'gshthrththrthhbf'}/>
                <ProjectCard image={design2} title={'WebDesign'} paragraph={'gshthrththrthhbf'}/>
            </div>
            </ProjectPageStyled>
        </Mainlayout>
    )
}

const ProjectPageStyled= styled.section`

.service{
    display: flex;
    justify-content: space-between;
}
`;

export default ProjectPage
