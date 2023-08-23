import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* Images ---------------------------*/
import logoUrl from "./Logo_Sticker.svg";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <NavLink to={"/"} end>
                <img src={logoUrl} alt="CrossFit Decimate Logo" />
            </NavLink>
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
