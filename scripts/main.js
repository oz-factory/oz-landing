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
