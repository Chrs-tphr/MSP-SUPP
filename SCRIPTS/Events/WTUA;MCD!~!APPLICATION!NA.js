if(wfTask == "Application Review" && matches(wfStatus,"Accepted","Incomplete Notice 1")){
	if(doCreateRefLP()){
		createRefLicProfFromLicProfMotorCarrier();
	}
}

if((wfTask == "Compliance Review" && wfStatus == "Compliance Approved") || (wfTask == "Certification" && wfStatus == "Approved/Fees Due")){
	assessDecalFee();
	
	if(wfDate != null)
		{
		logDebug ("wfDate = " +wfDate);
		wfDate = new Date(wfDate);
			var monthNum = wfDate.getMonth() +1;
			
			
			
			
			logDebug ("monthNum = " +monthNum);
		}
	else
		{
		logDebug ("WF DATE IS NULL");
		}
	if(matches(monthNum,10,11,12)){
		var anyrdf = assessNextYearRenewalDecalFees();
		if(anyrdf){
			logDebug("Next Year Decal and Renewal Fees successfully updated on application");
		}
	}
}

if(wfTask == "Certification" && wfStatus == "Issued"){
	updateRefLpFromTransLp();
	createCertOfAuth();
}