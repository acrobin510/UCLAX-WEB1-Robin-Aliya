import styled from "styled-components";

/* Data ---------------------------*/
import { ToppingsData } from "./ToppingsData";

/* Components ---------------------------*/
import Topping from "./Topping";

const ToppingsList = () => {
    return (
        <ToppingsListStyled className="ToppingsList">
            {ToppingsData.map((topping) => {
                return <Topping key={topping.id} topping={topping} />;
            })}
        </ToppingsListStyled>
    );
};

export default ToppingsList;

const ToppingsListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;
