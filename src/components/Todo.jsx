import React, { useState } from 'react'

function Todo({ num, title, handleDelete }) {

    const [checked, setChecked] = useState(false)

    function check() {
        setChecked(prev => !prev)
    }

    return (
        <div className={`Todo ${checked && "check"}`}>
            <div className='Child'>
                <div>{num}</div>
                <h3>{title}</h3>
            </div>
            <div className='again'>
                <input checked={checked} onClick={check} type="checkbox" />
                <button onClick={handleDelete} className='fas fa-xmark'></button>
            </div>
        </div>
    )
}

export default Todo