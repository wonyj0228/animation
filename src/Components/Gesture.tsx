import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { scale: 1, borderRadius: '100px' },
  drag: {
    backgroundColor: '#3a0ca3',
    transition: {
      duration: 1,
    },
  },
};

/**
 * dragConstraints
 * : 허용된 드래그 가능 영역에 제약 조건을 적용한다.
 * : 허용 가능한 가장자리 거리를 정의할 수 있음. px사용
 * : ref로 element내로 제한할 수도 있음
 
 * dragSnapToOrigin: boolean
 * true인 경우 드래그 가능한 요소는 드래그를 놓을 때, 원점으로 다시 애니메이션

 * dragElastic: DragElastic
 * 외부 제약 조건에서 허용되는 이동 정도. 0 = 움직임 없음, 1 = 전체 움직임. 
 * 움직임을 비활성화하기 위해 false로도 설정 가능
 */

const Gesture = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          //   dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={0.5}
          variants={boxVariants}
          whileDrag="drag"
          whileHover="hover"
          whileTap="tap"
        />
      </BiggerBox>
    </Wrapper>
  );
};

export default Gesture;
