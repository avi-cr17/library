

import Form from './Components/Form';
import Table from './Components/Table';
import { useEffect, useState } from 'react';
import fireDB from './Firebase'

function App() {

  const [bookList,SetbookList]=useState();
  const [currentID,setCurrentID]=useState('');

  useEffect(()=>{

    

        fireDB.child('books').on('value', snapshot =>{
        SetbookList({...snapshot.val() }); 
        console.log("app component",bookList);
      })
        
      
          
      
  },[currentID])

  const addorEdit = (obj)=>{
    if (currentID == '')
        fireDB.child('books').push(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentID('')
            })
    else
        fireDB.child(`books/${currentID}`).set(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentID('')
            })
}

const deleteHandler = (id)=>{
    if (window.confirm('Are you sure to delete this record?')) {
        fireDB.child(`books/${id}`).remove(
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentID('')
            })
    }
}


  

  

  return (
    <div className=" flex lg:h-screen h-fit w-screen justify-center content-center lg:flex-row flex-col ">
      <Form  addorEdit={addorEdit} currentID={currentID} bookList={bookList} />
      <Table  setCurrentID={setCurrentID} deleteHandler={deleteHandler} bookList={bookList}/>
    </div>
  );
}

export default App;
