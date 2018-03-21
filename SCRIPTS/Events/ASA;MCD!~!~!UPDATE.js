var pCapId = getParent();
if(pCapId){
	updateAppStatus("Closed","EMSE");
	if(AInfo["Update Authority Status"] == "CHECKED"){
		updateAppStatus(AInfo["New Authority Status"],"EMSE",pCapId);
	}

	if(AInfo["Update Expiration"] == "CHECKED"){
		editParentExpiration(AInfo["New Expiration Status"],"12/31/"+AInfo["New Expiration Year"]);
	}
}else{
	showMessage = true;
	comment("Automated update failed, please log CVED# and report to IT.");
}

