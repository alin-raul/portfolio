import { motion } from "framer-motion";

type LightProps = {
  fill: string;
};

const MovingLightShade: React.FC<LightProps> = ({ fill }) => {
  // Animation variants for the path
  const pathVariants = {
    animate: {
      d: [
        // Original position
        `M 1 1 C 573 10 659 16 1062 152 C 769 108 541 111 0.401 169.097 Z`,
        // Right-up position
        `M 1 1 C 570 51 661 67 1071 5 C 816 134 544 173 0.401 169.097 Z`,
        // Left-down position
        `M 1 1 C 573 10 659 16 1062 152 C 769 108 541 111 0.401 169.097 Z`,
      ],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full relative">
      <div className="absolute bottom-0 left-0 w-[100rem] h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1085 184"
          style={{
            animation: "float 2s ease-in-out infinite",
            transformOrigin: "left center",
            filter: "url(#horizontalBlur)",
          }}
        >
          <defs>
            {/* Fixed blur filter - adjusted stdDeviation */}
            <filter
              id="horizontalBlur"
              x="-50%"
              y="-50%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="300 40" />
            </filter>
          </defs>

          <motion.path
            variants={pathVariants}
            initial="initial"
            animate="animate"
            fill={fill}
          />
        </svg>
      </div>
    </div>
  );
};

export default MovingLightShade;
