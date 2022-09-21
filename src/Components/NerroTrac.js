import React from 'react'

function NerroTrac({ title, subtext1, buttontext2, buttontext, heading, item1, item2, item3 }) {
  return (
    <section className='backgroundimage-Nerro-Trac'>
    <div className='container pt-5'>
        <div className='row '>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <h2 className="text-white" >{title}</h2>
                <p className="text-white" >{subtext1}</p>
                <p className=' text-white '> <span className='fa-solid fa-check-double text-white mx-3 '></span>{item1}</p>
                <p className=' text-white '> <span className='fa-solid fa-check-double text-white mx-3'></span>{item2}</p>
                <p className='  text-white '> <span className='fa-solid fa-check-double text-white mx-3'></span>{item3}</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 my-5 " style={{ justifyContent: "right" }}>
                <h2 className='text-white'>{heading}</h2>
                <button className="btn btn-lg text-white m-2" style={{ borderRadius: "2px", background: "#F16728", }}>{buttontext}</button>
                <button className="btn btn-lg text-white m-2" style={{ borderRadius: "2px", background: "#F16728", }}>{buttontext2}</button>
            </div>
        </div>
        </div>
</section>

  )
}

export default NerroTrac