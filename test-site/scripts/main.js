const myImage = document.querySelectorAll("img");

myImage.forEach(image => {
  image.onclick = () => {
    const mySrc = image.getAttribute("src");
  
    if (mySrc === "images/download.jpg") {
      image.setAttribute("src", "images/drilleredited.jpg");
    } else {
      image.setAttribute("src", "images/download.jpg");
    }
  };
})



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `The Driller is flipping awesome, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `The Driller is flipping awesome, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};