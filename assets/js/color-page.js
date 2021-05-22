function changeColor() {
    switch (document.getElementById("color").value) {
        case "select":
            document.getElementById("body").style.backgroundColor = "white";
            break;
        case "pink":
            document.getElementById("body").style.backgroundColor = "pink";
            break;
        case "blue":
            document.getElementById("body").style.backgroundColor = "blue";
            break;
        case "gray":
            document.getElementById("body").style.backgroundColor = "gray";
            break;
        case "yellow":
            document.getElementById("body").style.backgroundColor = "yellow";
            break;
    }
}