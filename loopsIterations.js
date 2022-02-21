// level {2}


//1 1 2 3 5 8



function fibonacci(n){
    var first=0 ,last=1,next,sum=0;
    var newArr=[];
    for(let i=0;i<n;i++){
        newArr.push(first);
        next=first+last;
        first=last;
        last=next;

    }
    for(let item of newArr){
        sum=sum+item;
    }
    return sum
    
}



const result =  fibonacci(6);
console.log(result);

