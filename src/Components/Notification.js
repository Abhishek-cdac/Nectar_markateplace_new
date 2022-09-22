import React from 'react'
import Header2 from './Header/Header2'

function Notification() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-8'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Notification
                        </button>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title " id="staticBackdropLabel" style={{ marginLeft: "150px" }} >Notification</h5>
                                        <p style={{ color: "#08668F" }}>clear</p>
                                    </div>
                                    <div className="modal-body">
                                        <img className='Notification_icon' src="/assets/images/notification-icon.png" alt="..." />
                                        <p className='notification_user'>Jack jane wanted to connect with <br></br>you as a new leads from XYZ Company.</p>
                                        <p className='notification_day'>Today</p>
                                        <p className='notification_time'>1 minutes ago</p>
                                    </div><hr></hr>
                                    <div className="modal-body">
                                        <img className='Notification_icon' src="/assets/images/notification-icon.png" alt="..." />
                                        <p className='notification_user'>Jack jane wanted to connect with <br></br>you as a new leads from XYZ Company.</p>
                                        <p className='notification_day'>10 Oct 2021<br></br> 04:00 PM</p>
                                        <p className='notification_time'>1 minutes ago</p>
                                    </div><hr></hr>
                                    <div className="modal-body">
                                        <img className='Notification_icon' src="/assets/images/notification-icon.png" alt="..." />
                                        <p className='notification_user'>Jack jane wanted to connect with <br></br>you as a new leads from XYZ Company.</p>
                                        <p className='notification_day'>10 Oct 2021<br></br> 04:00 PM</p>
                                        <p className='notification_time'>1 minutes ago</p>
                                    </div><hr></hr>
                                    <div className="modal-body">
                                        <img className='Notification_icon' src="/assets/images/notification-icon.png" alt="..." />
                                        <p className='notification_user'>Jack jane wanted to connect with <br></br>you as a new leads from XYZ Company.</p>
                                        <p className='notification_day'>Today</p>
                                        <p className='notification_time'>1 minutes ago</p>
                                    </div>
                                    <div className="modal-footer">
                                        <p data-bs-dismiss="modal" style={{ color: "#08668F", marginRight: "50%" }}>View All</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Notification