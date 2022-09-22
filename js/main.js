// Loads an image from https://picsum.photos/200

const randImage = "https://picsum.photos/200";
let imgUrl;
let i = 0;

//Takes the random image and adds it into the html

function getImage() {
  fetch(randImage).then(response => {
    imgUrl = response.url;
    document.getElementById("img-cont").innerHTML = `<div id="center-img"><img src=${imgUrl} id='randPicId' alt='a random image'></div>`
  })
}

//creates new random image on window load
$(window).on('load', getImage);


// To store the images and emails
myArray = [];

// Email address validation 
function validateForm(inputText) {
    var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ ;
    let y = document.forms["contactForm"]["youremail"].value;
    if (y==null || y == "") {
        alert("Email field required");
        return false;
    }
    if (inputText.value.match(mailformat)) {
      document.contactForm.youremail.focus();
      let emailValue = document.getElementById("youremail").value;
      //check if the email already exists in the array
      if (myArray.includes(emailValue)){
        // if so, find where the email is, and add the img url right after
        myArray.splice(myArray.indexOf(emailValue)+1, 0, imgUrl);
      }else{
        // else add a new email to the end of the array with the img url after
        myArray.push(emailValue);
        myArray.push(imgUrl);
      }
      console.log(myArray);
      generateTable();
      getImage();
      return true;
    } else {
      alert("You have entered an invalid email address!");
      document.contactForm.youremail.focus();
      return false;
    }
}

// Assign the image to an email address (pop removes from end, shift from beginning)


// generates the table containing the emails and the images

function generateTable(){
  document.getElementById("row").innerHTML = "";
  for (var i = 0; i < myArray.length; i++){
    if (myArray[i].includes("https://") === false){
      document.getElementById("row").innerHTML += `<br>`;
      document.getElementById("row").innerHTML += `<div id="row-title"><h2>${myArray[i]}</h2></div>`;
    }
    else {
      document.getElementById("row").innerHTML += `<div id="row-item"><img src="${myArray[i]}"></img></div>`;
    }
  }
}