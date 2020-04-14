// 要素を動かすには、対象、動く距離、動く速さが必要
function parallax(element, distance, speed) {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
  parallax("header", window.scrollY, 1);
  parallax(".small-rose", window.scrollY, 0.4);
  parallax(".big-rose", window.scrollY, 0.2);
});
