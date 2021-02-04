class Student{
    constructor(sId, sName){
        this.id =sId;
        this.name =sName;
        this.university="IUBAT";
    }

}
const student1 = new Student(1, "Amanur");
const student2 =new Student(2, "Tazim");
console.log(student1,student2);