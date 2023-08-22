import styled from "styled-components";

const Tab = ({ tab, curTab, curTabUpdate }) => {
    const onClick = () => {
        curTabUpdate(tab);
    };

    const theClassName = curTab.id === tab.id ? "Tab selected" : "Tab";

    return (
        <TabStyled className={theClassName} onClick={onClick}>
            {tab.title}
        </TabStyled>
    );
};

export default Tab;

const TabStyled = styled.div`
    background-color: #3c2415;
    color: #c49a6c;
    text-align: center;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
    line-height: 40px;
    margin-right: 5px;

    display: inline-block;

    width: clamp(75px, 20%, 150px);

    &.selected {
        background-color: #603913;
        color: white;
    }
`;
