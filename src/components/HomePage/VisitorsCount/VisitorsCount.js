import React from 'react';
import './VisitorsCount.css';
import CountUp from 'react-countup';

const VisitorsCount = () => {
    //    const countE1 = document.getElementById('count');

    //    updateVisitorCount();

    //    function updateVisitorCount(){
    //        fetch('https://api.countapi.xyz/update/mysite.com/test?amount=1')
    //        .then(res=> res.json())
    //        .then(data => {
    //            countE1.innerHTML = data.value;
    //        })
    //    }

    const countdata = [{
        image: "",
        number: "1234",
        name: "Project Completed",
        start : "0",
        end : "400"
    }, {
        image: "",
        number: "5678",
        name: "Exclusive Volunter",
        start : "0",
        end : "100"
    }, {
        image: "",
        number: "10911",
        name: "Awards Wining",
        start : "0",
        end : "120"
    }, {
        image: "",
        number: "2443534",
        name: "Donations",
        start : "0",
        end : "34"
    }]

    return (
        <>
            <section className="count">
                <div className="container">
                    <div className="row align-items-center">
                        {
                            countdata.map((data) => {
                                return (
                                    <div className="col-sm-12 col-md-3 text-center">
                                        <div className="count-text m-5">
                                            <CountUp end={data.end} start={50} duration={20} />
                                            <h4 className="text-center">{data.name}</h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                                
            </section>
        </>
    );
};

export default VisitorsCount;