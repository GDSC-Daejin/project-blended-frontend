import results from './results.json';
import {
  AppButton,
  BottomBox, ButtonWrapper, Container,
  InstaButton, MatchBox, MatchImg, MatchText, MatchTitle, MatchWrapper,
  ResultBox,
  ResultImg,
  ResultSubText,
  ResultText,
  ResultTitle, Wrapper,
} from './style.js';

// eslint-disable-next-line react/prop-types
const MyComponent = ({ data }) => {

  const answer = [...data];
  // console.log(answer);

  const result = {};
  for (let i = 0; i < answer.length; i++) {
    answer[i].forEach((x) => {
      result[x] = (result[x] || 0) + 1;
    });
  }

  const newArray = Object.keys(result).filter(key => result[key] >= 2);

  // 여러개의 배열 값을 하나로 합치기
  const finalMBTI = newArray.join('');

  // 결과 값에 따른 술(liquor), 설명(text), 이미지(img)
  const mbtiLiquor = results[finalMBTI].liquor;
  const mbtiText = results[finalMBTI].text;
  const mbtiImg = results[finalMBTI].img;
  const mbtiContent1 = results[finalMBTI].content1;
  const mbtiContent2 = results[finalMBTI].content2;
  const mbtiContent3 = results[finalMBTI].content3;
  const mbtiContent4 = results[finalMBTI].content4;
  const mbtiMatch1Liquor = results[finalMBTI].match1;
  const mbtiMatch2Liquor = results[finalMBTI].match2;
  const mbtiMatch1Img = results[finalMBTI].match1Img;
  const mbtiMatch2Img = results[finalMBTI].match2Img;


  return (
    <Container>
      <Wrapper>
      <ResultTitle>
        당신에게 잘 맞는 술은?
      </ResultTitle>
      <ResultSubText>
        {mbtiText}
      </ResultSubText>
      <ResultText>
        {mbtiLiquor}
      </ResultText>
      <ResultImg src={mbtiImg} alt="img"/>
      <ResultBox>
        <div>
          • {mbtiContent1}
        </div>
        <div>
          • {mbtiContent2}
        </div>
        <div>
          • {mbtiContent3}
        </div>
        <div>
          • {mbtiContent4}
        </div>
      </ResultBox>
        <MatchBox>
          <MatchTitle>
          나랑 찰떡 궁합 친구들
          </MatchTitle>
          <MatchWrapper>
            <div>
              <MatchImg src={mbtiMatch1Img} alt="img"/>
              <MatchText>
                {mbtiMatch1Liquor}
              </MatchText>
            </div>
            <div>
              <MatchImg src={mbtiMatch2Img} alt="img"/>
              <MatchText>
                {mbtiMatch2Liquor}
              </MatchText>
            </div>
          </MatchWrapper>
        </MatchBox>
      <BottomBox>
        <div>
         찐 MBTI에 대해 궁금하다면?
        </div>
        <ButtonWrapper>
          <AppButton>
            블렌디드에서 구경하기
          </AppButton>
          <InstaButton>
            인스타그램 스토리 공유
          </InstaButton>
        </ButtonWrapper>
      </BottomBox>
      </Wrapper>
    </Container>
  );
};

export default MyComponent;
