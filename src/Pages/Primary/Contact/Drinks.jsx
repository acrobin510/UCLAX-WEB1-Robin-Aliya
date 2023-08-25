import styled from "styled-components";

/* Components ---------------------------*/
import Drink from "./Drink";

/* Data ---------------------------*/
import { staffData } from "../Staff/staffData";

const Drinks = () => {
    return (
        <DrinksStyled className="Drinks">
            {staffData.map((drink) => drink.name)}
        </DrinksStyled>
    );
};

export default Drinks;

const DrinksStyled = styled.div``;
