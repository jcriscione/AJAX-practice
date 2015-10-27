function processForm() {
    /*var qObj = {};
    qObj["question"] = document.getElementById("question").value;
    qObj["answer1"] = document.getElementById("questionA1").value;
    qObj["answer2"] = document.getElementById("questionA2").value;
    qObj["answer3"] = document.getElementById("questionA3").value;

    var str = JSON.stringify(qObj);
    */
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        document.getElementById('response').innerHTML=xhr.responseText;
      }
    };
    xhr.open('GET', 'xTestPHP.php');
    xhr.send();

}
