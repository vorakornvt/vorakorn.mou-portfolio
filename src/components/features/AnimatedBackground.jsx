import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 blur-sm -top-80 z--1 transform-gpu overflow-hidden sm:-top-0"
    >
      <motion.div
        initial={{ opacity: 0.3, x: "-50%" }}
        animate={{
          x: ["-50%", "-53%", "-55%", "-50%"],
          background: [
            "linear-gradient(to top right, #ff80b5, #9089fc)",
            "linear-gradient(to top right, #ff9a8b, #d0a1ff)",
            "linear-gradient(to top right, #ff80b5, #9089fc)",
          ],
        }}
        transition={{
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          background: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          clipPath: "circle(50% at 50% 50%)",
        }}
        className="relative left-[calc(50%-11rem)] aspect-4/4 w-[56.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(140%-30rem)] sm:w-[35.1875rem]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
              "linear-gradient(to top right, #FFC371, #FFB347, #FF9A8B)",
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(30%)] aspect-4/4 w-[46.125rem] -translate-x-1/2 opacity-50 sm:left-[calc(20%-30rem)] sm:w-[30.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
              "linear-gradient(to top right, #FFC371, #FFB347, #FF9A8B)",
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(30%)] aspect-4/4 w-[36.125rem] -translate-x-1/2 opacity-50 sm:left-[calc(75%-30rem)] sm:w-[19.1875rem]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #ff80b5, #9089fc)",
              "linear-gradient(to top right, #ff9a8b, #d0a1ff)",
              "linear-gradient(to top right, #ff80b5, #9089fc)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(30%)] aspect-4/4 w-[16.125rem] -translate-x-2/2 opacity-50 sm:left-[calc(60%-30rem)] sm:w-[10.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 h-full -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #ff80b5, #9089fc)",
              "linear-gradient(to top right, #ff9a8b, #d0a1ff)",
              "linear-gradient(to top right, #ff80b5, #9089fc)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(50%)] aspect-4/4 w-[6.125rem] -translate-x-2/2 opacity-50 sm:left-[calc(60%-30rem)] sm:w-[7.1875rem] sm:translate-y-90"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 h-full -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #ff80b5, #9089fc)",
              "linear-gradient(to top right, #ff9a8b, #d0a1ff)",
              "linear-gradient(to top right, #ff80b5, #9089fc)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(50%)] aspect-4/4 w-[6.125rem] -translate-x-2/2 opacity-50 sm:left-[calc(60%-30rem)] sm:w-[7.1875rem] sm:translate-y-90"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 h-full -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #ff80b5, #9089fc)",
              "linear-gradient(to top right, #ff9a8b, #d0a1ff)",
              "linear-gradient(to top right, #ff80b5, #9089fc)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(50%)] aspect-4/4 w-[6.125rem] -translate-x-2/2 opacity-50 sm:left-[calc(60%-30rem)] sm:w-[7.1875rem] sm:translate-y-90"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 h-full -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
              "linear-gradient(to top right, #FFC371, #FFB347, #FF9A8B)",
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(50%)] aspect-4/4 w-[6.125rem] -translate-x-2/2 opacity-50 sm:left-[calc(100%-30rem)] sm:w-[5.1875rem] sm:translate-y-120"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 h-full -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
              "linear-gradient(to top right, #FFC371, #FFB347, #FF9A8B)",
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(50%)] aspect-4/4 w-[6.125rem] -translate-x-2/2 opacity-50 sm:left-[calc(100%-30rem)] sm:w-[5.1875rem] sm:translate-y-120"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 h-full -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
              "linear-gradient(to top right, #FFC371, #FFB347, #FF9A8B)",
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(50%)] aspect-4/4 w-[6.125rem] -translate-x-2/2 opacity-50 sm:left-[calc(135%-30rem)] sm:w-[25.1875rem] sm:translate-y-30"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 h-full -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
              "linear-gradient(to top right, #FFC371, #FFB347, #FF9A8B)",
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(50%)] aspect-4/4 w-[6.125rem] -translate-x-2/2 opacity-50 sm:left-[calc(135%-30rem)] sm:w-[25.1875rem] sm:translate-y-30"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 h-full -top-40 z-0 transform-gpu overflow-hidden sm:-top-0"
      >
        <motion.div
          initial={{ opacity: 1, x: "50%" }}
          animate={{
            x: ["50%", "55%", "52%", "50%"],
            background: [
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
              "linear-gradient(to top right, #FFC371, #FFB347, #FF9A8B)",
              "linear-gradient(to top right, #FDB813, #FF9A8B, #FF6A88)",
            ],
          }}
          transition={{
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
          className="relative left-[calc(50%)] aspect-4/4 w-[6.125rem] -translate-x-2/2 opacity-50 sm:left-[calc(65%-30rem)] sm:w-[10.1875rem] sm:translate-y-100"
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
