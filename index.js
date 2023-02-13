function fun(txt){
var res=window.confirm(txt);
console.log("res:",res);
if (res) {
    txt = "oh wait! One more step to go..new proposal, new T&C...";
    termsWin();
  } 
  if (!res) {
    txt = "Do you think you have an option?!!";
    event.preventDefault(); // prevent event when user cancel
    fun(txt);
    //window.confirm(txt);
  }
  
}
function termsWin() {
      window.open("new.html", '_blank');
}


const maxWidth= window.innerWidth-50;
window.addEventListener('DOMContentLoaded',() => {
const button = document.getElementById("test");
console.log('butt',button);
button.addEventListener('mouseover',() => {
    button.style.left= Math.floor(Math.random()* (maxWidth+1))+'px';
})
});
