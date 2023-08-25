import styled from "styled-components";

const Drink = (drink) => {
    return <DrinkStyled className="Drink">{drink.name}</DrinkStyled>;
};

export default Drink;

const DrinkStyled = styled.div``;
