import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {

    const blogData = [{
        id: "1",
        time: "01-01-21",
        title: "প্রথম ইফতার",
        image: "https://bn.mtnews24.com/uploads/1497930074.jpg",
        description: "ইফতার অর্থ উপবাস ভঞ্জন করা। ভোর থেকে সারা দিন ‘সাওম’ পালন শেষে সূর্যাস্তের পর প্রথম যে পানাহারের মাধ্যমে উপবাস ভঞ্জন করা হয় তাকে ‘ইফতার’ বলে। যে খাদ্য বা পানীয় দ্বারা ইফতার করা হয়, তাকে ‘ইফতারি’ বলা হয়। ইফতারের সময় হওয়ার সঙ্গে সঙ্গে ইফতার "
    }, {
        id: "2",
        time: "02-02-21",
        title: "দ্বিতীয় ইফতার",
        image: "https://cdn.jagonews24.com/media/imgAllNew/BG/2018May/ifter-20180603230407.jpg",
        description: "ইফতার অর্থ উপবাস ভঞ্জন করা। ভোর থেকে সারা দিন ‘সাওম’ পালন শেষে সূর্যাস্তের পর প্রথম যে পানাহারের মাধ্যমে উপবাস ভঞ্জন করা হয় তাকে ‘ইফতার’ বলে। যে খাদ্য বা পানীয় দ্বারা ইফতার করা হয়, তাকে ‘ইফতারি’ বলা হয়। ইফতারের সময় হওয়ার সঙ্গে সঙ্গে ইফতার "
    }, {
        id: "3",
        time: "03-03-21",
        title: "তৃতীয় ইফতার",
        image: "https://cdn.jagonews24.com/media/PhotoAlbumNew/BG/2018March/ifter-baitulmokaram-1-20180525130956.jpg",
        description: "ইফতার অর্থ উপবাস ভঞ্জন করা। ভোর থেকে সারা দিন ‘সাওম’ পালন শেষে সূর্যাস্তের পর প্রথম যে পানাহারের মাধ্যমে উপবাস ভঞ্জন করা হয় তাকে ‘ইফতার’ বলে। যে খাদ্য বা পানীয় দ্বারা ইফতার করা হয়, তাকে ‘ইফতারি’ বলা হয়। ইফতারের সময় হওয়ার সঙ্গে সঙ্গে ইফতার "
    }]



    return (
        <>
            <section className="blog my-5">
                <div className="container">
                    <div className="row border border-white shadow p-5 mb-5 bg-body rounded">
                        {
                            blogData.map((data) => {
                                return (
                                    <div className="col-md-4 my-2">
                                        <div className="blog-content border border-white">
                                            <div class="card">
                                                <img src={data.image} class="card-img-top img-fluid" style={{height:"300px"}} alt="..." />
                                                <div class="card-body">
                                                    <div className="blog-date d-flex">
                                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                                        <h3 className="pl-5">{data.time}</h3>
                                                    </div>
                                                    <h5 class="card-title my-3">{data.title}</h5>
                                                    <p class="card-text">{data.description}</p>
                                                    <a href="#" class="btn btn-primary mt-3">Read More</a>
                                                </div>
                                            </div>
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

export default Blog;