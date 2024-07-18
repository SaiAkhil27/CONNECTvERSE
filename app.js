let profileMenu = document.getElementById("profileMenu");
function toggleMenu(){
  profileMenu.classList.toggle("open-menu");
}

let crsr = document.querySelector(".cursor");
main.addEventListener("mousemove",function(dets){
console.log(dets);
crsr.style.left = dets.x+"px";

crsr.style.top = dets.y+"px";
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
