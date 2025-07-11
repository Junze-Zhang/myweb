import React from 'react';
import styled from 'styled-components';

const TimelineDot = () => {
    return (
        <StyledWrapper>
            <div className="toggle">
                <span className="button" />
                <span className="label">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </span>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  
  .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 50px;
    width: 50px;
  }

  .toggle .button {
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
    height: 50px;
    width: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .toggle .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default TimelineDot;