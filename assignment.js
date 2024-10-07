1.
let email = prompt("enter email");
if (email.endsWith("@gmail.com")||
email.endsWith("@mail.com")||
email.endsWith("@yahoomail.com")||
email.endsWith("@uk.com")||
email.endsWith("@email.org")){
    console.log("valid email");
}
else{
    console.log("invalid email");
}

// //2.
let pass = prompt("please input your password").trim()
let lowerCasePassword= pass.charAt(0).toLowerCase() === pass.charAt(0)
let upperCasePassword= pass.charAt(pass.length - 1).toUpperCase() === pass.charAt(pass.length - 1)
let totalPassword = lowerCase && upperCase && pass.includes(0)
if(password){
    console.log("Strong password")
}else{
    console.log("Weak password")
}


//3.
let url = prompt ("please insert your url")
let comfirmUrl = url.startsWith("http://") || url.startsWith("https://")
if(confirmUrl){
    console.log("Valid Url")
}else{
    console.log("Invalid url")
}

//5.
let userName = prompt("please insert your username")
if(userName.length >= 5 &&  userName.length <= 15){
    console.log("please input your password")
}else{
    console.log("kindly input the correct password")
}

// //6.
let firstName = prompt ("please input your firstname").trim().toLowerCase()
let capName = firstName.charAt(0).toUpperCase().concat(firstName.substring(1))
console.log(derivedName)


// //7.
let fileType = prompt("please input your file").trim()
if(fileType.endsWith(".jpg")){
    console.log("It is a JPG file")
}else if(fileType.endsWith(".jpeg")){
    console.log("It is a JPEG file")
}else if(fileType.endsWith(".mp3")){
    console.log("It is a mp3 file")
}else if(fileType.endsWith(".mp4")){
    console.log("It is a mp4 file")
}else if(fileType.endsWith(".svg")){
    console.log("It is a svg file")
}else if(fileType.endsWith(".png")){
    console.log("It is a PNG file")
}else{
    console.log("Unsupported file type")
}

// //8.
let phoneNumber = prompt ("please input phone number").trim()
let NGCode = +234
let phoneNum = phoneNumber.length === 11 && NGCode === +234
if(phoneNum){
    console.log("Correct phone number")
}else{
    console.log("Invalid phone number")
}
// // console.log(phoneNum)

// //9.
let word = prompt ("please insert your word")
let replaceWord = word.replaceAll("bad", "low").replaceAll("spam", "    ")
console.log(replaceWord)


// //10.
let score = prompt ("input your scores")
if(75 <= score && score <= 100) {
    console.log("A")
    }else if(60 <= score && score < 75) {
    console.log("B")
    }else if(50 <= score && score < 60) {
    console.log("C")
    }else if(score < 50) {
    console.log("Retake exam")
    }else{
    console.log("Invalid score")
  }