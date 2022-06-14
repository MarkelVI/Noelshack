function getLink() {
  const page = document.getElementById('lien').value;
  var re = new RegExp("/", "g");
  isse = page.substring(37, 47).replace(re, "-");
  var pagent = `https://www.noelshack.com/${isse}${page.substring(47)}`;

  document.getElementById("answer").innerHTML = pagent;
}
