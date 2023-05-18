const a={ Parent: 
            { Student: 
                { Name: "Virat", Age: 24, Rollno: 34, marks: [ { English : 85 }, { Science: 75 } ] } , 
                MobileNos: [ "1234567890", "9087654321" ] 
            } 
        };
const b = JSON.parse(JSON.stringify(a)); 
console.log(b);
b.Parent.Student.Name = "Ashna";
b.Parent.Student.Age = 23;
b.Parent.Student.Rollno = 18;
b.Parent.Student.marks[0].English = 95;
b.Parent.Student.marks[1].Science = 70;
b.Parent.MobileNos[0] = "9188508445";
b.Parent.MobileNos[1] = "9188728202";

console.log("Name a: ",a.Parent.Student.Name);
console.log("Age a: ",a.Parent.Student.Age);
console.log("Rollno a: ",a.Parent.Student.Rollno);
console.log("Marks a: ",a.Parent.Student.marks[0].English);
console.log("Marks a: ",a.Parent.Student.marks[1].Science);
console.log("MobileNos a: ",a.Parent.MobileNos[0]);
console.log("MobileNos a: ",a.Parent.MobileNos[1]);
console.log("Name b: ",b.Parent.Student.Name);
console.log("Age b: ",b.Parent.Student.Age);
console.log("Rollno b: ",b.Parent.Student.Rollno);
console.log("Marks b: ",b.Parent.Student.marks[0].English);
console.log("Marks b: ",b.Parent.Student.marks[1].Science);
console.log("MobileNos b: ",b.Parent.MobileNos[0]);
console.log("MobileNos b: ",b.Parent.MobileNos[1]);