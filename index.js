const string = document.getElementById("txt");

function Display (txt){
    string.value += txt;
}

function Clear (){
    string.value = " ";
}

function Delete (){
    string.value = string.value.substring(0, string.value.length - 1);
}

function Calculator (){
    try {
        string.value = eval(txt.value);
    }
    catch(error){
        string.value = "ERROR";
    }
}