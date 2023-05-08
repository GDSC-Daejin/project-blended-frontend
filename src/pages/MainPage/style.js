import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 720px;
  height: 1024px;
  background-color: var(--White);
  text-align: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
`;

export const HeaderLogo = styled.img`
  width: 107px;
  height: 20px;
  margin-top: 40px;
`;

export const Content = styled.div`
  margin-top: 60px;
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
`;

export const ContentImg = styled.img`
  width: 350px;
  height: 320px;
  background-color: var(--200);
  display: block;
  margin: 30px auto 30px auto;
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
`;