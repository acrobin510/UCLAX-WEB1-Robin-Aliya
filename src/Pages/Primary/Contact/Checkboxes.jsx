import styled from "styled-components";
import { useState } from "react";

const Checkboxes = () => {
    const [checked, checkedUpdate] = useState(false);

    const changeChecked = () => {
        checkedUpdate(!checked);
    };

    const Checkbox = ({ label, value, onChange }) => {
        return <input type="checkbox" checked={value} onChange={onChange} />;
    };
    return (
        <CheckboxesStyled className="Checkboxes">
            <Checkbox value={checked} onChange={changeChecked} />
        </CheckboxesStyled>
    );
};

export default Checkboxes;

const CheckboxesStyled = styled.div``;
