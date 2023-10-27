<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>タスク!!!</title>
  </head>
  <body>
    <h1>タスク!!!</h1>
      <p> 現在の日付は: <span id="currentDate"></span> </p>
      <p> 現在の時刻は: <span id="currentTime"></span> </p>
      <p id="elapsedTime"> 経過時間: <span id="elapsedTimeValue">N/A</span> </p>

      <form action="TimeServlet" method="post">
      	<input type="submit" name="button" value="START" id="startButton">
       	<input type="submit" name="button" value="STOP" id="stopButton">
      </form>

      <script type="text/javascript" src="timeScript.js"></script>
  </body>
  </html>