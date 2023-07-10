let hamburger = document.querySelector(".hamburger");
//let navResp = document.getElementById("navResp");
console.log(hamburger);

if (hamburger) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    //navResp.classList.toggle("active");
  });
}
