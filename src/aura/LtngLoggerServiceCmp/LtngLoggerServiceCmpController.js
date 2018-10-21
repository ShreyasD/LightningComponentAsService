({

    /**
     * add log method for msg, severity, and cmpName
     */
    addLog : function(component, event, helper) {
        var params = event.getParam('arguments');
        if(params) {
            helper.addLog(component, event, params.logMsg, params.severity, params.cmpName);
        }
    },
})