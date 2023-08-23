import styled from "styled-components";

/* Components ---------------------------*/
import StaffList from "./StaffList";
import ToppingsList from "./Toppings/ToppingsList";
import Inset from "@/Common/PagesLayout/Inset";

const Staff = () => {
    return (
        <StaffStyled className="Staff">
            <Inset>
                <h1>Menu</h1>
                <hr className="dashed" />
                <h2 className="Drinks">Drinks</h2>
                <StaffList />
                <hr className="dashed" />
                <h2 className="Drinks">Add Ins</h2>
                <ToppingsList />
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div`
    .Drinks {
        font-size: 35px;
        color: #ffa8db;
    }

    hr {
        border: none;
        border-top: 8px dotted #603913;
        padding: 20px;
    }
`;
