import { motion } from "framer-motion";
import * as React from "react";
// import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";

const LogoMotion = ({ progress = 0, ...props }) => {
  const path = {
    initial: { pathLength: 0 },
    hover: {
      pathLength: 1,
      transition: { duration: 4, ease: "easeInOut" },
    },
    reset: {
      pathLength: 0,
      transition: { duration: 4, ease: "easeInOut" },
    },
  };

  return (
    <motion.svg
      initial='initial'
      animate='hover'
      whileHover='reset'
      id='logo'
      width='410'
      height='622'
      viewBox='0 0 410 622'
      fill={props.fill || "none"}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <motion.path
        d='M267.5 618H93C3.49987 618 3.49989 618 3.49988 550V434.5C3.5 352.5 77 368.266 192.5 368.5C342.735 368.805 406.5 316.5 406.5 181C406.5 45.5 353 3 192.5 3C69.4443 2.99999 19.4022 25.4729 6.11185 147.68C3.77436 169.174 10.1565 190.655 22.4285 208.455C34.1716 225.488 44.4361 240.376 59 261.5L121.5 106.5L192.5 261.5L267.5 106.5L317.5 261.5M267.5 618C373.804 619.518 406.5 600 406.5 507.5C406.5 425.5 369 398.5 267.5 398.5V618Z'
        stroke='black'
        variants={path}
        strokeWidth='8'
      />
    </motion.svg>
  );
};

export default LogoMotion;
