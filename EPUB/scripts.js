//first questions

function myFunction(){
	var s = document.getElementById('item1');
	var item1 = s.options[s.selectedIndex].value;

	if (item1 == 1) {
		document.getElementById("kat").innerHTML="0/1";
	}
	else if (item1 == 2) {
			document.getElementById("kat").innerHTML="0/1";
	}
	else if (item1 == 3) {
		 document.getElementById("kat1").innerHTML="1/1";
	}
}

//second question
function myFunction(){
	var s = document.getElementById('item2');
	var item2 = s.options[s.selectedIndex].value;

	if (item2 == 1) {
		document.getElementById("kat").innerHTML="0/1";
	}
	else if (item2 == 2) {
			document.getElementById("kat2").innerHTML="0/1";
	}
	else if (item2 == 3) {
		 document.getElementById("kat2").innerHTML="1/1";
	}
}

//third question
function myFunction(){
	var s = document.getElementById('item3');
	var item3 = s.options[s.selectedIndex].value;

	if (item3 == 1) {
		document.getElementById("kat3").innerHTML="0/1";
	}
	else if (item3 == 2) {
			document.getElementById("kat3").innerHTML="0/1";
	}
	else if (item3 == 3) {
		 document.getElementById("kat3").innerHTML="1/1";
	}
}

//fourth question

function myFunction(){
	var s = document.getElementById('item4');
	var item4 = s.options[s.selectedIndex].value;

	if (item4 == 1) {
		document.getElementById("kat").innerHTML="0/1";
	}
	else if (item4 == 2) {
			document.getElementById("kat").innerHTML="0/1";
	}
	else if (item4 == 3) {
		 document.getElementById("kat4").innerHTML="1/1";
	}
}

// ----------------------------------------------

function myFunction(){
    var answer1=parseInt(document.getElementById('in1').value);
    var answer2=parseInt(document.getElementById('in2').value);
    var answer3=parseInt(document.getElementById('in3').value);
    var answer4=parseInt(document.getElementById('in4').value);
    var answer5=parseInt(document.getElementById('in5').value);
     
    var res1=answer1.upperCase();
    var res2=answer2.upperCase();
    var res3=answer3.upperCase();
    var res4=answer4.upperCase();
    var res5=answer5.upperCase();
if(res1 === "KADWEKA"){
	alert("great")
}
};