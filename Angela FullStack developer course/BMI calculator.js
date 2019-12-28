//Create your function below this line.

var weight = prompt("What is your weight in Kg?");
var height = prompt("What is your height in meters");


function bmiCalculator(weight, height){
	var bmi = weight/Math.pow(height,2);
	return Math.round(bmi); //redondea el resultado
}


// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(weight, height); 
if (bmi < 18.5) {
	alert("Your BMI is " + bmi + ", so you are underweight.");
}
if (bmi >= 18.5 && bmi <= 24.9) {
	alert("Your BMI is " + bmi + ", so you have normal weight.");
}
if (bmi > 24.9) {
	alert("Your BMI is " + bmi + ", so you are overweight.");
}

// bmi should equal around 20 in this case.

