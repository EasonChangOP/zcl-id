var doorLock = {
    attrId: {
        'lockState':                                { id: 0x0000, type: 'ENUM8' },
        'lockType':                                 { id: 0x0001, type: 'ENUM8' },
        'actuatorEnabled':                          { id: 0x0002, type: 'BOOLEAN' },
        'doorState':                                { id: 0x0003, type: 'ENUM8' },
        'doorOpenEvents':                           { id: 0x0004, type: 'UINT32' },
        'doorClosedEvents':                         { id: 0x0005, type: 'UINT32' },
        'openPeriod':                               { id: 0x0006, type: 'UINT16' },
          // User, PIN, Schedule, & Log Information Attributes
        'numOfLockRecordsSupported':                { id: 0x0010, type: 'UINT16' },
        'numOfTotalUsersSupported':                 { id: 0x0011, type: 'UINT16' },
        'numOfPinUsersSupported':                   { id: 0x0012, type: 'UINT16' },
        'numOfRfidUsersSupported':                  { id: 0x0013, type: 'UINT16' },
        'numOfWeekDaySchedulesSupportedPerUser':    { id: 0x0014, type: 'UINT8' },
        'numOfYearDaySchedulesSupportedPerUser':    { id: 0x0015, type: 'UINT8' },
        'numOfHolidayScheduledsSupported':          { id: 0x0016, type: 'UINT8' },
        'maxPinLen':                                { id: 0x0017, type: 'UINT8' },
        'minPinLen':                                { id: 0x0018, type: 'UINT8' },
        'maxRfidLen':                               { id: 0x0019, type: 'UINT8' },
        'minRfidLen':                               { id: 0x001A, type: 'UINT8' },
         // Operational Settings Attributes
        'enable_Logging':                           { id: 0x0020, type: 'BOOLEAN' },
        'language':                                 { id: 0x0021, type: 'CHAR_STR' },
        'ledSettings':                              { id: 0x0022, type: 'UINT8' },
        'autoRelockTime':                           { id: 0x0023, type: 'UINT32' },
        'soundVolume':                              { id: 0x0024, type: 'UINT8' },
        'operatingMode':                            { id: 0x0025, type: 'UINT32' },
        'lockType':                                 { id: 0x0026, type: 'BITMAP16' },
        'defaultConfigurationRegister':             { id: 0x0027, type: 'BITMAP16' },
        'enableLocalProgramming':                   { id: 0x0028, type: 'BOOLEAN' },
        'enableOneTouchLocking':                    { id: 0x0029, type: 'BOOLEAN' },
        'enableInsideStatusLed':                    { id: 0x002A, type: 'BOOLEAN' },
        'enablePrivacyModeButton':                  { id: 0x002B, type: 'BOOLEAN' },
        // Security Settings Attributes
        'wrongCodeEntryLimit':                      { id: 0x0030, type: 'UINT8' },
        'userCodeTemporaryDisableTime':             { id: 0x0031, type: 'UINT8' },
        'sendPinOta':                               { id: 0x0032, type: 'BOOLEAN' },
        'requirePinForRfOperation':                 { id: 0x0033, type: 'BOOLEAN' },
        'zigbeeSecurityLevel':                      { id: 0x0034, type: 'UINT8' },
          // Alarm and Event Masks Attributes
        'alarmMask':                                { id: 0x0040, type: 'BITMAP16' },
        'keypadOperationEventMask':                 { id: 0x0041, type: 'BITMAP16' },
        'rfOperationEventMask':                     { id: 0x0042, type: 'BITMAP16' },
        'manualOperationEventMask':                 { id: 0x0043, type: 'BITMAP16' },
        'rfidOperationEventMask':                   { id: 0x0044, type: 'BITMAP16' },
        'keypadProgrammingEventMask':               { id: 0x0045, type: 'BITMAP16' },
        'rfProgrammingEventMask':                   { id: 0x0046, type: 'BITMAP16' },
        'rfidProgrammingEventMask':                 { id: 0x0047, type: 'BITMAP16' }
    },  
    cmd: {
        'lockDoor': 0x00,
        'unlockDoor': 0x01,
        'toggleDoor': 0x02,
        'unlockWithTimeout': 0x03,
        'getLogRecord': 0x04,
        'setPinCode': 0x05,
        'getPinCode': 0x06,
        'clearPinCode': 0x07,
        'clearAllPinCodes': 0x08,
        'setUserStatus': 0x09,
        'getUserStatus': 0x0A,
        'setWeekDaySchedule': 0x0B,
        'getWeekDaySchedule': 0x0C,
        'clearWeekDaySchedule': 0x0D,
        'setYearDaySchedule': 0x0E,
        'getYearDaySchedule': 0x0F,
        'clearYearDaySchedule': 0x10,
        'setHolidaySchedule': 0x11,
        'getHolidaySchedule': 0x12,
        'clearHolidaySchedule': 0x13,
        'setUserType': 0x14,
        'getUserType': 0x15,
        'setRfidCode': 0x16,
        'getRfidCode': 0x17,
        'clearRfidCode': 0x18,
        'clearAllRfidCodes': 0x19
        },
    cmdRsp: {
        'lockDoorRsp': 0x00,
        'unlockDoorRsp': 0x01,
        'toggleDoorRsp': 0x02,
        'unlockWithTimeoutRsp': 0x03,
        'getLogRecordRsp': 0x04,
        'setPinCodeRsp': 0x05,
        'getPinCodeRsp': 0x06,
        'clearPinCodeRsp': 0x07,
        'clearAllPinCodesRsp': 0x08,
        'setUserStatusRsp': 0x09,
        'getUserStatusRsp': 0x0A,
        'setWeekDayScheduleRsp': 0x0B,
        'getWeekDayScheduleRsp': 0x0C,
        'clearWeekDayScheduleRsp': 0x0D,
        'setYearDayScheduleRsp': 0x0E,
        'getYearDayScheduleRsp': 0x0F,
        'clearYearDayScheduleRsp': 0x10,
        'setHolidayScheduleRsp': 0x11,
        'getHolidayScheduleRsp': 0x12,
        'clearHolidayScheduleRsp': 0x13,
        'setUserTypeRsp': 0x14,
        'getUserTypeRsp': 0x15,
        'setRfidCodeRsp': 0x16,
        'getRfidCodeRsp': 0x17,
        'clearRfidCodeRsp': 0x18,
        'clearAllRfidCodesRsp': 0x19,
        'operationEventNotification': 0x20,
        'programmingEventNotification': 0X21
    }
};

module.exports = doorLock;