document.querySelector(".signup").addEventListener("click", signUp);
function signUp() {
  document.querySelector(".box").style.display = "none";
  document.querySelector(".signup-box").style.display = "block";
}
document.querySelector(".signin").addEventListener("click", signIn);
function signIn() {
  document.querySelector(".box").style.display = "block";
  document.querySelector(".signup-box").style.display = "none";
}
