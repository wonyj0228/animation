import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component에 Framer motion을 적용하는 방법
// styled(motion.element)
// styled component의 Extending Styled을 활용함
// 괄호 안의 component에 추가로 css를 입힘
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
`;

/**
 * Animation
 * Framer Motion의 애니메이션은 animate props 속성을 통해 제어된다<div className=""></div>
 *
 * 1. initial : boolean | Target | VariantLabels
 *  - 시작할 레이블의 배열
 *  - animate의 값으로 초기화하려면 false로 설정
 *
 * 2. Transition
 *  - 한 상태에서 다른 상태로 움직이는 방식을 정의
 *  - ex) Tween, Spring, Inertia
 */

const Basic = () => {
  return (
    <Wrapper>
      <Box
        transition={{ type: 'spring', bounce: 0.5, delay: 1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      ></Box>
    </Wrapper>
  );
};

export default Basic;
