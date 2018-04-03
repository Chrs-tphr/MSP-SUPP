////Commented out for testing purposes
//if(publicUser){
//	var pCvedNum = parentCapId.getCustomID();
//	logDebug("pCvedNum: "+pCvedNum);
//	
//	var dupVINCheck = queryConflictVIN(pCvedNum);
//}else{
//	showDebug = true;
//	showMessage = true;
//	logDebug("running asb in AA, checking for duplicate vin's");
//	var dupVINCheck = queryConflictVIN();
//}
//
//if(dupVINCheck.isIssue){
//	cancel = true;
//	showMessage = true;
//	comment(dupVINCheck.issueMessage.join("\n<br>"));
//}


validateCapLP();