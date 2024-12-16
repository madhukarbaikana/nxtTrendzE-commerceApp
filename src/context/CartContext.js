import React,{useState} from "react"

export const CartContext=React.createContext()

export const CartContextProvider=({children})=>{
    
const [cartList,setCartList]=useState([])

const removeItemFromCart=(id)=>{
const updatedCartList=cartList.filter(eachItem=>eachItem.id!==id)
setCartList(updatedCartList)

}

const addToCart=(item)=>{
    const existingItem=cartList.find(eachItem=>eachItem.id===item.id)

    if(existingItem){
        const updatedQuantity=existingItem.quantity+item.quantity

      const updatedCartList=cartList.map(eachItem=>{
            if(eachItem.id===item.id){
                return {...eachItem,quantity:updatedQuantity}
            }else{
                return eachItem
            }
        }
        )
        setCartList(updatedCartList)
    }else{
    setCartList([...cartList,item])
    }

}

const removeAllFromCart=()=>{
setCartList([])
}

const onIncreaseQuantity=(id)=>{
    const updatedCartList=cartList.map(eachItem=>{

        if(eachItem.id===id){
            return {...eachItem,quantity:eachItem.quantity+1}
        }else{
            return eachItem
        }
    })
    setCartList(updatedCartList)
}

const onDecreaseQuantity=(id)=>{
    const findObject=cartList.find(eachItem=>eachItem.id===id)

    if(findObject.quantity>1){

        const updatedCartList=cartList.map(eachItem=>{
            if(eachItem.id===id){
                return {...eachItem,quantity:eachItem.quantity-1}
            }
            return eachItem
        })
        setCartList(updatedCartList)
    }else{
            removeItemFromCart(findObject.id)
        }
}

return (<CartContext.Provider value={{cartList,setCartList,addToCart,
    removeAllFromCart,onIncreaseQuantity,onDecreaseQuantity,removeItemFromCart}}>
        {children}</CartContext.Provider>)
}










