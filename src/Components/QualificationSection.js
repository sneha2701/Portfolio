import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle1';

function QualificationSection() {
    return (
        <QualificationSectionStyled>


            <div className="left-content">
                <h5>B-TECH, <br/>ELECTRONICS AND COMPUTER SCIENCE ENGINEERING</h5>
                <h5>SECOUNDRY HIGH SCHOOL</h5>
            </div>
            <div className="right-content">
                <p>Koneru Lakshmaiah (Deemed to be University), Guntur, Andhra Pradesh
                    <br/>Aggregate Percentage 84% </p>
                <p>St. Xavier School, Hazaribagh, Jharkhand
                    <br/>Aggregate Percentage 70%</p>
            </div>
            <div className="particle-con">
                    <Particle />
                </div>
            
        </QualificationSectionStyled>
    )
}

const QualificationSectionStyled = styled.section`
    margin-top: 5rem;
    display: flex;

    .left-content{
        margin-top: 5rem;
        width: 40%;
        h5{
            padding-bottom: 2rem;
        }
    }
    .right-content{ 
        margin-top: 5rem;       
        width: 60%;
        p{
            padding-bottom: 3rem;
        }
    }
    .particle-con{
            width: 25%;
            position: absolute;
            top: 0;
            right: 0;
        }
`;

export default QualificationSection
