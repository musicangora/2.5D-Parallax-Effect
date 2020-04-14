# 2.5D Prallax Effect

## 🔨 作ったもの

Vannila JS と CSS でパララックス表現を作成

## ✊ ポイント

```JS
function parallax(element, distance, speed) {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
  parallax("header", window.scrollY, 1);
  parallax(".small-rose", window.scrollY, 0.4);
  parallax(".big-rose", window.scrollY, 0.2);
});
```

スクロール量を表す`window.scrollY`分`translateY()`で移動させるだけ

視差表現はスクロール量を変えてるだけ、超シンプル

## 👍 学んだこと

- CSS で好きな位置に配置するときは、`position: absolute`と`transform: translate()`を組み合わせると良い感じ

- `min-height`は最低でも指定した分の高さを確保してくれる

## 🔗 参考

[![](https://img.youtube.com/vi/BfEQ1qgYsts/0.jpg)](https://www.youtube.com/watch?v=BfEQ1qgYsts)

[Youtube](https://www.youtube.com/watch?v=BfEQ1qgYsts)
