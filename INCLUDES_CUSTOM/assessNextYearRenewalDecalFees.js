function assessNextYearRenewalDecalFees(){
	var rtnVal = false;
	updateFee("RENEWAL", "MCD_AUTH_RENEW", "FINAL", 1, "N");
	feeAmt = 0;
	equipTable = loadASITable("EQUIPMENT LIST");
	feeAmt = sumASITColumn(equipTable, "Plate Fee", "INCLUDE", "Vehicle Action", "Add Vehicle");
	logDebug("Next Year Decal Fee Amount: "+feeAmt);
	if ((feeAmt > 0)) {
		updateFee("AUTORNWDECAL", "MCD_AUTH_APP", "FINAL", feeAmt, "N");
		rtnVal = true;
	}
	return rtnVal;
}
