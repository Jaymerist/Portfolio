let menuIcon = document.querySelector(".menu-icon")
let hamburgerIcon = document.querySelector(".hamburger")

hamburgerIcon.addEventListener("click", openNav)

function openNav() {
    console.log("click")
    document.getElementById("mySidenav").style.width = "15rem";
    document.getElementById("push").style.marginLeft = "15rem";
    menuIcon.innerHTML = `<svg class="x-sym" fill="#b72525" version="1.1" viewBox="0 0 460.78 460.78" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
    <path d="m285.08 230.4 171.14-171.13c6.076-6.077 6.076-15.911 0-21.986l-32.707-32.719c-2.913-2.911-6.866-4.55-10.992-4.55-4.127 0-8.08 1.639-10.993 4.55l-171.14 171.14-171.14-171.14c-2.913-2.911-6.866-4.55-10.993-4.55-4.126 0-8.08 1.639-10.992 4.55l-32.707 32.719c-6.077 6.075-6.077 15.909 0 21.986l171.14 171.13-171.12 171.11c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719c2.911 2.911 6.865 4.55 10.992 4.55s8.08-1.639 10.994-4.55l171.12-171.12 171.12 171.12c2.913 2.911 6.866 4.55 10.993 4.55 4.128 0 8.081-1.639 10.992-4.55l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986l-171.12-171.11z"/>
    </svg>`
    let xSymbol = document.querySelector(".x-sym")
    xSymbol.addEventListener("click", closeNav)
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("push").style.marginLeft= "0";
    menuIcon.innerHTML = `<svg class="hamburger" viewBox='0 0 10 8' width='40'><path d='M1 1h8M1 4h 8M1 7h8' stroke='#b72525' stroke-width='1.5' stroke-linecap='round'/></svg>`
  }