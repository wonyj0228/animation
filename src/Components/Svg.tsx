import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Logo = styled.svg`
  width: 300px;
  height: 300px;
`;

const Path = styled(motion.path)`
  stroke: rgba(255, 255, 255, 0.8);
  stroke-width: 0.1px;
`;

const Variant: Variants = {
  start: {
    fill: 'rgba(255,255,255,0)',
    pathLength: 0,
  },
  end: {
    fill: 'rgba(255,255,255,0.8)',
    pathLength: 1,
    // transition을 여기에 주면 모든 변화내용이 한번에 적용됨
  },
};

/**
 * Line drawing
 * svg 엘리먼트에 'pathLength', 'pathSpacing', 'pathOffset' 속성을 사용하여 Line drawing 애니메이션을 만들 수 있습니다.
 
 * Path
 * motion.path 컴포넌트는 세 가지 강력한 SVG path 속성인 pathLength, pathSpacing 및 pathOffset을 가지고 있습니다.
 * 수동 경로 측정이 필요 없이 모두 0과 1 사이의 값으로 설정됩니다.

 * Line drawing
 * 선 그리기 애니메이션은 pathLength, pathSpacing 및 pathOffset의 세 가지 특수 속성을 사용하여 많은 SVG 요소로 만들 수 있습니다.
 */

const Svg = () => {
  return (
    <Wrapper>
      <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <Path
          variants={Variant}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 3 },
            fill: { duration: 2, delay: 2 },
          }}
          d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55   c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135   c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9   c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242   c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247   c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"
        />
      </Logo>
    </Wrapper>
  );
};

export default Svg;
