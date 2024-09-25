import React from 'react'

const Questions = () => {
    const intersect=(arr1:number[],arr2:number[])=>{
        let intersectionarr=arr1.filter((ele)=>{
            return arr2.includes(ele);
        })
        return 
        
         
        
        (Array.from(new Set(intersectionarr)));
    }
    console.log("intersection",intersect([1,2,2,4,5,6,7],[1,2,4,5,6,7,8]));
  return (
    <div>Questions</div>
  )
}

export default Questions