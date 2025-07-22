const video = document.getElementById("video");
video.innerHTML = `
  <h2>단골 가요실</h2>
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/M7lc1UVf-VE"
    title="YouTube video" frameborder="0" allowfullscreen></iframe>
`;

const popular = document.getElementById("popular");
popular.innerHTML = `
  <h2>오늘의 인기글</h2>
  <ul>
    <li>그 시절 ‘셀프’ 했던 기억 있나요?</li>
    <li>나의 첫 과자</li>
    <li>군침질 추억 더울리기</li>
  </ul>
`;

const jukebox = document.getElementById("jukebox");
jukebox.innerHTML = `
  <h2>주크박스</h2>
  <p>오늘의 탑골곡: <strong>플라클라</strong></p>
`;

const gag = document.getElementById("gag");
gag.innerHTML = `
  <h2>짤방 유머방</h2>
  <img src="./assets/images/gag1.png" width="120" alt="짤1" />
  <img src="./assets/images/gag2.png" width="120" alt="짤2" />
`;

// scripts/main.js 에 추가
function showFortune() {
  const fortunes = [
    "따뜻한 차 한 잔과 함께 여유를 가져보세요.",
    "오늘은 오랜 친구와 연락해보면 좋겠어요!",
    "작은 웃음이 큰 복이 되어 돌아올 거예요.",
    "밖에 나가 햇살을 쬐면 좋은 일이 생깁니다.",
    "걱정하지 마세요. 당신 편이 많습니다.",
    "오늘은 쉬어가도 괜찮아요. 그럴 자격 있습니다.",
  ];

  const luckyNumbers = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 45 + 1)
  );

  const selectedFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  const result = `${selectedFortune} 🍀<br><strong>행운 숫자:</strong> ${luckyNumbers.join(
    ", "
  )}`;
  document.getElementById("fortuneText").innerHTML = result;
}
