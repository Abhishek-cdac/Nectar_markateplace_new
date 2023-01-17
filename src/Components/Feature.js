import React from 'react'
import './Feature.css'

function Feature() {
    return (
        <section className='background_feature'>
            <div className='container'>
                <div className='row mb-5 pt-5'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  text-white pt-5' >
                        <h1 className='text-center'>Features</h1>
                        <h5 className='text-center'>Nectar GPS tracker give the real experience for the tracking and convey the real time location to the user</h5>
                        <div className='row'>
                            <div className= 'col-xs-12 col-lg-3 col-md-12 col-sm-6 mt-5' >
                                <div className='line mb-4'>
                                    <img className='rounded mx-auto d-block' src='assets/images/live-trac.png' style={{ height: "65px" }} />
                                    <h3 className='text-center'>Live Tracking</h3>
                                    <p className='text-center'>Do Real-Time Tracking of your objects (vehicles, people, bikes, etc.) with additional information like speed, time, location. Monitor the driver position plus track the vehicle/Fleet which elevate the security and safety levels for the user.</p>
                                </div>
                            </div>
                            <div className=' col-xs-12 col-lg-3 col-md-12 col-sm-6 mt-5'>
                                <div className='line mb-4'>
                                    <img className='rounded mx-auto d-block' src='assets/images/notification.png' style={{ height: "65px" }} />
                                    <h3 className='text-center'>Notifications Alert</h3>
                                    <p className='text-center'>Create the customized rules & get instant alerts on your iPhone, Android or Windows devices, via e-mail, mobile app or SMS. Get SOS alarms if the device goes out of set perimeter.</p>

                                </div>


                            </div>
                            <div className=' col-xs-12 col-lg-3 col-md-12 col-sm-6 mt-5'>
                                <div className='line mb-4'>
                                    <img className='rounded mx-auto d-block' src='assets/images/geofence.png' style={{ height: "65px" }} />
                                    <h3 className='text-center'>Geofensing</h3>
                                    <p className='text-center'>The Geofence feature in your tracking device allows you to create virtual perimeters around any area on the map, record and quantify all activity related to that landmark.</p>

                                </div>




                            </div>
                            <div className=' col-xs-12 col-lg-3 col-md-12 col-sm-6 mt-5'>

                                <img className='rounded mx-auto d-block' src='assets/images/reports.png' style={{ height: "65px" }} />
                                <h3 className='text-center'>Report Generation</h3>
                                <p className='text-center'>Analyse reports through a GPS tracking software that comes with the device with all the information like by date and the GPS tracker name, including driving hours, stopovers, distance travelled in different formats: XLS, PDF, CSV, TXT.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default Feature;
