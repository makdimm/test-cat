var e=document.getElementsByClassName("card"),r=document.getElementsByClassName("circle"),a=document.getElementsByClassName("content-card"),s=document.getElementsByClassName("link");for(i=0;i,s.length,i,e.length,i,a.length,i,a.length,i<r.length;i++)s[i].addEventListener("click",function(e){var r;"card-wrapper"==(r=e.target.parentNode.previousElementSibling).classList&&(r.classList.remove("card-wrapper"),r.classList.add("card-wrapper-select"))},!1),e[i].addEventListener("click",function(e){var r;"card-wrapper"==(r=e.target.parentNode).classList?(r.classList.remove("card-wrapper"),r.classList.add("card-wrapper-select")):"card-wrapper-select"==r.classList?(r.classList.remove("card-wrapper-select"),r.classList.add("card-wrapper")):"card-wrapper-select card-wrapper-select-hover"==r.classList&&(r.classList.remove("card-wrapper-select"),r.classList.remove("card-wrapper-select-hover"),r.classList.add("card-wrapper"))},!1),e[i].addEventListener("mouseleave",function(e){var r;"card-wrapper-select"==(r=e.target.parentNode).classList&&r.classList.add("card-wrapper-select-hover")},!1),a[i].addEventListener("click",function(e){var r;"card-wrapper"==(r=e.target.parentNode.parentNode.parentNode).classList?(r.classList.remove("card-wrapper"),r.classList.add("card-wrapper-select")):"card-wrapper-select"==r.classList?(r.classList.remove("card-wrapper-select"),r.classList.add("card-wrapper")):"card-wrapper-select card-wrapper-select-hover"==r.classList&&(r.classList.remove("card-wrapper-select"),r.classList.remove("card-wrapper-select-hover"),r.classList.add("card-wrapper"))},!1),r[i].addEventListener("click",function(e){var r;"card-wrapper"==(r=e.target.parentNode.parentNode.parentNode.parentNode).classList?(r.classList.remove("card-wrapper"),r.classList.add("card-wrapper-select")):"card-wrapper-select"==r.classList?(r.classList.remove("card-wrapper-select"),r.classList.add("card-wrapper")):"card-wrapper-select card-wrapper-select-hover"==r.classList&&(r.classList.remove("card-wrapper-select"),r.classList.remove("card-wrapper-select-hover"),r.classList.add("card-wrapper"))},!1);