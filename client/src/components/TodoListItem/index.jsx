import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import './index.css'
import api from "../../services/api";

export default function TodoListItem({item: { id, description, isDone } }) {

  const [isEdit, setIsEdit] = useState(false)
  const [textDescription, setTextDescription] = useState(description)

  const ref = useRef(null)

  const handleOnChange = (e) => {
    setTextDescription(e.target.value)
  }

  const handleClickInside = () => {
    setIsEdit(true)
  }

  const handleClickOutside = () => {
    setIsEdit(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  useEffect(() => {

    const keyDownHandler = event => {
        console.log(description)
      if (event.key === 'Enter') {
        event.preventDefault();
        api.put(`/todo/${id}`, {
            'description': description 
        }).then((response) => 
          console.log('Deu certo')
        )
       .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => document.removeEventListener('keydown', keyDownHandler);
    
  },[]);
    
  return (
    <div>
        <div className='item-wrapper'>
            <div className='item-check-box'>
                <input type="checkbox" name="scales"/>
            </div>
            <div style={{display: isEdit == true ? 'none':'block'}} onClick={handleClickInside} className='item-view-mode'>
                {description}
            </div>
            <div style={{display: isEdit == true ? 'block':'none'}} ref={ref} onClick={handleClickInside} className='item-edit-mode'>
                <input type="text" onChange={e => handleOnChange(e)} defaultValue={description} />
            </div>
        </div>
        <hr className='custom-hr'/>
    </div>
  )
}
