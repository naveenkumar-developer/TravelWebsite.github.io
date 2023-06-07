// HEADER

let toggle_btn = document.querySelector(".toggle_btn");

let dropdown_links = document.querySelector(".dropdown_links");

toggle_btn.addEventListener("click", function () {
  dropdown_links.classList.toggle("active");
});

// CARD DATA

function sendDataToBackEnd(imageId, imageName, country, price) {
  // Create an HTTP request object
  var xhr = new XMLHttpRequest();

  // Prepare the request
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Define the data to be sent
  var data =
    "imageId=" +
    encodeURIComponent(imageId) +
    "imageName=" +
    encodeURIComponent(imageName) +
    "country=" +
    encodeURIComponent(country) +
    "price=" +
    encodeURIComponent(price);

  // Send the request with the data
  xhr.send(data);
  console.log(data);
}


//TRAVEL PLACE CARDS LINKS

let viewCards=(URl)=>{
let myFrame=document.querySelector('#myframe')
myFrame.src=URl;
}