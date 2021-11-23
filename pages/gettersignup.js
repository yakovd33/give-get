import SignupHero from "../components/SignupHero";

const GetterSignup = () => {
	return (
		<>
			<SignupHero />

			<div className="container">
				<form id="signup-form">
					<div id="signup-title" className="get">
						שלום <span>Getter</span> השב/י על מספר שאלות:
					</div>

					<div className="signup-form-question">
						<div className="question-text">
							מהו התחום המקצועי שהיית רוצה לקבל עליו ידע מאחרים?
						</div>
						<div className="question-guides">
							ניתן לסמן יותר מתשובה אחת
						</div>

						<div className="question-options">
							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בחירת תואר
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בחירת קורס
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בחירת מקום עבודה
							</label>
						</div>
					</div>

					<div className="signup-form-question">
						<div className="question-text">
							לאיזו מטרה היית רוצה לקבל ידע על תחום זה?
						</div>

						<div className="question-options">
							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בחירת תואר
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בחירת קורס
							</label>

							<label htmlFor="" className="question-option">
								<input type="checkbox" name="" id="" />
								בחירת מקום עבודה
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

					<div id="getter-signup-details">
						<div className="getter-signup-row">
							<div className="getter-signup-col">
								<input type="text" placeholder="שם מלא" />
							</div>

							<div className="getter-signup-col">
								<input type="text" placeholder="כתובת" />
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

						<div className="getter-signup-row">
							<div className="getter-signup-col">
								<input type="text" placeholder="סיסמא" />
							</div>

							<div className="getter-signup-col">
								<input type="text" placeholder="וידוא סיסמא" />
							</div>
						</div>

						<div className="getter-signup-row">
							<div id="getter-has-to-give-question">
								<div className="question">
									האם יש לך ידע בתחום מקצועי כלשהו שהיית רוצה
									לשתף בו אחרים?
								</div>
								<div className="answer">
									<button>כן</button>
									<button>לא</button>
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

export default GetterSignup;
