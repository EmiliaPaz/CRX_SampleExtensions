function reddenPage() {
  console.log('reddenPage')
  document.body.style.backgroundColor = 'red';
}

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    reddenPage();
  });
});