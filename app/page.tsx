"use client";
import React, { useEffect } from "react";
import Promisepizza from './components/Promisepizza';
type Student = {
  name: string;
  experience: number;
};

const Page = () => {
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
      <Promisepizza/>
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
