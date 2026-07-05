const display = document.querySelector(".inp");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click",
     () => {
    const value = button.textContent;

    if (value === "suprimé") {
      display.value = ""; 
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Erreur";
      }
    } else {
      display.value += value; 
    }

  });
});
document.addEventListener("contextmenu")