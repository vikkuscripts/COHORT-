function waitFor3S(resolve) {

  setTimeout(resolve, 4000)
}

function setTimeoutPromisified(){
  return new Promise (waitFor3S);
}
function main() {
  console.log("mai yahan hoon00")

}

waitFor3S(main);