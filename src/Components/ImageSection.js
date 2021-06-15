import React from 'react'
import styled from 'styled-components'
import profile from '../images/profile.jpg'
import Primbutton from './Primbutton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={profile} alt='hii' />

            </div>
            <div className="right-content">
                    <h4>I am <span className="abouttopo">Sneha Priya Gupta</span></h4>
                <div className="paragraph">
                <p>Driven to learn quickly, advance computer proficiency and training in technical background. Solid background
                in java, Spring Framework, HTML, JavaScript and MySQL settings supporting team needs. Flexible and
                hardworking team player focused on boosting efficiency and performance with conscientious and detail Oriented approaches.</p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Language</p>
                        <p>Location</p>
                    </div>

                    <div className="info">
                        <p> : Sneha Priya Gupta</p>
                        <p> : 22</p>
                        <p> : Indian</p>
                        <p> : Hindi, English</p>
                        <p> : Ranchi (Jharkhand)</p>
                    </div>
                </div>
                </div>
                <Primbutton title={`Download CV`}/>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled= styled.div`
    margin-top: 5rem;
    display: flex;
    .abouttopo{
        color: #29a3a3;
    }
    .left-content{
        width: 100%;
        img{
            width: 80%;
        }
    }
    .right-content{
        
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
        }
        span{
            font-size: 2rem;
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            padding-top:1.4rem;
            padding-bottom: 1.4rem;
            display: flex;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 400;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection
