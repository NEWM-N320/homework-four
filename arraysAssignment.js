//Arrays Assignment 


//insert the object array from the assignment details

const students = [

  { name: 'Alice', grades: [85, 92, 78, 90] },
 
  { name: 'Bob', grades: [75, 88, 95, 100] },
 
  { name: 'Charlie', grades: [60, 72, 68, 74] },
 
  { name: 'David', grades: [92, 88, 95, 98] },
 
  { name: 'Eve', grades: [100, 100, 100, 100] }
 
  ];
        
/* FOREACH METHOD */
//using the forEach method to display the name of each student in the sList class created

//grabbing the sList from the HTML, need the first one, which will display student names
const sListDOM = document.querySelector('.sList');

//display the student names
students.forEach(function(student) {
        
//create a span tag for the student names
const studentName = document.createElement('span');

//textContent will allow me to ADD ONTO the text in sList, not replace it entirely
//adding a space in the beginning to make it cleaner
  studentName.textContent = ' ' + student.name;

  //append the child to make it show 
  sListDOM.appendChild(studentName);
});


/* EVERY METHOD */
//using the every method to check if all students have passed the class. They need a 60 or higer

//grabbing the second par tag which will display
//p[1] will get the second par tag and target that specifically
const passedStudents = document.querySelectorAll('p')[1];


//return true if every student have passed the class
//return false if there is at least one student hasn't passed
const passedGrades = students.every(function(student) {

        //return the result of every students grades. need to be greater than or equal to 60
        return student.grades.every(grade => grade >= 60);
      });
      
      //have either true or false show up
      passedStudents.textContent += ' ' +  passedGrades;


/* SOME METHOD */
// check if at least one student has achieved a perfect score in the class. All grades are 100

//grabbing the third par which will display info
//p[2] will get the third par tag and target that specifically
const all100 = document.querySelectorAll('p')[2];

//check if any student has a perfect score
const hasPerfectScore = students.some(function(student) {

        //return the result of every student passing.
        //using the triple equals to ensure it grabs if at least someone has only 100 in their grades.
        return student.grades.some(grade => grade === 100);
      });
      
      all100.textContent +=  ' ' + hasPerfectScore;

/* FILTER METHOD */
// create the result of all the students with the average grade of 90 or higher.

      // show the result in the second sList HTML element
      //grabbing [1] will allow us to only target the second class called sList
      const avgStudent = document.querySelectorAll('.sList')[1];

// Filter students with an average grade of 90 or higher using the filter method
const topStudents = students.filter(function(student) {

        //initial count and total will be 0 to start
        let total = 0;
        let count = 0;
      

        //using a for loop to iterate through the different grades of the students
        for (let i = 0; i < student.grades.length; i++) {
        
        //the new total will be whatever the student grades are
          total += student.grades[i];

          //the count of grades will increase for every grade that exists in the arr
          count++;
        }
      
        //this will calculate the avg of each grade using the function total / count
        const avgGrade = total / count;

        //ONLY return the avg grade of a student that has a result of 90 or higher
        return avgGrade >= 90;
      });
      
      // use a loop to build the list of student names

      //the string will start off empty, assuming there are no students (yet)
      let topStudentsString = '';

      //using the for loop again, go through ever student
      for (let i = 0; i < topStudents.length; i++) {

        //if there is more than 0 students
        if (i > 0) {

                //separate the name with a space
          topStudentsString += ' ';
        }

        //the string will also add the appropriate student's names
        topStudentsString += topStudents[i].name;
      }
 
      //add the content with the students name
      avgStudent.textContent += ' ' + topStudentsString;


      /* MAP METHOD */
      //grabbing the par that will target the avg list
      const studentAvgsList = document.getElementById('studentAvgs');

      // Use the map method to create student summaries
      const studentSummaries = students.map(function(student) {

        //init total will be 0, the avg is 0 assuming there are no grades and no avg
        let total = 0;

        //using a for loop to iterate through the students grades length
        for (let i = 0; i < student.grades.length; i++) {

          //add the grades of the students to the total
          total += student.grades[i];
        }

        //calculate the avg of the students grades, this will be individual 
        const avgGrade = total / student.grades.length;

        //create a new arr with the student name and their own individual avg grades
        return `Name: ${student.name}, Average Grade: ${avgGrade}`;
      });
      
      //display the student summaries in the unordered list
      //create a small foreach to create a list item for each student and their grades
      studentSummaries.forEach(function(summary) {

        //create a list item that will create an li element
        const listItem = document.createElement('li');

        //the content will be the summary of the arr, student name and student avg grade
        listItem.textContent = summary;

        //append the child onto the parent, the list of the student
        studentAvgsList.appendChild(listItem);
      });
      
      
  /* REDUCE METHOD */
//calculate the total number of grades across all students.

//grabbing the final par in the html element
const countTotalGrades = document.querySelectorAll('p')[5];

//reduce the total grades to count how many grades each student have
//will use the student count and the total of grades
const totalGrades = students.reduce(function(total, student) {

  //return the total plus the length of grades each student has
  return total + student.grades.length;
}, 0); //init val will be 0, 0 is assuming there are no grades to start off

//grab the html element and add the amnt of total grades 
countTotalGrades.textContent += ' ' + totalGrades;