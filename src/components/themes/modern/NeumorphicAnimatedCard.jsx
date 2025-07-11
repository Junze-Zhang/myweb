import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="circle" />
                <div className="card-inner" />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    .card {
        width: 100%;
        height: 100%;
        transition: all 0.2s;
        position: relative;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 7px 7px 0px 0px #a0a0a0;
    }

    .card-inner {
        width: inherit;
        height: inherit;
        background: linear-gradient(145deg, rgba(245, 247, 250, 0.1), rgba(235, 238, 242, 0.1));
        box-shadow: 0 8px 15px -2px rgba(0, 0, 0, 0.1),
        inset 0 -2px 3px -1px rgba(0, 0, 0, 0.05),
        0 -6px 10px -1px rgba(255, 255, 255, 0.233),
        inset 0 2px 3px -1px rgba(255, 255, 255, 0.067),
        inset 0 0 3px 1px rgba(255, 255, 255, 0.3),
        inset 0 12px 18px 0 rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 8px;
    }

    .card:hover {
        transform: scale(1.04) rotate(1deg);
    }

    .circle {
        width: 46px;
        height: 46px;
        transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
        box-shadow: 0 8px 15px -2px rgba(0, 0, 0, 0.3), 
                    inset 0 -2px 3px -1px rgba(0, 0, 0, 0.15), 
                    0 -6px 10px -1px rgba(255, 255, 255, 0.7), 
                    inset 0 2px 3px -1px rgba(255, 255, 255, 0.2), 
                    inset 0 0 3px 1px rgba(255, 255, 255, 0.9), 
                    inset 0 12px 18px 0 rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        position: absolute;
        background: #eaeaea;
        display: block;
        animation: move-up6 4s ease-in infinite alternate-reverse;
    }
    

    .circle:nth-child(1) {
        bottom: -25px;
        right: -25px;
        animation-name: move-down1;
    }

    @keyframes move-up6 {
        to {
            transform: translateY(-10px);
        }
    }

    @keyframes move-down1 {
        to {
            transform: translateY(10px);
        }
    }`;

export default Card;
