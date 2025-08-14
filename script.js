let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

const params = new URLSearchParams(window.location.search);
let username = params.get("name");

// 限制用户名长度，避免页面样式崩坏
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

// 防止 `null` 变成 `"null"`
if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}

let clickCount = 0; // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
  "？？？你认真的嘛…",
  "要不再想想？",
  "不理你了奥~ ",
  "真的不喜欢我嘛…",
  "我emo了:(",
];

noButton.addEventListener("click", function () {
  clickCount++;

  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  let noOffset = clickCount * 25;
  noButton.style.transform = `translateX(${noOffset}px)`;

  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  if (clickCount === 1) mainImage.src = "shocked.png"; // 震惊
  if (clickCount === 2) mainImage.src = "think.png"; // 思考
  if (clickCount === 3) mainImage.src = "angry.png"; // 生气
  if (clickCount === 4) mainImage.src = "emo.png"; // emo
  if (clickCount >= 5) mainImage.src = "emo.png"; // 之后一直emo
});

const loveTest = `!!嘿嘿，蛋卷也喜欢你!! ( >᎑<)♡︎ᐝ  ${
  username ? `${safeUsername}  ♡︎ᐝ(>᎑< )` : ""
}`;

yesButton.addEventListener("click", function () {
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

  document.querySelector(".yes-text").innerText = loveTest;
  document.body.style.overflow = "hidden";
});


