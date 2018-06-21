var authCapId = getParentLicenseCapID(capId);
		
		convertRenewalToReal();
		
		logDebug("Before public user")
		if (!publicUser)
		{
			logDebug("After PUBLIC USER")
			assessRenewalDecalFee();
			if(authCapId)
				{
				assessRenewalLateFees(authCapId);
				logDebug("After LATE FEES")
				}

		}
		//
		//if(feeExists("RENEWAL") == false){
		//updateFee("RENEWAL","MCD_AUTH_RENEW","FINAL",1,"Y");
		//}


