import SignupHero from "../components/SignupHero";

const GiverSignup = () => {

	return (
		<>
			<SignupHero />

			<div className="container">
				<form id="signup-form">
					<div id="signup-title" className="give">
                        שלום <span>Giver</span> השב/י על מספר שאלות:
                    </div>

					<div className="signup-form-question">
						<div className="question-text">
							מהו התחום המקצועי שהיית רוצה לחלוק את הידע שלך בו עם אחרים? 
						</div>

						<div className="question-guides">
							ניתן לסמן יותר מתשובה אחת
						</div>

						<div className="question-options">
							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בוגר תואר
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בוגר קורס
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								מקום עבודה
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								מקום לימודים
							</label>
						</div>
					</div>

					<div className="signup-form-question">
						<div className="question-text">
							מהו הסטטוס הנוכחי שלך בתחום העניין הנבחר?
						</div>

						<div className="question-options">
							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בוגר תואר
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בוגר קורס
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								סטודנט
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								עובד בתחום
							</label>
							
							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								יועץ קריירה
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								יועץ לימודים
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								אחר
								<input type="text" className="expend-answer" />
							</label>
						</div>
					</div>

					<div className="signup-form-question">
						<div className="question-text">
							מהו תחום העניין שהיית רוצה לקבל בו ידע ממומחה?
						</div>

						<div>
							<select name="" id="">
								<option value="">
									בחר/י תחום שמעניין אותך
								</option>
							</select>
						</div>
					</div>

					<div id="giver-signup-details">
                        <div className="getter-signup-row">
                            <div className="getter-signup-col">
                                <input type="text" placeholder="שם פרטי" />
                            </div>

                            <div className="getter-signup-col">
                                <input type="text" placeholder="שם משפחה" />
                            </div>
                        </div>

                        <div className="getter-signup-row">
                            <div className="getter-signup-col">
                                <input type="text" placeholder="כתובת אימייל" />
                            </div>

                            <div className="getter-signup-col">
                                <input type="text" placeholder="מספר טלפון" />
                            </div>
                        </div>

                        <div id="getter-has-to-give-question">
                                <div className="question">
                                    מידע ורקע כללי - ספר/י עוד על עצמך
                                </div>
                            </div>

                        <div id="tell-more-form-getter">
                            <div className="tell-more-getter-row grid">
                                <div className="tell-mote-getter-col">
                                    <div>גיל</div>
                                    <input type="text" />
                                </div>

                                <div className="tell-mote-getter-col">
                                    <div>סטטוס משפחתי</div>
                                    <input type="text" />
                                </div>

                                <div className="tell-mote-getter-col">
                                    <div>שנות ניסיון בתחום</div>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="tell-more-getter-row">
                                <div>
                                    <div>תחביבים</div>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="tell-more-getter-row">
                                <div>
                                    <div>על איזה שאלות את/ה חושב/ת שהמידע שלך יוכל לענות?</div>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>

                            <div className="tell-more-getter-row">
                                <div>
                                    <div>האם יש לך תחום שהיית רוצה לקבל עליו ידע?</div>
                                    <select name="" id="">
                                        <option value="">לא</option>
                                        <option value="">כן</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <input type="submit" value="הרשמה" />
                    </div>
				</form>
			</div>
		</>
	);
};

export default GiverSignup;