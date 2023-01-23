function followMouse(event) {
    var text = document.getElementsByClassName("text")[0];
    text.style.left = event.clientX +  125 + "px";
    text.style.top = event.clientY - 375 + "px";
  }
  function followMouse2(event) {
    var text = document.getElementsByClassName("text")[1];
    text.style.left = event.clientX - 75 + "px";
    text.style.top = event.clientY - 375 + "px";
  }
  function followMouse3(event) {
    var text = document.getElementsByClassName("text")[2];
    text.style.left = event.clientX - 400 + "px";
    text.style.top = event.clientY - 400 + "px";
  }
  function followMouse4(event) {
    var text = document.getElementsByClassName("text")[3];
    text.style.left = event.clientX +  125 + "px";
    text.style.top = event.clientY - 375 + "px";
  }
  function followMouse5(event) {
    var text = document.getElementsByClassName("text")[4];
    text.style.left = event.clientX - 75 + "px";
    text.style.top = event.clientY - 375 + "px";
  }
  function followMouse6(event) {
    var text = document.getElementsByClassName("text")[5];
    text.style.left = event.clientX - 400 + "px";
    text.style.top = event.clientY - 400 + "px";
  }
  function followMouse7(event) {
    var text = document.getElementsByClassName("text")[6];
    text.style.left = event.clientX +  125 + "px";
    text.style.top = event.clientY - 375 + "px";
  }
  function followMouse8(event) {
    var text = document.getElementsByClassName("text")[7];
    text.style.left = event.clientX - 75 + "px";
    text.style.top = event.clientY - 375 + "px";
  }
  function followMouse9(event) {
    var text = document.getElementsByClassName("text")[8];
    text.style.left = event.clientX - 400 + "px";
    text.style.top = event.clientY - 400 + "px";
  }
  var images = document.getElementsByClassName("image");
  for (var i = 0; i < images.length; i++) {
      images[i].onmouseover = function () {
          texts[i].style.display = "block";
          this.onmousemove = followMouse;
      };
      images[i].onmouseout = function () {
          texts[i].style.display = "none";
          this.onmousemove = null;
      };
  }
