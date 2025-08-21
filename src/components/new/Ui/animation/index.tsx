import { ReactNode } from "react";
import { useSpring, animated } from "react-spring";

type Props = {
  children: ReactNode;
};

export default function AnimatedWrapper({ children }: Props) {
  const props = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 40 },
    delay: 250,
  });
  return (
    <animated.div style={props} className="root">
      {children}
    </animated.div>
  );
}
