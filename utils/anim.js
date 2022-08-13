export const animScrollProps = {
  animInitial: { translateY: 20, opacity: 0 },
  animTransition: { duration: 0.5, ease: "easeOut" },
  animWhileInView: { translateY: 0, opacity: 1 },
  animViewport: { once: true, margin: "-150px" },
};
