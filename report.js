export default function withStatus(students) {
    return students.map(student => ({
        ...student,
        status: student.grade >= 56 ? "pass" : "fail"
    }));

}