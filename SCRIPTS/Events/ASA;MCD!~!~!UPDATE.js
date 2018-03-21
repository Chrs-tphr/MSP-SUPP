if(!parentCapId){
	logDebug("parentCapId is not defined, unable to update Certificate of Authority");
}else{
	if(AInfo["Update Authority Status"] == "CHECKED"){
		updateAppStatus(AInfo["New Authority Status"]);
	}
	if(AInfo["Update Expiration"] == "CHECKED"){
		editParentExpiration(AInfo["New Expiration Status"],"12/31/"+AInfo["New Expiration Year"]);
	}
}