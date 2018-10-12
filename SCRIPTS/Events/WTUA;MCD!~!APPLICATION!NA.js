if(wfTask == "Application Review" && matches(wfStatus,"Accepted","Incomplete Notice 1")){
	if(doCreateRefLP()){
		createRefLicProfFromLicProfMotorCarrier();
	}
}

if((wfTask == "Compliance Review" && wfStatus == "Compliance Approved") || (wfTask == "Certification" && wfStatus == "Approved/Fees Due")){
	assessDecalFee();
	
	var wfsdJs = new Date(workflowStatusDate) 
	var monthNum = wfsdJs.getMonth() +1;
	if(matches(monthNum,10,11,12)){
		var anyrdf = assessNextYearRenewalDecalFees();
		logDebug("anyrdf: "+anyrdf);
		if(anyrdf){
			logDebug("Decal and Renewal Fees successfully updated on application");
		}
	}
}

if(wfTask == "Certification" && wfStatus == "Issued"){
	updateRefLpFromTransLp();
	createCertOfAuth();
}