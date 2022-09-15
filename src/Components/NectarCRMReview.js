import React from 'react'

function NectarCRMReview() {
    return (
        <section className='review_backgraound'>
            <div className='container '>
                <div className='row d-flex justify-content-center mb-5'>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 pt-5 ' >
                        <div className='vertical-line'>

                            <h5 className='pt-5' style={{ marginLeft: '15%' }}>Rating Pattern</h5>
                            <div className='pt-3 ' >
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="justify-content-end">Highly Recommended</span>
                            </div>

                            <div className='pt-3'>
                                <i class="fa-regular fa-star m-2"></i>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="justify-content-end">Liking much</span>
                            </div>
                            <div className='pt-3' >
                                <i class="fa-regular fa-star m-2"></i>
                                <i class="fa-regular fa-star m-2"></i>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="justify-content-end">Can be Recommend</span>
                            </div>
                            <div className='pt-3'  >
                                <i class="fa-regular fa-star m-2"></i>
                                <i class="fa-regular fa-star m-2"></i>
                                <i class="fa-regular fa-star m-2"></i>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="justify-content-end">Like less</span>
                            </div>
                            <div className='pt-3' >
                                <i class="fa-regular fa-star m-2"></i>
                                <i class="fa-regular fa-star m-2"></i>
                                <i class="fa-regular fa-star m-2"></i>
                                <i class="fa-regular fa-star m-2"></i>
                                <span class="fa fa-star checked m-2"></span>
                                <span class="justify-content-end">Not Satisfy</span>
                            </div>
                        </div>


                    </div>
                    <div className='col-md-2'>

                    </div>


                    <div className='  col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-5 '>
                        <div className="row d-flex justify-content-center">
                            <div className="testimonal_heading">
                                <h2>Share Your Review</h2>
                            </div>
                            <form className="form-testimonal">
                                <div class="form-group col-md-12 ">
                                    <input
                                        type="text"
                                        class="form-control  form-control-lg testimonalInput"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Your user name" />
                                </div>
                                <div class="form-group col-md-12 ">
                                    <input
                                        type="email"
                                        class="form-control form-control-lg testimonalInput"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Email Id" />
                                </div>
                                <div class="form-group col-md-12 ">
                                    <textarea
                                        type="textArea"
                                        class="form-control form-control-lg testimonalInput"
                                        id="exampleInputPassword1"
                                        placeholder="Please write the Review..." />
                                </div>
                                <div className='star_icon' >
                                    <span class="fa fa-star unchecked  m-2"></span>
                                    <span class="fa fa-star unchecked m-2" ></span>
                                    <span class="fa fa-star unchecked m-2"></span>
                                    <span class="fa fa-star unchecked m-2"></span>
                                    <span class="fa fa-star unchecked m-2"></span>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg submit_form">
                                    Share Your Review
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default NectarCRMReview