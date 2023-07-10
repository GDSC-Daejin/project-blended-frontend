import {
  Container,
  Content,
  Header,
  HeaderLogo,
  Wrapper,
} from '../MainPage/style.js';
import { AnswerBox, AnswerBoxWrapper, AnswerText, ProgressBar, ProgressBarWrapper, QuestionText } from './style.js';
import Logo from '../../../assets/blended_logo.svg';
import { useState } from 'react';
import testData from './question.json';
import ResultPage from '../ResultPage/index.jsx';

const MyComponent = () => {

  const [questionNum, setQuestionNum] = useState(0);
  const [answerArray, setAnswerArray] = useState([[],[],[],[]]);

  const answerClick1 = () => {
    const answer = testData[questionNum].answer[0].type;
    if(answer === 'E' || answer === 'I') {
      const newAnswerArray = [...answerArray];
      newAnswerArray[0].push(answer);
      setAnswerArray(newAnswerArray);
    } else if(answer === 'N' || answer === 'S') {
      const newAnswerArray = [...answerArray];
      newAnswerArray[1].push(answer);
      setAnswerArray(newAnswerArray);
    } else if(answer === 'T' || answer === 'F') {
      const newAnswerArray = [...answerArray];
      newAnswerArray[2].push(answer);
      setAnswerArray(newAnswerArray);
    } else if(answer === 'J' || answer === 'P') {
      const newAnswerArray = [...answerArray];
      newAnswerArray[3].push(answer);
      setAnswerArray(newAnswerArray);
    }
    // setAnswerArray([...answerArray, testData[questionNum].answer[0].type]);
    setQuestionNum((prev) => prev + 1);
  };
  // console.log(answerArray);

  const answerClick2 = () => {
    const answer = testData[questionNum].answer[1].type;
    if(answer === 'E' || answer === 'I') {
      const newAnswerArray = [...answerArray];
      newAnswerArray[0].push(answer);
      setAnswerArray(newAnswerArray);
    } else if(answer === 'N' || answer === 'S') {
      const newAnswerArray = [...answerArray];
      newAnswerArray[1].push(answer);
      setAnswerArray(newAnswerArray);
    } else if(answer === 'T' || answer === 'F') {
      const newAnswerArray = [...answerArray];
      newAnswerArray[2].push(answer);
      setAnswerArray(newAnswerArray);
    } else if(answer === 'J' || answer === 'P') {
      const newAnswerArray = [...answerArray];
      newAnswerArray[3].push(answer);
      setAnswerArray(newAnswerArray);
    }
    setQuestionNum((prev) => prev + 1);
    // setAnswerArray([...answerArray, testData[questionNum].answer[1].type]);
    // setQuestionNum((prev) => prev + 1);
  };

  const onClick = () => {
    window.location.href = '/';
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderLogo src={Logo} alt='blended_logo' onClick={onClick} />
        </Header>
        {
          questionNum === testData.length ? (
              // <Content>
              //   테스트 끝, 결과는 {answerArray} 입니다.
              // </Content>
              <ResultPage data={answerArray} />
            ) :
            <>
              <ProgressBarWrapper>
                <ProgressBar width={((questionNum + 1) / (testData.length + 1)) * 100 + '%'} />
              </ProgressBarWrapper>
              <Content>
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
            </>
        }
        {/*<AdBox>*/}
        {/*</AdBox>*/}
      </Wrapper>
    </Container>
  );
};

export default MyComponent;
