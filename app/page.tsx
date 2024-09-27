"use client";
import React, { useEffect } from "react";
import Promisepizza from './components/Promisepizza';
import Task from "./components/Task";
import Pagination from "./components/Pagination";
import ValidParenthesis from "./components/ValidParenthesis";
import Questions from "./components/Questions";
import Apishow from "./components/Apishow";
type Student = {
  name: string;
  experience: number;
};
const Page = () => {
// function chunk(arr:number[],size:number){
// let result: number[][] = [];
// let minians: number[] = []; 
// for(let i=0;i<arr.length;i++){
// minians.push(arr[i]);
// if(minians.length===size || i===arr.length-1)
//  {
//   result.push([...minians]);
//   minians.length=0;
//  }

// }
//  console.log("result",result);
//  return result;
// }

//  console.log("result",chunk([1,2,3,4,5],3));

  ///factorial
  // const inputnum = parseInt(prompt("Please enter a number") || "0"); // Parsing input as a number
//  if(inputnum<=0){
//   console.log(`factorila of ${inputnum} is not possible`);
// }
// const inputnum = parseInt(prompt("Please enter a number") || "0"); // Parsing input as a number
//   let fact=1;
// if(inputnum<=0){
//   console.log(`factorila of ${inputnum} is not possible`);
// }
// else{
// for(let i=1;i<inputnum;i++){
//   fact=fact*i;
// }
// console.log(`factorial no if ${inputnum} is ${fact}`)
// }

/////sum
  // const arrnumber = [ 1, 2, 3, 4];
  // const sumofnumber=(arr:number[])=>{
  //   return arr.reduce((pre,curr)=>{
  //     return pre+curr
  //   })
  // }
  // console.log(sumofnumber(arrnumber))


  // const duplicates = arrnumber.filter((ele, index, arr) => arr.indexOf(ele) !== index);
  // console.log(arrnumber.filter((item,index)=>arrnumber.indexOf(item)===index));
  // console.log('Duplicates:', duplicates);

  //max/mini
  // const maxfunction = (arr: number[]): number => {
  // return arr.reduce((prev,curr)=>{
  //   return prev>curr?prev:curr
  // })
  //   };
  //   const minifunction = (arr: number[]): number => {
  // return arr.reduce((prev,curr)=>{
  //   return prev<curr?prev:curr
  // })
  //   };
  // console.log(arrnumber.reduce((prev,curr)=>{
  //   return prev>curr?prev:curr
  // }));

  //second largest value

  // const largestvalue= (arr: number[]): number=>{
  //   let firstlargestvalue=Math.max(...arr)
  //   let index=arr.indexOf(firstlargestvalue)
  //   arr.splice(index,1);
  //   let secondlargestvalue=Math.max(...arr)
  //   return(secondlargestvalue);
  // }
  // console.log(largestvalue(arrnumber));


  // find/filter

  // const found=arrnumber.filter((item)=>{
  //   return item>1;
  // })
  // console.log(found);


  ///missing number

  // const missing = (arr: number[]) => {
  //   const missarray = [];
  //   let maxie = Math.max(...arr);
  //   let minie = Math.min(...arr);
  //   for (let i = minie; i < maxie; i++) {
  //     if (arr.indexOf(i) < 0) {
  //       missarray.push(i);
  //     }
  //   }
  //   return (missarray);
  // }
  // console.log(missing(arrnumber));

  // even /odd no

  // console.log(arrnumber.filter((item)=>{
  //   return item%2!==0;
  // }))


  // const students: Student[] = [
  //   { name: "John Doe", experience: 1 },
  //   { name: "Jane Smith", experience: 2 },
  //   { name: "Alice Johnson", experience: 4 },
  //   { name: "Bob Brown", experience: 3 },
  //   { name: "Charlie Davis", experience: 2 },
  //   { name: "Eva Green", experience: 1 },
  //   { name: "Frank White", experience: 4 },
  //   { name: "Grace Black", experience: 3 },
  //   { name: "Hannah Wilson", experience: 2 },
  //   { name: "Ivy King", experience: 1 }
  // ];

  // const categorizeByExperience = (students: Student[]) => {
  //   const categories: Record<number, string[]> = {};

  //   students.forEach((student: Student) => {
  //     const exp = student.experience;
  //     if (!categories[exp]) {
  //       categories[exp] = [];
  //     }
  //     categories[exp].push(student.name);
  //   });

  //   return categories;
  // };

  // Use useEffect to manage the side effect

  // function getCheese(callback: (cheese: string) => void) {
  //   setTimeout(() => {
  //     const cheese = "cheese";
  //     console.log("Here is cheese:", cheese);
  //     callback(cheese);
  //   }, 2000);
  // }
  // function makeDough(cheese: string, callback: (cheese: string) => void) {
  //   setTimeout(() => {
  //     const dough = "dough";
  //     console.log("Here is dough:", dough);
  //     callback(dough);
  //   }, 2000);
  // }
  // function bakePizza(dough: string, callback: (cheese: string) => void) {
  //   setTimeout(() => {
  //     const pizzza = "pizzza";
  //     console.log("Here is pizza:", pizzza);
  //     callback(pizzza);
  //   }, 2000);
  // }
  // getCheese((cheese) => {
  //   makeDough(cheese, (dough) => {
  //     bakePizza(dough, (pizza) => {
  //       console.log("got the pizza", pizza);
  //     });
  //   });
  // });

  // Empty dependency array means it runs once after the initial render

  // const categorizedStudents = categorizeByExperience(students);

  // console.log(categorizedStudents);

  return (
    <div>
      {/* <Promisepizza /> */}
      {/* <Task/> */}
      {/* <Pagination num_of_pages={25} active_page={2} pagelimit={10}/> */}
      {/* <ValidParenthesis/> */}
{/* <Questions/> */}
     <Apishow/>
     
      {/* <h1>Categorized Students by Experience</h1> */}
      {/* {Object.keys(categorizedStudents).map((experience) => (
        <div key={experience}>
          <h2>Experience: {experience} year(s)</h2>
          <ul>
            {categorizedStudents[Number(experience)].map((studentName, index) => (
              <li key={index}>{studentName}</li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
};

export default Page;
