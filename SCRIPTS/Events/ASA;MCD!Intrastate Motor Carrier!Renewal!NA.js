eval( aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput().getScriptByPK(aa.getServiceProviderCode(),"INCLUDES_LICENSES","ADMIN").getScriptText() + "");

var authCapId = getParentLicenseCapID(capId);
prepareAppForRenewal();
assessRenewalDecalFee();

if(authCapId){
	assessRenewalLateFees(authCapId);
}

if(feeExists("RENEWAL") == false){
	updateFee("RENEWAL","MCD_AUTH_RENEW","FINAL",1,"Y");
}