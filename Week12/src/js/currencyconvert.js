document.myForm.usdFM_INPUT.focus();

function calculate() {
    //declare const and var
    const euro_c = 0.84;
    const pound_c = 0.77;
    const aud_c = 1.40;
    const peso_c = 20.86;
    const can_c = 1.31;
    const lira_c = 7.96;
    const yen_c = 104.76;
    const franc_c = 0.90;

    var euro, pound, aud, peso, can, lira, yen, franc;

    //get values from text fields
    var usd = parseFloat(document.myForm.usdFM_INPUT.value);

    //calculate currency conversions
    euro = usd * euro_c;
    pound = usd * pound_c;
    aud = usd * aud_c;
    peso = usd * peso_c;
    can = usd * can_c;
    lira = usd * lira_c;
    yen = usd * yen_c;
    franc = usd * franc_c;

    //display the converted currencies
    document.getElementById("euroFM_OUTPUT").innerHTML = "<strong><p style='font-family:Arial; display:inline; color:black;'>&#8364</p>" + euro.toFixed(2) + "</stong>";
    document.getElementById("poundFM_OUTPUT").innerHTML = "<strong><p style='font-family:Arial; display:inline; color:black;'>&#163</p>" + pound.toFixed(2) + "</stong>";
    document.getElementById("ausFM_OUTPUT").innerHTML = "<strong><p style='font-family:Arial; display:inline; color:black;'>$</p>" + aud.toFixed(2) + "</stong>";
    document.getElementById("pesoFM_OUTPUT").innerHTML = "<strong><p style='font-family:Arial; display:inline; color:black;'>&#8369</p>" + peso.toFixed(2) + "</stong>";
    document.getElementById("canFM_OUTPUT").innerHTML = "<strong><p style='font-family:Arial; display:inline; color:black;'>$</p>" + can.toFixed(2) + "</stong>";
    document.getElementById("liraFM_OUTPUT").innerHTML = "<strong><p style='font-family:Arial; display:inline; color:black;'>&#8378</p>" + lira.toFixed(2) + "</stong>";
    document.getElementById("yenFM_OUTPUT").innerHTML = "<strong><p style='font-family:Arial; display:inline; color:black;'>&#165</p>" + yen.toFixed(2) + "</stong>";
    document.getElementById("francFM_OUTPUT").innerHTML = "<strong><p style='font-family:Arial; display:inline; color:black;'>&#8355</p>" + franc.toFixed(2) + "</stong>";

}

function clearInfo() {
    document.myForm.usdFM_INPUT.value = "";
    document.getElementById("euroFM_OUTPUT").innerHTML = "";
    document.getElementById("poundFM_OUTPUT").innerHTML = "";
    document.getElementById("ausFM_OUTPUT").innerHTML = "";
    document.getElementById("pesoFM_OUTPUT").innerHTML = "";
    document.getElementById("canFM_OUTPUT").innerHTML = "";
    document.getElementById("liraFM_OUTPUT").innerHTML = "";
    document.getElementById("yenFM_OUTPUT").innerHTML = "";
    document.getElementById("francFM_OUTPUT").innerHTML = "";

    document.myForm.usdFM_INPUT.focus();
}

clearInfo();