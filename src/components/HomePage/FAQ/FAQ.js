import React from 'react';
import './FAQ.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
    return (
        <>
            <div className="faq  mt-5">
                <div className="container bg-light shadow p-3 mb-5 rounded">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <h1>Frequently Asked Questions</h1>
                            <p className="mb-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione est ipsam deleniti sequi perferendis hic reprehenderit beatae vitae culpa!</p>
                            <button type="button" className="btn btn-warning bt-hover">Learn More</button>
                        </div>

                        <div className="col-md-6 border">
                            <h1>আপনার জিজ্ঞাসা?</h1>
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <FontAwesomeIcon icon={faPlus} />    সমিতি কি?
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>   কোন এক শ্রেণী পেশার মানুষ যখন নিজেদের স্বার্থ রক্ষার নিমিত্তে কোন ব্যবসা প্রতিষ্ঠান গড়ে তুলে তাকে সমবায় সমিতি বা ব্যবসা বলে। সবে মিলে করি কাজ হচ্ছে সমবায় সমিতির মূলনীতি।
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <FontAwesomeIcon icon={faPlus} />    সমিতি কেন করবেন?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button> আপনি সমবায় সমিতি কেন করবেন?
                                            ১) সমবায় সমিতি একটি সংবিধিবদ্ধ সংস্থা।
                                            ২) নিবন্ধন লাভ করার পর এর মাধ্যমে দেশে প্রচলিত উপআইনে উল্লেখিত যেকোন বৈধ ব্যবসা করা যাবে।
                                            ৩) বাংলাদেশ সংবিধানের (১৩ক ও গ) অনুযায়ী অন্য ব্যবসা বানিজ্য করার জন্য সরকারকে ৩৫-৩৮% ট্যাক্স প্রদান করতে হয়। সমবায়ের মাধ্যমে প্রতিষ্ঠিত ব্যবসা প্রতিষ্ঠানকে ১৮% (১৫% কর + ৩% সিডিএফ) ট্যাক্স প্রদান করতে হয়। যা অন্য মালিকানা (রাষ্ট্রীয় ও ব্যক্তি) হতে ১০%-১৫% কম।
                                            ৪) নিবন্ধিত সমবায় প্রতিষ্ঠান তার দাবি আদায়ের লক্ষ্যে যেকোন মামলা পরিচালনা করতে পারবে, নিবন্ধকের অনুমতি সাপেক্ষে।
                                            ৫)নিবন্ধিত সমবায় প্রতিষ্ঠান তার নামে যেকোন তফসিলি বা সমবায় ব্যাংকে হিসাব খোলার মাধ্যমে লেনদেন পরিচালনা করতে পারবে।
                                            ৬) সমবায় সমিতি উৎপাদিত পন্য ব্র্যন্ডিং করার জন্য দেশের ১ কোটির অধিক সমবায়ী সদস্যকে তার ক্রেতা হিসেবে বিবেচনা করতে পারবে, যা অন্য ব্যবসায় ব্যয়সাধ্য।
                                            ৭) সমবায় প্রতিষ্ঠান বিশ্বব্যাপী অত্যন্ত জনপ্রিয় ও সমাদৃত।
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <FontAwesomeIcon icon={faPlus} />    আমাদের সাথে সমিতি করতে হলে কি কি নিয়ম মানতে হবে?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;