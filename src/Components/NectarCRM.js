import React from 'react'

function NectarCRM({ title, subtext1, subtext2, buttontext2, buttontext, heading }) {
    return (
        <section className='backgroundimage-CRM'>
            <div className='container  pt-5'>
                <div className='row'>
                    <div className='col-md-6 pt-4'>
                        <h2 className="text-white" >{title}</h2>
                        <p className="text-white" >{subtext1}</p>
                        <p className='text-white' >{subtext2}</p>
                    </div>

                    <div className=" col-lg-6 pt-5">
                        <h2 className='text-white'>{heading}</h2>
                        <button className="btn btn-lg text-white m-2" style={{ borderRadius: "2px", background: "#F16728", }}>{buttontext}</button>
                        <button className="btn btn-lg text-white m-2" style={{ borderRadius: "2px",  background: "#F16728", }}>{buttontext2}</button>
                    </div>
                </div>


            </div>



        </section>

    )
}

export default NectarCRM