
let person=function(nm,ag)
   {     this.name=nm;
	 this.age=ag;
       this.dojob=function()   {
        console.log("do-=== job hello<br/>");
    }
}
let obj=new person("Raj",25);
obj.dojob()
console.log("<hr/>")
for(let prop in obj)
{ if(typeof obj[prop]=='function')          //Ask Ques
    obj[prop]();
console.log(prop+" "+obj[prop]);
console.log("<hr/>")
}
