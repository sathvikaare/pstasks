// 1) Write a program to print the factorial of every digit in the number, do not consider a digit if it is repeated.

// input: 335645
// output: 6 120 720 24 

num="335645"
str=""

str2="";
for(i=0;i<num.length;i++){
    count=0;
    for(j=0;j<str2.length;j++){
        if(num[i]==str2[j]){
            count++
            break;
        }
    }
    if(count==0){
        str2=str2+num[i];
    }
}
// console.log(str2)
for(n of str2){
    i=1
    fact=1
    while(i<=n){
        fact=fact*i
        i++
    }
    str=str+fact+" "
}
console.log(str)

// 2) Write a program to print the factorial of a number in the below format.
// input: 5
// output:
1*2*3*4*5=120
input:3
1*2*3=6

n=5;
fact=1;
str=""
for(i=1;i<=n;i++){
    fact=fact*i;
    str=str+i
    if(i<n){
        str=str+"*"
    }
    
}
console.log(`${str}=${fact}`)

// 3) Write a program to print the sum of prime numbers in the fibonacci series.
// input: 10
// output: 23 (0 1 1 2 3 5 8 13 21 34)

num=10
n1=0;
n2=1;
sum=0;
str2=""
for(i=1;i<=num;i++){
    // console.log(n1)
    count=0;
    count1=0;
    if(n1>1){
    for(j=2;j<n1;j++){
        if(n1%j==0){
            count++
            break;
        }
    }
    if(count==0){
        // count1++
        // str2=str2+n1
        
        sum=sum+n1
    }}
    n3=n2+n1;
    n1=n2;1
    n2=n3;
}
console.log(sum)
// for(i=0;i<str2.length;i++){
//     sum=sum+Number(str2[i])//number + -
// }
// console.log(sum)


// 4) Write a program to find the nearest prime to the given number.
// input: 5
// Null
// input: 10
// 11

num=8;
count=0;
count1=0
for(i=2;i<num;i++){
    if(n%i==0){
        count++
        break
    }

}
if(count==0){
    count1++
}

