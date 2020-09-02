var timedSecond = setInterval(writeSecondHeader, 2000);

function writeSecondHeader() {
  const secondHeader = document.createElement("h2");
  secondHeader.className = "text-right m-auto white-cursor";
  secondHeader.textContent = "Welcome to my Website!";
  document.getElementById("write").appendChild(secondHeader);
  document.getElementById("first").classList.remove("white-cursor");
  clearInterval(timedSecond);
}
