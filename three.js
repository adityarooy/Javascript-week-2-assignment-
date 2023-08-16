const students = [
    {name: "Mithun", marks: 95},
    {name: "Prabin", marks: 75},
    {name: "Alka", marks: 92},
    {name: "Shivam", marks: 70},
    {name: "Farman", marks: 99},
];

function checkResult(name){
    for (let i = 0; i < students.length; i++){
        let student = students[i];
        if (student.name === name) {
            if (student.marks > 90) {
                console.log(`Congratulations ${student.name}! You have cleared the exam.`);
            }else{
                console.log(`Sorry! You have not cleared the exam.`);
            }
            return;
        }
    }
    console.log("Invalid User!!!");
}
checkResult("Mithun")
checkResult("Prabin")
checkResult("Mithun s")