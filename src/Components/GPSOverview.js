import React from 'react'
import dummyDataCard from '../containers/Dummydatacard'
import Feature from './Feature'
import GPSAccordian from './GPSAccordian'




function GPSOverview() {
    return (
        <div className='container'>
            <div className='row mb-5'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  mt-5'>
                    <h1 className='text-center'>App Module</h1>
                    <h5 className='text-center'>Nectar GPS tracker give the real experience for the tracking and convey the real time location to the user</h5>
                    <div className="row" style={{ justifyContent: "center" }}>
                        {dummyDataCard &&
                            dummyDataCard.card.map((data) => (
                                <div className="card  small_card col-12 col-lg-3 col-sm-6 col-md-6">
                                    <img src={data.image} style={{ height: "65px", width: "81px", paddingTop: "20px" }} alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title}</h5>
                                        <p class="card-text">{data.sort}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <Feature/>
                <GPSAccordian/>
            </div>
        </div>)
}

export default GPSOverview