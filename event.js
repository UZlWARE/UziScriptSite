// take body to change the content
const body = document.getElementsByTagName('body');
// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
  if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
     event.preventDefault();
  }

  if(event.ctrlKey && (event.key === "C")) {
     event.preventDefault();
  }
  if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
     event.preventDefault()
  }
  if(event.ctrlKey && (event.key === "I" || event.key === "i" || event.key === "Ä±")) {
     event.preventDefault();
  }
  if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
     event.preventDefault();
  }
  if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
     event.preventDefault();
       }
});
// stop right click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
