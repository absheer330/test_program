import { students } from './data.js';
import withStatus from './report.js';
const updatedStudents = withStatus(students);
updatedStudents.forEach(student => {
    console.log(`${student.name}: ${student.status}`);
});
console.log(students[0].status);