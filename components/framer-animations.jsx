// Animation variants for consistent use across the site
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
}

export const slideUp = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
}

export const slideInLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    x: -60,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
}

export const slideInRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    x: 60,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
}

export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
}

export const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
}

export const cardHoverVariants = {
  initial: {
    y: 0,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
  },
  hover: {
    y: -10,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

export const imageScaleVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.5 },
  },
}

export const loadingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

export const loadingCircleVariants = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: [0, -15, 0],
    opacity: 1,
    transition: {
      y: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

export const loadingTextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
}

export const progressVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: { duration: 5, ease: "linear" },
  },
}
