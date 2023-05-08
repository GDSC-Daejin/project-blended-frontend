import './style';
import {
  Container,
  Content,
  ContentButton,
  ContentImg,
  ContentSubTitle,
  ContentTitle,
  Header,
  HeaderLogo,
  Wrapper,
} from './style.js';

const MyComponent = () => {
    return (
      <Container>
        <Wrapper>
          <Header>
            <HeaderLogo src='/src/assets/blended_logo.svg' alt='blended_logo' />
          </Header>
          <Content>
            <ContentTitle>나랑 잘 어울리는 술은? 🧐</ContentTitle>
            <ContentSubTitle>술 MBTI 테스트</ContentSubTitle>
            <ContentImg/>
            <ContentButton>시작하기!</ContentButton>
          </Content>
        </Wrapper>
      </Container>
    );
};

export default MyComponent;
