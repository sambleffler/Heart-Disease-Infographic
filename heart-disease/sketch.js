 var myFullpage = new fullpage('#fullpage', {
        anchors: ['timer', 'daily', 'quarter','sudden','first', 'end'],
        // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        scrollBar: false,
        menu: '#menu',
        navigation: true,

    });

var timer = function(p){
  p.setup=function() {
    var canvas = p.createCanvas(p.windowWidth, p.windowHeight/2);
    canvas.parent('sketchArea'); 
  }

  p.draw=function() {
    p.clear();
    var d = new Date();
    var h = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var millis = d.getMilliseconds();

    var timeInSeconds = h*3600000 + min*60000 + sec*1000 + millis;


    p.stroke(140, 22, 22);
    p.strokeWeight(20);
    p.noFill();
    
    var s = timeInSeconds%49046;
    var phi = (2*p.PI)*s/49046
    // let angle = p.map(s, 0, 49046, 0, 360);
    p.arc(p.width/2, p.height/2,p.height/2, p.height/2,0, phi);
  }
}

var sketch1 = new p5(timer, 'sketchArea');

var daily = function(p){
  p.setup=function() {
    var canvas = p.createCanvas(620, 720);
    canvas.parent('sketchArea2'); 
    
      
      p.background(35, 6, 76);
  }

  p.draw=function() {
    p.clear();
    var d = new Date();
    var h = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var millis = d.getMilliseconds();

    var timeInSeconds = h*3600000 + min*60000 + sec*1000 + millis;

    var deathsToday=parseInt(timeInSeconds/49046);

    
    p.strokeWeight(1);
    for (var i = 0; i < 1760; i++) {
      if (i < deathsToday) {
          p.stroke(140, 22, 22);
          p.fill(140, 22, 22);
          p.ellipse(15*(i%40)+10, parseInt(i/40)*15+10,10,10);
        
        
      }
      else{
        p.fill(0);
        if (i == deathsToday) {
          p.stroke(255);
          p.ellipse(15*(i%40)+10, parseInt(i/40)*15+10,10,10);
          p.stroke(140, 22, 22);
          p.fill(0);
          var s = timeInSeconds%49046;
          p.arc(15*(i%40)+10, parseInt(i/40)*15+10,10,10,0, (2*p.PI)*s/49046);
        }
        else{
          p.stroke(255);
          p.ellipse(15*(i%40)+10, parseInt(i/40)*15+10,10,10);
        }
        
      }
      
    }
  }
}

var sketch2 = new p5(daily, 'sketchArea2');

var quarter = function(p){
  p.setup=function() {
    var canvas = p.createCanvas(p.windowWidth, p.windowHeight/2);
    canvas.parent('sketchArea3'); 
  }

  p.draw=function() {
    p.clear();
    p.strokeWeight(10);
    p.noFill();
    for (var i = 0; i < 3; i++) {
      p.stroke(150);
      p.ellipse((i+2.5)*p.width/8, p.height/4,p.width/8-20, p.width/8-20);
    }
    var d = new Date();
    var h = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var millis = d.getMilliseconds();

    var timeInSeconds = h*3600000 + min*60000 + sec*1000 + millis;


    p.stroke(140, 22, 22);
    
    
    var s = timeInSeconds%49046;
    var phi = (2*p.PI)*s/49046
    // let angle = p.map(s, 0, 49046, 0, 360);
    p.arc(5.5*p.width/8, p.height/4, p.width/8-20, p.width/8-20,0, phi);
  }
}

var sketch3 = new p5(quarter, 'sketchArea3');


var sudden = function(p){
  p.setup=function() {
    var canvas = p.createCanvas(620, 680);
    canvas.parent('sketchArea4'); 
  }

  p.draw=function() {
    p.clear();
    p.strokeWeight(1);
    for (var i = 0; i < 1760; i++) {
      var sudden = p.random(0,100);
      
      if (i <= 821) {
        p.fill(200, 22, 22);
        p.stroke(200, 22, 22);
      }
      else{
        p.fill(140, 22, 22);
        p.stroke(140, 22, 22);
      }
      p.ellipse(15*(i%40)+10, parseInt(i/40)*15+10,10,10);
      
    }
  }
}

var sketch4 = new p5(sudden, 'sketchArea4');

var timer2 = function(p){
  p.setup=function() {
    var canvas = p.createCanvas(p.windowWidth, p.windowHeight/2);
    canvas.parent('sketchArea5'); 
  }

  p.draw=function() {
    p.clear();
    var d = new Date();
    var h = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var millis = d.getMilliseconds();

    var timeInSeconds = h*3600000 + min*60000 + sec*1000 + millis;

    p.noStroke();

    p.fill(200, 22, 22);
    var s2 = timeInSeconds%60083;
    var phi2 = (2*p.PI)*s2/60083;
    p.arc(p.width/2, p.height/2,p.height/2, p.height/2, 0, phi2);

    p.stroke(140, 22, 22);
    p.strokeWeight(20);
    p.noFill();
    
    var s1 = timeInSeconds%49046;
    var phi1 = (2*p.PI)*s1/49046
    p.arc(p.width/2, p.height/2,p.height/2, p.height/2,0, phi1);

    
  }
}

var sketch5 = new p5(timer2, 'sketchArea5');
