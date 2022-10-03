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
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let y = document.forms["contactForm"]["youremail"].value;
    const $result = $('#result')
    $result.text('')
    if (y==null || y == "") {
        $result.text("Email address required");
        $result.css('color', 'red');
        return false;
    }
    if (inputText.value.match(mailformat)) {
      document.contactForm.youremail.focus();
      let emailValue = document.getElementById("youremail").value;
      //check if the email already exists in the array
      if (myArray.includes(emailValue)){
        // if so, find where the email is, and add the img url right after
        if (myArray[(myArray.indexOf(emailValue)+1)] === imgUrl){
          $result.text("Email address already has the current image assigned to it");
          $result.css('color', 'red');
        } else {
        myArray.splice(myArray.indexOf(emailValue)+1, 0, imgUrl);
        }
      }else{
        // else add a new email to the end of the array with the img url after
        myArray.push(emailValue);
        myArray.push(imgUrl);
      }
      // console.log(myArray); was used during testing
      generateTable();
      // getImage(); not used, add if you require a new image on submit button press
      return true;
    } else {
      $result.text("You have entered an invalid email address!");
      $result.css('color', 'red');
      document.contactForm.youremail.focus();
      return false;
    }
}


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