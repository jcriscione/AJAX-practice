function processForm() {
    /*var qObj = {};
    qObj["Question"] = document.getElementById("question").value;
    qObj["Answer"] = document.getElementById("answer").value;
    */
    
    var xhr = new XMLHttpRequest();

    // Create some variables we need to send to our PHP file
    var url = "xTestPHP.php";
    var vars = "one";

    xhr.open("POST", url, true);
    //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    xhr.onreadystatechange = function() {
        console.log(xhr);

        if(xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("response").innerHTML = xhr.responseText;
        }
    }

    xhr.send(vars);
    document.getElementById("response").innerHTML = "processing...";

}

