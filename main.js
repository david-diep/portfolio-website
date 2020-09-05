var timedSecond = setInterval(writeSecondHeader, 2000);
setInfo();

function writeSecondHeader() {
  $("#write").append("<h2 class='text-right m-auto white-cursor'>Welcome to my Website!</h2>");
  $("#first").removeClass("white-cursor");
  clearInterval(timedSecond);

}

function setInfo(){
  $("#email-1").append("<span class='font-weight-bold'>Email: </span> <a href='mailto: ddkotan@gmail.com'>ddkotan@gmail.com</a>")
  $("#email-2").append("<span class='font-weight-bold'>Email: </span> <a href='mailto: ddkotan@gmail.com'>ddkotan@gmail.com</a>")
  $("#phone-1").append('<span class="font-weight-bold">Phone: </span> <a href="tel:714-890-2704">(714) 890-2704</a>')
  $("#phone-2").append('<span class="font-weight-bold">Phone: </span> <a href="tel:714-890-2704">(714) 890-2704</a>')
}
