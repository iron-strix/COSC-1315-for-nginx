document.myForm.nightsFM_INPUT.focus();

function calculate() {
    //declare const and var
    const salesTax_c = 0.0825;
    const cityTax_c = 0.007;
    const stateTax_c = 0.006;

    //input vars
    var nights, rate, service, phone, misc;
    nights = parseInt(document.myForm.nightsFM_INPUT.value);
    rate = parseFloat(document.myForm.rateFM_INPUT.value);
    service = parseFloat(document.myForm.serviceFM_INPUT.value);
    phone = parseFloat(document.myForm.phoneFM_INPUT.value);
    misc = parseFloat(document.myForm.miscFM_INPUT.value);

    //output vars
    var rmOutput, additionalOutput, subtotal,
        salesTaxOutput, cityTaxOutput, stateTaxOutput,
        total;

    //calculations
    rmOutput = nights * rate;
    additionalOutput = service + phone + misc;
    subtotal = rmOutput + additionalOutput;
    salesTaxOutput = salesTax_c * additionalOutput; //sales tax is only applied to non room charges
    cityTaxOutput = cityTax_c * rmOutput;
    stateTaxOutput = stateTax_c * rmOutput;
    total = subtotal + salesTaxOutput + cityTaxOutput + stateTaxOutput;

    //display
    const args = new Map(
        [
            ["roomFM_OUTPUT", rmOutput],
            ["additionalFM_OUTPUT", additionalOutput],
            ["subtotalFM_OUTPUT", subtotal],
            ["salestaxFM_OUTPUT", salesTaxOutput],
            ["citytaxFM_OUTPUT", cityTaxOutput],
            ["statetaxFM_OUTPUT", stateTaxOutput],
            ["totalFM_OUTPUT", total]
        ]
    );

    for (const [key, value] of args) {
        document.getElementById(key).innerHTML = "$" + value.toFixed(2);
    }
}

function clearInfo() {
    const inputs = [
        "nightsFM_INPUT",
        "rateFM_INPUT",
        "serviceFM_INPUT",
        "phoneFM_INPUT",
        "miscFM_INPUT"
    ];

    const outputs = [
        "roomFM_OUTPUT",
        "additionalFM_OUTPUT",
        "subtotalFM_OUTPUT",
        "salestaxFM_OUTPUT",
        "citytaxFM_OUTPUT",
        "statetaxFM_OUTPUT",
        "totalFM_OUTPUT"
    ];

    for (let i = 0; i < inputs.length; i++) {
        document.forms["myForm"][inputs[i]].value = "";
    }

    for (const elements of outputs) {
        document.getElementById(elements).innerHTML = "";
    }

    document.myForm.nightsFM_INPUT.focus();
}

clearInfo();