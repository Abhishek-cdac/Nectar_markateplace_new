import React from 'react'

function NerroTracOverview() {
    return (
        <div className='container'>
            <div className='row pt-2'>
                <div className='col  text-white pt-5' style={{ background: "#08668F", }}>
                    <h1 className='text-center'>Features</h1>
                    <h5 className='text-center'>Nectar GPS tracker give the real experience for the tracking and convey the real time location to the user</h5>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-md-12 pt-5' >
                            <div className='line mb-4'>
                                <img className='rounded mx-auto d-block' src='assets/images/Group 3024.png' style={{ height: "65px" }} />
                                <h3 className='text-center'>Email Notifications</h3>
                                <p className='text-center'>Keep your team and clients updated with notifications on issue updates, resolution, or comments.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 pt-5'>
                            <div className='line'>
                                <img className='rounded mx-auto d-block' src='assets/images/Group 3025.png' style={{ height: "65px" }} />
                                <h3 className='text-center'>Access Control</h3>
                                <p className='text-center'>Per project role based access control for users putting you in control of your business.</p>
                            </div>


                        </div>
                        <div className='col-lg-4 col-md-12 pt-5'>
                           
                                <img className='rounded mx-auto d-block' src='assets/images/Group 3026.png' style={{ height: "65px" }} />
                                <h3 className='text-center'>Customizable</h3>
                                <p className='text-center'>Flexibility to customize your issue fields, notifications and workflow.</p>
                         




                        </div>
                  


                    </div>



                </div>
            </div>
        </div>




    )
}

export default NerroTracOverview