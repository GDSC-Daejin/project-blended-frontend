import {
  AdBox,
  Container,
  Content,
  Header,
  HeaderLogo,
  Wrapper,
} from '../MainPage/style.js';
import { AnswerBox, AnswerBoxWrapper, AnswerText, ProgressBar, ProgressBarWrapper, QuestionText } from './style.js';
import Logo from '../../../assets/blended_logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import testData from './question.json';

const MyComponent = () => {

  const [questionNum, setQuestionNum] = useState(0);
  const [answerArray, setAnswerArray] = useState([]);

  const answerClick1 = () => {
    setAnswerArray([...answerArray, testData[questionNum].answer[0].type]);
    setQuestionNum((prev) => prev + 1);
  }
  console.log(answerArray);

  const answerClick2 = () => {
    setAnswerArray([...answerArray, testData[questionNum].answer[1].type]);
    setQuestionNum((prev) => prev + 1);
  }

  return (
      <Container>
        <Wrapper>
          <Header>
            <Link to={`/`}>
              <HeaderLogo src={Logo} alt='blended_logo'/>
            </Link>
          </Header>
          <ProgressBarWrapper>
            <ProgressBar width={((questionNum + 1)/(testData.length + 1))*100 + "%"} />
          </ProgressBarWrapper>
          {
            questionNum === testData.length ? (
              <Content>
                테스트 끝, 결과는 {answerArray} 입니다.
              </Content>
            ) : <Content>
              <QuestionText>{testData[questionNum].question}</QuestionText>
              <AnswerBoxWrapper>
                <AnswerBox onClick={answerClick1}>
                  <AnswerText>{testData[questionNum].answer[0].answer1}</AnswerText>
                  {/*<AnswerText>[{testData[questionNum].answer[0].type}]</AnswerText>*/}
                </AnswerBox>
                <AnswerBox onClick={answerClick2}>
                  <AnswerText>{testData[questionNum].answer[1].answer2}</AnswerText>
                  {/*<AnswerText>[{testData[questionNum].answer[1].type}]</AnswerText>*/}
                </AnswerBox>
              </AnswerBoxWrapper>
            </Content>
          }

          <AdBox>
          </AdBox>
        </Wrapper>
      </Container>
  );
};

export default MyComponent;
