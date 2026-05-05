// Optional enhancement: speed changes on mouse move

const lines = document.querySelectorAll(".line");

document.addEventListener("mousemove", (e) => {
  const speed = (e.clientX / window.innerWidth) * 10;

  lines.forEach((line) => {
    line.style.animationDuration = `${6 + speed}s`;
  });
});