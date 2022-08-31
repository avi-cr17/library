import React,{useState,useEffect} from 'react'

const Form = (props) => {

    const initialValues = {
        Question:'',
        Time: '',
        Remarks:'',
        Topic:'',
        isAvailable: '',
        Link: ''
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
        if(placeholder === 'Time Taken (in mins)')
        {//value = parseInt(value);
        console.log(e.target.value);
        setValues({
            ...values,
            ["Time"]: value
        })
        }
        else{
        setValues({
            ...values,
            [placeholder]: value
        })
    }
    }

    if(props.active)
  return (
    <div className='order-2 lg:order-1 lg:w-3/6 lg:h-full bg-slate-100 p-5 text-center lg:flex lg:flex-col justify-center items-center ' >
            <i className="fa fa-3x top-0 left-0 m-5 hover:cursor-pointer fa-bars absolute" aria-hidden="true" onClick={ ()=> {props.setActive(!props.active); setValues(initialValues); props.setCurrentID('')}}></i>
            <div className='lg:text-4xl font-bold m-5'>{props.currentID === '' ? 'Add' : 'Update'} a Question</div>

            <form  onSubmit={SubmitHandler} className='lg:w-full lg:h-4/6 p-5'>
                
                
                <div className="lg:w-6/6">
                <input  type="text" className="mt-2 mb-2 lg:w-4/6 border-black lg:border-2 lg:rounded-lg p-3" value={values.Question} placeholder="Question" aria-label="Username" onChange={handleInputChange}/>
                <div className=""><input type="text" value={values.Link} className="mt-2 mb-2 lg:w-4/6 border-black lg:border-2 lg:rounded-lg p-3" placeholder="Link" onChange={handleInputChange}/></div>
                <div className=""><input type="text" value={values.Time} className="mt-2 mb-2 lg:w-4/6 border-black lg:border-2 lg:rounded-lg p-3" placeholder="Time Taken (in mins)" onChange={handleInputChange}/></div>
                <div className=""><input type="text"  value={values.Remarks} className="lg:h-32 mt-2 mb-2  lg:w-4/6 border-black lg:border-2 lg:rounded-lg p-3" placeholder="Remarks" onChange={handleInputChange}/></div>
                <div className=""><input type="text" value={values.Topic} className="mt-2 mb-2 lg:w-4/6 border-black lg:border-2 lg:rounded-lg p-3" placeholder="Topic" onChange={handleInputChange}/></div>
                
               
               <div className='mt-2  lg:w-6/6   p-3 flex justify-center ml-5'>
                <input type="radio" className='lg:mt-1'  value={1} placeholder='isAvailable' onChange={handleInputChange}/>
                <label className='ml-2 ' htmlFor={1}>Revision</label>
                <input className='ml-5 lg:mt-1' type="radio"   value={0} placeholder='isAvailable' onChange={handleInputChange}/>
                <label className='ml-2' htmlFor={0}>Not Required</label>
                </div>

               </div>
                
                
                
  
                <button type="submit" className="bg-black lg:w-4/6 text-slate-200 border-4 p-3 rounded-xl mt-5">Submit</button>

            </form>
            
    </div>
  )
  if(!props.active){
      return (
        <div className='order-2 lg:order-1 lg:w-1/12 lg:h-full bg-slate-100 p-5 text-center lg:flex lg:flex-col justify-center items-center ' >
        <i className="fa fa-3x top-0 left-0 m-5 hover:cursor-pointer fa-bars absolute" aria-hidden="true" onClick={ ()=> {props.setActive(!props.active)}}></i>    
        </div>
      )
  }
}

export default Form