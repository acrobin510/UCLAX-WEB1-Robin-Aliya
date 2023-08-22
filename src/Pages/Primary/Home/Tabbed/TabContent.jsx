import styled from "styled-components";
import googleMapReact from "google-map-react";

/* Media Query ---------------------------*/
import { breakpoints } from "@/Common/useMediaQuery";

const TabContent = ({ curTab }) => {
    return (
        <TabContentStyled className="TabContent">
            <div className="column1">
                <img src={curTab.image} alt={curTab.title} />
            </div>
            <div className="column2">
                <h3>{curTab.title}</h3>
                <div></div>
                <div dangerouslySetInnerHTML={{ __html: curTab.text }}></div>
            </div>
        </TabContentStyled>
    );
};

export default TabContent;

const TabContentStyled = styled.div`
    padding: 20px;
    background-color: #603913;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }
    .column1 {
        img {
            display: block;
            max-width: 100%;
            @media ${breakpoints.isMediumAndUp} {
                margin: 0px auto 15px;
            }
        }
    }

    .column2 {
        h3 {
            font-size: 30px;
            color: white;
        }

        p {
            font-size: 18px;
            color: #dddcdc;
            margin-bottom: 20 px;
            line-height: 150%;
        }
    }
`;
