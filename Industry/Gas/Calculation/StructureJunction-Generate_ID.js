// Assigned To: StructureJunction
// Type: Calculation
// Name: StructureJunction - Generate ID
// Description: Generate IDs for StructureJunction using database sequences
// Subtypes: All
// Field: assetid
// Trigger: Insert, Update
// Exclude From Client: True
// Disable: False

// Related Rules: Some rules are rely on additional rules for execution.  If this rule works in conjunction with another, they are listed below:
//    - None

// Duplicated in:  This rule may be implemented on other classes, they are listed here to aid you in adjusting those rules when a code change is required.
//    - Assembly - Generate ID
//    - Device - Generate ID
//    - Junction - Generate ID
//    - Line - Generate ID
//    - StructureBoundary - Generate ID
//    - StructureJunction - Generate ID
//    - StructureLine - Generate ID

// *************       User Variables       *************
// This section has the functions and variables that need to be adjusted based on your implementation

// Field in the data model used to store and manage the ID
// ** Implementation Note: This value does not need to change if using the industry data model
var assigned_to_field = $feature.assetid;

// Asset group/Subtype field used to define different IDs per the class
// ** Implementation Note: This value does not need to change if using the industry data model
var id_selector_value = $feature.assetgroup;

// Define the leading text, the trailing text and the delimiter for the ID, this function requires the keyed passed in
// NextSequenceValue requires a string literal for copy and paste, although it supports a variable, it is recommended
// to not use one
// ** Implementation Note: Adjust the prefix and join_char for each subtype.  The selector_value_txt is the subtype of the layer
function get_id(selector_value) {
    var id_format = {}
    var seq_val = null;
    var selector_value_txt = Text(selector_value);
    if (selector_value_txt == '1') {
            id_format = {
                'prefix': "Ppln-Mfflr",
                'join_char': '-',
                'suffix': ''
            }
            seq_val = NextSequenceValue('StructureJunction_Ppln_Mfflr_1_seq');
        }else if (selector_value_txt == '2') {
            id_format = {
                'prefix': "Ppln-Anchr",
                'join_char': '-',
                'suffix': ''
            }
            seq_val = NextSequenceValue('StructureJunction_Ppln_Anchr_2_seq');
        }else if (selector_value_txt == '3') {
            id_format = {
                'prefix': "Ppln-Pp-Spprt",
                'join_char': '-',
                'suffix': ''
            }
            seq_val = NextSequenceValue('StructureJunction_Ppln_Pp_Spprt_3_seq');
        }else if (selector_value_txt == '4') {
            id_format = {
                'prefix': "Ppln-Pp-Hngr",
                'join_char': '-',
                'suffix': ''
            }
            seq_val = NextSequenceValue('StructureJunction_Ppln_Pp_Hngr_4_seq');
        }else if (selector_value_txt == '5') {
            id_format = {
                'prefix': "Ppln-End-Cnnctn",
                'join_char': '-',
                'suffix': ''
            }
            seq_val = NextSequenceValue('StructureJunction_Ppln_End_Cnnctn_5_seq');
        }else if (selector_value_txt == '501') {
            id_format = {
                'prefix': "Pp-Accss-Pnt",
                'join_char': '-',
                'suffix': ''
            }
            seq_val = NextSequenceValue('StructureJunction_Pp_Accss_Pnt_501_seq');
        }else if (selector_value_txt == '7') {
            id_format = {
                'prefix': "Ppln-Vlv-Bx",
                'join_char': '-',
                'suffix': ''
            }
            seq_val = NextSequenceValue('StructureJunction_Ppln_Vlv_Bx_7_seq');
        }else if (selector_value_txt == '8') {
            id_format = {
                'prefix': "Ppln-Slv",
                'join_char': '-',
                'suffix': ''
            }
            seq_val = NextSequenceValue('StructureJunction_Ppln_Slv_8_seq');
        }else {
        return null;
    }
    var id_parts = remove_empty([id_format['prefix'], seq_val, id_format['suffix']])
    return Concatenate(id_parts, id_format['join_char'])
}

// ************* End User Variables Section *************

// *************       Functions            *************
function remove_empty(arr) {
    var new_arr = [];
    var j = 0;
    for (var i = 0; i < Count(arr); i++) {
        if (!IsEmpty(arr[i]) && Text(arr[i]) != '') {
            new_arr[j++] = arr[i];
        }
    }
    return new_arr;
}

// ************* End Functions Section *****************

if (IsEmpty(assigned_to_field) == false) {
    return assigned_to_field
}
var new_id = get_id(id_selector_value)
if (IsEmpty(new_id)) {
    return assigned_to_field;
}
return new_id
