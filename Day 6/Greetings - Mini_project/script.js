function showName(){

    let name = document.getElementById("nameInput").value;

    if(name === ""){
        document.getElementById("result").innerText = "Please Enter Your Name"
        return;

    }
    document.getElementById("result").innerText = "Hello" + " " + name;
}


function resetText(){
    document.getElementById("nameInput").value = "";
    document.getElementById("result").innerText = "";

}


function toUpper(){
    let name = document.getElementById("nameInput").value;
     if(name === ""){
        document.getElementById("result").innerText = "Please Enter Your Name"
        return;

    }

    document.getElementById("result").innerText = "HELLO" + " " + name.toUpperCase();



}