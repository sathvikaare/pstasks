// 1..prog to print sum of min of uni and min 0f dup
num="351886761"
str=""
uni=""
dup=""
for(n of num){
   if(!str.includes(n)){
    str=str+n
   }

}
console.log(str)
for(i of str){
    c=0;
    for(j of num){
        if(i==j){
            c++
        }
    }
    if(c>1){
        dup=dup+i
    }
    else{
        uni=uni+i
    }
}

min1=uni[0];
for(i=0;i<uni.length;i++){
    if(min1>uni[i]){
        min1=uni[i]
    }
}
min2=dup[0];
for(i=0;i<dup.length;i++){
    if(min2>dup[i]){
        min2=dup[i]
    }
}
console.log("sum of largest duplicate and largest unique: "+(Number(min1)+Number(min2)))

// 2..prog to print sum of max of uni and max 0f dup
num="2237748"
str=""
uni=""
dup=""
for(n of num){
   if(!str.includes(n)){
    str=str+n
   }

}
console.log(str)
for(i of str){
    c=0;
    for(j of num){
        if(i==j){
            c++
        }
    }
    if(c>1){
        dup=dup+i
    }
    else{
        uni=uni+i
    }
}
max1=uni[0];
for(i=0;i<uni.length;i++){
    if(max1<uni[i]){
        max1=uni[i]
    }
}
max2=dup[0];
for(i=0;i<dup.length;i++){
    if(max2<dup[i]){
        max2=dup[i]
    }
}
console.log("sum of largest duplicate and largest unique: "+(Number(max1)+Number(max2)))

