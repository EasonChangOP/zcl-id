 var electricalMeasurement = {
    attrId: {
        'measurementType':                   { id: 0x0000, type: 'BITMAP32' }, 
        'dcVoltage':                         { id: 0x0100, type: 'INT16' }, 
        'dcVoltageMin':                      { id: 0x0101, type: 'INT16' }, 
        'dcvoltagemax':                      { id: 0x0102, type: 'INT16' }, 
        'dcCurrent':                         { id: 0x0103, type: 'INT16' }, 
        'dcCurrentMin':                      { id: 0x0104, type: 'INT16' }, 
        'dcCurrentMax':                      { id: 0x0105, type: 'INT16' }, 
        'dcPower':                           { id: 0x0106, type: 'INT16' }, 
        'dcPowerMin':                        { id: 0x0107, type: 'INT16' }, 
        'dcPowerMax':                        { id: 0x0108, type: 'INT16' }, 
        'dcVoltageMultiplier':               { id: 0x0200, type: 'UINT16' }, 
        'dcVoltageDivisor':                  { id: 0x0201, type: 'UINT16' }, 
        'dcCurrentMultiplier':               { id: 0x0202, type: 'UINT16' }, 
        'dcCurrentDivisor':                  { id: 0x0203, type: 'UINT16' }, 
        'dcPowerMultiplier':                 { id: 0x0204, type: 'UINT16' }, 
        'dcPowerDivisor':                    { id: 0x0205, type: 'UINT16' }, 
        'acFrequency':                       { id: 0x0300, type: 'UINT16' }, 
        'acFrequencyMin':                    { id: 0x0301, type: 'UINT16' }, 
        'acFrequencyMax':                    { id: 0x0302, type: 'UINT16' }, 
        'neutralCurrent':                    { id: 0x0303, type: 'UINT16' }, 
        'totalActivePower':                  { id: 0x0304, type: 'INT32' }, 
        'totalReactivePower':                { id: 0x0305, type: 'INT32' }, 
        'totalApparentPower':                { id: 0x0306, type: 'UINT32' }, 
        'meas1stHarmonicCurrent':            { id: 0x0307, type: 'INT16' }, 
        'meas3rdHarmonicCurrent':            { id: 0x0308, type: 'INT16' }, 
        'meas5thHarmonicCurrent':            { id: 0x0309, type: 'INT16' }, 
        'meas7thHarmonicCurrent':            { id: 0x030A, type: 'INT16' }, 
        'meas9thHarmonicCurrent':            { id: 0x030B, type: 'INT16' }, 
        'meas11thHarmonicCurrent':           { id: 0x030C, type: 'INT16' }, 
        'measPhase1stHarmonicCurrent':       { id: 0x030D, type: 'INT16' }, 
        'measPhase3rdHarmonicCurrent':       { id: 0x030E, type: 'INT16' }, 
        'measPhase5thHarmonicCurrent':       { id: 0x030F, type: 'INT16' }, 
        'measPhase7thHarmonicCurrent':       { id: 0x0310, type: 'INT16' }, 
        'measPhase9thHarmonicCurrent':       { id: 0x0311, type: 'INT16' }, 
        'measPhase11thHarmonicCurrent':      { id: 0x0312, type: 'INT16' }, 
        'acFrequencyMultiplier':             { id: 0x0400, type: 'UINT16' }, 
        'acFrequencyDivisor':                { id: 0x0401, type: 'UINT16' }, 
        'powerMultiplier':                   { id: 0x0402, type: 'UINT32' }, 
        'powerDivisor':                      { id: 0x0403, type: 'UINT32' }, 
        'harmonicCurrentMultiplier':         { id: 0x0404, type: 'INT8' }, 
        'phaseHarmonicCurrentMultiplier':    { id: 0x0405, type: 'INT8' }, 
        'instantaneousVoltage':              { id: 0x0500, type: 'INT16' }, 
        'instantaneousLineCurrent':          { id: 0x0501, type: 'UINT16' }, 
        'instantaneousActiveCurrent':        { id: 0x0502, type: 'INT16' }, 
        'instantaneousReactiveCurrent':      { id: 0x0503, type: 'INT16' }, 
        'instantaneousPower':                { id: 0x0504, type: 'INT16' }, 
        'rmsVoltage':                        { id: 0x0505, type: 'UINT16' }, 
        'rmsVoltageMin':                     { id: 0x0506, type: 'UINT16' }, 
        'rmsVoltageMax':                     { id: 0x0507, type: 'UINT16' }, 
        'rmsCurrent':                        { id: 0x0508, type: 'UINT16' }, 
        'rmsCurrentMin':                     { id: 0x0509, type: 'UINT16' }, 
        'rmsCurrentMax':                     { id: 0x050A, type: 'UINT16' }, 
        'activePower':                       { id: 0x050B, type: 'INT16' }, 
        'activePowerMin':                    { id: 0x050C, type: 'INT16' }, 
        'activePowerMax':                    { id: 0x050D, type: 'INT16' }, 
        'reactivePower':                     { id: 0x050E, type: 'INT16' }, 
        'apparentPower':                     { id: 0x050F, type: 'UINT16' }, 
        'powerFactor':                       { id: 0x0510, type: 'INT8' }, 
        'averageRmsVoltageMeasPeriod':       { id: 0x0511, type: 'UINT16' }, 
        'averageRmsOverVoltageCounter':      { id: 0x0512, type: 'UINT16' }, 
        'averageRmsUnderVoltageCounter':     { id: 0x0513, type: 'UINT16' }, 
        'rmsExtremeOverVoltagePeriod':       { id: 0x0514, type: 'UINT16' }, 
        'rmsExtremeUnderVoltagePeriod':      { id: 0x0515, type: 'UINT16' }, 
        'rmsVoltageSagPeriod':               { id: 0x0516, type: 'UINT16' }, 
        'rmsVoltageSwellPeriod':             { id: 0x0517, type: 'UINT16' }, 
        'acVoltageMultiplier':               { id: 0x0600, type: 'UINT16' }, 
        'acVoltageDivisor':                  { id: 0x0601, type: 'UINT16' }, 
        'acCurrentMultiplier':               { id: 0x0602, type: 'UINT16' }, 
        'acCurrentDivisor':                  { id: 0x0603, type: 'UINT16' }, 
        'acPowerMultiplier':                 { id: 0x0604, type: 'UINT16' }, 
        'acPowerDivisor':                    { id: 0x0605, type: 'UINT16' }, 
        'dcOverloadAlarmsMask':              { id: 0x0700, type: 'BITMAP8' }, 
        'dcVoltageOverload':                 { id: 0x0701, type: 'INT16' }, 
        'dcCurrentOverload':                 { id: 0x0702, type: 'INT16' }, 
        'acAlarmsMask':                      { id: 0x0800, type: 'BITMAP16' }, 
        'acVoltageOverload':                 { id: 0x0801, type: 'INT16' }, 
        'acCurrentOverload':                 { id: 0x0802, type: 'INT16' }, 
        'acActivePowerOverload':             { id: 0x0803, type: 'INT16' }, 
        'acReactivePowerOverload':           { id: 0x0804, type: 'INT16' }, 
        'averageRmsOverVoltage':             { id: 0x0805, type: 'INT16' }, 
        'averageRmsUnderVoltage':            { id: 0x0806, type: 'INT16' }, 
        'rmsExtremeOverVoltage':             { id: 0x0807, type: 'INT16' }, 
        'rmsExtremeUnderVoltage':            { id: 0x0808, type: 'INT16' }, 
        'rmsVoltageSag':                     { id: 0x0809, type: 'INT16' }, 
        'rmsVoltageSwell':                   { id: 0x080A, type: 'INT16' }, 
        'lineCurrentPhB':                    { id: 0x0901, type: 'UINT16' }, 
        'activeCurrentPhB':                  { id: 0x0902, type: 'INT16' }, 
        'reactiveCurrentPhB':                { id: 0x0903, type: 'INT16' }, 
        'rmsVoltagePhB':                     { id: 0x0905, type: 'UINT16' }, 
        'rmsVoltageMinPhB':                  { id: 0x0906, type: 'UINT16' }, 
        'rmsVoltageMaxPhB':                  { id: 0x0907, type: 'UINT16' }, 
        'rmsCurrentPhB':                     { id: 0x0908, type: 'UINT16' }, 
        'rmsCurrentMinPhB':                  { id: 0x0909, type: 'UINT16' }, 
        'rmsCurrentMaxPhB':                  { id: 0x090A, type: 'UINT16' }, 
        'activePowerPhB':                    { id: 0x090B, type: 'INT16' }, 
        'activePowerMinPhB':                 { id: 0x090C, type: 'INT16' }, 
        'activePowerMaxPhB':                 { id: 0x090D, type: 'INT16' }, 
        'reactivePowerPhB':                  { id: 0x090E, type: 'INT16' }, 
        'apparentPowerPhB':                  { id: 0x090F, type: 'UINT16' }, 
        'powerFactorPhB':                    { id: 0x0910, type: 'INT8' }, 
        'averageRmsVoltageMeasurePeriodPhB': { id: 0x0911, type: 'UINT16' }, 
        'averageRmsOverVoltageCounterPhB':   { id: 0x0912, type: 'UINT16' }, 
        'averageUnderVoltageCounterPhB':     { id: 0x0913, type: 'UINT16' }, 
        'rmsExtremeOverVoltagePeriodPhB':    { id: 0x0914, type: 'UINT16' }, 
        'rmsExtremeUnderVoltagePeriodPhB':   { id: 0x0915, type: 'UINT16' }, 
        'rmsVoltageSagPeriodPhB':            { id: 0x0916, type: 'UINT16' }, 
        'rmsVoltageSwellPeriodPhB':          { id: 0x0917, type: 'UINT16' }, 
        'lineCurrentPhC':                    { id: 0x0A01, type: 'UINT16' }, 
        'activeCurrentPhC':                  { id: 0x0A02, type: 'INT16' }, 
        'reactiveCurrentPhC':                { id: 0x0A03, type: 'INT16' }, 
        'rmsVoltagePhC':                     { id: 0x0A05, type: 'UINT16' }, 
        'rmsVoltageMinPhC':                  { id: 0x0A06, type: 'UINT16' }, 
        'rmsVoltageMaxPhC':                  { id: 0x0A07, type: 'UINT16' }, 
        'rmsCurrentPhC':                     { id: 0x0A08, type: 'UINT16' }, 
        'rmsCurrentMinPhC':                  { id: 0x0A09, type: 'UINT16' }, 
        'rmsCurrentMaxPhC':                  { id: 0x0A0A, type: 'UINT16' }, 
        'activePowerPhC':                    { id: 0x0A0B, type: 'INT16' }, 
        'activePowerMinPhC':                 { id: 0x0A0C, type: 'INT16' }, 
        'activePowerMaxPhC':                 { id: 0x0A0D, type: 'INT16' }, 
        'reactivePowerPhC':                  { id: 0x0A0E, type: 'INT16' }, 
        'apparentPowerPhC':                  { id: 0x0A0F, type: 'UINT16' }, 
        'powerFactorPhC':                    { id: 0x0A10, type: 'INT8' }, 
        'averageRmsVoltageMeasPeriodPhC':    { id: 0x0A11, type: 'UINT16' }, 
        'averageRmsOverVoltageCounterPhC':   { id: 0x0A12, type: 'UINT16' }, 
        'averageUnderVoltageCounterPhC':     { id: 0x0A13, type: 'UINT16' }, 
        'rmsExtremeOverVoltagePeriodPhC':    { id: 0x0A14, type: 'UINT16' }, 
        'rmsExtremeUnderVoltagePeriodPhC':   { id: 0x0A15, type: 'UINT16' }, 
        'rmsVoltageSagPeriodPhC':            { id: 0x0A16, type: 'UINT16' }, 
        'rmsVoltageSwellPeriodPh_C':         { id: 0x0A17, type: 'UINT16' }
    },
    cmd: {
        'getProfileInfo': 0x00,         // O, no payload
        'getMeasurementProfile': 0x01   // O, zclElectricalMeasurementGetMeasurementProfile_t
    },
    cmdRsp: {
        'getProfileInfoRsp': 0x00,          // O, zclElectricalMeasurementGetProfileInfoRsp_t
        'getMeasurementProfileRsp': 0x01    // O, zclElectricalMeasurementGetMeasurementProfileRsp_t
    }
};

module.exports = electricalMeasurement;
