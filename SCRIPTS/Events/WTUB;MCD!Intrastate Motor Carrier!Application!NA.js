logDebug("Start WTUB App 3.0");

if(wfTask == "Certification" && wfStatus == "Issued"){
	activeVehicleCheck();
	populateDecalNumbers();
}

logDebug("End WTUB App 3.0");