import React from 'react'

import googleCloud from '../../images/events/google-cloud.gif'
import meetupPic from '../../images/events/meetup.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'

export default () => (
    <section id="workshops" name="workshops" class="section-spacer workshops-section">
        <div class="container">
            <header class="section-header text-center">
                <h2 class="section-title wow fadeInUp">Events & Workshops</h2>
                <p class="section-subtitle wow fadeInUp">Come learn, share and connect with us in person.</p>
            </header>

            <div class="workshops-type-switch">
                <ul class="nav nav-pills justify-content-center js-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#upcoming">Upcoming Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#past">Past Events</a>
                    </li>
                </ul>
            </div>
            <div class="tab-content">
                <div id="upcoming" name="upcoming" class="tab-pane active" role="tabpanel" aria-labelledby="upcoming">
                    <div class="row">

                        <div class="col-md-4 col-12">
                            <div class="card event-card wow fadeInUp">
                                <img alt="First event poster" class="card-img-top" src={googleCloud} />
                                <div class="card-body">
                                    <p class="tagging beginner float-right">Beginner</p>
                                    <h5 class="card-title">Fundamentals of Google Cloud Platform</h5>

                                    <table>
                                        <tr>
                                            <td width="15%" class="text-blue"><FontAwesomeIcon icon={faCalendarAlt} /></td>
                                            <td>13<sup>th</sup> November 2020</td>
                                        </tr>
                                        <tr>
                                            <td class="text-red"><FontAwesomeIcon icon={faMapMarkerAlt} /></td>
                                            <td>Online Event, Zoom</td>

                                        </tr>
                                        <tr>
                                            <td class="text-green"><FontAwesomeIcon icon={faClock} /></td>
                                            <td>07:30PM - 09:30PM (SGT)</td>
                                        </tr>
                                    </table>

                                    <a class="button float-right" href="http://bit.ly/dscpsba-discord">Attend</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-12">
                            <div class="card event-card wow fadeInUp">
                                <img alt="Event two poster" class="card-img-top" src={meetupPic} />
                                <div class="card-body">
                                    <p class="tagging beginner float-right">Beginner</p>
                                    <h5 class="card-title">DSC-PSBA Members Meetup</h5>

                                    <table>
                                        <tr>
                                            <td width="15%" class="text-blue"><FontAwesomeIcon icon={faCalendarAlt} /></td>
                                            <td>1<sup>th</sup> November 2020</td>
                                        </tr>
                                        <tr>
                                            <td class="text-red"><FontAwesomeIcon icon={faMapMarkerAlt} /></td>
                                            <td>Online Event, Zoom</td>
                                        </tr>
                                        <tr>
                                            <td class="text-green"><FontAwesomeIcon icon={faClock} /></td>
                                            <td>07:00PM - 08:00PM</td>
                                        </tr>
                                    </table>

                                    <a href="http://bit.ly/dscpsba-discord" class="button float-right">Attend</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="past" name="past" class="tab-pane" role="tabpanel" aria-labelledby="past">
                    <section class="section-spacer">
                        <div class="container">
                            <div class="row flex-column-reverse flex-sm-row align-items-cengit ter">
                                <div class="col-sm-5 mr-auto wow fadeInUp">
                                    <div class="feature-list-wrapper">
                                        <div class="content-header">
                                            <h2 class="content-title">DSC-PSBA Launch Event</h2>
                                            <hr />
                                            <h6>DATE : 26<sup>th</sup> October 2020</h6>
                                            <h6>VENUE : Online Event, Blackboard</h6>
                                            <p>This date marks the official launch of DSC-PSBA!</p>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="feature-list-image">
                                        <iframe src="https://docs.google.com/presentation/d/13VlEvhIc7sSQY4BNSi7l1ZCrc1Stz8rOVQoRjncTse4/embed?start=false&loop=false&delayms=3000"
                                            frameborder="0" width="480" height="299" allowfullscreen="true"
                                            mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </section>
)
