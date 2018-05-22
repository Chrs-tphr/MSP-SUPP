if (AInfo["Dismiss Incomplete Application"] == "CHECKED")
	{
	
	updateAppStatus("INCOMPLETE DISMISSAL","This is the test for the dismissal records."); // Unique status and comments
	closeWorkflow();
	cancel = true;
	logDebug("------------Set cancel equal to true -------------");
	}