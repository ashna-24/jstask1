class accountdtls{
    constructor(firstname, lastname, balance){
        this.firstname = firstname;
        this.lastname = lastname;
        this.balance = balance; 
        let fullname = firstname+" "+lastname;
        console.log("Account holder name:",fullname);
        console.log("Balance amount:",balance);

        function deposit(depositamount){
            balance = balance + depositamount;
            console.log("Balance after deposit:",balance);
        }
        deposit(200);

        function withdraw(withdrawamt){
            if(withdrawamt <= balance){
                balance = balance - withdrawamt;
                console.log("After withdrawal:", balance);
                console.log("true");
            }
            else{
                console.log("Insufficient amount! Your available balance is:", balance);
                console.log("false");
            }
        }
        withdraw(200);
        withdraw(1000);
    }
}

var result = new accountdtls("Ashna", "F Raj", 500);
var result = new accountdtls("Narveen", "K A", 700);