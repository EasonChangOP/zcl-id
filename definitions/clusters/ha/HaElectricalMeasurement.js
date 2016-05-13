/**************************************************************/
/***           Electrical Measurements Cluster              ***/
/**************************************************************/
ZCL.Cluster.HaElectricalMeasurement.Attr = new Enum({
    'MeasurementType': 0x0000,
    'DcVoltage': 0x0100,
    'DcVoltageMin': 0x0101,
    'DcVoltageMax': 0x0102,
    'DcCurrent': 0x0103,
    'DcCurrentMin': 0x0104,
    'DcCurrentMax': 0x0105,
    'DcPower': 0x0106,
    'DcPowerMin': 0x0107,
    'DcPowerMax': 0x0108,
    'DcVoltageMultiplier': 0x0200,
    'DcVoltageDivisor': 0x0201,
    'DcCurrentMultiplier': 0x0202,
    'DcCurrentDivisor': 0x0203,
    'DcPowerMultiplier': 0x0204,
    'DcPowerDivisor': 0x0205,
    'AcFrequency': 0x0300,
    'AcFrequencyMin': 0x0301,
    'AcFrequencyMax': 0x0302,
    'NeutralCurrent': 0x0303,
    'TotalActivePower': 0x0304,
    'TotalReactivePower': 0x0305,
    'TotalApparentPower': 0x0306,
    'Meas1stHarmonicCurrent': 0x0307,
    'Meas3rdHarmonicCurrent': 0x0308,
    'Meas5thHarmonicCurrent': 0x0309,
    'Meas7thHarmonicCurrent': 0x030A,
    'Meas9thHarmonicCurrent': 0x030B,
    'Meas11thHarmonicCurrent': 0x030C,
    'MeasPhase1stHarmonicCurrent': 0x030D,
    'MeasPhase3rdHarmonicCurrent': 0x030E,
    'MeasPhase5thHarmonicCurrent': 0x030F,
    'MeasPhase7thHarmonicCurrent': 0x0310,
    'MeasPhase9thHarmonicCurrent': 0x0311,
    'MeasPhase11thHarmonicCurrent': 0x0312,
    'AcFrequencyMultiplier': 0x0400,
    'AcFrequencyDivisor': 0x0401,
    'PowerMultiplier': 0x0402,
    'PowerDivisor': 0x0403,
    'HarmonicCurrentMultiplier': 0x0404,
    'PhaseHarmonicCurrentMultiplier': 0x0405,
    'InstantaneousVoltage': 0x0500,
    'InstantaneousLineCurrent': 0x0501,
    'InstantaneousActiveCurrent': 0x0502,
    'InstantaneousReactiveCurrent': 0x0503,
    'InstantaneousPower': 0x0504,
    'RmsVoltage': 0x0505,
    'RmsVoltageMin': 0x0506,
    'RmsVoltageMax': 0x0507,
    'RmsCurrent': 0x0508,
    'RmsCurrentMin': 0x0509,
    'RmsCurrentMax': 0x050A,
    'ActivePower': 0x050B,
    'ActivePowerMin': 0x050C,
    'ActivePowerMax': 0x050D,
    'ReactivePower': 0x050E,
    'ApparentPower': 0x050F,
    'PowerFactor': 0x0510,
    'AverageRmsVoltageMeasPeriod': 0x0511,
    'AverageRmsOverVoltageCounter': 0x0512,
    'AverageRmsUnderVoltageCounter': 0x0513,
    'RmsExtremeOverVoltagePeriod': 0x0514,
    'RmsExtremeUnderVoltagePeriod': 0x0515,
    'RmsVoltageSagPeriod': 0x0516,
    'RmsVoltageSwellPeriod': 0x0517,
    'AcVoltageMultiplier': 0x0600,
    'AcVoltageDivisor': 0x0601,
    'AcCurrentMultiplier': 0x0602,
    'AcCurrentDivisor': 0x0603,
    'AcPowerMultiplier': 0x0604,
    'AcPowerDivisor': 0x0605,
    'DcOverloadAlarmsMask': 0x0700,
    'DcVoltageOverload': 0x0701,
    'DcCurrentOverload': 0x0702,
    'AcAlarmsMask': 0x0800,
    'AcVoltageOverload': 0x0801,
    'AcCurrentOverload': 0x0802,
    'AcActivePowerOverload': 0x0803,
    'AcReactivePowerOverload': 0x0804,
    'AverageRmsOverVoltage': 0x0805,
    'AverageRmsUnderVoltage': 0x0806,
    'RmsExtremeOverVoltage': 0x0807,
    'RmsExtremeUnderVoltage': 0x0808,
    'RmsVoltageSag': 0x0809,
    'RmsVoltageSwell': 0x080A,
    'LineCurrentPhB': 0x0901,
    'ActiveCurrentPhB': 0x0902,
    'ReactiveCurrentPhB': 0x0903,
    'RmsVoltagePhB': 0x0905,
    'RmsVoltageMinPhB': 0x0906,
    'RmsVoltageMaxPhB': 0x0907,
    'RmsCurrentPhB': 0x0908,
    'RmsCurrentMinPhB': 0x0909,
    'RmsCurrentMaxPhB': 0x090A,
    'ActivePowerPhB': 0x090B,
    'ActivePowerMinPhB': 0x090C,
    'ActivePowerMaxPhB': 0x090D,
    'ReactivePowerPhB': 0x090E,
    'ApparentPowerPhB': 0x090F,
    'PowerFactorPhB': 0x0910,
    'AverageRmsVoltageMeasurePeriodPhB': 0x0911,
    'AverageRmsOverVoltageCounterPhB': 0x0912,
    'AverageUnderVoltageCounterPhB': 0x0913,
    'RmsExtremeOverVoltagePeriodPhB': 0x0914,
    'RmsExtremeUnderVoltagePeriodPhB': 0x0915,
    'RmsVoltageSagPeriodPhB': 0x0916,
    'RmsVoltageSwellPeriodPhB': 0x0917,
    'LineCurrentPhC': 0x0A01,
    'ActiveCurrentPhC': 0x0A02,
    'ReactiveCurrentPhC': 0x0A03,
    'RmsVoltagePhC': 0x0A05,
    'RmsVoltageMinPhC': 0x0A06,
    'RmsVoltageMaxPhC': 0x0A07,
    'RmsCurrentPhC': 0x0A08,
    'RmsCurrentMinPhC': 0x0A09,
    'RmsCurrentMaxPhC': 0x0A0A,
    'ActivePowerPhC': 0x0A0B,
    'ActivePowerMinPhC': 0x0A0C,
    'ActivePowerMaxPhC': 0x0A0D,
    'ReactivePowerPhC': 0x0A0E,
    'ApparentPowerPhC': 0x0A0F,
    'PowerFactorPhC': 0x0A10,
    'AverageRmsVoltageMeasPeriodPhC': 0x0A11,
    'AverageRmsOverVoltageCounterPhC': 0x0A12,
    'AverageUnderVoltageCounterPhC': 0x0A13,
    'RmsExtremeOverVoltagePeriodPhC': 0x0A14,
    'RmsExtremeUnderVoltagePeriodPhC': 0x0A15,
    'RmsVoltageSagPeriodPhC': 0x0A16,
    'RmsVoltageSwellPeriodPh_C': 0x0A17
});

ZCL.Cluster.HaElectricalMeasurement.AttrType = {
    MeasurementType: 'BITMAP32',
    DcVoltage: 'INT16',
    DcVoltageMin: 'INT16',
    DcVoltageMax: 'INT16',
    DcCurrent: 'INT16',
    DcCurrentMin: 'INT16',
    DcCurrentMax: 'INT16',
    DcPower: 'INT16',
    DcPowerMin: 'INT16',
    DcPowerMax: 'INT16',
    DcVoltageMultiplier: 'UINT16',
    DcVoltageDivisor: 'UINT16',
    DcCurrentMultiplier: 'UINT16',
    DcCurrentDivisor: 'UINT16',
    DcPowerMultiplier: 'UINT16',
    DcPowerDivisor: 'UINT16',
    AcFrequency: 'UINT16',
    AcFrequencyMin: 'UINT16',
    AcFrequencyMax: 'UINT16',
    NeutralCurrent: 'UINT16',
    TotalActivePower: 'INT32',
    TotalReactivePower: 'INT32',
    TotalApparentPower: 'UINT32',
    Meas1stHarmonicCurrent: 'INT16',
    Meas3rdHarmonicCurrent: 'INT16',
    Meas5thHarmonicCurrent: 'INT16',
    Meas7thHarmonicCurrent: 'INT16',
    Meas9thHarmonicCurrent: 'INT16',
    Meas11thHarmonicCurrent: 'INT16',
    MeasPhase1stHarmonicCurrent: 'INT16',
    MeasPhase3rdHarmonicCurrent: 'INT16',
    MeasPhase5thHarmonicCurrent: 'INT16',
    MeasPhase7thHarmonicCurrent: 'INT16',
    MeasPhase9thHarmonicCurrent: 'INT16',
    MeasPhase11thHarmonicCurrent: 'INT16',
    AcFrequencyMultiplier: 'UINT16',
    AcFrequencyDivisor: 'UINT16',
    PowerMultiplier: 'UINT32',
    PowerDivisor: 'UINT32',
    HarmonicCurrentMultiplier: 'INT8',
    PhaseHarmonicCurrentMultiplier: 'INT8',
    InstantaneousVoltage: 'INT16',
    InstantaneousLineCurrent: 'UINT16',
    InstantaneousActiveCurrent: 'INT16',
    InstantaneousReactiveCurrent: 'INT16',
    InstantaneousPower: 'INT16',
    RmsVoltage: 'UINT16',
    RmsVoltageMin: 'UINT16',
    RmsVoltageMax: 'UINT16',
    RmsCurrent: 'UINT16',
    RmsCurrentMin: 'UINT16',
    RmsCurrentMax: 'UINT16',
    ActivePower: 'INT16',
    ActivePowerMin: 'INT16',
    ActivePowerMax: 'INT16',
    ReactivePower: 'INT16',
    ApparentPower: 'UINT16',
    PowerFactor: 'INT8',
    AverageRmsVoltageMeasPeriod: 'UINT16',
    AverageRmsOverVoltageCounter: 'UINT16',
    AverageRmsUnderVoltageCounter: 'UINT16',
    RmsExtremeOverVoltagePeriod: 'UINT16',
    RmsExtremeUnderVoltagePeriod: 'UINT16',
    RmsVoltageSagPeriod: 'UINT16',
    RmsVoltageSwellPeriod: 'UINT16',
    AcVoltageMultiplier: 'UINT16',
    AcVoltageDivisor: 'UINT16',
    AcCurrentMultiplier: 'UINT16',
    AcCurrentDivisor: 'UINT16',
    AcPowerMultiplier: 'UINT16',
    AcPowerDivisor: 'UINT16',
    DcOverloadAlarmsMask: 'BITMAP8',
    DcVoltageOverload: 'INT16',
    DcCurrentOverload: 'INT16',
    AcAlarmsMask: 'BITMAP16',
    AcVoltageOverload: 'INT16',
    AcCurrentOverload: 'INT16',
    AcActivePowerOverload: 'INT16',
    AcReactivePowerOverload: 'INT16',
    AverageRmsOverVoltage: 'INT16',
    AverageRmsUnderVoltage: 'INT16',
    RmsExtremeOverVoltage: 'INT16',
    RmsExtremeUnderVoltage: 'INT16',
    RmsVoltageSag: 'INT16',
    RmsVoltageSwell: 'INT16',
    LineCurrentPhB: 'UINT16',
    ActiveCurrentPhB: 'INT16',
    ReactiveCurrentPhB: 'INT16',
    RmsVoltagePhB: 'UINT16',
    RmsVoltageMinPhB: 'UINT16',
    RmsVoltageMaxPhB: 'UINT16',
    RmsCurrentPhB: 'UINT16',
    RmsCurrentMinPhB: 'UINT16',
    RmsCurrentMaxPhB: 'UINT16',
    ActivePowerPhB: 'INT16',
    ActivePowerMinPhB: 'INT16',
    ActivePowerMaxPhB: 'INT16',
    ReactivePowerPhB: 'INT16',
    ApparentPowerPhB: 'UINT16',
    PowerFactorPhB: 'INT8',
    AverageRmsVoltageMeasurePeriodPhB: 'UINT16',
    AverageRmsOverVoltageCounterPhB: 'UINT16',
    AverageUnderVoltageCounterPhB: 'UINT16',
    RmsExtremeOverVoltagePeriodPhB: 'UINT16',
    RmsExtremeUnderVoltagePeriodPhB: 'UINT16',
    RmsVoltageSagPeriodPhB: 'UINT16',
    RmsVoltageSwellPeriodPhB: 'UINT16',
    LineCurrentPhC: 'UINT16',
    ActiveCurrentPhC: 'INT16',
    ReactiveCurrentPhC: 'INT16',
    RmsVoltagePhC: 'UINT16',
    RmsVoltageMinPhC: 'UINT16',
    RmsVoltageMaxPhC: 'UINT16',
    RmsCurrentPhC: 'UINT16',
    RmsCurrentMinPhC: 'UINT16',
    RmsCurrentMaxPhC: 'UINT16',
    ActivePowerPhC: 'INT16',
    ActivePowerMinPhC: 'INT16',
    ActivePowerMaxPhC: 'INT16',
    ReactivePowerPhC: 'INT16',
    ApparentPowerPhC: 'UINT16',
    PowerFactorPhC: 'INT8',
    AverageRmsVoltageMeasPeriodPhC: 'UINT16',
    AverageRmsOverVoltageCounterPhC: 'UINT16',
    AverageUnderVoltageCounterPhC: 'UINT16',
    RmsExtremeOverVoltagePeriodPhC: 'UINT16',
    RmsExtremeUnderVoltagePeriodPhC: 'UINT16',
    RmsVoltageSagPeriodPhC: 'UINT16',
    RmsVoltageSwellPeriodPh_C: 'UINT16'
};

ZCL.Cluster.HaElectricalMeasurement.Cmd = new Enum({
    'GetProfileInfo': 0x00,  // O, no payload
    'GetMeasurementProfile': 0x01  // O, zclElectricalMeasurementGetMeasurementProfile_t
});

ZCL.Cluster.HaElectricalMeasurement.CmdRsp = new Enum({
    'GetProfileInfoRsp': 0x00,  // O, zclElectricalMeasurementGetProfileInfoRsp_t
    'GetMeasurementProfileRsp': 0x01  // O, zclElectricalMeasurementGetMeasurementProfileRsp_t
});

/**************************************************************/
/***                Diagnostic Cluster                      ***/
/**************************************************************/
ZCL.Cluster.HaElectricalMeasurement.Attr = new Enum({
    'NumberOfResets': 0x0000,
    'PersistentMemoryWrites': 0x0001,
    'MacRxBcast': 0x0100,
    'MacTxBcast': 0x0101,
    'MacRxUcast': 0x0102,
    'MacTxUcast': 0x0103,
    'MacTxUcastRetry': 0x0104,
    'MacTxUcastFail': 0x0105,
    'APSRxBcast': 0x0106,
    'APSTxBcast': 0x0107,
    'APSRxUcast': 0x0108,
    'APSTxUcastSuccess': 0x0109,
    'APSTxUcastRetry': 0x010A,
    'APSTxUcastFail': 0x010B,
    'RouteDiscInitiated': 0x010C,
    'NeighborAdded': 0x010D,
    'NeighborRemoved': 0x010E,
    'NeighborStale': 0x010F,
    'JoinIndication': 0x0110,
    'ChildMoved': 0x0111,
    'NwkFcFailure': 0x0112,
    'ApsFcFailure': 0x0113,
    'ApsUnauthorizedKey': 0x0114,
    'NwkDecryptFailures': 0x0115,
    'ApsDecryptFailures': 0x0116,
    'PacketBufferAllocateFailures': 0x0117,
    'RelayedUcast': 0x0118,
    'PhyToMacQueueLimitReached': 0x0119,
    'PacketValidateDropCount': 0x011A,
    'AverageMacRetryPerApsMessageSent': 0x011B,
    'LastMessageLqi': 0x011C,
    'LastMessageRssi': 0x011D
});

ZCL.Cluster.HaElectricalMeasurement.AttrType = {
    NumberOfResets: 'UINT16',
    PersistentMemoryWrites: 'UINT16',
    MacRxBcast: 'UINT32',
    MacTxBcast: 'UINT32',
    MacRxUcast: 'UINT32',
    MacTxUcast: 'UINT32',
    MacTxUcastRetry: 'UINT16',
    MacTxUcastFail: 'UINT16',
    APSRxBcast: 'UINT16',
    APSTxBcast: 'UINT16',
    APSRxUcast: 'UINT16',
    APSTxUcastSuccess: 'UINT16',
    APSTxUcastRetry: 'UINT16',
    APSTxUcastFail: 'UINT16',
    RouteDiscInitiated: 'UINT16',
    NeighborAdded: 'UINT16',
    NeighborRemoved: 'UINT16',
    NeighborStale: 'UINT16',
    JoinIndication: 'UINT16',
    ChildMoved: 'UINT16',
    NwkFcFailure: 'UINT16',
    ApsFcFailure: 'UINT16',
    ApsUnauthorizedKey: 'UINT16',
    NwkDecryptFailures: 'UINT16',
    ApsDecryptFailures: 'UINT16',
    PacketBufferAllocateFailures: 'UINT16',
    RelayedUcast: 'UINT16',
    PhyToMacQueueLimitReached: 'UINT16',
    PacketValidateDropCount: 'UINT16',
    AverageMacRetryPerApsMessageSent: 'UINT16',
    LastMessageLqi: 'UINT8',
    LastMessageRssi: 'INT8'
};
