var canvas;
var url = "data/data-mox.json";
var mijnData;
var totaalTijd = 100;
var scherm = 0;

function setup() {
  // put setup code here
	canvas = createCanvas(287,480);
	canvas.parent('sketchholder');
	loadJSON(url, getData);
}

function draw() {
  // put drawing code here
	background(255,0,0);
	fill(0);
	totaalTijd = 100;
	
	if(mijnData){
		
		if(scherm == 0){
			
		}
		
		if(scherm == 1){
			fill(255);
			textSize(30);
			textAlign(CENTER);
			text("iPhone van Huub",width/2,80);
			
			for(var v = 0; v < 3; v++){
				for(var l = 0; l < 3; l++){
					fill(0);
					rect(v*80+35,l*80+130,50,50);
				}
			}
			fill(255);
			textSize(15);
			text("MOX",220,320);
		}
		
		if(scherm == -1){
			for(var j = 0; j < mijnData.week1.length; j++){
				totaalTijd = (mijnData.week1[j].totaaltijd*200);
			
				if(totaalTijd >= height-30){
					totaalTijd = height-30;
				}
				console.log("totaaltijd"+totaalTijd);
				ellipse(j*40+20, totaalTijd,35, 35);
			rect(j*40+23,100,13,totaalTijd-100);
			}
			
		}
	}
}

function getData(data){
	mijnData = data;
}

function mousePressed(){
	console.log("waarde"+scherm);
	scherm++;
	if(scherm > 1){
		scherm = -1;
	}
	
	//iphoneknop
	if((mouseX >= 120 && mouseX <= 160) && (mouseY >= 500 && mouseY <= 560)){
		scherm = 1;
	}
	
	//moxknop
	//if((mouseX >=200 && <= 250) && (mouseY >= 300 && mouseY <= 350)){
		//scherm = -1;
	//}
}
