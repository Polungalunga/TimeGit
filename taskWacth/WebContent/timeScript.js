/**
 *
 */
let startDate;
let endDate;
let isTiming = false;
// 経過時間を追跡
let elapsedMilliseconds = 0;
let elapsedTimeElement = document.getElementById("elapsedTimeValue");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");


function updateDateTime() {
	document.addEventListener('DOMContentLoaded', function() {
		elapsedTimeElement = document.getElementById("elapsedTimeValue");
		// STARTボタンのクリックハンドラ
		startButton.addEventListener("click", function() {
			if(!isTiming){
			startDate = new Date();
			endDate = null;
			elapsedMilliseconds = 0;
			elapsedTimeElement.textContent = "計測中…";
			startButton.disabled = true;
			stopButton.disabled = false;
			isTiming = true;
			}
		});
		// STOPボタンのクリックハンドラ
		stopButton.addEventListener("click", function() {
/*			if (startDate) {*/
			if (isTiming) {
				endDate = new Date();
				elapsedMilliseconds += endDate - startDate;
				let seconds = Math.floor(elapsedMilliseconds / 1000);
  				let hours = padZero(Math.floor(seconds / 3600));
  				let minutes = padZero(Math.floor((seconds % 3600) / 60));
  				seconds = padZero(seconds % 60);
  				elapsedTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
				startButton.disabled = false;
				stopButton.disabled = true;
				isTiming = false;
			}
		});
	})
};

 let currentDateElement = document.getElementById("currentDate");
 let currentTimeElement = document.getElementById("currentTime");

// 現在の日付と時刻の更新
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);
    month = padZero(month);
    day = padZero(day);

    let currentDate = year + '-' + month + '-' + day;
    let currentTime = hours + ':' + minutes + ':' + seconds;

    currentDateElement.textContent = currentDate;
    currentTimeElement.textContent = currentTime;
  };
// 0埋め関数
function padZero(value) {
	return value < 10 ? '0' + value : value;
}

setInterval(updateClock, 1000);
// ページ読み込み時に初期化
updateDateTime();