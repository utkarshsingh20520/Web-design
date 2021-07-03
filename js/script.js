window.onload=function(){
	

var open = document.getElementById("opennav");
var close = document.getElementById("closenav");
var nav = document.getElementById("collapsena");
var back = document.getElementById("Background");
var backs = document.getElementById("Mainback");

open.addEventListener("click",opened = () =>{
   nav.style.width = "370px";
   back.style.display = "block";
   backs.style.width = "calc(100% - 370px)";
});

close.addEventListener("click",closed = () =>{
   nav.style.width = "0px";
   back.style.display = "none";
   backs.style.width = "100%";
});


// var nav31 = document.getElementById("n31");
// var nav32 = document.getElementById("n32");
// var nav33 = document.getElementById("n33");
// var nav34 = document.getElementById("n34");
// var nav35 = document.getElementById("n35");

// nav31.addEventListener('click',show(0));
// nav32.addEventListener('click',show(1));
// nav33.addEventListener('click',show(2));
// nav34.addEventListener('click',show(3));
// nav35.addEventListener('click',show(4));

// var arr = ["n31","n32","n33","n34","n35"];

// function show(j){
// 	for(let i=0;i<5;i++)
// 	{
// 		if(j==i){
// 	      document.getElementById(arr[i]).style.borderBottom = "2px solid blue";
// 	      console.log(j);
// 	    }
// 	    else{
// 	      document.getElementById(arr[i]).style.borderBottom = "0px solid blue";
// 	      console.log(i);	
// 	    }
//     }
// }


var chart = new CanvasJS.Chart("chartContainer", {

    title:{
          text: "ASSET ALLOCATION : 1,210,000"
          },
  
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		/* indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)", */
		dataPoints: [
			{ y: 3, label: "Fixed Income",color: "#595959" },
      { y: .1,color: "white" },
			{ y: 5, label: "Equities",color:"#8c8c8c"},
       { y: .1, color: "white" },
			{ y: 22, label: "Cash",color: "grey" },
       { y: .1,color: "white" },
			{ y: 3, label: "Fixed Income",color: "#B0B0B0"},
       { y: .1, color: "white" },
			{ y: 6, label: "Equities",color: "#660000"},
       { y: .1,color: "white" },
			{ y: 13, label: "Cash",color:"#b38600"},
       { y: .1,color: "white" },
      { y: 22, label: "Fixed Income",color: "#1a0000" },
       { y: .1,color: "white" },
			{ y: 3, label: "Equities",color:"blue" },
       { y: .1,color: "white" },
			{ y: 5, label: "Cash",color:"lightblue" },
       { y: .1, color: "white" },
			{ y: 20, label: "Cash",color:"#99e6ff"},
       { y: .1,color: "white" },
			
      
      
		]
	}]
});
  
chart.render();

}
