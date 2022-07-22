// Assignment code here
var uppercaseletters =['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
var lowercaseletters =['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
var specialchar =["!","@","#","$","%","^","&","*","(",")","+","~","<",">","/"]
var allnumeros =["1","2","3","4","5","6","7","8","9","0"]
var alltogether=""
// Get references to the #generate element
//The #generate id is the red button,this targets that button
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//prompt comes up asking how many characters they want(8-128)
var chosenlength =prompt('How many characters(8-128)?');
if(chosenlength <8 ||chosenlength >128){
  alert('Thats not going to work');
  generatePassword()
}
else{
     //Then prompt comes up that ask whether or not to include lowercase
    var lc = (confirm("Would you like lowercase"));
    if (lc){
        alltogether += lowercaseletters
    };
    // uppercase?
    var uc = (confirm("Would you like uppercase"));
    if (uc){
      alltogether+= uppercaseletters
    };
    //numeric values]
    var nummy= (confirm("Would you like numbers"));
    if (nummy){
      alltogether+=allnumeros
    };
    //Special characters
   var sc = (confirm("What about special characters"));
    if (sc){
      alltogether+=specialchar
      console.log(alltogether)
    };
    //Mathrandom
    var grouppick =alltogether.split(",").join("")
    console.log(grouppick)
    var password=""
    for (var i=0; i<chosenlength; i++){
      password += grouppick.charAt(Math.floor(Math.random() * grouppick.length))
  
    }

}

//Display password
  return password
}

// Write password to the #password input
function writePassword() {
//Need to create create generatePassword() function
//This is where the password displays
//document means any web page loaded in the browser 
//queryselector returns whatever element is in the selector
  var password = generatePassword();
 
  var passwordText = document.querySelector("#password");
//.value sets the value 
  passwordText.value = password;

}

// Add event listener to generate button
//The addEventListener() method attaches an event handler to a document.
generateBtn.addEventListener("click", writePassword);
