const modeBtn = document.querySelector(".mode");
let darkMode = localStorage.getItem("darkMode");
const enableDarkMode = () => {
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "enable");
  };
  
  const disableDarkMode = () => {
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", null);
  };
  
  if (darkMode == "enable") {
    enableDarkMode();
  }
  
  const changeMode = () => {
    let darkMode = localStorage.getItem("darkMode");
  
    if (darkMode == "enable") {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };
  
  modeBtn.addEventListener("click", changeMode);


  let men = document.querySelector(".men")
  let menu = document.querySelector(".menu")
  let x = document.querySelector(".i")
  let openMenu = () => {
    menu.style.transform = "translateX(0)"
  }
  let closeMenu = () => {
    menu.style.transform = "translateX(100%)"
  }
  men.addEventListener("click", openMenu)
  x.addEventListener("click", closeMenu)