document.querySelector('#btn').addEventListener('click',function(){
	const update=function(){
			let dob=document.querySelector('#dob').value,
			day=new Date(dob),
			time=day.getTime(),
			today=new Date(),
			timenow=today.getTime(),
			value=timenow-time,
			seconds=Math.floor(value/1000),
			minutes=Math.floor(value/(1000*60)),					
			hours=Math.floor(value/(1000*60*60)),
			days=Math.floor(value/(1000*60*60*24)),
			week=Math.floor(value/(1000*60*60*24*7)),
			month=Math.floor(value/(1000*60*60*24*30.4735)),
			year=Math.floor(value/(1000*60*60*24*365.25));
			
	let calculate=function(x,y){
		document.querySelector(x).innerHTML=y;
	}
	calculate("#year",year + "---->" + "Years");
	calculate("#month",month  + "---->" +  "Months");
	calculate("#week",week  + "---->" + "Weeks");
	calculate("#days",days +  "---->" + "Days");
	calculate("#hours",hours  + "---->" +  "Hours");
	calculate("#minutes",minutes  + "---->" + "Minutes");
	calculate("#seconds",seconds  + "---->" + "Seconds");
	}
	setInterval(update,1000);
});
