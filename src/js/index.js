function toggleAnimation(btn) {
  const bodyClassList = document.querySelector("body").classList;
  bodyClassList.toggle("animation-disabled");
  btn.innerText = `${
    bodyClassList.contains("animation-disabled") ? "Play" : "Pause"
  } animation`;
}
