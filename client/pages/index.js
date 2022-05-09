import React, { useState, useEffect } from "react";
import Link from "next/link";
import GiveGetSection from "../components/GiveGetSection";

export default function Home() {
	return (
		<>
			<div id="hero">
				<div className="container">
					<div id="hero-textuals">
						<h2 id="hero-title">ברוכים הבאים לשיתוף הידע החברתי</h2>
						<p id="hero-para">
							כשאנחנו מנסים להיסגר על לימודים , אנחנו נוטים להתעלם מזה שמישהו בטוח כבר צעד או כבר צועד בדרך עליה אנו מתלבטים. 
							אז למה שלא נתייעץ איתו / איתה?
							בנינו ממשק ידידותי שיעזור לך לאתר בקלות את האנשים המתאימים ביותר בשבילך כדי לגבש החלטה נכונה  ולייצר איתם שיח במהירות וכך לקבל את המידע המדויק והרלוונטי ביותר עבורך בנושא בחירת לימודים/קריירה!
						</p>

						{/* <div id="hero-actions">
							<a href="#" id="hero-action-get">
								קבל ידע
							</a>
							<a href="#">שתף ידע</a>
						</div> */}
					</div>
				</div>
			</div>

			<GiveGetSection />

			<div id="stats-section">
				<div className="container">
					<div id="stat-section-wrap">
						<div id="stats-section-right">
							<div className="stats-title">
								איך לבחור את המסלול הלימודים שהכי{" "}
								<span>מתאים לך</span>
							</div>

							<iframe
								width="400"
								height="211"
								src="https://www.youtube.com/embed/h6BVLaGuIn0"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>

						<div id="stats-section-left">
							<div className="stats-title">
								כמה נתונים מעניינים...
							</div>
							<div id="stats-box">
								<div className="stat-item">
									<span className="num">85%</span>
									<span className="text">
										מהצעירים מתקשים לבחור תחום לימודים/מקצוע
									</span>
								</div>

								<div className="stat-item">
									<span className="num">47%</span>
									<span className="text">
										בלבד פונים לייעוץ מקצועי
									</span>
								</div>

								<div className="stat-item">
									<span className="num">22%</span>
									<span className="text">
										נושרים במהלך הלימודים
									</span>
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
