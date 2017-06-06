function validate() {
var x = document.forms.input.username.value;
var atPos = x.indexOf("@");
var dotPos = x.lastIndex0f(".");

	//we need... username@webAddress.extension
	//if, the following...
		//@ is not in the string
		//@ is i the wrong place
		//there is no .com, .gov, or any other extension
		//final dot is in the wrong place
if(atPos < 1 || dotPos < atPos+2 || dotPos + 2 > x .lenght)
	alert("This is not a valid email adress!");

else
		alert("Sucess!");
}
