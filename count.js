let count = 1;

function increment() {
  if (count < 4) {
    count++;
    document.getElementById("passenger-count").innerText = count;
  }
}

function decrement() {
  if (count > 1) {
    count--;
    document.getElementById("passenger-count").innerText = count;
  }
}

function clearform(){
  document.querySelector('form').reset();
}
function info(){
  
  window.location.href="forms-1.html";
}


