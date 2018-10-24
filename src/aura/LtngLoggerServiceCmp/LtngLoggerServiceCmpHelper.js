({
    /**
     * Add log call to apex controller
     * @param {[type]} logMsg log message
     * @param {[type]} severity [Error, Info, Debug] of log
     * @param {[type]} cmpName component generating the log
     */
    addLog : function(component, event, logMsg, severity, cmpName) {
        console.log("LtngLoggerServiceCmpHelper->addLog: " + logMsg + ',' + severity + ',' + cmpName);
        var action = component.get("c.createLog");
        action.setParams({"logMsg" : logMsg,
            "severity" : severity,
            "cmpName" : cmpName});
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log("state: " + JSON.stringify(response.getState()));
            if(state === "SUCCESS") {
                console.log("Log successfully created.");
            } else if(state === "ERROR") {
                console.log("error adding log: " + response.getError()[0].message);
            }
        });
        $A.enqueueAction(action);
        console.log('enqueued');
    }
})