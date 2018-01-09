logDebug(" --- Start ASIUB 3.0 ---");

var dupVINCheck = queryConflictVIN();
if(dupVINCheck.isIssue){
	cancel = true;
	showMessage = true;
	logMessage(dupVINCheck.issueMessage.join("\n<br>"));
}

logDebug(" --- End ASIUB 3.0 ---");