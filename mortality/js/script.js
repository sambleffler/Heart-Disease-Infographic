$(document).ready(function(){
 	
});

var totalDeaths = 0;
var myData;

$.ajax({
    url: "https://data.cdc.gov/resource/u4d7-xz8k.json?year=2016",
    type: "GET",
    
}).done(function(data) {

  myData=data;

  console.log(data);
  // var j=1;
  // for (var i = 0; i < data.length; i++) {
  // 	if(data[i].cause_name == "Influenza and pneumonia"){
  // 		totalDeaths += int(data[i].deaths);
  // 		console.log(j +":"+totalDeaths);
  // 		j++;
  // 	}
  // }
});

var diseases = $('#causes')[0];
var states = $('#states') [0];

diseases.addEventListener("change", function() {
  updateTotals();
    resizeCanvas(1000, (totalDeaths/250+50));
  // draw();
  $('#end').show();
  if(diseases.value== "All causes"){
    $('#linkArea').html("<a href='' id='link' target='_blank'>Learn how you can live a healthy lifestyle</a>");
    $('#link').attr("href","https://www.cdc.gov/healthyliving/index.html");

  }
  else{
    $('#linkArea').html("<a href='' target='_blank' id='link'>Learn how you can prevent " + diseases.value+"</a>");
    switch(diseases.value){
      case "Alzheimer's disease":
        $('#link').attr("href","https://www.cdc.gov/aging/aginginfo/alzheimers.htm");
        break;
      case "Cancer":
        $('#link').attr("href","https://www.cdc.gov/cancer/index.htm");
        break;
      case "CLRD":
        $('#link').attr("href","https://www.cdc.gov/healthcommunication/toolstemplates/entertainmented/tips/ChronicRespiratoryDisease.html");
        break;
      case "Diabetes":
        $('#link').attr("href","https://www.cdc.gov/diabetes/prevention/index.html");
        break;
      case "Influenza and pneumonia":
        $('#link').attr("href","https://www.cdc.gov/flu/protect/preventing.htm"); 
        break;
      case "Heart disease":
        $('#link').attr("href","https://www.cdc.gov/heartdisease/prevention.htm"); 
        break;
      case "Kidney disease":
        $('#link').attr("href","https://www.cdc.gov/kidneydisease/index.html"); 
        break;
      case "Stroke":
        $('#link').attr("href","https://www.cdc.gov/stroke/prevention.htm"); 
        break;
      case "Suicide":
        $('#link').attr("href","https://www.cdc.gov/features/preventingsuicide/index.html"); 
        break;
      case "Unintentional injuries":
        $('#link').attr("href","https://www.cdc.gov/injury/index.html"); 
        break;
      default:
        $('#link').attr("href","#");
    }
  }
});

states.addEventListener("change", function() {
  updateTotals();
    resizeCanvas(1000, (totalDeaths/250+50));
  // draw();
});

function updateTotals(){
    var cause = diseases.value;
    var place = states.value;
  for (var i = 0; i < myData.length; i++) {
    if(myData[i].cause_name == cause && myData[i].state == place){
      totalDeaths = int(myData[i].deaths);
    }
  }
  $('#label').text(totalDeaths+ " deaths")
}
var canvasWidth = document.getElementById('sketchArea').offsetWidth;

function setup(){
	var canvas = createCanvas(1000, 100);
  canvas.parent('sketchArea'); 
  
  	
  	background(0);
}
function draw(){
	clear();
  background(0);	
      strokeWeight(1);

	for (var i = 0; i < int(totalDeaths); i++) {
    stroke(random(150, 255));
		point(int(i%499)*2+2, int(i/499)*2+2);
	}
  noLoop();



}