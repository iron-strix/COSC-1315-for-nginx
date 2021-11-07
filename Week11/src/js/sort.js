//init the counter and the array
var numbernames = 0;
var names = new Array();

function SortNames() {
    //get the name from the text field
    thename=document.theform.newname.value;

    //add the name to the array
    names[numbernames]=thename;

    //increment
    numbernames++;

    //sort
    names.sort();

    document.theform.sorted.value=names.join("\n");
}