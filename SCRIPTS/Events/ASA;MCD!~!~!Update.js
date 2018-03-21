if(!parentCapId){
	
	logDebug("No parent record found, cannot make updates");
	
}else{
	
	if(AInfo["Update Authority Status"] == "CHECKED"){
		updateAppStatus(AInfo["New Authority Status"],"Updated by EMSE");
	}

	if(AInfo["Update Expiration Status"] == "CHECKED"){
		editParentExpiration(AInfo["New Expiration Status"],AInfo["Expiration Date"]);
	}
}