import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/**
 *
 * MotionValue <string | number>
 * : 애니메이션 값의 상태(state)와 속도(velocity)를 추적한다
 * : React state가 아니기 때문에 value값이 바뀌어도 리랜더링이 발생하진 않는다
 *
 * - useMotionValue 후크로 MotionValues를 생성할 수 있음
 * - style에 추적하고 싶은 값을 넣어서 useMotionValue로 연결 지으면, 이벤트 관리가 가능함
 *
 * 1. get : MotionValue값을 가져옴
 * 2. set : MotionValue값을 세팅함
 */

/**
 *
 *  UseTransForm (입력값, 입력값범위, 결과값범위)
 * : MotionValue와 연결해 입력값에 맞는 결과값으로 변환하는 훅
 * : 입력값 범위와 결과값 범위를 맵핑해 변환한다.
 */

/**
 *
 *  useScroll
 * : scroll과 관련된 값을 얻을 수 있음
 * : {scrollX,scrollY, scrollXProgress, scrollYProgress} = useScroll()
 *
 * scrollX, scrollY : 현재 스크롤 위치
 * scrollX Progress : 0부터 1까지 중 스크롤 진행상황
 */

const MotionValue = () => {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-400, 400], [-360, 360]);
  const gradient = useTransform(
    x,
    [-500, 0, 500],
    [
      'linear-gradient(135deg, #50ebe6, #4521f6)',
      'linear-gradient(135deg, #e09, #d0e)',
      'linear-gradient(135deg, #50eb72, #cff621)',
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box drag="x" dragSnapToOrigin style={{ x, rotateZ, scale }} />
    </Wrapper>
  );
};

export default MotionValue;
