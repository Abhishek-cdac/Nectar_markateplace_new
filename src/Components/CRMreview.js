import React from 'react'
import dummydatareview from '../containers/DummydataReview'
import dummyDataReview from '../containers/DummydataReview'




function CRMReview() {
    console.log("dummyDataReview", dummyDataReview)
    return (
        <div className='container pt-5'>
            <div className='row pt-5'>
                {dummyDataReview &&
                    dummydatareview.ReviewData.map((data) => (
                        <div className='col-12 col-sm-6 col-md-8 pt-5'>
                            <img className='Review_icon' src={data.image} style={{ height: "55px" }} alt="..." />
                            <h5 className="review_title ">{data.title}</h5>
                            <p className='review_designation'>{data.desiganation}</p>
                            <p className='review_adress'>{data.address}</p>
                            <div className='review_star'>
                                <span class="fa fa-star checked  m-1"></span>
                                <span class="fa fa-star checked m-1" ></span>
                                <span class="fa fa-star checked m-1"></span>
                                <span class="fa fa-star checked m-1"></span>
                                <span class="fa fa-star checked m-1"></span>
                            </div>
                            <h6 className='mt-3'>{data.description}</h6>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default CRMReview