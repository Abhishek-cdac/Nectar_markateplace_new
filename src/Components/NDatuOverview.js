import React from 'react'
import NDatuFeatures from './NDatuFeatures'

function NDatuOverview() {
    return (
        <div>
        <div className='container'>
            <div className='row pt-2'>
                <div className='col  text-white pt-5' style={{ background: "#08668F", }}>
                    <h1 className='text-center'>Benefits</h1>
                    <h5 className='text-center'>nDatu not only allows you to track the progress of task resolution for multiple projects/clients, but it also saves information about all task in a database, allowing you to mine data from past task and projects/clients too.</h5>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-md-12 pt-5' >
                            <div className='line mb-4'>
                                <img className='rounded mx-auto d-block' src='assets/images/Group 3033.png' style={{ height: "65px" }} />
                                <h3 className='text-center'>Check Team at Any Time</h3>
                                <p className='text-center'>Keep your team and clients updated with notifications on issue updates, resolution, or comments.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 pt-5'>
                            <div className='line'>
                                <img className='rounded mx-auto d-block' src='assets/images/Group 3034.png' style={{ height: "65px" }} />
                                <h3 className='text-center'>Real-time Tracking</h3>
                                <p className='text-center'>Per project role based access control for users putting you in control of your busines</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 pt-5'>
                            <img className='rounded mx-auto d-block' src='assets/images/Group 3035.png' style={{ height: "65px" }} />
                            <h3 className='text-center'>Real-time Communication</h3>
                            <p className='text-center'>Flexibility to customize your issue fields, notifications and workflow.</p>
                        </div>
                    </div>
           
                </div>
            </div>
        </div>
        <NDatuFeatures/>

        </div>



    )
}

export default NDatuOverview