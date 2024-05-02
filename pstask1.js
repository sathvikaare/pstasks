// 1) Write a program that takes number as input, print the sum of odd digits in the given number
n=prompt();
sumOdd=0;
sumEven=0;
for(i=0;i<n.length;i++){
    if(i%2==0){
        sumEven=sumEven+Number(n[i]);
    }
    else{
        sumOdd=sumOdd+Number(n[i]);

    }
}
console.log(sumOdd);

// 2) Write a program to print the sum of even digits in the given numbers

n=prompt();
sumOdd=0;
sumEven=0;
for(i=0;i<n.length;i++){
    if(i%2==0){
        sumEven=sumEven+Number(n[i]);
    }
    else{
        sumOdd=sumOdd+Number(n[i]);

    }
}
console.log(sumEven);

//3) Write a program to print the differnc between even sum and odd sum in the given number.

n=prompt("enter a number");
sumOdd=0;
sumEven=0;
for(i=0;i<n.length;i++){
    if(n[i]%2==0){
        sumEven=sumEven+Number(n[i]);
    }
    else{
        sumOdd=sumOdd+Number(n[i]);

    }
}
console.log(sumEven-sumOdd);

// 4) Write a program to print the largest sum between odd sum and even sum.

n=prompt("enter a number");
sumOdd=0;
sumEven=0;
for(i=0;i<n.length;i++){
    if(n[i]%2==0){
        sumEven=sumEven+Number(n[i]);
    }
    else{
        sumOdd=sumOdd+Number(n[i]);
    }
}
if(sumOdd > sumEven){
    console.log("oddsum is greater");
}
else if(sumOdd < sumEven){
    console.log("oddsum is greater");
}
else{
    console.log("oddsum and even sum  both are equal");
}


//5.1000th index prime 
n=2
count=0;

while(n!=0){
    prime=0;
    for(i=2;i<n;i++){
        if(n%i==0){
            prime++
            break
        }
    }
    if(prime==0){
        count++;
        if(count==1000){
            console.log(n);
            break;
        }
    }
    
    n++;
}

// 6.  i/p=a_bc_d_ef
//    o/p=aBcDEf
str1="a_bc_d_ef";
str2="";
for(i=0;i<str1.length;i++){
    if(str1[i] === "_"){
        str2+= str1[i+1].toUpperCase();
        i++;
    }
    else{
        str2+=str1[i]
    }
    
}
console.log(str2)
