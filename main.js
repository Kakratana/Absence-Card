const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

// canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "14px Krasar"; //Helvetica

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev(){

      var sourceX;
      var sourceY;
      var sourceWidth;
      var sourceHeight;
      var destWidth = 400;
      var destHeight = 540;
      var destX = 40;
      var destY = 200;
      
      let inName = document.getElementById("inName").value;
      let inPosition = document.getElementById("inPosition").value;
      let inDays = document.getElementById("inDays").value;
      let inDateF = document.getElementById("inDateF").value;
      let inMonthF = document.getElementById("inMonthF").value;
      let inYearF = document.getElementById("inYearF").value;
      let inDateT = document.getElementById("inDateT").value;
      let inMonthT = document.getElementById("inMonthT").value;
      let inYearT = document.getElementById("inYearT").value;
      let inDateI = document.getElementById("inDateI").value;
      let inMonthI = document.getElementById("inMonthI").value;
      let inYearI = document.getElementById("inYearI").value;
      let inReason = document.getElementById("inReason").value;

      const name = document.getElementById("name");
      const position = document.getElementById("position");
      const days = document.getElementById("days");
      const datef = document.getElementById("datef");
      const datet = document.getElementById("datet");
      const datei = document.getElementById("datei");
      const reason = document.getElementById("reason");

      name.innerHTML = inName;
      position.innerHTML = inPosition;
      days.innerHTML =  inDays + " ថ្ងៃ";
      datef.innerHTML = inDateF + " " + inMonthF + " " + inYearF;
      datet.innerHTML = inDateT + " " + inMonthT + " " + inYearT;
      datei.innerHTML = inDateI + " " + inMonthI + " " + inYearI;
      reason.innerHTML = inReason;
      
      ctx.fillStyle = "#fcfdff";
      ctx.fillRect(0, 0, 800, 900);
      ctx.drawImage(logo, 10, 20, 250, 130);
      ctx.fillStyle = "#000";
      ctx.font = '22pt Krasar'; //Arial
      ctx.fillText("ពាក្យស្នើសុំអនុញ្ញាឈប់សម្រាក", 200, 170);
      ctx.font = '20pt Krasar'; //Arial
      ctx.fillText("ខ្ញុំបាទ/នាងខ្ញុំ", 50, 250);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(name.innerHTML, 190, 250);
      ctx.fillStyle = "#000";
      ctx.fillText("តួនាទី", 380, 250);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(position.innerHTML, 450, 250);
      ctx.fillStyle = "#000";
      ctx.fillText("សូមគោរពជូនលោកប្រធានហាងស្រែមាស", 150, 320);
      ctx.fillText("កម្មវត្ថុ", 50, 390);
      ctx.fillText("សុំច្បាប់ឈប់សម្រាកចំនួន", 200, 390);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(days.innerHTML, 470, 390);
      ctx.fillStyle = "#000";
      ctx.fillText("ចាប់ពីថ្ងៃទី", 50, 460);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(datef.innerHTML, 300, 460);
      ctx.fillStyle = "#000";
      ctx.fillText("ដល់ថ្ងៃទី", 50, 530);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(datet.innerHTML, 300, 530);
      ctx.fillStyle = "#000";
      ctx.fillText("ចូលធ្វើការវិញថ្ងៃទី", 50, 600);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(datei.innerHTML, 300, 600);
      ctx.fillStyle = "#000";
      ctx.fillText("មូលហេតុ", 50, 670);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(reason.innerHTML, 200, 670);
      ctx.fillStyle = "#000";
      ctx.fillText("សេចក្តីដូចបានជម្រាបខាងលើ", 200, 740);
      ctx.fillText("សូមលោកប្រធានមេត្តាអនុញ្ញាតដោយក្តីអនុគ្រោះ", 100, 790);
      ctx.fillText("សូមលោកប្រធានទទួលការគោរពដ៏ខ្ពង់ខ្ពស់អំពីខ្ញុំបាទ/នាងខ្ញុំ។", 50, 840);    
}

const download = document.getElementById("down");
download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});
