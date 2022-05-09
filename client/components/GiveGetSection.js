import React from "react";
import Link from "next/link";

const GiveGetSection = () => {
	return (
		<>
			<div id="give-get-choice-section">
				<div className="section-title">אז באיזה צד אתם?</div>

				<div id="give-get-choice-section-content">
					<div id="give-get-right">
						<Link href="/gettersignup">
							<div>
								<div>
									<img src="/images/give-mini.png" alt="" />
								</div>
								<span className="give-get-btn get">
									GET
								</span>
								<p className="give-get-choice-p">
									מתלבט/ת לגבי לימודים או תואר והיית רוצה לקבל
									ידע מאדם מתאים?
								</p>
							</div>
						</Link>
					</div>

					<div id="give-get-middle">
						<img src="/images/givegetmiddle.png" alt="" />
					</div>

					<div id="give-get-left">
						<Link href="/giversignup">
							<div>
								<div>
									<img src="/images/get-mini.png" alt="" />
								</div>
								<span className="give-get-btn">
									GIVE
								</span>
								<p className="give-get-choice-p">
									בוגר תואר? בוגר קורס? יועץ לימודים/קריירה? היכנס לחלוק את הידע שלך עם אחרים
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default GiveGetSection;
