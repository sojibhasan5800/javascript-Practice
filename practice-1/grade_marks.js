
function getGrade(marks) {
    let grade;

    if (marks >= 90 && marks <= 100) {
        grade = "A+";
    } else if (marks >= 80 && marks < 90) {
        grade = "A";
    } else if (marks >= 70 && marks < 80) {
        grade = "B";
    } else if (marks >= 60 && marks < 70) {
        grade = "C";
    } else if (marks >= 50 && marks < 60) {
        grade = "D";
    } else if (marks >= 0 && marks < 50) {
        grade = "F";
    } else {
        grade = "Invalid marks"; 
    }

    return grade;
}


const marks = 85; 
console.log(`Marks: ${marks}, Grade: ${getGrade(marks)}`);

