import React, { useState } from 'react';

type CategoryKey = 'newtask' | 'inprogress' | 'inreview' | 'completed';

const CategoryTask = () => {
    const [Taskdescription, setTaskdescription] = useState('');
    const [selectedcategory, setselectedcategory] = useState<CategoryKey>("newtask");
    const [category, setcategory] = useState<Record<CategoryKey, string[]>>({
        "newtask": [],
        "inprogress": [],
        "inreview": [],
        "completed": []
    });
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editCategory, setEditCategory] = useState<CategoryKey | null>(null);

    const handleAddtask = () => {
        if (Taskdescription) {
            const updatedcategory = { ...category };
            updatedcategory[selectedcategory].push(Taskdescription);
            setcategory(updatedcategory);
            setTaskdescription("");
        }
    };

    const handleDeletetask = (cat: CategoryKey, index: number) => {
        const updatedcategory = { ...category };
        updatedcategory[cat].splice(index, 1);
        setcategory(updatedcategory);
    };

    const handleEdittask = (cat: CategoryKey, index: number) => {
        setEditingIndex(index);
        setTaskdescription(category[cat][index]);
        setEditCategory(cat);
        setselectedcategory(cat); 
    };

    const handleUpdatetask = () => {
        if (editCategory !== null && editingIndex !== null) {
            const updatedcategory = { ...category };
            updatedcategory[editCategory].splice(editingIndex, 1); 
            updatedcategory[selectedcategory].push(Taskdescription);
            setcategory(updatedcategory);
            setTaskdescription('');
            setEditingIndex(null);
            setEditCategory(null);
        }
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setselectedcategory(e.target.value as CategoryKey);
    };

    return (
        <div className='bg-black text-white w-full h-full'>
            <div>
                <input
                    type="text"
                    placeholder='Enter the task'
                    value={Taskdescription}
                    onChange={(e) => setTaskdescription(e.target.value)}
                    className='border bg-black'
                />
                <select
                    className='border bg-black'
                    onChange={handleCategoryChange}
                    value={selectedcategory}
                >
                    <option value="newtask">New Task</option>
                    <option value="inprogress">In Progress</option>
                    <option value="inreview">In Review</option>
                    <option value="completed">Completed</option>
                </select>
                {editingIndex === null ? (
                    <button className='border ml-2 px-4 rounded-2xl' onClick={handleAddtask}>
                        Add
                    </button>
                ) : (
                    <button className='border ml-2 px-4 rounded-2xl' onClick={handleUpdatetask}>
                        Update
                    </button>
                )}
            </div>
            <div className='flex flex-row border max-w-fit gap-10'>
                {Object.keys(category).map((key) => (
                    <div key={key} className='mb-4 border'>
                        <h3 className='font-extrabold'>
                            {key.replace(/([A-Z])/g, '-').toUpperCase()}
                        </h3>
                        <ul className="list-disc ml-6">
                            {category[key as CategoryKey].length > 0 ? (
                                category[key as CategoryKey].map((task: string, index: number) => (
                                    <li key={index}>
                                        {task}
                                        <button
                                            className='border ml-2 px-4 rounded-2xl'
                                            onClick={() => handleDeletetask(key as CategoryKey, index)}
                                        >
                                            Delete
                                        </button>
                                        {editingIndex === index && editCategory === key ? (
                                           <></>
                                        ) : (
                                            <button
                                                className='border ml-2 px-4 rounded-2xl'
                                                onClick={() => handleEdittask(key as CategoryKey, index)}
                                            >
                                                Edit
                                            </button>
                                        )}
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
    );
};

export default CategoryTask;
