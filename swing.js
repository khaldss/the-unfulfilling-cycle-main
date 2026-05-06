const middleclock = document.getElementById("middleclock");

const maxAngle = 44;
const speed = 0.00202;
const bobAmount = 18;

function animate(timestamp) {
  const angle = Math.sin(timestamp * speed) * maxAngle;
  const bob = Math.abs(Math.cos(timestamp * speed)) * bobAmount;

  middleclock.style.transform = `translateX(-50%) translateY(${bob}px) rotate(${angle}deg)`;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
