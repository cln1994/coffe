
var nav = document.getElementsByClassName("nav")[0];
var navs = nav.getElementsByTagName("a");
for (var i=0; i < navs.length;i++) { 
  navs[i].onmouseover = function () { 
    for (var i = 0; i < navs.length; i++) { 
        navs[i].style.color="#333333";
        navs[i].style.border="none";
    }
    this.style.color="#866961";
    this.style.borderBottom = "6px";
    this.style.borderBottomStyle="solid";
    this.style.borderBottomColor="#866961";
  }
 

}




















