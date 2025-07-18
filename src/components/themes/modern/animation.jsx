import React from 'react';
import styled from 'styled-components';

const Loader = () => {
    return (
        <StyledWrapper>
            <main>
                <svg height="128px" width="128px" viewBox="0 0 128 128" className="pl1">
                    <defs>
                        <linearGradient y2={1} x2={1} y1={0} x1={0} id="pl-grad">
                            <stop stopColor="#000" offset="0%" />
                            <stop stopColor="#fff" offset="100%" />
                        </linearGradient>
                        <linearGradient y2={1} x2={1} y1={0} x1={0} id="purple-gradient">
                            <stop stopColor="#8B5CF6" offset="0%" />
                            <stop stopColor="#7C3AED" offset="100%" />
                        </linearGradient>
                        <mask id="pl-mask">
                            <rect fill="url(#pl-grad)" height={128} width={128} y={0} x={0} />
                        </mask>
                    </defs>
                    <g fill="#E5E7EB">
                        <g className="pl1__g">
                            <g transform="translate(20,20) rotate(0,44,44)">
                                <g className="pl1__rect-g">
                                    <rect height={40} width={40} ry={12} rx={12} className="pl1__rect" />
                                    <rect transform="translate(0,48)" height={40} width={40} ry={12} rx={12} className="pl1__rect" />
                                </g>
                                <g transform="rotate(180,44,44)" className="pl1__rect-g">
                                    <rect height={40} width={40} ry={12} rx={12} className="pl1__rect" />
                                    <rect transform="translate(0,48)" height={40} width={40} ry={12} rx={12} className="pl1__rect" />
                                </g>
                            </g>
                        </g>
                    </g>
                    <g mask="url(#pl-mask)" fill="url(#purple-gradient)">
                        <g className="pl1__g">
                            <g transform="translate(20,20) rotate(0,44,44)">
                                <g className="pl1__rect-g">
                                    <rect height={40} width={40} ry={12} rx={12} className="pl1__rect" />
                                    <rect transform="translate(0,48)" height={40} width={40} ry={12} rx={12} className="pl1__rect" />
                                </g>
                                <g transform="rotate(180,44,44)" className="pl1__rect-g">
                                    <rect height={40} width={40} ry={12} rx={12} className="pl1__rect" />
                                    <rect transform="translate(0,48)" height={40} width={40} ry={12} rx={12} className="pl1__rect" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </main>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .pl1 {
        display: block;
        width: 8em;
        height: 8em;
    }

    .pl1__g,
    .pl1__rect {
        animation: pl1-a 1.5s cubic-bezier(0.65,0,0.35,1) infinite;
    }

    .pl1__g {
        transform-origin: 64px 64px;
    }

    .pl1__rect:first-child {
        animation-name: pl1-b;
    }

    .pl1__rect:nth-child(2) {
        animation-name: pl1-c;
    }

    @keyframes pl1-a {
        from {
            transform: rotate(0);
        }

        80%,
        to {
            animation-timing-function: steps(1,start);
            transform: rotate(90deg);
        }
    }

    @keyframes pl1-b {
        from {
            animation-timing-function: cubic-bezier(0.33,0,0.67,0);
            width: 40px;
            height: 40px;
        }

        20% {
            animation-timing-function: steps(1,start);
            width: 40px;
            height: 0;
        }

        60% {
            animation-timing-function: cubic-bezier(0.65,0,0.35,1);
            width: 0;
            height: 40px;
        }

        80%,
        to {
            width: 40px;
            height: 40px;
        }
    }

    @keyframes pl1-c {
        from {
            animation-timing-function: cubic-bezier(0.33,0,0.67,0);
            width: 40px;
            height: 40px;
            transform: translate(0,48px);
        }

        20% {
            animation-timing-function: cubic-bezier(0.33,1,0.67,1);
            width: 40px;
            height: 88px;
            transform: translate(0,0);
        }

        40% {
            animation-timing-function: cubic-bezier(0.33,0,0.67,0);
            width: 40px;
            height: 40px;
            transform: translate(0,0);
        }

        60% {
            animation-timing-function: cubic-bezier(0.33,1,0.67,1);
            width: 88px;
            height: 40px;
            transform: translate(0,0);
        }

        80%,
        to {
            width: 40px;
            height: 40px;
            transform: translate(48px,0);
        }
    }`;

export default Loader;
