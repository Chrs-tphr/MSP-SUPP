if(AInfo["Update Authority Status"] == "CHECKED"){
	updateAppStatus(AInfo["New Authority Status"]);
}

if(AInfo["Update Expiration"] == "CHECKED"){
	editParentExpiration(AInfo["New Expiration Status"],"12/31/"+AInfo["New Expiration Year"]);
}