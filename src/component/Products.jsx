import React from 'react'

function Products({state, dispatch}) {
  const {products,cart}=state
  return (
    <>
    <div className='w-[75%]'>
      <div className='grid grid-cols-3 gap-8'>
      {
        products.map((pd)=> (<div key={pd.id} className='p-8 border'>
                  <div className=' '>   <img className='max-w-[70%]' src={pd.thumbnail} alt="" /></div>
                  <div className='flex justify-between w-32'>
                    <h3>{pd.title.slice(0,10)}</h3>
                    <h3>{pd.price}</h3>
                  </div>
                  {cart.some((p) => p.id === pd.id) ? (
            <button
              className='mt-4 px-16'
              style={{paddingLeft:5,paddingTop:10, border:0,borderRadius:5,backgroundColor:'#e53935',color:'white', marginTop:"20px"}}
              onClick={() => dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: pd,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
            className='mt-4 px-16'
             style={{paddingLeft:5,paddingTop:10,border:0,borderRadius:5,backgroundColor:'green',color:'white', marginTop:"20px"}}
             onClick={() => dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: pd.id,
                    title: pd.title,
                    thumbnail: pd.thumbnail,
                    qty: pd.qty,
                    price: pd.price,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
              </div>
         ))
      }

      </div>
      </div>
    </>
  
  
  )}

export default Products