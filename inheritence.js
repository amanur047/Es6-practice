class Parent{
    constructor()
    {
        this.FatherName ="Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
        getFullName()
        {
            return this.name +" " + this.FatherName;
        }

    }

const baby = new Child("ARNOLD");
const baby2 = new Child("TOM");
console.log(baby.getFullName());
console.log(baby2.getFullName());