import React from 'react'
type Student = {
  name: string;
  experience: number;
};
const page = () => {
  const students: Student[] 
    = [
    { "name": "John Doe", "experience": 1 },
    { "name": "Jane Smith", "experience": 2 },
    { "name": "Alice Johnson", "experience": 4 },
    { "name": "Bob Brown", "experience": 3 },
    { "name": "Charlie Davis", "experience": 2 },
    { "name": "Eva Green", "experience": 1 },
    { "name": "Frank White", "experience": 4 },
    { "name": "Grace Black", "experience": 3 },
    { "name": "Hannah Wilson", "experience": 2 },
    { "name": "Ivy King", "experience": 1 }
  ];
 
  const categorizeByExperience = (students: Student[]) => {
    const categories: Record<number, string[]> = {};

    students.forEach((student: Student) => {
      const exp = student.experience;
    if (!categories[exp]) {
      categories[exp] = [];
    }
    categories[exp].push(student.name);
  });

  return categories;
};

const categorizedStudents = categorizeByExperience(students);

console.log(categorizedStudents);
  return (
    <div>
      <h1>Categorized Students by Experience</h1>
      {Object.keys(categorizedStudents).map((experience) => (
        <div key={experience}>
          <h2>Experience: {experience} year(s)</h2>
          <ul>
            {categorizedStudents[Number(experience)].map((studentName, index) => (
              <li key={index}>{studentName}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default page