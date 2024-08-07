import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  place-self: center;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/**
 * Variants
 * : 컴포넌트가 가질 수 있는 미리 정의된 시각적 state
 *
 * - Object로 variants를 따로 정의해준다.
 * - Object의 key값 = variants의 Label임
 * - initial, animate와 같은 motion의 property에 variants label인 Variants의 key값을 string으로 입력
 *
 * ** 부모컴포넌트는 자식 컴포넌트에게 variants 변경사항을 반드시 상속한다.
 * ex) initial="start", animate="end" -> 자식컴포넌트에 작성하지 않아도 똑같은 속성을 가지고 있다.
 *
 *
 * Orchestration
 *
 * delayChildren : 자식컴포넌트의 애니메이션을 시작시점을 부모컴포넌트가 컨트롤 가능
 * staggerChildren : 하위 컴포넌트가 여러개일 때, 컴포넌트간 애니메이션 시차를 둘 수 있다. 시작시점을 지연시키는 것
 */

const boxVariants: Variants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants: Variants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Variant = () => {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
};

export default Variant;
