const myDiv = document.getElementsByClassName("button1");
var url = ""
var clciked = false
var filename = "url2qr.png"


function generate(user_input, filename) {
  if (!clciked) {
    const qrcode = new QRCode(document.getElementById('qrcode'), {
      text: user_input,
      width: 128,
      height: 128,
      colorDark: '#000',
      colorLight: '#fff',
      correctLevel: QRCode.CorrectLevel.H
    });
    const qrcode1 = new QRCode(document.getElementById('qrcode1'), {
      text: user_input,
      width: 240,
      height: 240,
      colorDark: '#000',
      colorLight: '#fff',
      correctLevel: QRCode.CorrectLevel.H
    });
    setTimeout(() => {
      let qelem = document.querySelector('#qrcode1 img')
      let dlink = document.querySelector('#qrdl')
      let qr = qelem.getAttribute('src');
      dlink.setAttribute('href', qr);
      dlink.setAttribute('download', filename);
      dlink.removeAttribute('hidden');
    }, 500);
  }
}
myDiv[0].addEventListener('click', function () {

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    url = tabs[0].url;
  });

  console.log('Div was clicked!');
  console.log(url)
  if (url != "") {
    generate(url, filename)
    clciked = true
  }
});