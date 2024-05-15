let icon = document.getElementById("icon");
let header = document.querySelector("header");

icon.onclick = ()=>{
   header.classList.toggle("darkMode")
   if (header.classList.contains("darkMode")) {
      icon.src = 'imgs/sun.png'
   }else {
      icon.src = 'imgs/moon.png'
   }
}