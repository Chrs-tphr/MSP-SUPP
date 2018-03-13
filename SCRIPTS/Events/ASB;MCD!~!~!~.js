var capModelInited = aa.env.getValue("CAP_MODEL_INITED");
logDebug("capModelInited: "+capModelInited);

var pCvedNum = parentCapId.getCustomID();
logDebug("pCvedNum: "+pCvedNum);

var dupVINCheck = queryConflictVIN(pCvedNum);
if(dupVINCheck.isIssue){
	cancel = true;
	showMessage = true;
	comment(dupVINCheck.issueMessage.join("\n<br>"));
}

cancel = true;
showMessage = true;