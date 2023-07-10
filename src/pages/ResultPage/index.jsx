import results from './results.json';
import { ResultBox, ResultImg, ResultSubText, ResultText, ResultTitle } from './style.js';
import w1 from './../../../assets/result/위스키.png';

// eslint-disable-next-line react/prop-types
const MyComponent = ({ data }) => {

  const answer = [ ...data];
  console.log(answer);

  const result = {};
  for(let i = 0; i<answer.length; i++) {
    answer[i].forEach((x) => {
      result[x] = (result[x] || 0)+1;
    });
  }
  console.log(result);

  const newArray = Object.keys(result).filter(key => result[key] >= 2);
  console.log(newArray);

  return (
    <div>
      <ResultTitle>
        당신에게 잘 맞는 술은?
      </ResultTitle>
      <ResultSubText>
        🥃 풍부하고 복잡한 맛의 소유자 😛
      </ResultSubText>
      <ResultText>
        {newArray}
      </ResultText>
      <ResultText>
        위스키
      </ResultText>
      <ResultImg src={w1} alt='result_img' />
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
    </div>
  );
};

export default MyComponent;
