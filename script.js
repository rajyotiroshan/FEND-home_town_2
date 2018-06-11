/*a click on ham_sym */
let  ham_sym = document.getElementById("ham");
ham_sym.addEventListener("click",function(e){
  /*make drawer to(0,0)*/
  document.getElementById("drawer").classList.toggle("open");
});
