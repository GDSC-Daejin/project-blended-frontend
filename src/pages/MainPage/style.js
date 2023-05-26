import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 720px;
  height: 100vh;
  background-color: var(--White);
  text-align: center;
  @media all and (max-width: 375px){
    width: 375px;
    height: 844px;
    @media all and (max-height: 677px){
      height: fit-content;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
`;

export const HeaderLogo = styled.img`
  width: 107px;
  height: 20px;
  margin-top: 45px;
`;

export const Content = styled.div`
  margin-top: 40px;
`;

export const ContentTitle = styled.div`
  font-family: Pretendard,sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: var(--Black);
`;

export const ContentSubTitle = styled.div`
  font-family: Pretendard,sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: var(--900);
  margin-top: 15px;
  @media all and (max-width: 375px){
    font-size: 28px;
  }
`;

export const ContentImg = styled.img`
  width: 350px;
  height: 320px;
  display: block;
  margin: 60px auto 74px auto;
  @media all and (max-width: 375px){
    width: 320px;
    height: 250px;
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
  margin-bottom: 54px;
`;

export const AdBox = styled.div`
  margin: 60px auto 0 auto;
  background-color: var(--100);
  width: 640px;
  height: 100px;
  @media all and (max-width: 375px){
    width: 100%;
    margin-top: 92px;
    @media all and (max-height: 677px){
      display: none;
    }
  }
`;