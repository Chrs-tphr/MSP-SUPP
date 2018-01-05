var dupVINCheck = queryConflictVIN();
if(dupVINCheck.isIssue){
	cancel = true;
	showMessage = true;
	logMessage(dupVINCheck.issueMessage.join("\n<br>"));
}