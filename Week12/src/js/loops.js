//create array
names = new Array();
var i = 0;

//loop thru and prompt for names
do {
    next = window.prompt("Enter the next name", "");
    if (next > " ") names[i] = next;
    i++;
} while (next > " ");

//display number of names entered
document.write("<h2>" + (names.length) + " names entered.</h2>");

//display contents of names array
document.write("<ol>");
for (i in names) {
    document.write("<li>" + names[i] + "</li>");
}

//close list
document.write("</ol>");