import React, { useState, useEffect } from 'react';
import Link from 'next/Link';

export default function Home() {

	return (
		<>
            <div id="hero">
                <div className="container">
                    <div id="hero-textuals">
                        <h2 id="hero-title">ברוכים הבאים לשיתוף הידע החברתי</h2>
                        <p id="hero-para">
                            הרעיון נוצר מתוך הנחה שכל אחד מאיתנו הוא מומחה ידע בנושא מקצועי מסוים ויחד נוכל  לייצר מעגל של מומחים כל אחד בתחומו לחלוק מהידע שלנו כלפי האחר וגם לקבל ידע חדש מאחרים.
                        </p>

                        <div id="hero-actions">
                            <a href="#" id="hero-action-get">קבל ידע</a>
                            <a href="#">שתף ידע</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="give-get-choice-section">
                <div className="section-title">אז באיזה צד אתם?</div>
                
                <div id="give-get-choice-section-content">
                    <div id="give-get-right">
                        <Link href="/giversignup">
                            <a href="/giversignup">
                                <div><img src="/images/give-mini.png" alt="" /></div>
                                <a href="#" className="give-get-btn give">GIVE</a>
                                <p className="give-get-choice-p">מתלבט/ת לגבי לימודים או תואר והיית רוצה לקבל ידע מאדם מתאים?</p>
                            </a>
                        </Link>
                    </div>

                    <div id="give-get-middle">
                        <img src="/images/givegetmiddle.png" alt="" />
                    </div>

                    <div id="give-get-left">
                        <Link href="/gettersignup">
                            <a href="/gettersignup">
                                <div><img src="/images/get-mini.png" alt="" /></div>
                                <a href="#" className="give-get-btn">GET</a>
                                <p className="give-get-choice-p">מתלבט/ת לגבי לימודים או תואר והיית רוצה לקבל ידע מאדם מתאים?</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div id="stats-section">
                <div className="container">
                    <div id="stat-section-wrap">
                        <div id="stats-section-right">
                            <div className="stats-title">איך לבחור את המסלול הלימודים  שהכי <span>מתאים לך</span></div>

                            <iframe width="400" height="211" src="https://www.youtube.com/embed/h6BVLaGuIn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div id="stats-section-left">
                            <div className="stats-title">כמה נתונים מעניינים...</div>
                            <div id="stats-box">
                                <div className="stat-item">
                                    <span className="num">85%</span>
                                    <span className="text">מהצעירים מתקשים לבחור תחום לימודים/מקצוע</span>
                                </div>

                                <div className="stat-item">
                                    <span className="num">47%</span>
                                    <span className="text">בלבד פונים לייעוץ מקצועי</span>
                                </div>

                                <div className="stat-item">
                                    <span className="num">22%</span>
                                    <span className="text">נושרים במהלך הלימודים</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="become-partnet-section">
                <img src="/images/become-partner.png" alt="" />
            </div>
		</>
	);
}
