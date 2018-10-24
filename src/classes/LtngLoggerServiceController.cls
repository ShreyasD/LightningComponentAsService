public with sharing class LtngLoggerServiceController {
    @AuraEnabled
    public static void createLog(String logMsg, String severity, String cmpName) {
        //Will extend this class when logger service framework is implemented
        //for now just want to show how to use a lighting component as a service
        System.debug('LtngLoggerServiceController->logMsg: ' + logMsg + ' severity: ' + severity +
            + ' cmpName: ' + cmpName);
        TestLog__c log = new TestLog__c();
        log.Log_Message__c = logMsg;
        log.Severity__c = severity;
        log.Source__c = cmpName;
        insert log;
    }
}