import styled from "styled-components";

/* Components ---------------------------*/
import ToppingDescriptions from "./ToppingDescriptions";

const Topping = ({ topping }) => {
    return (
        <ToppingStyled className="Topping">
            <img src={topping.image} alt={topping.name} />
            <h3>{topping.name}</h3>
            <ToppingDescriptions topping={topping} />
        </ToppingStyled>
    );
};

export default Topping;

const ToppingStyled = styled.div`
    background-color: #c49a6c;

    img {
        width: 100%;
        display: block;
    }

    h3 {
        font-size: 15px;
        color: white;
        background-color: #3c2415;
        margin: 0px;
        padding: 5px 10px;
        text-align: center;
    }
`;
