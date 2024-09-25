import React, { useState } from 'react'
const isvalid=(str:string)=>{
        let stk:string[]=[];
        for(let i=0;i<str.length;i++){
            let char=stk[stk.length-1];
            if(str[i]==="[" || str[i]==="(" ||str[i]==="{" ){
                stk.push(str[i]);
            }
            else if((char=="[" && str[i]=="]") || (char=="{" && str[i]=="}") ||(char=="(" && str[i]==")")  ){
                stk.pop();
            }
            else return false;
            
        }
        return stk.length===0;
}
const ValidParenthesis = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (isvalid(input)) {
        setResult('The parentheses are valid.');
      } else {
        setResult('The parentheses are invalid.');
      }
    };
  return (
    <div>
    <h2>Valid Parenthesis Checker</h2>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a string of parentheses"
      />
      <button type="submit">Check</button>
    </form>
    {result && <p>{result}</p>}
  </div>
  )
}

export default ValidParenthesis