logDebug("In ASB Event script");

var capModel = aa.env.getValue("CapModel");
logDebug("capModel: "+capModel);

targetCapId = capModel.getCapID();
logDebug("targetCapId: "+targetCapId);

//var parentCapId = capModel.getParentCapID();
var parentCapId = getParent(targetCapId);
logDebug("parentCapId: "+parentCapId);










//var thisCapId = aa.cap.getCapID();
logDebug("CAELienseNumber: "+CAELienseNumber);

//var pcid = capModel.getParentCapID();
//logDebug("pcid: "+pcid);

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