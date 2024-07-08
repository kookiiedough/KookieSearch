function submit() {
  document.getElementById('buttons').style.display = 'block';
  document.getElementById('content').innerHTML = '';
  var val = document.getElementById('search').value;
  var newelement = document.createElement('script');
  newelement.src = `https://www.googleapis.com/customsearch/v1?key=AIzaSyAM0oOOQS0bFw5S5wl5Ko1MrmCQ2BJVXBc&cx=036b3b9a18a5443fd&q=${val}&callback=hndlr`;
  newelement.id = 'mainscript';
  document.body.appendChild(newelement);
}
