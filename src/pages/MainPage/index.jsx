import './style';
import {
  AdBox,
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
import Logo from '/assets/blended_logo.svg';
import MbtiMain from '/assets/mbtiMain_img.png';
import { Link } from 'react-router-dom';



const MyComponent = () => {
    return (
      <Container>
        <Wrapper>
          <Header>
            <Link to={`/`}>
              <HeaderLogo src={Logo} alt='blended_logo'/>
            </Link>
          </Header>
          <Content>
            <ContentTitle>나랑 잘 어울리는 술은? 🧐</ContentTitle>
            <ContentSubTitle>술 MBTI 테스트</ContentSubTitle>
            <ContentImg src={MbtiMain} alt='mbti-Main'/>
            <ContentButton onClick={()=>{
              window.location.href='/question'
            }
            }>시작하기!</ContentButton>
          </Content>
          <AdBox>
          </AdBox>
        </Wrapper>
      </Container>
    );
};

export default MyComponent;
