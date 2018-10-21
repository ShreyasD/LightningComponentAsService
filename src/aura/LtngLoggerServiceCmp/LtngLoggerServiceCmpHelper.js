({
    /**
     * Add log call to apex controller
     * @param {[type]} logMsg log message
     * @param {[type]} severity [Error, Info, Debug] of log
     * @param {[type]} cmpName component generating the log
     */
    addLog : function(component, event, logMsg, severity, cmpName) {
        var action = component.get("c.addLog");
        action.setParams({"logMsg" : logMsg,
            "severity" : severity,
            "cmpName" : cmpName});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {

            } else if(state === "ERROR") {
                console.log("error adding log: " + response.getError()[0].message);
            }
        });
        $A.enqueueAction(action);
    }
})