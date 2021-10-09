// const puppeteer = require('puppeteer');
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000/');
//   await page.pdf({
//     path: './react.pdf', // path (relative to CWD) to save the PDF to.
//     printBackground: true,// print background colors
//     width: '1660px', // match the css width and height we set for our PDF
//     height: '570px',
//   });
//   await browser.close();
// })()
window.onload = function(){
  document.getElementById("download-prospectus")
  .addEventListener("click",()=>{
    const pdf = this.document.getElementById("pdf");
    console.log(pdf);
    console.log(window);
    var opt = {
      margin: 1,
      filename: 'DJ-ACM Hackathon Prospectus',
      image: {type: 'jpg', quality: 0.98},
      html2canvas: {scale: 2},
      jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
    };
    html2pdf().from(pdf).set(opt).save();
  })
}