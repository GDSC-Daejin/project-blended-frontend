import results from './results.json';
import {
  AppButton,
  BottomBox, ButtonWrapper,
  InstaButton,
  ResultBox,
  ResultImg,
  ResultSubText,
  ResultText,
  ResultTitle,
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


  return (
    <div>
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
          • 창의적이며 전략적인 사고가 빠른 편이에요
        </div>
        <div>
          • 창의적이며 전략적인 사고가 빠른 편이에요
        </div>
        <div>
          • 창의적이며 전략적인 사고가 빠른 편이에요
        </div>
        <div>
          • 창의적이며 전략적인 사고가 빠른 편이에요
        </div>
        <div>
          • 창의적이며 전략적인 사고가 빠른 편이에요
        </div>
        <div>
          • 창의적이며 전략적인 사고가 빠른 편이에요
        </div>
        <div>
          • 창의적이며 전략적인 사고가 빠른 편이에요
        </div>
        <div>
          • 창의적이며 전략적인 사고가 빠른 편이에요
        </div>
      </ResultBox>
      <BottomBox>
        <div>
          이 술에 대해 더 알아보고 싶어요!
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
    </div>
  );
};

export default MyComponent;
