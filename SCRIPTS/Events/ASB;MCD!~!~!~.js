logDebug("In ASB Event script");
var pcid = aa.cap.getParentCapID();
logDebug("pcid: "+pcid);
cancel = true;
showMessage = true;

/*

var dupVINCheck = queryConflictVIN();
if(dupVINCheck.isIssue){
	cancel = true;
	showMessage = true;
	comment(dupVINCheck.issueMessage.join("\n<br>"));
}

*/