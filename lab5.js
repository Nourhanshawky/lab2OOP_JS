class Person{
    constructor(fullname ,money ,sleepMood,HealthRate){    
        this.fullname = fullname;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = HealthRate;
    }
    Sleep(hours){
        if(hours == 7) 
        { 
        this.sleepMood="Happy";
        }
        else if(hours < 7)
        {
            this.sleepMood="Tired";
        }
        else if(hours > 7) 
        {
            this.sleepMood="Lazy";
        }
    }
    Eat(meals){
        if(meals == 3){
            this.healthRate=100;
        }
        else if(meals == 2){
           this.healthRate=75;
        }
        else if(meals == 1){
            this.healthRate=50;
        }
    
    }
    Buy(items){
       
        this.money = this.money-items*10;
    
    }
    }
    let person2 =new Person("nour shawky" ,1000 ,"",10);
    console.log(person2);

class Employee extends Person{
    constructor(fullname ,email ,workMood ,salary ,isMgr){
       super(fullname);
        this.email=email;
        this.workMood=workMood;
        this.salary=salary;
        this.isMgr =isMgr;
    }
    work(hours){
        if(hours ==8 ){
            this.workMood="happy :)";
        }
        else if( hours > 8){
            this.workMood="tired";
        }
        else if( hours < 8 ){
            this.workMood ="lazy";
        }
    }
    
}
class office{
    constructor(name){
        this.name=name;
        this.employees= [];
    }
    
    getAllEmployees(){
        return this.employees;
    }
    getEmp(empEmail){
        
        for( var i =0 ;i<this.employees.length ;i++){
            if(empEmail == this.employees[i].email && this.employees[i].isMgr == true){
                alert(`Employee Name ${this.employees[i].fullname}`);
                alert(`Employee Health Rate ${this.employees[i].healthRate}`);
                alert(`Employee Email ${this.employees[i].email}`);
                alert(`Employee workMood ${this.employees[i].workMood}`);
                
            }
            else if(empEmail == this.employees[i].email && this.employees[i].isMgr == false){
                alert(`Employee Name ${this.employees[i].fullname}`);
                alert(`Employee Health Rate ${this.employees[i].healthRate}`);
                alert(`Employee Email ${this.employees[i].email}`);
                alert(`Employee workMood ${this.employees[i].workMood}`);
                alert(`Employee Salary is ${this.employees[i].Salary}`);
                console.log("get employee");
            }
        }
    }
    hire(){
        this.employees.push(addedEmp);
        

    }
    fire(empId){
        this.employees.splice(empId,1);
    }
}
   

    let office1 = new office("ITI");

    while(true){

    var functionalities = prompt(`Enter what do you Want to do :  \n 
    1-Enter 'add' when you want to Add employee 
    2-Enter 'mngr' when you want to Add Manager 
    3-Enter 'nrml' when you want to Add Normal Employee 
    4-Enter 'q' to Quit Application.`);


    
    if(functionalities== 'add'){
        var Name = prompt("Enter Employee Name");
        var Email = prompt("Enter Email");
        var salary = prompt("Enter Salary");
        //fullname , email ,workMood ,salary ,isMgr
        addedEmp = new Employee(Name,Email ,"happy",salary,false);
        office1.hire();
        console.log(office1);
        alert("The Employee is added successfully !")
    }

    else if(functionalities=='mngr'){
        var Name = prompt("Enter Manger Name");
        var Email = prompt("Enter Email");
        var salary = prompt("Enter Salary");
        //fullname , email ,workMood ,salary ,isMgr
        addedEmp = new Employee(Name,Email ,"happy",salary,true);
        office1.hire();
        console.log(office1);
        alert("The Manager is added successfully !")
    }

    else if(functionalities == 'nrml'){
        var Name = prompt("Enter Employee Name");
        var Email = prompt("Enter Email");
        var salary = prompt("Enter Salary");
        //fullname , email ,workMood ,salary ,isMgr
        addedEmp = new Employee(Name,Email ,"happy",salary,false);
        office1.hire();
        console.log(office1);
        alert("The Employee is added successfully !")
        
    }
  else if(functionalities == 'q'){
    break; // to exit from options
  }
    
    
}