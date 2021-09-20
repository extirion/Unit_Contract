function unit_test(){
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
     		console.log("Esto es: " + this.responseText);
    	}
  	};

  	xhttp.open("GET", "./src/unit.php", true);
  	xhttp.send();
}

module.exports = {
    "prueba": unit_test
}