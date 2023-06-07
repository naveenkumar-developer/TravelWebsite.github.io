let hotel_btn = document.querySelector(".hotel_btn")
let car_btn = document.querySelector(".car_btn")
let hotel_form = document.querySelector('.hotel_form')
let car_form = document.querySelector('.car_form')


hotel_btn.addEventListener("click", function () {
    hotel_form.style.display = "grid";
    car_form.style.display = "none";
})
car_btn.addEventListener("click", function () {
    hotel_form.style.display = "none";
    car_form.style.display = "grid";

})