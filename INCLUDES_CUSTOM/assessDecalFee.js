function assessDecalFee() {
	//Application for Authority Approval date
	approvDate = getStatusDateinTaskHistory("Compliance Review", "Compliance Approved");
	logDebug("approvDate: "+approvDate);

	if (approvDate != null) {
		var approvDateYear = 1900 + approvDate.getYear();
		logDebug("approvDate: "+approvDate);
		var approvJSDate = new Date((approvDate.getMonth() +1) + "/" + approvDate.getDay() + "/" + approvDateYear);
		logDebug("approvDateYear: "+approvDateYear);
	}
	//Update Equipment List Approved - Update Fees date
	updateFeesDate = getStatusDateinTaskHistory("Application Review", "Approved - Update Fees");
	logDebug("updateFeesDate: "+updateFeesDate);
	
	if (updateFeesDate != null) {
		var updateFeesYear = 1900 + updateFeesDate.getYear();
		logDebug("updateFeesYear: "+updateFeesYear);
		var updateFeesJSDate = new Date((updateFeesDate.getMonth() +1) + "/" + updateFeesDate.getDay() + "/" + updateFeesYear);
		logDebug("updateFeesJSDate: "+updateFeesJSDate);
	}
	//Update Equipment List ASIT submit
	/*
	if (todayDate != null) {
		var todayDateYear = 1900 + todayDate.getYear();
		var todayDateJSDate = new Date((todayDate.getMonth() +1) + "/" + todayDate.getDay() + "/" + todayDateYear);
	}
	*/
	//set $50 fee date range for Application for Authority
	startJSDate = new Date("06/30/" + approvDateYear);
	endJSDate = new Date("10/31/" + approvDateYear);
	logDebug("startJSDate: "+startJSDate);
	logDebug("endJSDate: "+endJSDate);
	//set $50 fee date range for Update Equipment List
	startJSDate2 = new Date("06/30/" + updateFeesYear);
	endJSDate2 = new Date("10/31/" + updateFeesYear);
	logDebug("startJSDate2: "+startJSDate2);
	logDebug("endJSDate2: "+endJSDate2);
	//set $50 fee date range for Update Equipment List ACA
	/*
	startJSDate3 = new Date("06/30/" + todayDateYear);
	endJSDate3 = new Date("10/31/" + todayDateYear);
	*/
	feeAmt = 0;
	equipTable = loadASITable("EQUIPMENT LIST");

	if ((approvJSDate > startJSDate && approvJSDate < endJSDate) || (updateFeesJSDate > startJSDate2 && updateFeesJSDate < endJSDate2)) {
		feeAmt = ( sumASITColumn(equipTable, "Plate Fee", "EXCLUDE", "Equipment Use", "Household Goods", "INCLUDE", "Vehicle Action", "Add Vehicle") * 0.5 ) + 
			sumASITColumn(equipTable, "Plate Fee", "INCLUDE", "Equipment Use", "Household Goods", "INCLUDE", "Vehicle Action", "Add Vehicle");
		logDebug("If Statement Fee Amount: "+feeAmt);
	}
	else {
		feeAmt = sumASITColumn(equipTable, "Plate Fee", "INCLUDE", "Vehicle Action", "Add Vehicle");
		logDebug("Else Statement Fee Amount: "+feeAmt);
	}
	if ((feeAmt > 0) && (approvDate != null)) {
		updateFee("DECAL", "MCD_AUTH_APP", "FINAL", feeAmt, "N");
		logDebug("If Statement Update Fee #1: "+updateFee);
	}
	if ((feeAmt > 0) && (updateFeesDate != null)) {
		updateFee("DECAL", "MCD_EQUIP", "FINAL", feeAmt, "N");
		logDebug("If Statement Update Fee #2: "+updateFee);
	}
}