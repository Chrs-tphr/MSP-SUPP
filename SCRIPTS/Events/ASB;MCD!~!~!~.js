if(publicUser){
	var pCvedNum = parentCapId.getCustomID();
	logDebug("pCvedNum: "+pCvedNum);
	
	var dupVINCheck = queryConflictVIN(pCvedNum);
}
else{
	var dupVINCheck = queryConflictVIN();
}

if(dupVINCheck.isIssue){
	cancel = true;
	showMessage = true;
	comment(dupVINCheck.issueMessage.join("\n<br>"));
}

cancel = true;
showMessage = true;