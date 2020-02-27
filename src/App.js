import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .text {
    color: #666;
    border: 1px solid #ccc;
    outline: none;
    &.active {
      color: red;
      border-color: red;
    }
  }
`

const App = () => {
    const inputRef = useRef()
    const submitRef = useRef()
    const [text, setText] = useState("")

    useEffect(() => {
        console.log("I'm here")
        console.log(inputRef.current.value)
        inputRef.current.value !== "" ? submitRef.current.removeAttribute('disabled') : submitRef.current.setAttribute('disabled', true)
        const handleFocus = () => inputRef.current.classList.add('active')
        const handleBlur = () => {
            inputRef.current.classList.remove('active')
            console.log(inputRef.current.value)
            inputRef.current.value !== "" ? submitRef.current.removeAttribute('disabled') : submitRef.current.setAttribute('disabled', true)
        }

        inputRef.current.addEventListener("focus", handleFocus)
        inputRef.current.addEventListener("blur", handleBlur)

        return () => {
            inputRef.current.removeEventListener("focus", handleFocus)
            inputRef.current.removeEventListener("blur", handleBlur)
        }
    })

    console.log("rendered")

    return (
        <div className="App">
            <Wrapper>
                <p>
                    <input
                        className="text"
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        ref={inputRef}
                    />
                </p>
                <p>
                    <input
                        type="submit"
                        value="Submit"
                        ref={submitRef}
                    />
                </p>
            </Wrapper>
        </div>
    )
}

export default App

// import React, {useRef, useReducer, useEffect} from 'react';
// import './App.css';
//
// const useForceRerender = () => useReducer(state => !state, false)[1]
//
// const App = () => {
//
//     const forceRerender = useForceRerender()
//     const refCount = useRef(0)
//
//     useEffect(() => {
//         refCount.current++
//     })
//
//     console.log("Rerendered")
//
//     return (
//         <div className="App">
//             <p>Count: {refCount.current}</p>
//             <p>
//                 <button onClick={forceRerender}>
//                     Increment Counter
//                 </button>
//             </p>
//         </div>
//     );
// }
//
// export default App;
