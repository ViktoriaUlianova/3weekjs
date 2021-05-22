function changeColor() {

    switch(document.getElementById("color").value) 
    {
        case "pink": document.getElementsById("color-class").style.backgroundColor = "pink"; break;
        case "blue": document.getElementsByTagName("body").style.backgroundColor = "blue"; break;
        case "gray": document.getElementsByTagName("body").style.backgroundColor = "gray"; break;
        case "yellow": document.getElementsByTagName("body").style.backgroundColor = "yellow"; break;
        
    }
}