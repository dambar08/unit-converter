'use-strict';

//import * as a from '/data_transfer_rate.js';

const UNIT_DEFAULT = 'angle';
const FROM_UNIT_DEFAULT = 'degrees';
const TO_UNIT_DEFAULT = 'radians';
const FROM_UNIT_DEFAULT_VALUE = 1;
const TO_UNIT_DEFAULT_VALUE = 0.01745329;

//ANGLE CONSTANTS
const FROM_ANGLE_DEFAULT = 'degrees';
const TO_ANGLE_DEFAULT = 'radians';
const FROM_ANGLE_DEFAULT_VALUE = 1;
const TO_ANGLE_DEFAULT_VALUE = 0.01745329;

//AREA CONSTANTS
const FROM_AREA_DEFAULT = 'squaremeter';
const TO_AREA_DEFAULT = 'squareinch';
const FROM_AREA_DEFAULT_VALUE = 1;
const TO_AREA_DEFAULT_VALUE = 1550.003;

//DATA TRANSFER RATE CONSTANTS
const FROM_DATA_TRANSFER_RATE_DEFAULT = 'bitspersecond';
const TO_DATA_TRANSFER_RATE_DEFAULT = 'kilobitpersecond';
const FROM_DATA_TRANSFER_RATE_DEFAULT_VALUE = 1;
const TO_DATA_TRANSFER_RATE_DEFAULT_VALUE = 0.001;

//DATA STORAGE CONSTANTS
const FROM_DIGITAL_STORAGE_DEFAULT = 'bit';
const TO_DIGITAL_STORAGE_DEFAULT = 'byte';
const FROM_DIGITAL_STORAGE_DEFAULT_VALUE = 1;
const TO_DIGITAL_STORAGE_DEFAULT_VALUE = 0.125;

//DURATION CONSTANTS
const FROM_DURATION_DEFAULT = 'minutes';
const TO_DURATION_DEFAULT = 'seconds';
const FROM_DURATION_DEFAULT_VALUE = 1;
const TO_DURATION_DEFAULT_VALUE = 60;

//ENERGY CONSTANTS
const FROM_ENERGY_DEFAULT = 'joule';
const TO_ENERGY_DEFAULT = 'watthour';
const FROM_ENERGY_DEFAULT_VALUE = 1;
const TO_ENERGY_DEFAULT_VALUE = 0.0002777778;

//FORCE CONSTANTS
const FROM_FORCE_DEFAULT = 'newton';
const TO_FORCE_DEFAULT = 'dyne';
const FROM_FORCE_DEFAULT_VALUE = 1;
const TO_FORCE_DEFAULT_VALUE = 100000;

//FREQUENCY CONSTANTS
const FROM_FREQUENCY_DEFAULT = 'hertz';
const TO_FREQUENCY_DEFAULT = 'megahertz';
const FROM_FREQUENCY_DEFAULT_VALUE = 1;
const TO_FREQUENCY_DEFAULT_VALUE = 0.000001;

//LENGTH CONSTANTS
const FROM_LENGTH_DEFAULT = 'mile';
const TO_LENGTH_DEFAULT = 'kilometer';
const FROM_LENGTH_DEFAULT_VALUE = 1;
const TO_LENGTH_DEFAULT_VALUE = 1.609344;

//MASS CONSTANTS
const FROM_MASS_DEFAULT = 'kilogram';
const TO_MASS_DEFAULT = 'gram';
const FROM_MASS_DEFAULT_VALUE = 1;
const TO_MASS_DEFAULT_VALUE = 1000;

//POWER CONSTANTS
const FROM_POWER_DEFAULT = 'watt';
const TO_POWER_DEFAULT = 'hp';
const FROM_POWER_DEFAULT_VALUE = 1;
const TO_POWER_DEFAULT_VALUE = 0.001341022;

//PRESSURE CONSTANTS
const FROM_PRESSURE_DEFAULT = 'pascal';
const TO_PRESSURE_DEFAULT = 'psi';
const FROM_PRESSURE_DEFAULT_VALUE = 1;
const TO_PRESSURE_DEFAULT_VALUE = 0.0001450377;


//SPEED CONSTANTS
const FROM_SPEED_DEFAULT = 'milesperhour';
const TO_SPEED_DEFAULT = 'kilometresperhour';
const FROM_SPEED_DEFAULT_VALUE = 1;
const TO_SPEED_DEFAULT_VALUE = 1.609344;


//TEMPERATURE CONSTANTS
const FROM_TEMPERATURE_DEFAULT = 'celsius';
const TO_TEMPERATURE_DEFAULT = 'fahrenheit';
const FROM_TEMPERATURE_DEFAULT_VALUE = 1;
const TO_TEMPERATURE_DEFAULT_VALUE = 33.8;


//VOLUME CONSTANTS
const FROM_VOLUME_DEFAULT = 'litre';
const TO_VOLUME_DEFAULT = 'millilitre';
const FROM_VOLUME_DEFAULT_VALUE = 1;
const TO_VOLUME_DEFAULT_VALUE = 1000;

$(window).on("load", function () {
    $('select#unit-picker').append(`
        <option value="angle">Angle</option>
        <option value="area">Area</option>
        <option value="data_transfer_rate">Data Transfer Rate</option>
        <option value="digital_storage">Digital Storage</option>
        <option value="duration">Duration</option>
        <option value="energy">Energy</option>
        <option value="force">Force</option>
        <option value="frequency">Frequency</option>
        <option value="length">Length</option>
        <option value="mass">Mass</option>
        <option value="power">Power</option>
        <option value="pressure">Pressure</option>
        <option value="speed">Speed</option>
        <option value="temperature">Temperature</option>
        <option value="volume">Volume</option>
    `);

    $('select#from').append(`
        <option value="arcminute">Arcminute</option>
        <option value="arcsecond">Arcsecond</option>
        <option value="cycles">Cycles</option>
        <option value="degrees" selected>Degrees</option>
        <option value="gradians">Gradians</option>
        <option value="microarcsecond">Microarcsecond</option>
        <option value="microradian">Microradian</option>
        <option value="milliarcsecond">Milliarcsecond</option>
        <option value="milliradian">Milliradian</option>
        <option value="radians">Radians</option>
        <option value="microradian">Revolution</option>
    `);

    $('select#to').append(`
        <option value="arcminute">Arcminute</option>
        <option value="arcsecond">Arcsecond</option>
        <option value="cycles">Cycles</option>
        <option value="degrees">Degrees</option>
        <option value="gradians">Gradians</option>
        <option value="microarcsecond">Microarcsecond</option>
        <option value="microradian">Microradian</option>
        <option value="milliarcsecond">Milliarcsecond</option>
        <option value="milliradian">Milliradian</option>
        <option value="radians" selected>Radians</option>
        <option value="microradian">Revolution</option>
    `);

    $('input[type=number]#to-number').val(TO_UNIT_DEFAULT_VALUE);
    $('input[type=number]#from-number').val(FROM_UNIT_DEFAULT_VALUE);
});


$(document).ready(function () {
    $("#from-number").on("keyup paste", function () {
        console.log($("select#from option:selected").val());
        console.log($("select#to option:selected").val());
    });

    $("#to-number").on("keyup paste", function () {
        console.log($("select#from option:selected").val());
        console.log($("select#to option:selected").val());
    });

    $(".sub-units#from").on("change", function () {
        const from = $("select#to option:selected").val();
        const to = $("select#from option:selected").val()
        const value = $("input[type=number]#to-number").val();
        $("#from-number").val(convert(from, to, value));
    });

    $(".sub-units#to").on("change", function () {
        const from = $("select#from option:selected").val();
        const to = $("select#to option:selected").val();
        const value = $("input[type=number]#from-number").val();
        $("#to-number").val(convert(from, to, value));
    });

    $("select#unit-picker").on("change", function () {
        //deleting previous values stored
        $(".sub-units").empty();

        if ($("select#unit-picker option:selected").val() == "angle") {
            setSelect(getAngleOptions(), FROM_ANGLE_DEFAULT, TO_ANGLE_DEFAULT);
            setDefaultValues(FROM_ANGLE_DEFAULT, TO_ANGLE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "area") {
            setSelect(getAreaOptions(), FROM_AREA_DEFAULT, TO_AREA_DEFAULT);
            setDefaultValues(FROM_AREA_DEFAULT, TO_AREA_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "data_transfer_rate") {
            setSelect(getDataTransferRateOptions(), FROM_DATA_TRANSFER_RATE_DEFAULT, TO_DATA_TRANSFER_RATE_DEFAULT);
            setDefaultValues(FROM_DATA_TRANSFER_RATE_DEFAULT, TO_DATA_TRANSFER_RATE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "digital_storage") {
            setSelect(getDigitalStorageOptions(), FROM_DIGITAL_STORAGE_DEFAULT, TO_DIGITAL_STORAGE_DEFAULT);
            setDefaultValues(FROM_DIGITAL_STORAGE_DEFAULT, TO_DIGITAL_STORAGE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "duration") {
            setSelect(getDurationOptions(), FROM_DURATION_DEFAULT, TO_DURATION_DEFAULT);
            setDefaultValues(FROM_DURATION_DEFAULT, TO_DURATION_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "energy") {
            setSelect(getEnergyOptions(), FROM_ENERGY_DEFAULT, TO_ENERGY_DEFAULT);
            setDefaultValues(FROM_ENERGY_DEFAULT, TO_ENERGY_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "force") {
            setSelect(getForceOptions(), FROM_FORCE_DEFAULT, TO_FORCE_DEFAULT);
            setDefaultValues(FROM_FORCE_DEFAULT, TO_FORCE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "frequency") {
            setSelect(getFrequencyOptions(), FROM_FREQUENCY_DEFAULT, TO_FREQUENCY_DEFAULT);
            setDefaultValues(FROM_FREQUENCY_DEFAULT, TO_FREQUENCY_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "length") {
            setSelect(getLengthOptions(), FROM_LENGTH_DEFAULT, TO_LENGTH_DEFAULT);
            setDefaultValues(FROM_LENGTH_DEFAULT, TO_LENGTH_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "mass") {
            setSelect(getMassOptions(), FROM_MASS_DEFAULT, TO_MASS_DEFAULT);
            setDefaultValues(FROM_MASS_DEFAULT, TO_MASS_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "power") {
            setSelect(getPowerOptions(), FROM_POWER_DEFAULT, TO_POWER_DEFAULT);
            setDefaultValues(FROM_POWER_DEFAULT, TO_POWER_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "pressure") {
            setSelect(getPressureOptons(), FROM_PRESSURE_DEFAULT, TO_PRESSURE_DEFAULT);
            setDefaultValues(FROM_PRESSURE_DEFAULT, TO_PRESSURE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "speed") {
            setSelect(getSpeedOptions(), FROM_SPEED_DEFAULT, TO_SPEED_DEFAULT);
            setDefaultValues(FROM_SPEED_DEFAULT, TO_SPEED_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "temperature") {
            setSelect(getTemperatureOptions(), FROM_TEMPERATURE_DEFAULT, TO_TEMPERATURE_DEFAULT);
            setDefaultValues(FROM_TEMPERATURE_DEFAULT, TO_TEMPERATURE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "volume") {
            setSelect(getVolumeOptions(), FROM_VOLUME_DEFAULT, TO_VOLUME_DEFAULT);
            setDefaultValues(FROM_VOLUME_DEFAULT, TO_VOLUME_DEFAULT);
        }
    });
});

function setSelect(values, from, to) {
    values.forEach((value) => {
        v = value.toLowerCase().replace(/\s/g, "");
        if (v === from) {
            $("#from").append(`<option value="${value.toLowerCase().replace(/\s/g, "")}" selected>${value}</option>`);
        } else {
            $("#from").append(`<option value="${value.toLowerCase().replace(/\s/g, "")}">${value}</option>`);
        }
        if (v == to) {
            $("#to").append(`<option value="${value.toLowerCase().replace(/\s/g, "")}" selected>${value}</option>`);
        } else {
            $("#to").append(`<option value="${value.toLowerCase().replace(/\s/g, "")}">${value}</option>`);
        }
    });
}

function setDefaultValues(from, to) {
    console.log("SETTING DEFAULT");
    const combination = from + to;
    switch (combination) {
        case FROM_ANGLE_DEFAULT + TO_ANGLE_DEFAULT:
            console.log("ANGLE");
            $("input[type=number]#from-number").val(FROM_ANGLE_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_ANGLE_DEFAULT_VALUE);
            break;
        case FROM_AREA_DEFAULT + TO_AREA_DEFAULT:
            console.log("AREA");
            $("input[type=number]#from-number").val(FROM_AREA_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_AREA_DEFAULT_VALUE);
            break;
        case FROM_DATA_TRANSFER_RATE_DEFAULT + TO_DATA_TRANSFER_RATE_DEFAULT:
            $("input[type=number]#from-number").val(FROM_DATA_TRANSFER_RATE_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_DATA_TRANSFER_RATE_DEFAULT_VALUE);
            break;
        case FROM_DIGITAL_STORAGE_DEFAULT + TO_DIGITAL_STORAGE_DEFAULT:
            $("input[type=number]#from-number").val(FROM_DIGITAL_STORAGE_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_DIGITAL_STORAGE_DEFAULT_VALUE);
            break;
        case FROM_DURATION_DEFAULT + TO_DURATION_DEFAULT:
            $("input[type=number]#from-number").val(FROM_DURATION_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_DURATION_DEFAULT_VALUE);
            break;
        case FROM_ENERGY_DEFAULT + TO_ENERGY_DEFAULT:
            $("input[type=number]#from-number").val(FROM_ENERGY_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_ENERGY_DEFAULT_VALUE);
            break;
        case FROM_FORCE_DEFAULT + TO_FORCE_DEFAULT:
            $("input[type=number]#from-number").val(FROM_FORCE_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_FORCE_DEFAULT_VALUE);
            break;
        case FROM_FREQUENCY_DEFAULT + TO_FREQUENCY_DEFAULT:
            $("input[type=number]#from-number").val(FROM_FREQUENCY_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_FREQUENCY_DEFAULT_VALUE);
            break;
        case FROM_LENGTH_DEFAULT + TO_LENGTH_DEFAULT:
            $("input[type=number]#from-number").val(FROM_LENGTH_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_LENGTH_DEFAULT_VALUE);
            break;
        case FROM_MASS_DEFAULT + TO_MASS_DEFAULT:
            $("input[type=number]#from-number").val(FROM_MASS_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_MASS_DEFAULT_VALUE);
            break;
        case FROM_POWER_DEFAULT + TO_POWER_DEFAULT:
            $("input[type=number]#from-number").val(FROM_POWER_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_POWER_DEFAULT_VALUE);
            break;
        case FROM_PRESSURE_DEFAULT + TO_PRESSURE_DEFAULT:
            $("input[type=number]#from-number").val(FROM_PRESSURE_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_PRESSURE_DEFAULT_VALUE);
            break;
        case FROM_SPEED_DEFAULT + TO_SPEED_DEFAULT:
            $("input[type=number]#from-number").val(FROM_SPEED_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_SPEED_DEFAULT_VALUE);
            break;
        case FROM_TEMPERATURE_DEFAULT + TO_TEMPERATURE_DEFAULT:
            $("input[type=number]#from-number").val(FROM_TEMPERATURE_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_TEMPERATURE_DEFAULT_VALUE);
            break;
        case FROM_VOLUME_DEFAULT + TO_VOLUME_DEFAULT:
            $("input[type=number]#from-number").val(FROM_VOLUME_DEFAULT_VALUE);
            $("input[type=number]#to-number").val(TO_VOLUME_DEFAULT_VALUE);
            break;
        default:
            console.log("Error occured");
    }
}

/**
 * 
 * @param {*} from 
 * @param {*} to 
 * @param {*} id The input element to set the converted value
 * Using the from and to, this function determines which conversion to take place.
 */
function convert(from, to, value) {
    const combination = from + to;
    if (from === "bitspersecond") {
        if (to === "gibibitpersecond") {
            return bitToGibibit(value);
        } else if (to === "gigabitpersecond") {
            return bitToGigabit(value);
        } else if (to === "gigabytepersecond") {
            return bitToGigabyte(value);
        } else if (to === "kibibitpersecond") {
            return bitToKibibit(value);
        } else if (to === "kilobitpersecond") {
            return bitToKilobit(value);
        } else if (to === "kilobytepersecond") {
            return bitToKilobyte(value);
        } else if (to === "mebibitpersecond") {
            return bitToMebibit(value);
        } else if (to === "megabitpersecond") {
            return bitToMegabit(value);
        } else if (to === "megabytepersecond") {
            return bitToMegabyte(value);
        } else if (to === "tebibitpersecond") {
            return bitToTebibit(value);
        } else if (to === "terabitpersecond") {
            return bitToTerabit(value);
        } else if (to === "terabytepersecond") {
            return bitToTerabyte(value);
        } else {
            return value;
        }
    } else if (from === "gibibitpersecond") {
        if (to === "bitspersecond") {
            return gibibitToBit(value);
        } else if (to === "gigabitpersecond") {
            return gibibitToGigabit(value);
        } else if (to === "gigabytepersecond") {
            return gibibitToGigabit(value);
        } else if (to === "kibibitpersecond") {
            return gibibitToKibibit(value);
        } else if (to === "kilobitpersecond") {
            return gibibitToKilobit(value);
        } else if (to === "kilobytepersecond") {
            return gibibitToKilobyte(value);
        } else if (to === "mebibitpersecond") {
            return gibibitToMebibit(value);
        } else if (to === "megabitpersecond") {
            return gibibitToMegabit(value);
        } else if (to === "megabytepersecond") {
            return gibibitToMegabyte(value);
        } else if (to === "tebibitpersecond") {
            return gibibitToTebibit(value);
        } else if (to === "terabitpersecond") {
            return gibibitToTerabit(value);
        } else if (to === "terabytepersecond") {
            return gibibitToTerabyte(value);
        } else {
            return value;
        }
    } else if (from === "gigabitpersecond") {
        if (to === "bitspersecond") {
            return gigabitToBit(value);
        } else if (to === "gibibitpersecond") {
            return gigabitToGibibit(value);
        } else if (to === "gigabytepersecond") {
            return gigabitToGigabyte(value);
        } else if (to === "kibibitpersecond") {
            return gigabitToKibibit(value);
        } else if (to === "kilobitpersecond") {
            return gigabitToKilobit(value);
        } else if (to === "kilobytepersecond") {
            return gigabitToKilobyte(value);
        } else if (to === "mebibitpersecond") {
            return gigabitToMebibit(value);
        } else if (to === "megabitpersecond") {
            return gigabitToMegabit(value);
        } else if (to === "megabytepersecond") {
            return gigabitToMegabyte(value);
        } else if (to === "tebibitpersecond") {
            return gigabitToTebibit(value);
        } else if (to === "terabitpersecond") {
            return gigabitToTerabit(value);
        } else if (to === "terabytepersecond") {
            return gigabitToTerabyte(value);
        } else {
            return value;
        }
    } else if (from === "gigabytepersecond") {
        if (to === "bitspersecond") {
            return gigabyteToBit(value);
        } else if (to === "gibibitpersecond") {
            return gigabyteToBit(value);
        } else if (to === "gigabitpersecond") {
            return gigabyteToGigabit(value);
        } else if (to === "kibibitpersecond") {
            return gigabyteToKibibit(value);
        } else if (to === "kilobitpersecond") {
            return gigabyteToKilobit(value);
        } else if (to === "kilobytepersecond") {
            return gigabyteToKilobyte(value);
        } else if (to === "mebibitpersecond") {
            return gigabyteToMebibit(value);
        } else if (to === "megabitpersecond") {
            return gigabyteToMegabit(value);
        } else if (to === "megabytepersecond") {
            return gigabyteToMegabyte(value);
        } else if (to === "tebibitpersecond") {
            return gigabyteToTebibit(value);
        } else if (to === "terabitpersecond") {
            return gigabyteToTerabit(value);
        } else if (to === "terabytepersecond") {
            return gigabyteToTerabyte(value);
        } else {
            return value;
        }
    } else if (from === "kibibitpersecond") {
        if (to === "bitspersecond") {
            return kibibitToBit(value);
        } else if (to === "gibibitpersecond") {
            return kibibitToGibibit(value);
        } else if (to === "gigabitpersecond") {
            return kibibitToGigabit(value);
        } else if (to === "gigabytepersecond") {
            return kibibitToGigabyte(value);
        } else if (to === "kilobitpersecond") {
            return kibibitToKilobit(value);
        } else if (to === "kilobytepersecond") {
            return kibibitToKilobyte(value);
        } else if (to === "mebibitpersecond") {
            return kibibitToMebibit(value);
        } else if (to === "megabitpersecond") {
            return kibibitToMegabit(value);
        } else if (to === "megabytepersecond") {
            return kibibitToMegabyte(value);
        } else if (to === "tebibitpersecond") {
            return kibibitToTebibit(value);
        } else if (to === "terabitpersecond") {
            return kibibitToTerabit(value);
        } else if (to === "terabytepersecond") {
            return kibibitToTerabyte(value);
        } else {
            return value;
        }
    } else if (from === "kilobitpersecond") {
        if (to === "bitspersecond") {
            return kilobitToBit(value);
        } else if (to === "gibibitpersecond") {
            return kilobitToGibibit(value);
        } else if (to === "gigabitpersecond") {
            return kilobitToGigabit(value);
        } else if (to === "gigabytepersecond") {
            return kilobitToGigabyte(value);
        } else if (to === "kibibitpersecond") {
            return kilobitToKibibit(value);
        } else if (to === "kilobytepersecond") {
            return kilobitToKilobyte(value);
        } else if (to === "mebibitpersecond") {
            return kilobitToMebibit(value);
        } else if (to === "megabitpersecond") {
            return kilobitToMegabit(value);
        } else if (to === "megabytepersecond") {
            return kilobitToMegabyte(value);
        } else if (to === "tebibitpersecond") {
            return kilobitToTebibit(value);
        } else if (to === "terabitpersecond") {
            return kilobitToTerabit(value);
        } else if (to === "terabytepersecond") {
            return kilobitToTerabyte(value);
        } else {
            return value;
        }
    } else if (from === "kilobytepersecond") {
        if (to === "bitspersecond") {
            return kilobyteToBit(value);
        } else if (to === "gibibitpersecond") {
            return kilobyteToGibibit(value);
        } else if (to === "gigabitpersecond") {
            return kilobyteToGigabit(value);
        } else if (to === "gigabytepersecond") {
            return kilobyteToGigabyte(value);
        } else if (to === "kibibitpersecond") {
            return kilobyteToKibibit(value);
        } else if (to === "kilobitpersecond") {
            return kilobyteToKibibit(value);
        } else if (to === "mebibitpersecond") {
            return kilobyteToMebibit(value);
        } else if (to === "megabitpersecond") {
            return kilobitToMegabit(value);
        } else if (to === "megabytepersecond") {
            return kilobitToMegabyte(value);
        } else if (to === "tebibitpersecond") {
            return kilobitToTebibit(value);
        } else if (to === "terabitpersecond") {
            return kilobitToTerabit(value);
        } else if (to === "terabytepersecond") {
            return kilobitToTerabyte(value);
        } else {
            return value;
        }
    } else if (from === "kilobytepersecond") {
        if (to === "bitspersecond") {
            return kilobyteToBit(value);
        } else if (to === "gibibitpersecond") {
            return kilobyteToGibibit(value);
        } else if (to === "gigabitpersecond") {
            return kilobyteToGigabit(value);
        } else if (to === "gigabytepersecond") {
            return kilobyteToGigabyte(value);
        } else if (to === "kibibitpersecond") {
            return kilobyteToKibibit(value);
        } else if (to === "kilobitpersecond") {
            return kilobyteToKibibit(value);
        } else if (to === "mebibitpersecond") {
            return kilobyteToMebibit(value);
        } else if (to === "megabitpersecond") {
            return kilobitToMegabit(value);
        } else if (to === "megabytepersecond") {
            return kilobitToMegabyte(value);
        } else if (to === "tebibitpersecond") {
            return kilobitToTebibit(value);
        } else if (to === "terabitpersecond") {
            return kilobitToTerabit(value);
        } else if (to === "terabytepersecond") {
            return kilobitToTerabyte(value);
        } else {
            return value;
        }
    } else if (from === "mebibitpersecond") {
        if (to === "bitspersecond") {
            return mebibitToBit(value);
        } else if (to === "gibibitpersecond") {
            return mebibitToGibibit(value);
        } else if (to === "gigabitpersecond") {
            return mebibitToGigabit(value);
        } else if (to === "gigabytepersecond") {
            return mebibitToGigabyte(value);
        } else if (to === "kibibitpersecond") {
            return kilobyteToKibibit(value);
        } else if (to === "kilobitpersecond") {
            return kilobyteToKibibit(value);
        } else if (to === "mebibitpersecond") {
            return kilobyteToMebibit(value);
        } else if (to === "megabitpersecond") {
            return kilobitToMegabit(value);
        } else if (to === "megabytepersecond") {
            return kilobitToMegabyte(value);
        } else if (to === "tebibitpersecond") {
            return kilobitToTebibit(value);
        } else if (to === "terabitpersecond") {
            return kilobitToTerabit(value);
        } else if (to === "terabytepersecond") {
            return kilobitToTerabyte(value);
        } else {
            return value;
        }
    }

    //TODO
    function arcminuteToArcsecond(arcminute) {
        return arcminute * 60;
    }

    //TODO
    function arcminuteToCycle(arcminute) {
        return arcminute * 0.0000462963;
    }

    //TODO
    function arcminuteToDegree(arcminute) {
        return arcminute * 0.01666667;
    }

    //TODO
    function arcminuteToGradian(arcminute) {
        return arcminute * 0.01851852;
    }

    //TODO
    function arcminuteToMicroarcsecond(arcminute) {
        return arcminute * 60001690;
    }

    //TODO
    function arcminuteToMicroradian(arcminute) {
        return arcminute * 290.8882;
    }

    //TODO
    function arcminuteToMilliarcsecond(arcminute) {
        return arcminute * 60001.69;
    }

    //TODO
    function arcminuteToMilliradian(arcminute) {
        return arcminute * 0.2908882;
    }

    //TODO
    function arcminuteToRadian(arcminute) {
        return arcminute * 0.0002908882;
    }
    //TODO
    function arcminuteToRevolution(arcminute) {
        return arcminute * 0.00004629619;
    }

    //TODO
    function arcsecondToArcminute(arcsecond) {
        return arcsecond / 60;
    }

    //TODO
    function arcsecondToArcminute(arcsecond) {

    }

    //TODO
    function arcsecondToCycle(arcsecond) {

    }

    //TODO
    function arcsecondToDegree(arcsecond) {

    }

    //TODO
    function arcsecondToGradian(arcsecond) {

    }

    //TODO
    function arcsecondToMicroarcsecond(arcsecond) {

    }


    //TODO
    function arcsecondToMicroradian(arcsecond) {

    }


    //TODO
    function arcsecondToMilliarcsecond(arcsecond) {

    }


    //TODO
    function arcsecondToMilliradian(arcsecond) {

    }

    //TODO
    function arcsecondToRadian(arcsecond) {

    }

    //TODO
    function arcsecondToRevolution(arcsecond) {

    }

    //TODO
    function cycleToArcminute(cycle) {

    }

    //TODO
    function cycleToArcsecond(cycle) {

    }

    //TODO
    function cycleToCycle(cycle) {

    }

    //TODO
    function cycleToDegree(cycle) {

    }

    //TODO
    function cycleToGradian(cycle) {

    }

    //TODO
    function cycleToMicroarsecond(cycle) {

    }

    //TODO
    function cycleToMicroradian(cycle) {

    }

    //TODO
    function cycleToRadian(cycle) {

    }

    //TODO
    function cycleToRevolution(cycle) {

    }

    //TODO
    function degreeToArcminute(degree) {

    }

    //TODO
    function degreeToArcsecond(degree) {

    }

    //TODO
    function degreeToCycle(degree) {

    }

    //TODO
    function degreeToGradian(degree) {

    }

    //TODO
    function degreeToMicroarcsecond(degree) {

    }

    //TODO
    function degreeToMicroradian(degree) {

    }

    //TODO
    function degreeToMilliarcsecond(degree) {

    }

    //TODO
    function degreeToMilliradian(degree) {

    }

    //TODO
    function degreeToRadian(degree) {

    }

    //TODO
    function degreeToRevolution(degree) {

    }

    //TODO
    function gradianToArcminute(gradian) {

    }

    //TODO
    function gradianToArcsecond(gradian) {

    }

    //TODO
    function gradianToCycle(gradian) {

    }

    //TODO
    function gradianToDegree(gradian) {

    }

    //TODO
    function gradianToMicroarcsecond(gradian) {

    }

    //TODO
    function gradianToMicroradian(gradian) {

    }

    //TODO
    function gradianToMilliarcsecond(gradian) {

    }

    //TODO
    function gradianToMilliradian(gradian) {

    }

    //TODO
    function gradianToRadian(gradian) {

    }

    //TODO
    function gradianToRevolution(gradian) {

    }

    //TODO
    function microarcsecondToArcminute(microarcsecond) {

    }

    //TODO
    function microarcsecondToArcsecond(microarcsecond) {

    }

    //TODO
    function microarcsecondToCycle(microarcsecond) {

    }

    //TODO
    function microarcsecondToDegree(microarcsecond) {

    }

    //TODO
    function microarcsecondToGradian(microarcsecond) {

    }

    //TODO
    function microarcsecondToMicroradian(microarcsecond) {

    }

    //TODO
    function microarcsecondToMilliarcsecond(microarcsecond) {

    }

    //TODO
    function microarcsecondToMilliradian(microarcsecond) {

    }

    //TODO
    function microarcsecondToRadian(microarcsecond) {

    }

    //TODO
    function microarcsecondToRevolution(microarcsecond) {

    }

    //TODO
    function microradianToArcminute(microradian) {

    }

    //TODO
    function microradianToArcsecond(microradian) {

    }

    //TODO
    function microradianToCycle(microradian) {

    }

    //TODO
    function microradianToDegree(microradian) {

    }

    //TODO
    function microradianToGradian(microradian) {

    }

    //TODO
    function microradianToMicroarcsecond(microradian) {

    }

    //TODO
    function microradianToMilliarcsecond(microradian) {

    }

    //TODO
    function microradianToMilliradian(microradian) {

    }

    //TODO
    function microradianToRadian(microradian) {

    }

    //TODO
    function microradianToRevolution(microradian) {

    }
    //TODO
    function milliarcsecondToArcminute(milliarcsecond) {

    }

    //TODO
    function milliarcsecondToArcsecond(milliarcsecond) {

    }

    //TODO
    function milliarcsecondToCycle(milliarcsecond) {

    }

    //TODO
    function milliarcsecondToDegree(milliarcsecond) {

    }

    //TODO
    function milliarcsecondToGradian(milliarcsecond) {

    }

    //TODO
    function milliarcsecondToMicroradian(milliarcsecond) {

    }

    //TODO
    function milliarcsecondToMilliarcsecond(milliarcsecond) {

    }

    //TODO
    function milliarcsecondToMilliradian(milliarcsecond) {

    }

    //TODO
    function milliarcsecondToRadian(milliarcsecond) {

    }

    //TODO
    function milliarcsecondToRevolution(milliarcsecond) {

    }

    //TODO
    function milliradianToArcminute(milliradian) {

    }

    //TODO
    function milliradianToArcsecond(milliradian) {

    }

    //TODO
    function milliradianToCycle(milliradian) {

    }

    //TODO
    function milliradianToDegree(milliradian) {

    }

    //TODO
    function milliradianToGradian(milliradian) {

    }

    //TODO
    function milliradianToMicroradian(milliradian) {

    }

    //TODO
    function milliradianToMilliarcsecond(milliradian) {

    }

    //TODO
    function milliradianToMilliarcsecond(milliradian) {

    }

    //TODO
    function milliradianToRadian(milliradian) {

    }

    //TODO
    function milliradianToRevolution(milliradian) {

    }

    //TODO
    function radianToArcminute(radian) {

    }

    //TODO
    function radianToArcsecond(radian) {

    }

    //TODO
    function radianToCycle(radian) {

    }

    //TODO
    function radianToDegree(radian) {

    }

    //TODO
    function radianToGradian(radian) {

    }

    //TODO
    function radianToMicroarcsecond(radian) {

    }

    //TODO
    function radianToMicroradian(radian) {

    }

    //TODO
    function radianToMilliradian(radian) {

    }

    //TODO
    function radianToRevolution(radian) {

    }

    //TODO
    function revolutionToArcminute(revolution) {

    }

    //TODO
    function revolutionToArcsecond(revolution) {

    }

    //TODO
    function revolutionToCycle(revolution) {

    }

    //TODO
    function revolutionToDegree(revolution) {

    }

    //TODO
    function revolutionToGradian(revolution) {

    }

    //TODO
    function revolutionToMicrorevolution(revolution) {

    }

    //TODO
    function revolutionToMilliarcsecond(revolution) {

    }

    //TODO
    function revolutionToMilliradian(revolution) {

    }

    //TODO
    function revolutionToMilliradian(revolution) {

    }

    //TODO
    function revolutionToRadian(revolution) {

    }


    function degreeToRadian(degree) {
        return degree * 0.01745329;
    }

    function getAngleOptions() {
        return [
            "Arcminute",
            "Arcsecond",
            "Cycles",
            "Degrees",
            "Gradians",
            "Microarcsecond",
            "Microradian",
            "Milliarcsecond",
            "Milliradian",
            "Radians",
            "Revolution",
        ];
    }

    function getAreaOptions() {
        return [
            "Acre",
            "Are",
            "Barn",
            "Hectare",
            "Rood",
            "Square Centimeter",
            "Square Decimeter",
            "Square Feet",
            "Square Inch",
            "Square Meter",
            "Square Mile",
            "Square Millimeter",
            "Square Rod",
            "Square Yard",
        ];
    }

    function getDataTransferRateOptions() {
        return [
            "Bits per second",
            "Gibibit per second",
            "Gigabit per second",
            "Gigabyte per second",
            "Kibibit per second",
            "Kilobit per second",
            "Kilobyte per second",
            "Mebibit per second",
            "Megabit per second",
            "Megabyte per second",
            "Tebibit per second",
            "Terabit per second",
            "Terabyte per second",
        ];
    }

    function getDigitalStorageOptions() {
        return [
            "Bit",
            "Byte",
            "Gibibit",
            "Gibibyte",
            "Gigabit",
            "Gigabyte",
            "Kibibit",
            "Kibibyte",
            "Kilobit",
            "Kilobyte",
            "Mebibit",
            "Mebibyte",
            "Migabit",
            "Migabyte",
            "Pebibit",
            "Pebibyte",
            "Petabyte",
            "Tebibit",
            "Tebibyte",
            "Teaabit",
            "Terabyte",
        ];
    }

    function getDurationOptions() {
        return [
            "Century",
            "Days",
            "Decade",
            "Femtosecond",
            "Fortnight",
            "Hours",
            "Microseconds",
            "Millennium",
            "Milliseconds",
            "Minutes",
            "Months",
            "Nanoseconds",
            "Picoseconds",
            "Seconds",
            "Sidereal Year",
            "Weeks",
            "Years",
        ];
    }

    function getEnergyOptions() {
        return [
            "Attoelectron volt",
            "BTV",
            "Centielectron volt",
            "Decaelectron volt",
            "Decielectron volt",
            "Electron volt",
            "Erg",
            "Exaelectron volt",
            "Femtoelectron volt",
            "Foot Pound",
            "Gigaelectron volt",
            "Gramcalorie",
            "Hectoelectron volt",
            "Joule",
            "Kiloelectron volt",
            "Kilojoule",
            "Megaelectron volt",
            "Microelectron volt",
            "Millielectron volt",
            "Nanoelectron volt",
            "Petaelectron volt",
            "Picoelectron volt",
            "Teraelectron volt",
            "Watt Hour",
            "Yoctoelectron volt",
            "Yottaelectron volt",
            "Zeptoelectron volt",
            "Zettaelectron volt"
        ];
    }

    function getForceOptions() {
        return [
            "Dyne",
            "Gram Force",
            "Kilo Newton",
            "Kilogram Force",
            "Kip",
            "Newton",
            "Ounce Force",
            "Pound Force",
            "Ton Force Metric"
        ];
    }

    function getFrequencyOptions() {
        return [
            "Exahertz",
            "Gigahertz",
            "Hertz",
            "Kilohertz",
            "Megahertz",
            "Microhertz",
            "Millihertz",
            "Petahertz",
            "Terahertz",
        ];
    }

    function getLengthOptions() {
        return [
            "Angstrom",
            "Astronomical unit",
            "Centimeter",
            "Chains",
            "Decameter",
            "Feet",
            "Hectometer",
            "Inch",
            "Kilometer",
            "Light year",
            "Link",
            "Micrometer",
            "Mil",
            "Mile",
            "Millimeter",
            "Nanometer",
            "Nautical mile",
            "Parsec",
            "Picometer",
            "Rod",
            "Yard",
        ];
    }

    function getMassOptions() {
        return [
            "Atomic Mass Unit",
            "Carat",
            "Centigram",
            "Decigram",
            "Dekagram",
            "Dram",
            "Femtogram",
            "French Quintal",
            "Grain",
            "Gram",
            "Hectogram",
            "Hundredweight",
            "Kilogram",
            "Long Ton",
            "Megagram",
            "Metric Quintal",
            "Metric Ton",
            "Microgram",
            "Milligram",
            "Ounce",
            "Picogram",
            "Pound",
            "Short Ton",
            "Slug",
            "Stick",
            "Stone",
            "Tola",
            "Ton",
            "Troy Ounce",
            "US Quintal"
        ];
    }

    function getPowerOptions() {
        return [
            "Exawatt",
            "Gigawatt",
            "HP",
            "Kilowatt",
            "Megawatt",
            "Petawatt",
            "Terawatt",
            "Watt"
        ];
    }

    function getPressureOptons() {
        return [
            "Atmosphere",
            "Bars",
            "Barye",
            "Centibars",
            "cmH2O",
            "Gigabar",
            "Gigapascal",
            "Hectopascal",
            "Kilobar",
            "Kilopascal",
            "Megabar",
            "Megapascal",
            "Minibar",
            "Minipascal",
            "mmH2O",
            "mmHg",
            "Pascal",
            "PSI",
            "Standard Atmosphere",
            "Technical Atmosphere",
            "Torr"
        ];
    }

    function getSpeedOptions() {
        return [
            "Feet per second",
            "Kilometres per hour",
            "Knot",
            "Metres per second",
            "Miles per hour"
        ];
    }

    function getTemperatureOptions() {
        return [
            "Celsius",
            "Fahrenheit",
            "Kelvin",
            "Rankine"
        ]
    }

    function getVolumeOptions() {
        return [
            "Beerbarrel",
            "Centilitre",
            "Cubic centimeter",
            "Cubic Foot",
            "Cubic Inch",
            "Cubic Yard",
            "Cup (Imperial)",
            "Cup (US Legal)",
            "Decalitre",
            "Decilitre",
            "Drop",
            "Fluid Dram",
            "Fluid Ounce (Imperial)",
            "Fluid Ounce (US)",
            "Gallon (Imperial)",
            "Gallon (US)",
            "Gill",
            "Hectolitre",
            "Hogshead",
            "Litre",
            "Millilitre",
            "Minim",
            "Oilbarrel",
            "Pint (US)",
            "Quart (Imperial)",
            "Quart (US)",
            "Tablespoon (Imperial)",
            "Tablespoon (US)",
            "Teaspoon (Imperial)",
            "Teaspoon (US)",
        ];
    }

    function celsiusToKelvin(temperature) {
        return temperature + 273.15;
    }

    function kelvinToCelsius(temperature) {
        return temperature - 273.15;
    }

    function celsiusToFahrenheit(temperature) {
        return (temperature * 1.8) + 32;
    }

    function fahrenheitToCelsius(temperature) {
        return (temperature / 1.8) - 32;
    }

    function celsiusToRankine(temperature) {
        return (temperature * 1.8) + 491.67;
    }

    function rankineToCelsius(temperature) {
        return (temperature / 1.8) - 491.67;
    }


    "Exawatt",
    "Gigawatt",
    "HP",
    "Kilowatt",
    "Megawatt",
    "Petawatt",
    "Terawatt",
    "Watt"

    function wattToHp(power) {
        return power * 0.001341022;
    }

    function wattToExawatt(power) {
        return power * 0.000000000000000001;
    }

    function wattToGigawatt(power) {
        return power * 0.000000001;
    }

    function wattToKilowatt(power) {
        return power * 0.001;
    }

    function wattToMegawatt(power) {
        return power * 0.000001;
    }

    function wattToPetawatt(power) {
        return power * 0.000000000000001;
    }

    function wattToTerawatt(power) {
        return power * 0.000000000001;
    }
































    function bitToGibibit(bit) {
        return bit / 1073742000;
    }

    function bitToGigabit(bit) {
        return bit / 1000000000;
    }

    function bitToGigabyte(bit) {
        return bit / 8000000000;
    }

    function bitToKibibit(bit) {
        return bit / 1024;
    }

    function bitToKilobit(bit) {
        return bit / 1000;
    }

    function bitToKilobyte(bit) {
        return bit / 8000;
    }

    function bitToMebibit(bit) {
        return bit / 1048576;
    }

    function bitToMegabit(bit) {
        return bit / 1000000;
    }

    function bitToMegabyte(bit) {
        return bit / 8000000;
    }

    function bitToTebibit(bit) {
        return bit / 1099512000000;
    }

    function bitToTerabit(bit) {
        return bit / 1000000000000;
    }

    function bitToTerabyte(bit) {
        return bit / 8000000000000;
    }

    ///////////////////////////////

    function gibibitToBit(gibibit) {
        return gibibit * 1073742000;
    }

    function gibibitToGigabit(gibibit) {
        return bitToGibibit(gibibitToBit(gibibit));
    }

    function gibibitToGigabyte(gibibit) {
        return bitToGigabyte(gibibitToBit(gibibit));
    }

    function gibibitToKibibit(gibibit) {
        return bitToKibibit(gibibitToBit(gibibit));
    }

    function gibibitToKilobit(gibibit) {
        return bitToKilobit(gibibitToBit(gibibit));
    }

    function gibibitToKilobyte(gibibit) {
        return bitToKilobyte(gibibitToBit(gibibit));
    }

    function gibibitToMebibit(gibibit) {
        return bitToMebibit(gibibitToBit(gibibit));
    }

    function gibibitToMegabit(gibibit) {
        return bitToMegabit(gibibitToBit(gibibit));
    }

    function gibibitToMegabyte(gibibit) {
        return bitToMegabyte(gibibitToBit(gibibit));
    }

    function gibibitToTebibit(gibibit) {
        return bitToTebibit(gibibitToBit(gibibit));
    }

    function gibibitToTerabit(gibibit) {
        return bitToTerabit(gibibitToBit(gibibit));
    }

    function gibibitToTerabyte(gibibit) {
        return bitToTerabyte(gibibitToBit(gibibit));
    }

    /////////////////////////////////////////////////

    function gigabitToBit(gigabit) {
        return gigabit * 1000000000;
    }

    function gigabitToGibibit(gigabit) {
        return bitToGibibit(gigabitToBit(gigabit));
    }

    function gigabitToGigabyte(gigabit) {
        return bitToGigabyte(gigabitToBit(gigabit));
    }

    function gigabitToKibibit(gigabit) {
        return bitToKibibit(gigabitToBit(gigabit));
    }

    function gigabitToKilobit(gigabit) {
        return bitToKilobit(gigabitToBit(gigabit));
    }

    function gigabitToKilobyte(gigabit) {
        return bitToKilobyte(gigabitToBit(gigabit));
    }

    function gigabitToMebibit(gigabit) {
        return bitToMebibit(gigabitToBit(gigabit));
    }

    function gigabitToMegabit(gigabit) {
        return bitToMegabit(gigabitToBit(gigabit));
    }

    function gigabitToMegabyte(gigabit) {
        return bitToMegabyte(gigabitToBit(gigabit));
    }

    function gigabitToTebibit(gigabit) {
        return bitToTebibit(gigabitToBit(gigabit));
    }

    function gigabitToTerabit(gigabit) {
        return bitToTerabit(gigabitToBit(gigabit));
    }

    function gigabitToTerabyte(gigabit) {
        return bitToTerabyte(gigabitToBit(gigabit));
    }

    ////////////////////////////////////////////////

    function gigabyteToBit(gigabyte) {
        return gigabyte * 8000000000;
    }

    function gigabyteToGibibit(gigabyte) {
        return bitToGibibit(gigabyteToBit(gigabyte));
    }

    function gigabyteToGigabit(gigabyte) {
        return bitToGigabit(gigabyteToBit(gigabyte));
    }

    function gigabyteToKibibit(gigabyte) {
        return bitToKibibit(gigabyteToBit(gigabyte));
    }

    function gigabyteToKilobit(gigabyte) {
        return bitToKilobit(gigabyteToBit(gigabyte));
    }

    function gigabyteToKilobyte(gigabyte) {
        return bitToKilobyte(gigabyteToBit(gigabyte));
    }

    function gigabyteToMebibit(gigabyte) {
        return bitToMebibit(gigabyteToBit(gigabyte));
    }

    function gigabyteToMegabit(gigabyte) {
        return bitToMegabit(gigabyteToBit(gigabyte));
    }

    function gigabyteToMegabyte(gigabyte) {
        return bitToMegabyte(gigabyteToBit(gigabyte));
    }

    function gigabyteToTebibit(gigabyte) {
        return bitToTebibit(gigabyteToBit(gigabyte));
    }

    function gigabyteToTerabit(gigabyte) {
        return bitToTerabit(gigabyteToBit(gigabyte));
    }

    function gigabyteToTerabyte(gigabyte) {
        return bitToTerabyte(gigabyteToBit(gigabyte));
    }
    ///////////////////////////////////////////////////
    function kibibitToBit(kibibit) {
        return kibibit * 1024;
    }

    function kibibitToGibibit(kibibit) {
        return bitToGibibit(kibibitToBit(kibibit));
    }

    function kibibitToGigabit(kibibit) {
        return bitToGigabit(kibibitToBit(kibibit));
    }

    function kibibitToGigabyte(kibibit) {
        return bitToGigabyte(kibibitToBit(kibibit));
    }

    function kibibitToKilobit(kibibit) {
        return bitToKilobit(kibibitToBit(kibibit));
    }

    function kibibitToKilobyte(kibibit) {
        return bitToKilobyte(kibibitToBit(kibibit));
    }

    function kibibitToMebibit(kibibit) {
        return bitToMebibit(kibibitToBit(kibibit));
    }

    function kibibitToMegabit(kibibit) {
        return bitToMegabit(kibibitToBit(kibibit));
    }

    function kibibitToMegabyte(kibibit) {
        return bitToMegabyte(kibibitToBit(kibibit));
    }

    function kibibitToTebibit(kibibit) {
        return bitToTebibit(kibibitToBit(kibibit));
    }

    function kibibitToTerabit(kibibit) {
        return bitToTerabit(kibibitToBit(kibibit));
    }

    function kibibitToTerabyte(kibibit) {
        return bitToTerabyte(kibibitToBit(kibibit));
    }

    //////////////////////////////////////////////

    function kilobitToBit(kilobit) {
        return kilobit * 1000;
    }

    function kilobitToGibibit(kilobit) {
        return bitToGibibit(kilobitToBit(kilobit));
    }

    function kilobitToGigabit(kilobit) {
        return bitToGigabit(kilobitToBit(kilobit));
    }

    function kilobitToGigabyte(kilobit) {
        return bitToGigabyte(kilobitToBit(kilobit));
    }

    function kilobitToKibibit(kilobit) {
        return bitToKibibit(kilobitToBit(kilobit));
    }

    function kilobitToKilobyte(kilobit) {
        return bitToKilobyte(kilobitToBit(kilobit));
    }

    function kilobitToMebibit(kilobit) {
        return bitToMebibit(kilobitToBit(kilobit));
    }

    function kilobitToMegabit(kilobit) {
        return bitToMegabit(kilobitToBit(kilobit));
    }

    function kilobitToMegabyte(kilobit) {
        return bitToMegabyte(kilobitToBit(kilobit));
    }

    function kilobitToTebibit(kilobit) {
        return bitToTebibit(kilobitToBit(kilobit));
    }

    function kilobitToTerabit(kilobit) {
        return bitToTerabit(kilobitToBit(kilobit));
    }

    function kilobitToTerabyte(kilobit) {
        return bitToTerabyte(kilobitToBit(kilobit));
    }

    /////////////////////////////////////////////

    function kilobyteToBit(kilobyte) {
        return kilobyte * 8000;
    }

    function kilobyteToGibibit(kilobyte) {
        return bitToGibibit(kilobyteToBit(kilobyte));
    }

    function kilobyteToGigabit(kilobyte) {
        return bitToGigabit(kilobyteToBit(kilobyte));
    }

    function kilobyteToGigabyte(kilobyte) {
        return bitToGigabyte(kilobyteToBit(kilobyte));
    }

    function kilobyteToKibibit(kilobyte) {
        return bitToKibibit(kilobyteToBit(kilobyte));
    }

    function kilobyteToKilobit(kilobyte) {
        return bitToKilobit(kilobyteToBit(kilobyte));
    }

    function kilobyteToMebibit(kilobyte) {
        return bitToMebibit(kilobyteToBit(kilobyte));
    }

    function kilobyteToMegabit(kilobyte) {
        return bitToMegabit(kilobyteToBit(kilobyte));
    }

    function kilobyteToMegabyte(kilobyte) {
        return bitToMegabyte(kilobyteToBit(kilobyte));
    }

    function kilobyteToTebibit(kilobyte) {
        return bitToTebibit(kilobyteToBit(kilobyte));
    }

    function kilobyteToTerabit(kilobyte) {
        return bitToTerabit(kilobyteToBit(kilobyte));
    }

    function kilobyteToTerabyte(kilobyte) {
        return bitToTerabyte(kilobyteToBit(kilobyte));
    }

    ////////////////////////////////////////////////

    function mebibitToBit(mebibit) {
        return mebibit * 1048576;
    }

    function mebibitToGibibit(mebibit) {
        return bitToGibibit(mebibitToBit(mebibit));
    }

    function mebibitToGigabit(mebibit) {
        return bitToGigabit(mebibitToBit(mebibit));
    }

    function mebibitToGigabyte(mebibit) {
        return bitToGigabyte(mebibitToBit(mebibit));
    }

    function mebibitToKibibit(mebibit) {
        return bitToKibibit(mebibitToBit(mebibit));
    }

    function mebibitToKilobit(mebibit) {
        return bitToKilobit(mebibitToBit(mebibit));
    }

    function mebibitToKilobyte(mebibit) {
        return bitToKilobyte(mebibitToBit(mebibit));
    }

    function mebibitToMegabit(mebibit) {
        return bitToMegabit(mebibitToBit(mebibit));
    }

    function mebibitToMegabyte(mebibit) {
        return bitToMegabyte(mebibitToBit(mebibit));
    }

    function mebibitToTebibit(mebibit) {
        return bitToTebibit(mebibitToBit(mebibit));
    }

    function mebibitToTerabit(mebibit) {
        return bitToTerabit(mebibitToBit(mebibit));
    }

    function mebibitToTerabyte(mebibit) {
        return bitToTerabyte(mebibitToBit(mebibit));
    }

    //////////////////////////////////////////////////

    function megabitToBit(megabit) {
        return megabit * 1000000;
    }

    function megabitToGibibit(megabit) {
        return bitToGibibit(megabitToBit(megabit));
    }

    function megabitToGigabit(megabit) {
        return bitToGigabit(megabitToBit(megabit));
    }

    function megabitToGigabyte(megabit) {
        return bitToGigabyte(megabitToBit(megabit));
    }

    function megabitToKibibit(megabit) {
        return bitToKibibit(megabitToBit(megabit));
    }

    function megabitToKilobit(megabit) {
        return bitToKilobit(megabitToBit(megabit));
    }

    function megabitToKilobyte(megabit) {
        return bitToKilobyte(megabitToBit(megabit));
    }

    function megabitToMebibit(megabit) {
        return bitToMebibit(megabitToBit(megabit));
    }

    function megabitToMegabyte(megabit) {
        return bitToMegabyte(megabitToBit(megabit));
    }

    function megabitToTebibit(megabit) {
        return bitToTebibit(megabitToBit(megabit));
    }

    function megabitToTerabit(megabit) {
        return bitToTerabit(megabitToBit(megabit));
    }

    function megabitToTerabyte(megabit) {
        return bitToTerabyte(megabitToBit(megabit));
    }
    ////////////////////////////////////////////////////

    function megabyteToBit(megabyte) {
        return megabyte * 8000000;
    }

    function megabyteToGibibit(megabyte) {
        return bitToGibibit(megabyteToBit(megabyte));
    }

    function megabyteToGigabit(megabyte) {
        return bitToGigabit(megabyteToBit(megabyte));
    }

    function megabyteToGigabyte(megabyte) {
        return bitToGigabyte(megabyteToBit(megabyte));
    }

    function megabyteToKibibit(megabyte) {
        return bitToKibibit(megabyteToBit(megabyte));
    }

    function megabyteToKilobit(megabyte) {
        return bitToKilobit(megabyteToBit(megabyte));
    }

    function megabyteToKilobyte(megabyte) {
        return bitToKilobyte(megabyteToBit(megabyte));
    }

    function megabyteToMebibit(megabyte) {
        return bitToMebibit(megabyteToBit(megabyte));
    }

    function megabyteToMegabit(megabyte) {
        return bitToMegabit(megabyteToBit(megabyte));
    }

    function megabyteToTebibit(megabyte) {
        return bitToTebibit(megabyteToBit(megabyte));
    }

    function megabyteToTerabit(megabyte) {
        return bitToTerabit(megabyteToBit(megabyte));
    }

    function megabyteToTerabyte(megabyte) {
        return bitToTerabyte(megabyteToBit(megabyte));
    }
    //////////////////////////////////////////////

    function tebibitToBit(tebibit) {
        return tebibit * 1099512000000;
    }

    function tebibitToGibibit(tebibit) {
        return bitToGibibit(tebibitToBit(tebibit));
    }

    function tebibitToGigabit(tebibit) {
        return bitToGigabit(tebibitToBit(tebibit));
    }

    function tebibitToGigabyte(tebibit) {
        return bitToGigabyte(tebibitToBit(tebibit));
    }

    function tebibitToKibibit(tebibit) {
        return bitToKibibit(tebibitToBit(tebibit));
    }

    function tebibitToKilobit(tebibit) {
        return bitToKilobit(tebibitToBit(tebibit));
    }

    function tebibitToKilobyte(tebibit) {
        return bitToKilobyte(tebibitToBit(tebibit));
    }

    function tebibitToMebibit(tebibit) {
        return bitToMebibit(tebibitToBit(tebibit));
    }

    function tebibitToMegabit(tebibit) {
        return bitToMegabit(tebibitToBit(tebibit));
    }

    function tebibitToMegabyte(tebibit) {
        return bitToMegabyte(tebibitToBit(tebibit));
    }

    function tebibitToTerabit(tebibit) {
        return bitToTerabit(tebibitToBit(tebibit));
    }

    function tebibitToTerabyte(tebibit) {
        return bitToTerabyte(tebibitToBit(tebibit));
    }

    //////////////////////////////////////////////////

    function terabitToBit(terabit) {
        return terabit * 1000000000000;
    }

    function terabitToGibibit(terabit) {
        return bitToGibibit(terabitToBit(terabit));
    }

    function terabitToGigabit(terabit) {
        return bitToGigabit(terabitToBit(terabit));
    }

    function terabitToGigabyte(terabit) {
        return bitToGigabyte(terabitToBit(terabit));
    }

    function terabitToKibibit(terabit) {
        return bitToKibibit(terabitToBit(terabit));
    }

    function terabitToKilobit(terabit) {
        return bitToKilobit(terabitToBit(terabit));
    }

    function terabitToKilobyte(terabit) {
        return bitToKilobyte(terabitToBit(terabit));
    }

    function terabitToMebibit(terabit) {
        return bitToMebibit(terabitToBit(terabit));
    }

    function terabitToMegabit(terabit) {
        return bitToMegabit(terabitToBit(terabit));
    }

    function terabitToMegabyte(terabit) {
        return bitToMegabyte(terabitToBit(terabit));
    }

    function terabitToTebibit(terabit) {
        return bitToTebibit(terabitToBit(terabit));
    }

    function terabitToTerabyte(terabit) {
        return bitToTerabyte(terabitToBit(terabit));
    }
    //////////////////////////////////////////////

    function terabyteToBit(terabyte) {
        return terabyte * 8000000000000;
    }

    function terabyteToGibibit(terabyte) {
        return bitToGibibit(terabyteToBit(terabyte));
    }

    function terabyteToGigabit(terabyte) {
        return bitToGigabit(terabyteToBit(terabyte));
    }

    function terabyteToGigabyte(terabyte) {
        return bitToGigabyte(terabyteToBit(terabyte));
    }

    function terabyteToKibibit(terabyte) {
        return bitToKibibit(terabyteToBit(terabyte));
    }

    function terabyteToKilobit(terabyte) {
        return bitToKilobit(terabyteToBit(terabyte));
    }

    function terabyteToKilobyte(terabyte) {
        return bitToKilobyte(terabyteToBit(terabyte));
    }

    function terabyteToMebibit(terabyte) {
        return bitToMebibit(terabyteToBit(terabyte));
    }

    function terabyteToMegabit(terabyte) {
        return bitToMegabit(terabyteToBit(terabyte));
    }

    function terabyteToMegabyte(terabyte) {
        return bitToMegabyte(terabyteToBit(terabyte));
    }

    function terabyteToTebibit(terabyte) {
        return bitToTebibit(terabyteToBit(terabyte));
    }

    function terabyteToTerabit(terabyte) {
        return bitToTerabit(terabyteToBit(terabyte));
    }