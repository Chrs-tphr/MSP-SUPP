//I don't think we need this functionality anymore, need to confirm.
var refLicObj = new licenseProfObject(LicenseModel.stateLicense, "Carrier");

if(refLicObj){
	var cied = refLicObj.getAttribute("Cargo Insurance Expiration Date");
	var pied = refLicObj.getAttribute("PL/PD Insurance Expiration Date");

	refLicObj.refLicModel.setBusinessLicExpDate(aa.date.parseDate(cied));
	refLicObj.refLicModel.setInsuranceExpDate(aa.date.parseDate(pied));

	refLicObj.updateRecord();
}else{
	logDebug("Could not get RefLP to update");
}