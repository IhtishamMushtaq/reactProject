import React from 'react'

function Toppings({topping, toppingName, setToppingName}) {
    const [obj]=topping;
    return (<>
        <h5 id="toppingsHead">Select Toppings</h5>
        <div key="" id="pizzaToppings">
         
                {
                    obj.items.map((item, index)=>{
                        const {name}=item;
                        return <div id="toppingsInside" key={index}>
                            <h6>{name}</h6>
                            <input  type="checkbox" value={toppingName} onChange={()=>setToppingName([...toppingName, name])} />
                        </div>
                    }
                    )
                }
            </div>
            </>
        
    )
}

export default Toppings
