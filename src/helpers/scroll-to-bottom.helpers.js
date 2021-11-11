const scrollToBottom = () =>
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });

export default scrollToBottom;
