const maxWidth= window.innerWidth-50;
window.addEventListener('DOMContentLoaded',() => {
  const button = document.getElementById("heart");
button.addEventListener('mouseover',() => {
  button.style.left= Math.floor(Math.random()* (maxWidth+1))+'px';
  console.log('new butt',button);
  })
});

function fun(){
  confirm("Come lets celebrate our love with FOOD....");
  window.open("end.html", "_blank", "width=500, height=500");
}
