// 1) Program to print 1 to num, num to 1, -1 to -num, -num to -1 by using while loop
// 1 to num
i=1;
num=10
while(!(i==num+1)){
    console.log(i)
    i++
}


//2.10 to num
 i=10;
num=1
while(!(i===num-1)){
    console.log(i)
    i--
}
// 3.-1 to -num
i=-1;
num=-10
while(i!=num-1){
    console.log(i)
    i--
}


//  -num to -1
num=-10
i=-1
for(i=-1;i>=num;i--){
    console.log(i)

}



// 2) Write a program to find the largest prime in the given number
input: 46537
output: 7
num= "46537";
str1="";
    for(n of num){
        prime=0;
        noprime=0;
        if(n>1){
            for(i=2;i<n;i++){
                if(n%i==0){
                    prime++
                    break;   
                }
            }
            if(prime==0){
                str1=str1+n;
               }
        }
    }
    // console.log(str1)
    max=Number(str1[0]);
    min=Number(str1[0]);
    for(i=0;i<str1.length;i++){
        if(str1[i]>max){
            max=str1[i];
        }
    }
    console.log(max)
// 3) Write a program to print the sum of largest and smallest prime digits in the given number
// input: 5497351
// output: 10
num= "5497351";
str1="";
    for(n of num){
        prime=0;
        noprime=0;
        if(n>1){
            for(i=2;i<n;i++){
                if(n%i==0){
                    prime++
                    break;   
                }
            }
            if(prime==0){
                str1=str1+n;
               }
        }
    }
    max=Number(str1[0]);
    min=Number(str1[0]);
    for(i=0;i<str1.length;i++){
        if(str1[i]>max){
            max=Number(str1[i]);
        }
        if(str1[i]<min){
            min=Number(str1[i]);
        }
    }
    // res=Number(min)
    // res2=Number(max)
    // console.log(`${min+max}`)
    
// 4) Write a program to print the largest non prime digit in the given number
input: 463482
output: 8
num= "463482";
str1="";
    for(n of num){
        prime=0;
        noprime=0;
        if(n>1){
            for(i=2;i<n;i++){
                if(n%i==0){
                    prime++
                    str1=str1+n;
                    break;   
                }
            }
            if(prime==0){
                qazqawq
               }
        }
    }
    // console.log(str1)
    max=Number(str1[0]);
    min=Number(str1[0]);
    for(i=0;i<str1.length;i++){
        if(str1[i]>max){
            max=str1[i];
        }
    }
    console.log(max)
