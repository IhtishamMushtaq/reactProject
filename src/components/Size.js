import React from 'react'

function Size(props) {
    // console.log(props)
    // console.log(size)
    // const [arrObj]=size;
    // console.log(arrObj)
    
  
    return (
        <div id="pizzaSize" >
            <h5>Select Sizes</h5>
        <div id="sizeContainer">
            {props.size.map(sizeObject=>sizeObject.isRadio?sizeObject.items.map((sizes, index)=><h6 key={index}>{sizes.size}<input type="radio" name="size" id="size" value={sizes.size} onChange={e=>props.onChange(e.target.value)} /></h6>):<h6>No sizes</h6>)}
        </div>
          
            
        </div>
    )
}

export default Size
