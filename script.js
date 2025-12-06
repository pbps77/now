// 년월 시분초 요일을 업데이트하는 간단한 시계
(function(){
  const $date = document.getElementById('date');
  const $time = document.getElementById('time');
  const $weekday = document.getElementById('weekday');

  const two = v => v.toString().padStart(2,'0');
  const weekdayNames = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

  function update(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const h = two(now.getHours());
    const m = two(now.getMinutes());
    const s = two(now.getSeconds());
    const wk = weekdayNames[now.getDay()];

    // 예: 2025년 12월 04일
    $date.textContent = `${year}년 ${month}월 ${two(day)}일`;
    // 예: 14:05:09
    $time.textContent = `${h}:${m}:${s}`;
    // 예: 목요일
    $weekday.textContent = wk;
  }

  // 초 단위로 갱신하되 페이지가 보이지 않을 때 속도를 늦추는 것을 브라우저에 위임
  update();
  setInterval(update, 1000);
})();
