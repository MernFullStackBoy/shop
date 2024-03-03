import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import Todo from './Todo'

function ShoppingAdd({ handleSubmit, textRef, numRef }) {

    const [num, setNum] = useState("")

    const [text, setText] = useState("")

    return (
        <form onSubmit={handleSubmit}>
            <input required ref={textRef} onChange={(e) => { setText(e.target.value) }} value={text} name='title' placeholder='Title...' type="text" />
            <input required name='number' ref={numRef} value={num} onChange={(e) => setNum(e.target.value)} placeholder='15' type="number" />
            <button>Add</button>
        </form>
    )
}

export default ShoppingAdd