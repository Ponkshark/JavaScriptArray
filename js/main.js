// Loads an image from https://picsum.photos/200

const randImage = "https://picsum.photos/200";
let imgUrl;

//Takes the random image and adds it into the html

function getImage() {
  fetch(randImage).then(response => {
    document.getElementById("img-cont").innerHTML = `<img src=${randImage} id='randPicId' alt='a random image'>`
    imgUrl = response.url;
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
      alert("Form submitted");
      let emailValue = document.getElementById("youremail").value;
      //if email doesnt exist, push email, else don't push
      if (myArray.includes(emailValue) === false){
        myArray.push(emailValue);
      }
      //TODO if array exists, push url, else create new array and push url
      myArray.push(imgUrl);
      console.log(myArray);
      getImage();
      return true;
    } else {
      alert("You have entered an invalid email address!");
      document.contactForm.youremail.focus();
      return false;
    }
}

// Assign the image to an email address (pop removes from end, shift from beginning)


// Display all images assigned to each email address, each email address should only display once

