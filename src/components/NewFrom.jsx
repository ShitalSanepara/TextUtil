import React,{ useState } from 'react'

export default function NewFrom() {
  const [isReadOnly, setIsReadOnly] = useState(false);


  
  const handleUpClick = () =>{
    setIsReadOnly(prev => !prev)
}
 

  return (
    <div>
      <form>
      <label>Enter your name:
        <input type="text" disabled={isReadOnly} />
      </label>
      <label>Enter your E-mail:
        <input type="text" disabled={isReadOnly}/>
      </label>
      <label>Enter your Contact:
        <input type="text" disabled={isReadOnly}/>
      </label>
     
    </form>
    {/* <button onClick={() => setIsReadOnly(prev => !prev)}>
          {isReadOnly ? "Enable Input" : "Disable Input"}
        </button> */}
        <label  className="btn btn-outline-primary"  onClick={handleUpClick} for="btncheck1">
        {isReadOnly ? "Enable Input" : "Checkbox 1"}
          
        </label>
    </div>
  )
}




