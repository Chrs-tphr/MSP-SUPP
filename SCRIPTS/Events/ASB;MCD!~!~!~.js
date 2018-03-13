function getParent(targetCapId) 
{
	// returns the capId object of the parent.  Assumes only one parent!
	//
	var getCapResult = aa.cap.getProjectParents(targetCapId,1);
	if (getCapResult.getSuccess())
	{
		var parentArray = getCapResult.getOutput();
		if (parentArray.length)
			return parentArray[0].getCapID();
		else
		{
			aa.print("**WARNING: GetParent found no project parent for this application");
			return false;
		}
	}
	else
	{ 
		aa.print("**WARNING: getting project parents:  " + getCapResult.getErrorMessage());
		return false;
	}
}

logDebug("In ASB Event script");

var capModel = aa.env.getValue("CapModel");
logDebug("capModel: "+capModel);

targetCapId = capModel.getCapID();
logDebug("targetCapId: "+targetCapId);

//var parentCapId = capModel.getParentCapID();
var parentCapId = getParent(targetCapId);
logDebug("parentCapId: "+parentCapId);










//var thisCapId = aa.cap.getCapID();
logDebug("CAELienseNumber: "+CAELienseNumber);

//var pcid = capModel.getParentCapID();
//logDebug("pcid: "+pcid);

cancel = true;
showMessage = true;

/*

var dupVINCheck = queryConflictVIN();
if(dupVINCheck.isIssue){
	cancel = true;
	showMessage = true;
	comment(dupVINCheck.issueMessage.join("\n<br>"));
}

*/