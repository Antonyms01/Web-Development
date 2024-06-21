'use strict'
class Bank
{
    constructor(fname,lname,amt)
    {
        this.fname=fname;
        this.lname=lname;
        this.balance=amt;
    }

    get nameget()
    {
        return this.fname
    }
    set nameset(name)
    {
        this.name=fname;
    }

    get nameget()
    {
        return this.lname
    }
    set nameset(name)
    {
        this.name=lname;
    }


    get balanceget()
    {
        return this.balance
    }
    set balanceset(balance)
    {
        this.balance=balance;
    }
deposit(amt)
{
    this.balance+=amt;
}

toString()
{
    return this.fname+" "+this.lname+" "+this.balance;
}

}

class Savingaccount extends Bank
{
    constructor(type,fname,lname,amt)
    {
        super(fname,lname,amt);
        this.type=type;
    }
   withdraw(amt)
   {
    const minbal=1000;
    if(amt>(this.balance-minbal))
    throw new TypeError("Error");
    this.balance=amt;
   }
}
var obj1=new Savingaccount("Saving","Sohan","Sarode",25000);
console.log(obj1);
obj1.name="Rohan";
obj1.withdraw(500);
console.log(obj1);