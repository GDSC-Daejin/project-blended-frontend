import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  //height: 100vh;
  height: 100%;
  user-select: none;
`;

export const Wrapper = styled.div`
  min-height: calc(100vh - 40px);
  margin: 0 auto;
  width: 720px;
  height: 100%;
  background-color: var(--White);
  text-align: center;
  padding-block: 20px;
  @media all and (max-width: 720px) {
    height: 100vh;
    width: 100%;
  }
`;

export const ResultTitle = styled.div`
  font-family: Pretendard,sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #777777;
  margin-top: -60px;
`;

export const ResultSubText = styled.div`
  font-family: Pretendard,sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin: 16px 0 0 0;
`;

export const ResultText = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin: 16px 0 0 0;
`;

export const ResultImg = styled.img`
  display: block;
  margin: 20px auto 0 auto;
`;

export const ResultBox = styled.div`
  width: 310px;
  //height: 390px;
  height: fit-content;
  background: #F8F8F8;
  border-radius: 12px;
  margin: 15px auto;
  padding: 35px 45px;
  font-size: 16px;
  font-weight: 500;
  color: var(--800);
  line-height: 170%;
  text-align: left;
`;

export const MatchBox = styled.div`
  width: 310px;
  height: fit-content;
  background: #F8F8F8;
  border-radius: 12px;
  margin: 15px auto;
  padding: 35px 45px;
  font-size: 16px;
  font-weight: 500;
  color: var(--800);
  line-height: 170%;
`;

export const MatchWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: 30px;
`;

export const MatchTitle = styled.div`
  color: var(--Gray800, #2A2A2A);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;

export const MatchText = styled.div`
  color: var(--Gray900, #111);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;

export const MatchImg = styled.img`
  //width: 100px;
  //height: 134px;
  width: 150px;
  height: 201px;
`

export const BottomBox = styled.div`
  //position: fixed;
  margin: 50px 0 0 0;
  height: 200px;
  width: 720px;
  bottom: 0;
  background-color: #FFFFFF;
  padding: 20px 0 0 0;
  @media all and (max-width: 720px) {
    width: 100%;
  }
`;

export const BottomBoxText = styled.div`
  font-family: Pretendard,sans-serif;
  //color: var(--800);
  color: #2A2A2A;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 10px 0;
`;

export const ButtonWrapper = styled.div`

`;

export const AppButton = styled.button`
  width: 350px;
  height: 50px;
  //background-color: var(--900);
  background-color: #111;
  color: #FFFFFF;
  border-radius: 12px;
  display: block;
  border-style: none;
  margin: 10px auto 30px auto;
  font-family: Pretendard,sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const InstaButton = styled.button`
  width: 350px;
  height: 50px;
  //background-color: var(--700);
  background-color: #777;
  color: #FFFFFF;
  display: block;
  border-radius: 12px;
  border-style: none;
  margin: 10px auto 0 auto;
  font-family: Pretendard,sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;