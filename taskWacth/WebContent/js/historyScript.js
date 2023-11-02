/**
 *
 */
document.addEventListener('DOMContentLoaded', function() {
  let elapsedTimeElement = document.getElementById("elapsedTimeValue");

  // Cookieから経過時間を読み込み
  const elapsedTimeString = getCookie("elapsedTime");
  if (elapsedTimeString) {
    elapsedTimeElement.textContent = elapsedTimeString;
  }
});

// Cookieから指定した名前の値を取得する関数
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
