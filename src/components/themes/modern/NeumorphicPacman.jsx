import React from 'react';
import styled from 'styled-components';

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="loader">
                <div className="pac-man" />
                <div className="point p1" />
                <div className="point p2" />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    justify-content: space-between;
  }

  .pac-man {
    width: 5em;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(farthest-side,#000 98%,#0000) 1.7em 0.61em/.8em .8em no-repeat,  
      #ffcc00;
    box-shadow: .2em -.6em 1.2em 0em inset rgba(0, 0, 0, 0.7);
    animation: l4 .5s infinite steps(5) alternate;
    z-index: 999;
  }

  .point {
    margin-top: 2em;
    position: absolute;
    margin-left: .4em;
    width: 1em;
    height: 1em;
    background-color: #000;
    border-radius: 50%;
  }

  .p1 {
    margin-left: 8em;
    animation: moove-p1 2s linear infinite;
  }

  .p2 {
    margin-left: 15em;
    animation: moove-p2 2s linear infinite;
  }

  @keyframes moove-p1 {
    0% {
      margin-left: 8em;
    }

    100% {
      margin-left: 0em;
    }
  }

  @keyframes moove-p2 {
    0% {
      margin-left: 16em;
    }

    100% {
      margin-left: 8em;
    }
  }

  @keyframes l4 {

    0% {
      clip-path: polygon(50% 50%,100% 0,100% 0,0 0,0 100%,100% 100%,100% 100%)
    }

    100% {
      clip-path: polygon(50% 50%,100% 65%,100% 0,0 0,0 100%,100% 100%,100%  35%)
    }
  }`;

export default Loader;
