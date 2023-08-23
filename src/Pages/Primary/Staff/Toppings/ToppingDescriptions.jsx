import styled from "styled-components";

/* components ---------------------------*/
import Description from "./Description";

const ToppingDescriptions = ({ topping }) => {
    return (
        <ToppingDescriptionsStyled className="ToppingDescriptions">
            <div className="cost">{topping.cost}</div>
            <Description topping={topping} />
        </ToppingDescriptionsStyled>
    );
};

export default ToppingDescriptions;

const ToppingDescriptionsStyled = styled.div`
    padding: 20px;
    font-size: 14px;

    .cost {
        font-size: 16px;
    }
`;
