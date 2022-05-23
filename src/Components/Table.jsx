import React,{useEffect, useState} from 'react'

const Table = (props) => {

   

  useEffect(()=>{
      
    console.log("table component",props.bookList)
  },[props.bookList])

  return (
    <div className='order-1 lg:order-2 lg:w-4/6 h-fit  text-center p-5  flex flex-col align-center items-center'>

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

                props.bookList ? 
                Object.keys(props.bookList).map((book,i)=>(
                    
                    <tr className='lg:h-12'  key={book}>
                        <td>{props.bookList[book].Name}</td>
                    <td>{props.bookList[book].Published}</td>
                        <td>{props.bookList[book].Author}</td>
                        <td>{props.bookList[book].Domain}</td>
                        <td>{props.bookList[book].isAvailable}</td>
                        <td onClick={()=>{props.setCurrentID(book)}}><i className="fa fa-pencil-square-o " aria-hidden="true"></i></td>
                        <td onClick={()=>props.deleteHandler(book)}><i className="fa fa-times  text-red-600" aria-hidden="true "></i></td>
                        
                        
                    </tr>
                        )) : ''} 


                    

            </tbody>

            
        </table>
    </div>

    
  )
}

export default Table