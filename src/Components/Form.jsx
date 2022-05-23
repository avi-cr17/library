import React,{useState,useEffect} from 'react'

const Form = (props) => {

    const initialValues = {
        Name:'',
        Published: '',
        Author:'',
        Domain:'',
        isAvailable: '',
    }


    const [values,setValues] = useState(initialValues);

    

    useEffect(() => {
        
         if (props.currentID === '')
             setValues({ ...initialValues })
        else
             setValues({
                 ...props.bookList[props.currentID]
             })
 
             //console.log("form component",props.currentID,props.bookList)
 
     }, [props.currentID, props.bookList])
   


    const SubmitHandler = (e)=>{
        e.preventDefault();
        props.addorEdit(values);
       console.log(values);
    }

    const handleInputChange = e => {
        var { placeholder, value } = e.target;
        if(placeholder === 'Published')
        value = parseInt(value);
        console.log(e.target.value);
        setValues({
            ...values,
            [placeholder]: value
        })
    }


  return (
    <div className='order-2 lg:order-1 lg:w-2/6 lg:h-full bg-slate-100 p-5 text-center lg:flex lg:flex-col justify-center items-center ' >
        
            <div className='lg:text-4xl font-bold m-5'>Form</div>

            <form  onSubmit={SubmitHandler} className='lg:w-full lg:h-fit p-5'>
                
                
                <div className="">
                <input  type="text" className="mt-2 mb-2 lg:w-4/6 border-black lg:border-2 lg:rounded-lg p-3" value={values.Name} placeholder="Name" aria-label="Username" onChange={handleInputChange}/>
                <div className=""><input type="text" value={values.Published} className="mt-2 mb-2 lg:w-4/6 border-black lg:border-2 lg:rounded-lg p-3" placeholder="Published" onChange={handleInputChange}/></div>
                <div className=""><input type="text" value={values.Author} className="mt-2 mb-2 lg:w-4/6 border-black lg:border-2 lg:rounded-lg p-3" placeholder="Author" onChange={handleInputChange}/></div>
                <div className=""><input type="text" value={values.Domain} className="mt-2 mb-2 lg:w-4/6 border-black lg:border-2 lg:rounded-lg p-3" placeholder="Domain" onChange={handleInputChange}/></div>
                
               
               <div className='mt-2 mb-2 lg:w-5/6   p-3 flex justify-center ml-5'>
                <input type="radio"  name="fav_language" value={1} placeholder='isAvailable' onChange={handleInputChange}/>
                <label className='ml-2' htmlFor={1}>is Available</label>
                <input className='ml-5' type="radio"  name="fav_language" value={0} placeholder='isAvailable' onChange={handleInputChange}/>
                <label className='ml-2' htmlFor={0}>not Available</label>
                </div>

               </div>
                
                
                
  
                <button type="submit" className="bg-black text-slate-200 border-red-200 border-4 p-3 rounded-xl mt-5">Submit</button>

            </form>
            
    </div>
  )
}

export default Form