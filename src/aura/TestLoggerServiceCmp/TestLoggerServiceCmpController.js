({
    handleErrorClick : function(component, event) {
        console.log('handleErrorClick');
        component.find("loggerService").addLog("Test error log", "ERROR", "TestLoggerServiceCmp");
    },

    handleInfoClick : function(component, event) {
        console.log('handleInfoClick');
        component.find("loggerService").addLog("Test info log", "INFO", "TestLoggerServiceCmp");
    },

    handleDebugClick : function(component, event) {
        console.log('handleDebugClick');
        component.find("loggerService").addLog("Test debug log", "DEBUG", "TestLoggerServiceCmp");
    },
})