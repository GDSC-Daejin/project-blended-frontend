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


const MyComponent = () => {
  return (
      <Container>
        <Wrapper>
          <Header>
            <HeaderLogo src={Logo} alt='blended_logo' />
          </Header>
          <ProgressBarWrapper>
            <ProgressBar width={(1/10)*100 + "%"} />
          </ProgressBarWrapper>
          <Content>
            <QuestionText>처음 들어보는 술이 메뉴판에 있다 <br/> 어떤거 먹을래?</QuestionText>
            <AnswerBoxWrapper>
              <AnswerBox>
                <AnswerText>구관이 명관. 그래도 늘 먹던걸로 주문한다.</AnswerText>
              </AnswerBox>
              <AnswerBox>
                <AnswerText>오! 이건 뭐지? 새로운걸로 도전해본다.</AnswerText>
              </AnswerBox>
            </AnswerBoxWrapper>
          </Content>
          <AdBox>
          </AdBox>
        </Wrapper>
      </Container>
  );
};

export default MyComponent;
