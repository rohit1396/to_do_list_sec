import React, { useState } from 'react';
import Todolist from './Todolist';

const App = () => {

  const [inputList, setinputList] = useState('');

  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  }

  const listOfItems = () => {
    setitems((olditems) => {
      return [...olditems, inputList]
    });
    setinputList('');
  }

  const deleteItems = (id) => {
    console.log('clicked');
    
    setitems((olditems) => {
      return olditems.filter((arrElem,index) => {
        return index != id;
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-do List App</h1>
          <br />
          <input type="text" placeholder="Add an item" onChange={itemEvent} value={inputList} />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}

            {items.map((itemval,index) => {
              return (
                <Todolist
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems} />
                )
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;