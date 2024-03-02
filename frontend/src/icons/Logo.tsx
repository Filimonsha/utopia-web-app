import {FC} from 'react';
import {Icon} from "@mui/material";

interface ILogoProps {

}

const Logo: FC<ILogoProps> = ({}) => {
    return (
        <Icon sx={{width:"40px",height:"40px"}}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_342_4840)">
                    <path
                        d="M18.0024 15H32.0024C32.0024 22.6845 25.6869 29 18.0024 29C10.318 29 4.00244 22.6845 4.00244 15C4.00244 7.31556 10.318 1 18.0024 1C21.7202 1 25.2824 2.47776 27.8958 5.10665L18.0024 15Z"
                        fill="url(#paint0_linear_342_4840)"/>
                </g>
                <defs>
                    <filter id="filter0_d_342_4840" x="0.00244069" y="-4.76837e-07" width="40" height="40"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="2" dy="5"/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.364706 0 0 0 0 0.372549 0 0 0 0 0.937255 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_342_4840"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_342_4840" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_342_4840" x1="47.0024" y1="7" x2="-76.9976" y2="74"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5D5FEF"/>
                        <stop offset="1" stopColor="#0003FF"/>
                    </linearGradient>
                </defs>
            </svg>
        </Icon>
    );
};

export default Logo;
