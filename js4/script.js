// let ctr = 0;
// function callback() {
//   const el = document.querySelectorAll("h3")[1].innerHTML = ctr;
//   ctr = ctr + 1;
// }
// setInterval(callback, 1000);

//  deleting Element


// function deleteTodo() {
//   const element = document.querySelector("h3");
//   const parentElement = element.parentNode;
//   parentElement.removeChild(element);
// }
function deleteTodo(){
  const element = document.getElementById("todo-" + index);
  element.innerHTML = "";
}