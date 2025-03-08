import { motion } from "framer-motion";
import NarrowIcon from "../../assets/narrow.svg";

export default function Narrow() {
  return (
    <div className="flex pt-5 pb-5 bg-black justify-center">
      <motion.img
        src={NarrowIcon}
        alt="Narrow Icon"
        style={{ height: "30px" }}
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
