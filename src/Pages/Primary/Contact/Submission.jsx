import styled from "styled-components";

const Submission = ({ submission }) => {
    return (
        <SubmissionStyled className="Submission">
            {submission.name} :: {submission.email} :: {submission.message} ::
            {submission.checked &&
                submission.checked.map((c, idx) => {
                    return <span key={idx}>{c},</span>;
                })}
        </SubmissionStyled>
    );
};

export default Submission;

const SubmissionStyled = styled.div`
    outline: solid 1px #999;
    padding: 10px;
    margin: 10px 0px;
`;
