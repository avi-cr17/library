import React,{useEffect, useState} from 'react'
import Mobile from './Mobile';

const Table = (props) => {

   const [filter,setFilter] = useState(false);
   const [list,setList]= useState();
   var [total,setTotal]= useState(0);
   var [rivision,setRivision]= useState(0);

   const initialValues = {
    Question:'',
    Time: '',
    Remarks:'',
    Topic:'',
    isAvailable : 0,
    Link : ''
}


const [values,setValues] = useState(initialValues);
   

  useEffect(()=>{
    setList(props.bookList);  
    console.log("table component",list)
    if(props.bookList!=null)
    setTotal(Object.keys(props.bookList).length)
  },[props.bookList,filter])


  const handleInputChange = (e) =>{
    var {placeholder,value} = e.target;
    const search = {...values, [placeholder] : value};
    var filteredList = [];

    if(placeholder == 'isAvailable')
    setRivision(!rivision)

    setValues({...values , 
        [placeholder] : value
    }) 

    console.log(search)
        Object.keys(props.bookList).filter( (book,i) => {
            //console.log(book)
            if( (search.Question === '' ||  props.bookList[book].Question.toLowerCase().includes(search.Question.toLowerCase()) ) && 
            (search.Topic === '' ||  props.bookList[book].Topic.toLowerCase().includes(search.Topic.toLowerCase()))  && 
            (search.isAvailable === 0 ||  props.bookList[book].isAvailable == search.isAvailable))
            {filteredList.push(book)
            console.log(search.Name  , " ",  filteredList)}
        }
    )
    
    var items = {};
    
    for(let i=0; i< filteredList.length;i++){
        items [filteredList[i]] = props.bookList[filteredList[i]];
    }

    console.log(items)

    setList(items);

  }

  return (
    <div className='order-1 lg:order-2 lg:w-full h-screen  text-center p-5  flex flex-col align-center items-center overflow-scroll'>

        
        <div className='text-5xl font-bold mt-3'> {total} questions done</div>
        <button className="bg-black text-slate-200 border-4 p-3 rounded-xl mt-2 mb-5 self-start" onClick={ ()=>{setFilter(!filter)}}>Filter</button>
        { filter ? 
        <form className='border-2 border-black lg:h-32 lg:w-full mb-5 flex justify-start items-center' > 
        <input type="text" className="mt-2 mb-2 lg:w-1/6 border-black lg:border-2 lg:rounded-lg p-3 ml-2" value={values.Question} placeholder="Question" aria-label="Username" onChange={handleInputChange}></input>
        <input type="text" className="mt-2 mb-2 lg:w-1/6 border-black lg:border-2 lg:rounded-lg p-3 ml-2" value={values.Topic} placeholder="Topic" aria-label="Topic" onChange={handleInputChange}></input>
        <input className='ml-5 lg:mt-0' type="radio"  checked={rivision} value={"1"} placeholder='isAvailable' onChange={handleInputChange}/>
        <label className='ml-2' htmlFor={1}>Rivision Left?</label>
       <button className="bg-black text-slate-200 border-4 p-3 rounded-xl lg:w-1/6 lg:ml-5" onClick={ (e)=>{e.preventDefault(); setValues(initialValues); setList(props.bookList); setRivision(0)   }}>clear</button>
       {/* <button type="submit" className="bg-black text-slate-200 lg:w-1/6 mr-2 p-3 rounded-xl ">Submit</button> */}
        </form> : 
        <div> 
            
        </div>}

        <table className='border-separate  overflow-scroll border-2 border-spacing-3 table-auto lg:w-full lg:h-fit'>
        <thead className='border-4 p-5  bg-black text-white lg:h-12 border'>
                    <tr>
                    <th scope="col">Question</th>
                    <th scope="col">Time</th>
                    <th scope="col">Remarks</th>
                    <th scope="col">Topic </th>
                    <th scope="col">Rivision </th>
                    <th scope="col">update</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Link</th>
                    </tr>
                </thead>


                <tbody>
                { 

                list ? 
                Object.keys(list).map((book,i)=>(
                    
                    <tr className='lg:h-20 hover:bg-slate-200'  key={book}>
                        <td className='border border-black '>{list[book].Question}</td>
                    <td className='border border-black'>{list[book].Time}</td>
                        <td className='border border-black'>{list[book].Remarks}</td>
                        <td className='border border-black'>{list[book].Topic}</td>
                        <td className='border border-black'>{list[book].isAvailable == 1 ? "yes" : "no"}</td>
                        <td onClick={()=>{props.setCurrentID(book); props.setActive(true)}}><i className="fa fa-pencil-square-o  hover:cursor-pointer" aria-hidden="true" ></i></td>
                        <td onClick={()=>props.deleteHandler(book)}><i className="fa fa-times  text-red-600 hover:cursor-pointer" aria-hidden="true "></i></td>
                        <td><a href={list[book].Link} target="_blank"><i className="fa fa-external-link  hover:cursor-pointer" aria-hidden="true" ></i></a></td>
                        
                    </tr>
                        )) : <tr></tr>} 


                    

            </tbody>

            
        </table>
       
    </div>

    
  )
}

export default Table