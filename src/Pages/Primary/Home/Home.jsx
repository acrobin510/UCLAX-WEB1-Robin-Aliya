import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";
import Tabbed from "./Tabbed/Tabbed";
import Video from "./Video/Video";

const Home = () => {
    return (
        <HomeStyled className="Home">
            <h1>Home</h1>
            <Video />
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;
