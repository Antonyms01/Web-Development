let Calculator=()=>{
    let txt1=document.getElementById("txt1").value;
    let txt2=document.getElementById("txt2").value;
    let operation=document.getElementById("operation").value;
    let ans=document.getElementById("free");
    let total=0;

    switch(operation)
    {
        case '+':
            total= +txt1 + +txt2;
            break;

        case '-':
            total= +txt1 - +txt2;
            break;

        case '*':
            total= +txt1 * +txt2;
            break;

        case '/':
             total= +txt1 / +txt2;
            break;
    }
    ans.value=total;
    document.getElementById(ans).value=total;
}