import React from 'react'




function ReviewForm() {
    return (
        <div className='review-form'>
            <section className='backgroundimage-review-form'>
                <div className='container'>
                    <div className='row'>
                        <form>
                            <div class="form-group">
                                <div className="d-flex justify-content-center">
                                    <p className='content-review-form'>Please Leave Us a Testimonial</p>
                                </div>
                                <input type="email" className='textfield-review-form' id="exampleFormControlInput1" placeholder="Email ID" />
                            </div><br></br>
                            <div class="form-group">

                                <input type="email" className='textfield-review-form' id="exampleFormControlInput1" placeholder="Password" />
                            </div><br></br>
                            <div class="form-group">
                                <textarea className='textfieldwords' id="exampleFormControlTextarea1" rows="3" placeholder='Your words'></textarea>
                            </div><br></br>
                            <div className="d-flex justify-content-center">
                                <button className='btn-review-form'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>



    )
}

export default ReviewForm

