'use-strict';
//ANGLE CONSTANTS
const FROM_ANGLE_DEFAULT = 3;
const TO_ANGLE_DEFAULT = 9;

//AREA CONSTANTS
const FROM_AREA_DEFAULT = 9;
const TO_AREA_DEFAULT = 8;

//DATA TRANSFER RATE CONSTANTS
const FROM_DATA_TRANSFER_RATE_DEFAULT = 0;
const TO_DATA_TRANSFER_RATE_DEFAULT = 5;

//DATA STORAGE CONSTANTS
const FROM_DIGITAL_STORAGE_DEFAULT = 0;
const TO_DIGITAL_STORAGE_DEFAULT = 1;

//DURATION CONSTANTS
const FROM_DURATION_DEFAULT = 9;
const TO_DURATION_DEFAULT = 13;

//ENERGY CONSTANTS
const FROM_ENERGY_DEFAULT = 13;
const TO_ENERGY_DEFAULT = 23;

//FORCE CONSTANTS
const FROM_FORCE_DEFAULT = 5;
const TO_FORCE_DEFAULT = 0;

//FREQUENCY CONSTANTS
const FROM_FREQUENCY_DEFAULT = 2;
const TO_FREQUENCY_DEFAULT = 4;


//LENGTH CONSTANTS
const FROM_LENGTH_DEFAULT = 13;
const TO_LENGTH_DEFAULT = 8;

//MASS CONSTANTS
const FROM_MASS_DEFAULT = 12;
const TO_MASS_DEFAULT = 9;

//POWER CONSTANTS
const FROM_POWER_DEFAULT = 7;
const TO_POWER_DEFAULT = 2;

//PRESSURE CONSTANTS
const FROM_PRESSURE_DEFAULT = 16;
const TO_PRESSURE_DEFAULT = 17;

//SPEED CONSTANTS
const FROM_SPEED_DEFAULT = 4;
const TO_SPEED_DEFAULT = 1;

//TEMPERATURE CONSTANTS
const FROM_TEMPERATURE_DEFAULT = 0;
const TO_TEMPERATURE_DEFAULT = 1;

//VOLUME CONSTANTS
const FROM_VOLUME_DEFAULT = 19;
const TO_VOLUME_DEFAULT = 20;

$(document).ready(function () {
    $("select#unit-picker").on("change", function () {
        if ($("select#unit-picker option:selected").val() == "angle") {
            setSelect(getAngleOptions(), FROM_ANGLE_DEFAULT, TO_ANGLE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "area") {
            setSelect(getAreaOptions(), FROM_AREA_DEFAULT, TO_AREA_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "data_transfer_rate") {
            setSelect(getDataTransferRateOptions(), FROM_DATA_TRANSFER_RATE_DEFAULT, TO_DATA_TRANSFER_RATE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "digital_storage") {
            setSelect(getDigitalStorageOptions(), FROM_DIGITAL_STORAGE_DEFAULT, TO_DIGITAL_STORAGE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "duration") {
            setSelect(getDurationOptions(), FROM_DURATION_DEFAULT, TO_DURATION_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "energy") {
            setSelect(getEnergyOptions(), FROM_ENERGY_DEFAULT, TO_ENERGY_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "force") {
            setSelect(getForceOptions(), FROM_FORCE_DEFAULT, TO_FORCE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "frequency") {
            setSelect(getFrequencyOptions(), FROM_FREQUENCY_DEFAULT, TO_FREQUENCY_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "length") {
            setSelect(getLengthOptions(), FROM_LENGTH_DEFAULT, TO_LENGTH_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "mass") {
            setSelect(getMassOptions(), FROM_MASS_DEFAULT, TO_MASS_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "power") {
            setSelect(getPowerOptions(), FROM_POWER_DEFAULT, TO_POWER_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "pressure") {
            setSelect(getPressureOptons(), FROM_PRESSURE_DEFAULT, TO_PRESSURE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "speed") {
            setSelect(getSpeedOptions(), FROM_SPEED_DEFAULT, TO_SPEED_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "temperature") {
            setSelect(getTemperatureOptions(), FROM_TEMPERATURE_DEFAULT, TO_TEMPERATURE_DEFAULT);
        } else if ($("select#unit-picker option:selected").val() == "volume") {
            setSelect(getVolumeOptions(), FROM_VOLUME_DEFAULT, TO_VOLUME_DEFAULT);
        }
    });
});

function setSelect(values, from, to) {
    values.forEach(function (value, index) {
        console.log(value.toLowerCase().replace(/\s/g, ""));
        if (index == from) {
            console.log(`<option value="${value.toLowerCase().replace(/\s/g, "")}" selected>${value}</option>`);
            $("#from").append(`<option value="${value.toLowerCase().replace(/\s/g, "")}" selected>${value}</option>`);
        } else {
            $("#from").append(`<option value="${value.toLowerCase().replace(/\s/g, "")}">${value}</option>`);
        }
        if (index == to) {
            $("#to").append(`<option value="${value.toLowerCase().replace(/\s/g, "")}" selected>${value}</option>`);
        } else {
            $("#to").append(`<option value="${value.toLowerCase().replace(/\s/g, "")}">${value}</option>`);
        }
    });
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
        "Tebibut per second",
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
        "Kilometers per hour",
        "Knot",
        "Metres per second",
        "Miles per hours"
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