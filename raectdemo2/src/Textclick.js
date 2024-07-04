import { useState } from "react";



export function Textclick()
{
    const[gettext1,settext1]=useState();
    const[gettext2,settext2]=useState();


const change=(e)=>
    {
        settext1(e.target.value);
    }

    const change1=(e)=>
        {
            settext2(e.target.value);
        }

    const Copy1=()=>
        {
            settext2(gettext1);
        }

        
    const Copy2=()=>
        {
            settext1(gettext2);
        }
    return(
        <div>
            <input type="textarea" value={gettext1} placeholder="Type Here"  onChange={change}></input>
            <br/>
        <input type="button" value="Copy1" onClick={Copy1}></input>
            <br/>

            <input type="textarea" value={gettext2} placeholder="Type Here" onChange={change1}></input>
            <br/>
            <input type="button" value="Copy2" onClick={Copy2}></input>

        </div>
    );
}