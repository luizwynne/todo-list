import React, { useState, useEffect }from 'react'
import './index.css'
import api from "../../services/api";
import TodoListItem from '../TodoListItem';

export default function TodoList() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/todo").then((response) => 
          setItems(response.data),
        )
       .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    console.log(items)
  }, [items])
  
  return (
    <div className='todo-list-wrapper'>
      { 
        items.length > 0 ? (
            items.map(item => (
              <TodoListItem key={item.id} item={item}/>
            ))
          ) 
        : <h4>Não foram encontrados items.</h4>
      }
    </div>
  )
}
