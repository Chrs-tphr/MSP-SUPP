logDebug("parentCapId::: "+parentCapId);
viewObj(parentCapId);
//var cvedNum = parentCapId.getAltID();

var dupVINCheck = queryConflictVIN();
if(dupVINCheck.isIssue){
	cancel = true;
	showMessage = true;
	comment(dupVINCheck.issueMessage.join("\n<br>"));
}