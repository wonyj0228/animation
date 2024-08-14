import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/**
 * Layout
 * boolean | "position" | "size"
 *
 * layout이 props로 적용된 컴포넌트는 css 변경 시 자동으로 애니메이션을 적용한다
 * 변경의 원인이 무엇이든 상관없이 애니메이션 자체는 최대 성능을 가지며 수행된다.
 *
 */

const Layout = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
      <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
    </Wrapper>
  );
};

export default Layout;
