function toggleNav() {
    var x = document.getElementById("my-nav");
    if (x.className === "") {
      x.className += "hide";
    } else {
      x.className = "";
    }
  }
  