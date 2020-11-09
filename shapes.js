// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes


function init() {

  const svg = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 700)
    .style("background-color", "#BBBBBB");
	
const border = svg.append("path")
    .attr("d","M 0 0 h 800 v 700 h -800 z")
    .attr("stroke","black")
    .attr("fill","none");

  const horizon = svg.append("path")
    .attr("d","M 0 350 C 200 450, 700 300, 800 325 v -325 h -800 v 350 z")
    .attr("stroke","black")
    .attr("fill","#EEEEEE");
	
	const glow = svg.append("circle")
    .attr("cx","540")
	.attr("cy","520")
	.attr("r","75")
    .attr("stroke","none")
    .attr("fill","#DDDDDD");
	
	const bubble_1 = svg.append("circle")
    .attr("cx","250")
	.attr("cy","250")
	.attr("r","25")
    .attr("stroke","none")
    .attr("fill","#FFFFFF");
	
	const bubble_2 = svg.append("circle")
    .attr("cx","330")
	.attr("cy","200")
	.attr("r","50")
    .attr("stroke","none")
    .attr("fill","#FFFFFF");
	
	const bubble_3 = svg.append("circle")
    .attr("cx","440")
	.attr("cy","210")
	.attr("r","100")
    .attr("stroke","none")
    .attr("fill","#FFFFFF");
	
	const bubble_4 = svg.append("circle")
    .attr("cx","580")
	.attr("cy","250")
	.attr("r","25")
    .attr("stroke","none")
    .attr("fill","#FFFFFF");
	
	const bubble_5 = svg.append("circle")
    .attr("cx","290")
	.attr("cy","130")
	.attr("r","33")
    .attr("stroke","none")
    .attr("fill","#FFFFFF");
	
	const bubble_6 = svg.append("circle")
    .attr("cx","190")
	.attr("cy","320")
	.attr("r","10")
    .attr("stroke","none")
    .attr("fill","#FFFFFF");
	
	const h1_1 = svg.append("path")
    .attr("d","M 500 520 C 510 490, 530 490, 540 500")
    .attr("stroke","black")
    .attr("fill","none");
	
	const h1_2 = svg.append("path")
    .attr("d","M 500 520 C 510 510, 535 515, 543 508")
    .attr("stroke","black")
    .attr("fill","none");
	
	const h2_1 = svg.append("path")
    .attr("d","M 508 545 C 502 500, 530 500, 540 500")
    .attr("stroke","black")
    .attr("fill","none");
	
	const h2_2 = svg.append("path")
    .attr("d","M 508 545 C 512 540, 540 550, 540 520")
    .attr("stroke","black")
    .attr("fill","none");
	
	const h3_1 = svg.append("path")
    .attr("d","M 548 555 C 512 540, 530 530, 540 520")
    .attr("stroke","black")
    .attr("fill","none");
	
	const h3_2 = svg.append("path")
    .attr("d","M 548 555 C 562 540, 560 530, 555 524")
    .attr("stroke","black")
    .attr("fill","none");
	
	const h4_1 = svg.append("path")
    .attr("d","M 540 548 C 575 570, 585 490, 550 500")
    .attr("stroke","black")
    .attr("fill","none");
	
	const leftBody = svg.append("path")
    .attr("d","M 548 570 C 550 585, 570 620, 560 620")
    .attr("stroke","black")
    .attr("fill","none");
	
	const rightBody = svg.append("path")
    .attr("d","M 568 560 C 580 545, 590 620, 590 613")
    .attr("stroke","black")
    .attr("fill","none");
	
	const sleeve = svg.append("path")
    .attr("d","M 548 565 C 530 565, 528 585, 553 585")
    .attr("stroke","black")
    .attr("fill","none");
	
	const arm_1 = svg.append("path")
    .attr("d","M 543 585 C 543 605, 540 620, 515 635")
    .attr("stroke","black")
    .attr("fill","none");
	
	const arm_2 = svg.append("path")
    .attr("d","M 550 585 C 550 605, 547 620, 522 635")
    .attr("stroke","black")
    .attr("fill","none");
	
	const leg_1 = svg.append("path")
    .attr("d","M 522 635 C 515 622, 560 620, 560 620")
    .attr("stroke","black")
    .attr("fill","none");
	
	const butt = svg.append("path")
    .attr("d","M 560 620 C 550 655, 620 650, 590 613")
    .attr("stroke","black")
    .attr("fill","none");
	
	const leg_2 = svg.append("path")
    .attr("d","M 525 635 C 530 640, 560 640, 560 640")
    .attr("stroke","black")
    .attr("fill","none");
	
	const leg_3 = svg.append("path")
    .attr("d","M 520 635 C 530 650, 560 645, 565 645")
    .attr("stroke","black")
    .attr("fill","none");
	
	const foot_1 = svg.append("path")
    .attr("d","M 560 640 C 565 620, 605 670, 565 645")
    .attr("stroke","black")
    .attr("fill","none");
	
	const foot_2 = svg.append("path")
    .attr("d","M 585 640 C 605 620, 625 670, 585 640")
    .attr("stroke","black")
    .attr("fill","none");
	
	const buttContour = svg.append("path")
    .attr("d","M 560 620 C 570 630, 590 625, 595 620")
    .attr("stroke","black")
    .attr("fill","none");
	
	const hand = svg.append("path")
    .attr("d","M 515 635 C 500 635, 495 645, 515 640")
    .attr("stroke","black")
    .attr("fill","none");
	
	const bowl_1 = svg.append("path")
    .attr("d","M 515 635 C 500 620, 465 645, 465 660")
    .attr("stroke","black")
    .attr("fill","none");
	
	const bowl_2 = svg.append("path")
    .attr("d","M 475 645 C 480 650, 505 635, 500 630")
    .attr("stroke","black")
    .attr("fill","none");
	
	const bowl_3 = svg.append("path")
    .attr("d","M 465 660 C 480 670, 515 655, 515 640")
    .attr("stroke","black")
    .attr("fill","none");
	


    


}