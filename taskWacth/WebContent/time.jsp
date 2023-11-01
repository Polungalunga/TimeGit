<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="css/style.css?ver=1.0">
<title>タスク!!!</title>
</head>
<body>
	<div class="container">
		<a href="history.jsp" >
			<img alt="履歴アイコン" src="images/history.png" class="history-icon">
		</a>
		<div class="clock">
			<p>現在の日付は: <span id="currentDate"></span></p>
			<p>現在の時刻は: <span id="currentTime"></span></p>
			<p id="elapsedTime">経過時間: <span id="elapsedTimeValue">N/A</span></p>
		</div>
		<form action="TimeServlet" method="post">
			<input type="submit" name="button" value="START" id="startButton">
			<input type="submit" name="button" value="STOP" id="stopButton">
		</form>
	</div>

	<script type="text/javascript" src="js/timeScript.js"></script>
</body>
</html>