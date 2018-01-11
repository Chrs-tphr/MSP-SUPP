include("INCLUDES_LICENSES");

showDebug = 1;

logDebug("Start ASA;MCD!~!Renewal!NA 3.0");

var authCapId = getParentLicenseCapID(capId);

prepareAppForRenewal();
assessRenewalDecalFee();

if(authCapId){
	assessRenewalLateFees(authCapId);
}

if(feeExists("RENEWAL") == false){
	updateFee("RENEWAL","MCD_AUTH_RENEW","FINAL",1,"Y");
}

logDebug("End ASA;MCD!~!Renewal!NA 3.0");