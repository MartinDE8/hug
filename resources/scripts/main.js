let hamburger = document.querySelector(".hamburger");
//let navResp = document.getElementById("navResp");

if (hamburger) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    //navResp.classList.toggle("active");
  });
}
