import React, { useEffect, useState } from 'react'
type CategoryKey = 'newtask' | 'inprogress' | 'inreview' | 'completed';
const CategoryTask = () => {
    const [Taskdescription, setTaskdescription] = useState('');
    const [selectedcategory, setselectedcategory] = useState<CategoryKey>("newtask");
    const [category, setcategory] = useState<Record<CategoryKey, string[]>>({
        "newtask": [],
        "inprogress": [],
        "inreview": [],
        "completed": []
    })
    const [Edit,setEdit]=useState<number|null>();
    const handleAddtask = () => {
        if (Taskdescription) {
            const updatedcategory = { ...category };
            updatedcategory[selectedcategory].push(Taskdescription);
            console.log(updatedcategory);
            setcategory(updatedcategory);
            setTaskdescription("");
        }
    }
    const handleDeletetask = (index: number) => {

        const updatedcategory = { ...category };
        updatedcategory[selectedcategory].splice(index,1);
        console.log(updatedcategory);
        setcategory(updatedcategory);

    }
      const handleUpdatetask = (index: number) => {

        const updatedcategory = { ...category };
        updatedcategory[selectedcategory][index]=Taskdescription;
        setTaskdescription("");
        console.log(updatedcategory);
        setcategory(updatedcategory);
        setEdit(null)

    }
    const handleEdittask = (index: number) => {
         setEdit(index);
         setTaskdescription(category[selectedcategory][index]);

       

    }
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setselectedcategory(e.target.value as CategoryKey);
    };

    return (
        <div> <div>
            <input type="text" placeholder='enter the item' value={Taskdescription} onChange={(e) => setTaskdescription(e.target.value)} className='border ' />
            <select className='border' onChange={handleCategoryChange} value={selectedcategory}>
                <option selected={true} value="newtask">New Task</option>
                <option value="inprogress">In Progress</option>
                <option value="inreview">In Review</option>
                <option value="completed">Completed</option>
            </select>
            {Edit===null?(<button className='border ml-2 px-4 rounded-2xl' onClick={handleAddtask}>Add</button>):(<></>)}
            

        </div>
            <div className='flex flex-row border  max-w-fit gap-10 '>
                {Object.keys(category).map((key) => (
                    <div key={key} className='mb-4 border'>
                        <h3 className='font-extrabold '>{key.replace(/([A-Z])/g, '-').toUpperCase()}</h3>
                        <ul className="list-disc ml-6">
                            {category[key as CategoryKey].length > 0 ? (
                                category[key as CategoryKey].map((task: string, index: number) => (
                                    <li key={index}>{task}
                                                <button className='border ml-2 px-4 rounded-2xl' onClick={()=>{handleDeletetask(index)}}>Delete</button>
                                              
           {Edit!=null?( <button className='border ml-2 px-4 rounded-2xl' onClick={()=>handleUpdatetask(index)}>Update</button>):(  <button className='border ml-2 px-4 rounded-2xl' onClick={()=>handleEdittask(index)}>Edit</button>)}
</li>
                                ))
                            ) : (
                                <h2>Empty</h2>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryTask
