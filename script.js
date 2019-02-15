function getWidth(id) {
  return document.getElementById(id).offsetWidth;
  //getting window size to align items according to window size
}

function getHeight(id) {
  return document.getElementById(id).offsetHeight;
}

function radialBarChart() {
  let date = randomDate();
  let endStroke = 270 - (12.86 * date);
  let radialCanvas = document.getElementById("radial-canvas");
  radialCanvas.width = getWidth('radial-bar-chart');
  radialCanvas.height = getHeight('radial-bar-chart');
  //taking elements' measurement to fit canvas accordingly
  
  let xCord = radialCanvas.width / 2;
  let yCord = radialCanvas.height / 2;  //centering the chart
  let radiousOrange = xCord * 0.45;
  let radiousGrey = xCord * 0.50;
  
  drawChart("#dddddd", xCord, yCord, radiousOrange, 0, 360);
  drawChart("orange", xCord, yCord, radiousGrey, 270, endStroke);
  //drawing Chart
  
  function drawChart(c, x, y, r, s, e) {
    let ctx = radialCanvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.lineWidth = radiousOrange / 5;
    ctx.arc(x, y, r, (Math.PI / 180) * s, (Math.PI / 180) * e, 1);
    ctx.stroke();
  }
  
  drawDay("black", "45px Arial", date, (xCord - 10), (yCord));
  drawDay("grey", "20px Arial", "/ 28", xCord, (yCord + 30));
  //align top to bottom
  //TODO: align single digit in centre

  function drawDay(c, f, d, x, y) {
    let date = d;
    let ctx1 = radialCanvas.getContext("2d");
    ctx1.font = f;
    ctx1.fillStyle = c;
    ctx1.fillText(date, (x * 0.9), y);
  }
}

function randomDate() {
  return Math.floor(Math.random() * 29);
}

function stackedBarChart() {
  let stackedCanvas = document.getElementById("stacked-canvas");
  let width = getWidth('stacked-bar-chart') * 0.9;
  //smaller than main container
  
  stackedCanvas.width = width;
  stackedCanvas.height = getHeight('stacked-bar-chart');
  
  let colour = ['#1a8ddd','#35ddb3','#dddc61','#dd6844','#8f71dd','#dddddd'];
  let heading = ['Cautious', 'Complacent', 'Confident'];
  let lineWidth = [15, 5];
  let stackedBar = stackedCanvas.getContext("2d");
  
  for (var i = 0, lineSection = 15; i < 3; i++) {
    //loop through to make 3 sets of stacked bar chart
    stackedBar.font = "15px Arial";
    stackedBar.fillStyle = "black";
    stackedBar.fillText(heading[i], 0, lineSection);
    //draw headings
    //TODO: build heading in the markup instead
    
    for (var j = 0, m = 30; j < 2; j++) { //pair of each bar set
      let stackedArray = randomStackedBar(width);
      let a = 0, b = 0;
      for (var k = 0, n = 45; k < 6; k++) { //a bar with 6 colours
        b = a + stackedArray[k];
        createStackedBar(colour[k],a,b,lineWidth[j],lineSection+lineWidth[j]);
        a = a + stackedArray[k];
      }
      lineSection = lineSection + 25;
    }
    lineSection = lineSection + 30;
  }

  function createStackedBar(c,a,b,k,l) {  //create each stack of a bar
    stackedBar.beginPath();
    stackedBar.lineWidth = k;
    stackedBar.strokeStyle = c;
    stackedBar.moveTo(a, l);
    stackedBar.lineTo(b, l);            
    stackedBar.stroke();
  }
}

function randomStackedBar(wt) {
  //get a array of random number totalling responsive window width
  let a = [];
  a[0] = getRandomInteger(0, wt);
  a[1] = getRandomInteger(0, (wt - a[0]));
  a[2] = getRandomInteger(0, (wt - (a[0] + a[1])));
  a[3] = getRandomInteger(0, (wt - (a[0] + a[1] + a[2])));
  a[4] = getRandomInteger(0,(wt - (a[0] + a[1] + a[2] + a[3])));
  a[5] = wt - (a[0] + a[1] + a[2] + a[3] + a[4]);
  return a; 
}

function getRandomInteger(min, max) {
  //picking a random number within a given range
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function loadPage() {
  window.location.reload(); //TODO: load sections rather than the whole page
}

radialBarChart();
stackedBarChart();
//TODO: could recrate code into OOP JavaScript