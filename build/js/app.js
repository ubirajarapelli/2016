!function(){window.onscroll=function(){var e=document.querySelector("nav"),t=window.pageYOffset||document.documentElement.scrollTop,s=window.innerHeight,o=e.offsetHeight,i=s-o;t>i?e.classList.add("fixed"):e.classList.remove("fixed")}}(),function(){var e=window.matchMedia("(max-width: 959px)"),t=document.querySelector(".hamburger"),s=document.querySelector(".main-menu"),o=document.querySelector(".socials"),i=s.querySelectorAll("a");if(e.matches){var n=document.createElement("li");n.classList.add("close");var c=document.createElement("span"),r=document.createElement("img");r.src="../images/close.svg",c.appendChild(r),n.appendChild(c),s.insertBefore(n,s.firstChild),c.addEventListener("click",function(){s.classList.remove("showup"),o.classList.remove("showup")})}t.addEventListener("click",function(){s.classList.add("showup"),o.classList.add("showup")});for(var a=0;a<i.length;a++)i[a].addEventListener("click",function(){s.classList.remove("showup"),o.classList.remove("showup")})}(),window.onload=function(){var e=matchMedia("(min-width: 1200px)"),t=document.querySelector("#local"),s=function(){if(e.matches){var o=document.createElement("iframe");o.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.768169955343!2d-46.60344278501935!3d-23.71997148460445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce440ff947bb3f%3A0x6f9921c66133ad06!2sEstr.+Samuel+Aizemberg%2C+1707+-+Alves+Dias%2C+S%C3%A3o+Bernardo+do+Campo+-+SP%2C+09851-550!5e0!3m2!1spt-BR!2sbr!4v1464792640965",o.style.border="0",t.insertBefore(o,t.firstChild),e.removeListener(s)}};e.addListener(s),s()};