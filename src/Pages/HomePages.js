import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle1';
import Typed from "react-typed"

function HomePages() {
    return (
        <HomePageStyled>  
            <div className="con">
                <div className="topography">
                    <h1>Hii, I'm <span className="homespan">Sneha Priya Gupta</span></h1>
                    <h1> I'm a</h1>
                    <Typed
                    className="typed-text"
                    strings={["web designer", "web developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop/>                  
                    </div>
                <div className="particle-con">
                    <Particle />
                </div>
                 </div>   
        </HomePageStyled>
    )
}

const HomePageStyled =styled.header`
    display: flex;

    .con{
        width: 100%;
        height: 100%;
        .dot{
           
        }
        .topography{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 1;

        }
        .homespan,span{
            color: #e6e600;
        }

        .particle-con{
            width: 100%;
            position: absolute;
            top: 0;
            right: 0;
        }

    }

`;
export default HomePages