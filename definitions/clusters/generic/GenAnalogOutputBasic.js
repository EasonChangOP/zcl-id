/*************************************/
/*** Analog Output (Basic) Cluster ***/
/*************************************/
var AnalogOutputBasic = {
    attrId: {
        'Description': 0x001C,
        'MaxPresentValue': 0x0041,
        'MinPresentValue': 0x0045,
        'OutOfService': 0x0051,
        'PresentValue': 0x0055,
        'PriorityArray': 0x0057,
        'Reliability': 0x0067,
        'RelinquishDefault': 0x0068,
        'Resolution': 0x006A,
        'StatusFlags': 0x006F,
        'EngineeringUnits': 0x0075,
        'ApplicationType': 0x0100
    },
    type: {
        Description: 'CHAR_STR',
        MaxPresentValue: 'SINGLE_PREC',
        MinPresentValue: 'SINGLE_PREC',
        OutOfService: 'BOOLEAN',
        PresentValue: 'SINGLE_PREC',
        PriorityArray: 'ARRAY',
        Reliability: 'ENUM8',
        RelinquishDefault: 'SINGLE_PREC',
        Resolution: 'SINGLE_PREC',
        StatusFlags: 'BITMAP8',
        EngineeringUnits: 'ENUM16',
        ApplicationType: 'UINT32'
    },
    cmd: null,
    cmdRsp: null
};
