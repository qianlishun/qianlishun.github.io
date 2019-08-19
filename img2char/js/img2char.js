
var cns = $('#canvas')[0];
var ctx = cns.getContext('2d');
var cnsd = $('#imgdata')[0];
var ctxd = cnsd.getContext('2d');

var text = ["❀", "¶", "#", "ღ", "ღ", "☼", "♬", "➹", ".", "♪", "!", ";", "^", ",", ".", " "];
var width = 1000;
var height = 600;
cns.width = width;
cns.height = height;

function img2Text(g) {
    var i = g % 16 === 0 ? parseInt(g / 16) - 1 : parseInt(g / 16);
    return text[i];
}

function getGray(r, g, b) {
    return 0.299 * r + 0.578 * g + 0.114 * b;
}

function initAndDrawText(img) {
    var rem = img.width / img.height;
    cns.width = height * rem;
    cns.height = height;
    cnsd.width = cns.width;
    cnsd.height = cns.height;
    ctx.clearRect(0, 0, cns.width, cns.height);
    ctxd.clearRect(0, 0, cnsd.width, cnsd.height);
    ctxd.drawImage(img, 0, 0, cnsd.width, cnsd.height);
    var imgData = ctxd.getImageData(0, 0, cnsd.width, cnsd.height,10);
    var imgDataArr = imgData.data;
    var textList = [];
    for (var h = 0; h < cns.height; h += 12) {
        for (var w = 0; w < cns.width; w += 10) {
            var index = (w + cns.width * h) * 4;
            var r = imgDataArr[index + 0];
            var g = imgDataArr[index + 1];
            var b = imgDataArr[index + 2];
            var gray = getGray(r, g, b);
            textList.push(img2Text(gray), w, h + 10);
        }
    }


    var index = 0;
    var timer = setInterval(function() {
        for(i=0;i<10;i++){
            ctx.fillText(textList[index*3],textList[index*3+1],textList[index*3+2]);
            index++;
        }
        if (index > textList.length/3) {
            clearInterval(timer);
        }
    }, 1);

    exportRaw('test.txt', JSON.stringify(textList))
}


function DrawText() {
        
    var rem = imgW / imgH;
    cns.width = height * rem;
    cns.height = height;

    ctx.clearRect(0, 0, cns.width, cns.height);

    var index = 0;
    var timer = setInterval(function() {
        for(i=0;i<10;i++){
            ctx.fillText(textList[index*3],textList[index*3+1],textList[index*3+2]);
            index++;
        }
        if (index > textList.length/3) {
            clearInterval(timer);
        }
    }, 1);
    
}


function fakeClick(obj) {
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    obj.dispatchEvent(ev);
  }
  
  function exportRaw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    fakeClick(save_link);
  }
