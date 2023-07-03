import { useState } from 'react';
import styled from 'styled-components';

import sunSrc from './images/sun.png';
import moonSrc from './images/moon.png';

const SunAndMoon = () => {
    

    //JavaScript

    const [imgSrc, imgSrcUpdate] = useState(sunSrc)
    const changeToMoon = () => {
        console.log('MOON');
        imgSrcUpdate(moonSrc)
    }
    const changeToSun = () => {
        console.log('SUN');
        imgSrcUpdate(sunSrc)
    }

    // HTML
return <SunAndMoonStyled>
    <h1>Sun and Moon - Whatever</h1>
    <img src={imgSrc} onMouseEnter={changeToMoon} onMouseLeave={changeToSun}/>

</SunAndMoonStyled>

}
export default SunAndMoon;

const SunAndMoonStyled = styled.div`
//CSS: styles
    text-align: center;
    
    h1{
        font-size:50px;
        color: teal
    }
    img {
        border: solid 20px teal;
        margin: 30px;
        padding: 20px;
        background-color: #002222;
    }
`