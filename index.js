const signUP = document.querySelector(".signup");
const signIN = document.querySelector(".signin");
signUP.addEventListener("click", () => {
  document.querySelector(".box").style.display = "none";
  document.querySelector(".signup-box").style.display = "block";
});
signIN.addEventListener("click", () => {
  document.querySelector(".box").style.display = "block";
  document.querySelector(".signup-box").style.display = "none";
});
