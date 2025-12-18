        let a=Math.random()+100;
        a=Number.parseInt(a);
        var imp;
        var score=0;
        while(a!=imp){
            score +=1;
          imp=parseInt(prompt("enter the number"));
            if(imp==a){
                console.log("congratulation ! you gives the correct number")
                console.log(" you guess the actul actul number in ${score} chance.")
            }
            else if(imp <a && imp<100){
                console.log("youe number is greater then actual number")
            }
            else if(imp<a && imp>0){
                console.log("youe number is smaller then actual number")
            }
            else {
                console.log("enter number between 1 to 100")
            }
            
        }
