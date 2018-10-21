public with sharing class LtngLoggerServiceController {
    @AuraEnabled
    public static void addLog(String logMsg, String severity, String cmpName) {
        //Will extend this class when logger service framework is implemented
        //for now just want to show how to use a lighting component as a service
        System.debug('LtngLoggerServiceController->logMsg: ' + logMsg + ' severity: ' + severity +
            + ' cmpName: ' + cmpName);
    }
}