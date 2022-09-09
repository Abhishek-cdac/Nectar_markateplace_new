import React from 'react'

function Notification() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Notification
                        </button>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title " id="staticBackdropLabel" style={{ marginLeft: "150px" }} >Notification</h5>
                                        <p style={{ color: "#08668F" }}>clear</p>
                                    </div>
                                    <div class="modal-body">
                                        <img className='Notification_icon' src="/assets/images/notification-icon.png" alt="..." />
                                        <p className='notification_user'>Jack jane wanted to connect with <br></br>you as a new leads from XYZ Company.</p>
                                        <p className='notification_day'>Today</p>
                                        <p className='notification_time'>1 minutes ago</p>
                                    </div><hr></hr>
                                    <div class="modal-body">
                                        <img className='Notification_icon' src="/assets/images/notification-icon.png" alt="..." />
                                        <p className='notification_user'>Jack jane wanted to connect with <br></br>you as a new leads from XYZ Company.</p>
                                        <p className='notification_day'>10 Oct 2021<br></br> 04:00 PM</p>
                                        <p className='notification_time'>1 minutes ago</p>
                                    </div><hr></hr>
                                    <div class="modal-body">
                                        <img className='Notification_icon' src="/assets/images/notification-icon.png" alt="..." />
                                        <p className='notification_user'>Jack jane wanted to connect with <br></br>you as a new leads from XYZ Company.</p>
                                        <p className='notification_day'>10 Oct 2021<br></br> 04:00 PM</p>
                                        <p className='notification_time'>1 minutes ago</p>
                                    </div><hr></hr>
                                    <div class="modal-body">
                                        <img className='Notification_icon' src="/assets/images/notification-icon.png" alt="..." />
                                        <p className='notification_user'>Jack jane wanted to connect with <br></br>you as a new leads from XYZ Company.</p>
                                        <p className='notification_day'>Today</p>
                                        <p className='notification_time'>1 minutes ago</p>
                                    </div>
                                    <div class="modal-footer">
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