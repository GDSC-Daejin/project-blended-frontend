import styled from 'styled-components';


export const ProgressBarWrapper = styled.div`
  margin: 0 auto;
  background-color: #eee;
  //width: 640px;
  width: 90%;
  height: 6px;
  display: flex;
  align-items: center;
  border-radius: 20px;`;
export const ProgressBar = styled.div`
  background-color: var(--800);
  width: ${props => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

export const QuestionText = styled.div`
  padding: 0 70px;
  font-size: 18px;
  font-weight: 700;
  color: var(--900);
  line-height: 27px;
  margin: 70px auto 70px auto;
`;
export const AnswerBoxWrapper = styled.div`
  margin-bottom: 229px;
`;

export const AnswerBox = styled.div`
  background-color: var(--200);
  margin: 20px auto;
  border-radius: 20px;
  width: 370px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AnswerText = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: var(--900);
  padding: 0 40px;
  line-height: 22px;
`;