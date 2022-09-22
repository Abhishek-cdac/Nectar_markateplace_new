import React from 'react'

function GetProduct() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 '>
                    <div className='row'>
                        <div className='col-md-6 p-5'>
                            <p>1 Payment for Product & Organization </p>
                        </div>
                        <div className='col-md-6  '>
                            <p className='my-5'>Wipro Technologies Pvt. Ltd. Nectar HRMS for 8 Users, Gold Plan</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <p className='mx-4'>2 Select Payment Method</p>
                            <div className='paymentmethod_card'>
                                <h6 className='p-3'>Your saved Credit and Debit Cards</h6>
                                <div className='text-end'>
                                    <p>Name on card <span className='mx-5'>Expires on</span> </p>
                                </div>
                                <div className='horizontal_line'></div>
                                <div className='pyment_method '>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            <h6 className="text-body">ICICI Bank Debit Card
                                                <span className='mx-2' style={{ fontSize: "10px" }}>ending with 5676</span> <span className='mx-4' style={{ fontSize: "10px" }}>John Lorenson <span className='mx-4' style={{ fontSize: "10px" }}>08/12/2022</span></span></h6>
                                        </label>
                                    </div>
                                    <p className='mx-3' style={{ fontSize: "12px" }}>Enter CVV (? ) :</p>
                                    <div className='enterccv'></div>
                                    <div className='mx-3'>
                                        <i className='fa fa-exclamation-circle green-color'></i><span style={{ fontSize: "11px" }} >This card is recommended for you <span style={{ color: " #2DC186 " }}>why</span></span></div>
                                </div>
                                <p className='mx-3'>Another payment method</p>
                                <div className='horizontal_line'></div>
                                <div class="form-check mx-3  text-dark">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Add debit/Credit/ATM Card
                                    </label>
                                </div>
                                <img src='/assets/images/jio.png' style={{ height: "60px" }}></img>
                                <div class="form-check mx-3  text-dark">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label " for="flexRadioDefault2">
                                        Net Banking
                                    </label>
                                </div>

                                <div class="dropdown">
                                    <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Choose an option
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="form-check p-3 mx-3 text-dark">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Other UPI Apps
                                    </label>
                                </div>
                                <div class="form-check p-3 mx-3 text-dark">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        EMI
                                    </label>
                                </div>
                                <div class="form-check p-3 mx-3 text-dark">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Crypto Payment
                                    </label>
                                    <p className='text-end' style={{ color: "#1291C9" }}>View Crypto Balance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className='orderdetails_card'>
                        <h5 className='mx-5'>Your Order Details</h5>
                        <div className='horizontal_line'></div>
                        <img className='image-fluid mx-4' src="/assets/images/nectrac_traveller.png" alt='imag'></img><span>Nectar CRM with 5 users</span>
                        <p className='text-center m-2' style={{ fontSize: "13px" }}>Choose the payment method to continue checking out. you will still have a chance to review your order before it's final.</p>
                        <div className='horizontal_line'></div>
                        <div className='mx-2 '>
                            <p >Order Summary</p>
                            <p className='m-1 ms-2' style={{ fontSize: "12px" }}>Product: <span className='px-5' style={{ marginLeft: "100px" }}>$3432.82</span></p>
                            <p style={{ fontSize: "12px" }}> Product Processing: <span className='px-5' style={{ marginLeft: "40px" }}>$00.0</span></p>
                        </div>
                        <div className='horizontal_line'></div>
                        <h6 className='text-center' style={{ color: " #EB5C2F" }}>Product Cost:$3432.82</h6>
                        <div className='horizontal_line'></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GetProduct