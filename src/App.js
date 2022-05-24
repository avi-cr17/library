

import Form from './Components/Form';
import Table from './Components/Table';
import { useEffect, useState } from 'react';
import fireDB from './Firebase'

function App() {

  const [bookList,SetbookList]=useState();
  const [currentID,setCurrentID]=useState('');
  const [active,setActive] = useState(false);

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
      <Form  addorEdit={addorEdit} currentID={currentID} bookList={bookList} active={active} setActive={setActive} setCurrentID={setCurrentID}/>
      <Table  setCurrentID={setCurrentID} deleteHandler={deleteHandler} bookList={bookList} setActive={setActive}/>
    </div>
  );
}

export default App;
