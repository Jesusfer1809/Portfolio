export const animScrollProps = {
  animInitial: { translateY: 20, opacity: 0 },
  animTransition: { duration: 0.5, ease: "easeOut" },
  animWhileInView: { translateY: 0, opacity: 1 },
  animViewport: { once: true, margin: "-150px" },
};

export const fadeVariant = () => ({
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
