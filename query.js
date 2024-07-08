function submit() {
  document.getElementById('buttons').style.display = 'block';
  document.getElementById('content').innerHTML = '';
  var val = document.getElementById('search').value;
  var newelement = document.createElement('script');
  newelement.src = `https://www.googleapis.com/customsearch/v1?key=API_KEY=${val}&callback=hndlr`;
  newelement.id = 'mainscript';
  document.body.appendChild(newelement);
}
