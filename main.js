function getLink() {
  const page = document.getElementById('lien').value;
  const regex = ///g;
  isse = page.substring(37, 47).replace(regex, "-");
  var pagent = `https://www.noelshack.com/${isse}${page.substring(47)}`;

  document.getElementById("answer").innerHTML = pagent;
}
