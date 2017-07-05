	$(document).ready(function() {

		//Stores the inputs from the user in a variable
		var inputs = [""];

		//String to store current input string
		var totalString;

		//Operators array for validation whitout .
		var operators1 = ["+", "-", "/", "*"];

		//Operators array with the . for validation 
		var operators2 = ["."];

		//With this variable we can check that every input is a number
		var nums = [0,1,2,3,4,5,6,7,8,9];

		function getValue(input) {
			if (operators2.includes(inputs[inputs.length-1] === true && input === '.')) {
				console.log("Duplicat '.'");
				//Validation so it doesn't start with an operator
			} else if (inputs.length === 1 && operators1.includes(input) === false) {
				inputs.push(input);
				//If last character was not an operator add operator to the array
			} else if (operators1.includes(inputs[inputs.length-1]) === false) {
				inputs.push(input);
			} else if (nums.includes(Number(input))) {
				inputs.push(input);
			}
			update();
		}

		function update() {
			totalString = inputs.join("");
			$("#steps").html(totalString);
		}

		function getTotal() {
			totalString = inputs.join("");
			$("#steps").html(eval(totalString));
		}

		$("button").on("click", function() {
			if (this.id === "deleteAll") {
				inputs = [""];
				update(); 
				document.getElementById("steps").innerHTML = "0";
			} else if (this.id === "backOne") {
				inputs.pop();
				if (inputs.length == 1 || inputs.length == 0) {
					document.getElementById("steps").innerHTML = "0";
				} else {
					update();				
				}
			} else if (this.id === "total") {
				getTotal();
			} else {
				if (inputs.length && inputs[inputs.length-1].indexOf("+", "-", "/", "*") === -1) {
					getValue(this.id);
				} else {
					getValue(this.id);
				}
			}
		})

	});