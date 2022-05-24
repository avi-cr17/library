import React,{useEffect, useState} from 'react'

const Table = (props) => {

   const [filter,setFilter] = useState(false);
   const [list,setList]= useState();

   const initialValues = {
    Name:'',
    Published: '',
    Author:'',
    Domain:'',
    
}


const [values,setValues] = useState(initialValues);
   

  useEffect(()=>{
    setList(props.bookList);  
    console.log("table component",list)
  },[props.bookList,filter])


  const handleInputChange = (e) =>{
    var {placeholder,value} = e.target;

    const search = {...values, [placeholder] : value};
    var filteredList = [];

    setValues({...values , 
        [placeholder] : value
    }) 

    
        Object.keys(props.bookList).filter( (book,i) => {
            //console.log(book)
            if( (search.Name === '' ||  props.bookList[book].Name.includes(search.Name) ) && 
            (search.Published === '' ||  props.bookList[book].Published === parseInt(search.Published) )&&
            (search.Author === '' ||  props.bookList[book].Author.includes(search.Author)  )&&
            (search.Domain === '' ||  props.bookList[book].Domain.includes(search.Domain)) )
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
    <div className='order-1 lg:order-2 lg:w-full h-fit  text-center p-5  flex flex-col align-center items-center'>

        <button className="bg-black text-slate-200 border-4 p-3 rounded-xl mt-2 mb-5 self-start" onClick={ ()=>{setFilter(!filter)}}>Filter</button>

        { filter ? 
        <form className='border-2 border-black lg:h-32 lg:w-full mb-5 flex justify-start items-center' > 
        <input type="text" className="mt-2 mb-2 lg:w-1/6 border-black lg:border-2 lg:rounded-lg p-3 ml-2" value={values.Name} placeholder="Name" aria-label="Username" onChange={handleInputChange}></input>
        <input type="text" value={values.Published} className="mt-2 mb-2 lg:w-1/6 lg:ml-2 border-black lg:border-2 lg:rounded-lg p-3" placeholder="Published" onChange={handleInputChange}/>
        <input type="text" value={values.Author} className="mt-2 mb-2 lg:w-1/6 lg:ml-2 border-black lg:border-2 lg:rounded-lg p-3" placeholder="Author" onChange={handleInputChange}/>
       <input type="text" value={values.Domain} className="mt-2 mb-2 lg:w-1/6 lg:ml-2 border-black lg:border-2 lg:rounded-lg p-3 lg:mr-5" placeholder="Domain" onChange={handleInputChange}/>
       <button className="bg-black text-slate-200 border-4 p-3 rounded-xl lg:w-1/6 lg:ml-5" onClick={ (e)=>{e.preventDefault(); setValues(initialValues); setList(props.bookList)   }}>clear</button>
       {/* <button type="submit" className="bg-black text-slate-200 lg:w-1/6 mr-2 p-3 rounded-xl ">Submit</button> */}
        </form> : 
        <div> 
            
        </div>}

        <table className='border-seperate   table-auto lg:w-full lg:h-fit'>
        <thead className='border-4 p-5 border-black bg-black text-white lg:h-12'>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Published</th>
                    <th scope="col">Author</th>
                    <th scope="col">Dompain </th>
                    <th scope="col">isAvailable </th>
                    <th scope="col">update</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>


                <tbody>
                { 

                list ? 
                Object.keys(list).map((book,i)=>(
                    
                    <tr className='lg:h-12'  key={book}>
                        <td>{list[book].Name}</td>
                    <td>{list[book].Published}</td>
                        <td>{list[book].Author}</td>
                        <td>{list[book].Domain}</td>
                        <td>{list[book].isAvailable}</td>
                        <td onClick={()=>{props.setCurrentID(book); props.setActive(true)}}><i className="fa fa-pencil-square-o  hover:cursor-pointer" aria-hidden="true" ></i></td>
                        <td onClick={()=>props.deleteHandler(book)}><i className="fa fa-times  text-red-600 hover:cursor-pointer" aria-hidden="true "></i></td>
                        
                        
                    </tr>
                        )) : <tr></tr>} 


                    

            </tbody>

            
        </table>
    </div>

    
  )
}

export default Table