// function factorial(n){
//     if(n==0 || n==1){
//         return 1
//     }else{
//         return fact=n*factorial(n-1)
//     }
// }
// console.log(factorial(5));


// // odd even by arrow function
// const n=(a)=>console.log(a%2==0?`even`:`odd`);
// n(13)

//arrow function that returns true for a positive
// const n=(a)=>console.log(a>0?`true`:`false`);
// n(100)

//arrays



// let marks = [45, 67, 30, 80, 55, 25];

// // 1. Print every mark.
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
    
// }
// // 2. Create a new array with only passing marks (mark >= 40).
// let output=marks.filter((a)=>a>=40)
// console.log(output);

// // 3. Find the first mark above 70.
// console.log(marks.find((a)=>a>50));

// // 4. Find the total marks using reduce.
// console.log(marks.reduce((a,b)=>a+b,0));

// // 5. Find the highest mark using reduce.
// console.log(marks.reduce((a,b)=>a>b?a:b));
// //6. add 5 to evry elements
// let n=marks.map((num)=>num+5)
// console.log(n);



let num=[1,2,3,4,5,6,7,8,9]
console.log(num.length);

for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i]+num[j]==10){
            console.log(num[i] , num[j]);
            
        }
    }
}
