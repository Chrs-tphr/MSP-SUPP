if(!publicUser && !matches(appTypeArray[2],"Application","Renewal")){
	updateRelationshipToAuthority();
}

if (AInfo["Dismiss Incomplete Application"] == "CHECKED")
{
	
	updateAppStatus("INCOMPLETE DISMISSAL","This is the test for the dismissal records."); // Unique status and comments
	closeWorkflow();
	var ifca = getInvoicedFeeCodes(capId);
	for(i in ifca){
		voidRemoveFees(ifca[i]);
	}
	
}