import React, { useState } from "react";
interface PaginationProps {
  num_of_pages: number;
  active_page: number;
  pagelimit:number;
}
const Pagination: React.FC<PaginationProps> = ({
  num_of_pages,
  active_page,
  pagelimit,
}) => {
  const [activepage, setactivepage] = useState(active_page);
  const prevButton = () => {
    if (activepage > 1) {
      setactivepage((prevPage) => prevPage - 1);
    }
  };

  const nextButton = () => {
    if (activepage < pagelimit) {
      setactivepage((prevPage) => prevPage + 1);
    }
  };
  const Pageclickhandler=(target_page:number)=>{
    setactivepage(target_page);
  }

  const getpages=(start:number,limit:number,numofpages:number)=>{
    const diff=numofpages-start;
    if(diff<limit){
        return (new Array(limit).fill(0)).map((_,index)=>{
            return num_of_pages-limit+1+index;
        })
    }
    return (new Array(limit).fill(0)).map((_,index)=>{
        return start+index;
    })
  }
  const pages=getpages(active_page,pagelimit,num_of_pages);
  return (
    <div className="flex flex-row gap-x-4 ">
      <button onClick={prevButton} disabled={active_page===1}>{"<"}</button>
      {(pages).map((_, index) => {
        return (
          <span
            className={`rounded-full p-4 bg-${
              activepage === index + 1 ? "red-500" : "gray-500"
            }`}
         onClick={()=>Pageclickhandler(index+1)} >
            {index + 1}
          </span>
        );
      })}
      <button onClick={nextButton} disabled={active_page===num_of_pages}>{">"}</button>
    </div>
  );
};

export default Pagination;
