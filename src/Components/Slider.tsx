import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  entry: (back: boolean) => {
    return {
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => {
    return {
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
      },
    };
  },
};

/**
 * AnimatePresence
 * 자식 컴포넌트의 key를 변경하여 슬라이드쇼와 같은 컴포넌트를 쉽게 만들 수 있다.
 *
 * Custom
 * 각 애니메이션 컴포넌트에 대해 동적 Variants를 적용할 수 있는 사용자 지정 데이터
 * AnimatePresence와 적용하고싶은 컴포넌트의 Props로 custom을 넘겨줘야 함
 *
 * Variants에서 callback fnc으로 사용가능
 */

const Slider = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPls = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPls = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  // key를 바꾸면 React js는 다른 component로 인식해 re-render 발생시킴
  // 10개의 box를 그리는 것 보다 훨씬 효율적
  return (
    <Wrapper>
      <AnimatePresence mode="wait" custom={back}>
        <Box
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPls}>prev</button>
      <button onClick={nextPls}>next</button>
    </Wrapper>
  );
};
export default Slider;
