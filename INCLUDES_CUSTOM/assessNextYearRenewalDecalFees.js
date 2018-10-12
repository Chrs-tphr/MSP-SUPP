function assessNextYearRenewalDecalFees(){
	var rtnVal = false;
	//Application for Authority Approval date
	approvDate = getStatusDateinTaskHistory("Compliance Review", "Compliance Approved");
	logDebug("approvDate: "+approvDate);

	if (approvDate != null) {
		var approvDateYear = 1900 + approvDate.getYear();
		logDebug("approvDate: "+approvDate);
		var approvJSDate = new Date((approvDate.getMonth() +1) + "/" + approvDate.getDay() + "/" + approvDateYear);
		logDebug("approvDateYear: "+approvDateYear);
		//was app approved during October, November, December
		var apprMonth = approvDate.getMonth() +1;
		if(matches(apprMonth,10,11,12)){
			//add renewal fee
			updateFee("RENEWAL", "MCD_AUTH_RENEW", "FINAL", 1, "N");
			
			feeAmt = 0;
			equipTable = loadASITable("EQUIPMENT LIST");

			feeAmt = sumASITColumn(equipTable, "Plate Fee", "INCLUDE", "Vehicle Action", "Add Vehicle");
			logDebug("Next Year Decal Fee Amount: "+feeAmt);
			
			if ((feeAmt > 0)) {
				updateFee("AUTORNWDECAL", "MCD_AUTH_APP", "FINAL", feeAmt, "N");
				rtnVal = true;
			}
		}
	}
	return rtnVal;
}
