function getLink() {
  const page = document.getElementById('lien').value;
  var isse = page.substring(37, 42).replace("/", "-");
  var pagent = `https://www.noelshack.com/${issent}${page.substring(47)}`;

  document.getElementById("answer").innerHTML = pagent;
}
