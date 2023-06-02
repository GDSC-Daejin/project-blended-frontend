import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  user-select: none;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 720px;
  height: 100%;
  background-color: var(--White);
  text-align: center;
  @media all and (max-width: 720px) {
    height: 100vh;
  }
`;

export const Header = styled.div`
  width: 100%;
`;

export const HeaderLogo = styled.img`
  width: 107px;
  height: 20px;
  margin: 40px 0 80px 0;
  @media all and (min-width: 720px) {
    margin: 40px 0 111px 0;
  }
`;

export const Content = styled.div`
    height: 424px;
  @media all and (min-width: 720px) {
    height: 430px;
  }
`;

export const ContentTitle = styled.div`
  font-family: Pretendard,sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: var(--Black);
  margin: 0 0 10px 0;
`;

export const ContentSubTitle = styled.div`
  font-family: Pretendard,sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: var(--900);
`;

export const ContentImg = styled.img`
  display: block;
  margin: 39px auto 87px auto;
  @media all and (min-width: 720px) {
    margin: 26px auto 74px auto;
  }
`;

export const ContentButton = styled.button`
  width: 350px;
  height: 60px;
  background-color: #111111;
  color: var(--White);
  border-radius: 12px;
  border: none;
  font-family: Pretendard,sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 0 96px 0;
  @media all and (min-width: 720px) {
    margin: 0 0 122px 0;
  }
`;

export const AdBox = styled.div`
  margin: 0 auto 0 auto;
  background-color: var(--200);
  width: 100%;
  height: 100px;
  @media all and (min-width: 720px) {
    width: 640px;
  }
  @media all and (max-height: 677px) {
    display: none;
  }
`;