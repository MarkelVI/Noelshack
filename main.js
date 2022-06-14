function getLink() {
  const page = document.getElementById('lien').value;
  isse = page.substring(37, 47).replace(///g, "-");
  var pagent = `https://www.noelshack.com/${isse}${page.substring(47)}`;

  document.getElementById("answer").innerHTML = pagent;
}
