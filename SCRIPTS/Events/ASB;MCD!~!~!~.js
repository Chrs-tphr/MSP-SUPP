var dupVINCheck = queryConflictVIN();
if(dupVINCheck.isIssue){
	cancel = true;
	showMessage = true;
	message(dupVINCheck.issueMessage.join("\n<br>"));
}