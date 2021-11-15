//Get the current date
now = new Date();

//split into hrs, mins, secs
hour = now.getHours();
min = now.getMinutes();
sec = now.getSeconds();

//display time
document.write("<h2>");
document.write(hour + ":" + min + ":" + sec);
document.write("</h2>");

//display a greeting
//open paragraph
document.write("<p>");

//change the greeting based on time
if (hour < 10) {
    document.write("Good morning.");
} else if ((hour >= 14) && (hour <= 17)) {
    document.write("Good afternoon.");
} else if (hour >= 17) {
    document.write("Good evening.");
} else {
    document.write("Good day.");
}

//close paragraph
document.write("</p>");