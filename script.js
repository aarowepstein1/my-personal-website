const darkMode = document.getElementById('dark');
const body = document.getElementById('body');

function test() {
  body.classList.toggle('dark'); 
}


darkMode.addEventListener('click', test);
