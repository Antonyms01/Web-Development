import { useState } from "react";

export default function Radio()
{
    const[changing,checking]=useState();


const change=(e)=>{
    checking(e.target.value);
};
return(
    <div>
        <label>
        <input type="radio" value="Yes" checked={changing==='Yes'}  onChange={change}/>
        Yes
        </label>
        <br/>
        <label>
        <input type="radio" value="No" checked={changing==='No'}  onChange={change}/>
        No
        </label>
        <br/>
        <textarea
        value={changing ? ` ${changing}` : ''}
    
      />

    </div>
);
}