logDebug("In ASB Event script");
var pcid = capModel.getParentCapID();
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