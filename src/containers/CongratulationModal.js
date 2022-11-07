import React from 'react'

const CongratulationModal = () => {
  return (
    <>
    
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  modal
</button>

 
<div class="modal fade  modal-dialog modal-dialog-centered" style={{borderRadius:"50px",  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto', justifyContent:"center "  ,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header"   >
      <img src="https://www.w3schools.com/howto/img_paris.jpg"  height={"50px"} width={'80px'} ma alt="" />
        
      </div>
      <div class="modal-body">
        <p className='text-center'>Congratulation!</p>
       <p>You have Successfully shared 43.00ETH to Nectar Infotel Wallet</p>
      </div>
      <div class="modal-footer">
      <p>Go to home page</p>
      </div>
    </div>
  </div>
</div>
 
   
  </>
  )
}

export default CongratulationModal