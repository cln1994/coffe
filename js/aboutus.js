var main_title = document.getElementsByClassName("main-title")[0];
var main_content = document.getElementsByClassName("main-content")[0];
var as = main_title.getElementsByTagName("a");
var divs = main_content.children;
for (var i = 0; i < as.length; i++) { 
  // as[]
  as[i].onclick = function () {
    console.log(this.children[1].innerHTML);
    for (var j = 1; j < divs.length;j++) { 
      divs[j].style.display = "none";
    }
    if (this.children[1].innerHTML == "Company profile") {
      divs[1].style.display = "block";
    } else if (this.children[1].innerHTML == "News Center") {
      //console.log(divs[2]);
      divs[2].style.display = "block";
    } else { 
      divs[3].style.display = "block";
    }
   }

}




















