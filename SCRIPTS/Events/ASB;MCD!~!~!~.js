//Comment out until next comment for testing purposes
if(publicUser && (appMatch("MCD/*/Application/NA") || appMatch("MCD/*/Equipment List/NA"))){
	//do nothing
}else if(publicUser){
	var pCvedNum = parentCapId.getCustomID();
	logDebug("pCvedNum: "+pCvedNum);
	
	var dupVINCheck = queryConflictVIN(pCvedNum);
	
	if(dupVINCheck.isIssue){
		cancel = true;
		showMessage = true;
		comment(dupVINCheck.issueMessage.join("\n<br>"));
	}
}else{
	var dupVINCheck = queryConflictVIN();
	
	if(dupVINCheck.isIssue){
		cancel = true;
		showMessage = true;
		comment(dupVINCheck.issueMessage.join("\n<br>"));
	}
}

//For Accela testing purposes
//validateCapLP();