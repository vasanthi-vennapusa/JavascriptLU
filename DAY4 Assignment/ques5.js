var sales=prompt("Enter total no.of sales");
  if(sales>=0 && sales<=5000){
    let a=sales*0.02;
	console.log(a);
	}
  else if(sales>=5001 && sales<=10000){
    let b=((5000*0.02)+((sales-5000)*0.05));
	console.log(b);
	}
  else if(sales>=10001 && sales<=20000){
    let c=((5000*0.02)+(5000*0.05)+((sales-10000)*0.07));
	console.log(c);
	}
  else{
    let d=((5000*0.02)+(5000*0.05)+(10000*0.07)+((sales-20000)*0.1));
	console.log(d);
	}