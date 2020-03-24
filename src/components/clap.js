import React, {useState} from 'react'

 const Clap = () => {
    const[count, setCount] = useState(0)

    return (
        <div className="clap">
        <h3>Show Support</h3>
        <h3>Likes {count}</h3>
        {/* //only run when clicking the buttton  */}
        <button onClick={() => setCount (count + 1)}>Click Me</button>


        </div>
    )
}
export default Clap