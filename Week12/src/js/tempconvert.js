document.myForm.farenFM_INPUT.focus();

function calculateCelc() {
    //declare const and var
    const faren_c = 32; //value to adjust farenheit conversion
    const faren_m = (5 / 9); //value to multiply for faren to celc conversion

    var outputCelc;

    //get values from text fields
    var faren = parseFloat(document.myForm.farenFM_INPUT.value);

    //calculate conversions
    outputCelc = (faren - faren_c) * faren_m;

    //display the converted temp in celcius
    document.getElementById("celciusFM_OUTPUT").innerHTML = "<strong>" + outputCelc.toFixed(2) + "&degC</strong>";
}

function calculateFaren() {
    //declare const and var
    const faren_c = 32; //value to adjust farenheit conversion
    const celc_m = 1.8; //value to multiply for celc to faren conversion

    var outputFaren;

    //get values from text fields
    var celc = parseFloat(document.myForm.celciusFM_INPUT.value);

    //calculate conversions
    outputFaren = (celc * celc_m) + faren_c;

    //display the converted temp in faren
    document.getElementById("farenFM_OUTPUT").innerHTML = "<strong>" + outputFaren.toFixed(2) + "&degF</strong>";
}

function clearInfoFaren() {
    document.myForm.celciusFM_INPUT.value = "";
    document.getElementById("farenFM_OUTPUT").innerHTML = "";

    document.myForm.celcFM_INPUT.focus();
}

function clearInfoCelc() {
    document.myForm.farenFM_INPUT.value = "";
    document.getElementById("celciusFM_OUTPUT").innerHTML = "";

    document.myForm.farenFM_INPUT.focus();
}

clearInfoCelc();
clearInfoFaren();