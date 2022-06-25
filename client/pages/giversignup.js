import React, { useState, useEffect } from 'react';
import SignupHero from "../components/SignupHero";
import ApiHelper from '../helpers/ApiHelper';
import Select from 'react-select';
import { fields } from '../constants/fields';

const GiverSignup = () => {
	const needs = [
		'בחירת תואר',
		'בחירת קורס',
		'מקום עבודה',
		'מקום לימודים'
	];

    const statuses = [
        'בוגר תואר',
        'בוגר קורס',
        'סטודנט',
        'עובד בתחום',
        'יועץ קריירה',
        'יועץ לימודים',
        'אחר'
    ];

    const status_questions = {
        'בוגר תואר': 'איזה תואר למדת?',
        'בוגר קורס': 'איזה קורס למדת?',
        'סטודנט': 'סטודנט לאיזה תואר?',
        'עובד בתחום': 'באיזה תחום אתה עובד?',
        'יועץ קריירה': null,
        'יועץ לימודים': null,
        'אחר': 'פרט/י',
    };

	const [ need, setNeeds ] = useState(
		new Array(needs.length).fill(false)
	);

	const [ status, setStatus ] = useState('');
	const [ field, setField ] = useState('');
    const [ statusAnswer, setStatusAnswer ] = useState('');

	// General fields
    const [ fullname, setFullname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ age, setAge ] = useState('');
    const [ experience, setExperience ] = useState('');
    const [ hobbies, setHobbies ] = useState('');
    const [ questions, setQuestions ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ rePass, setRePass ] = useState('');
    const [ feedback, setFeedback ] = useState('');
    const [ selectedFields, setSelectedFields ] = useState([]);
    const [ isEmailAgreed, setIsEmailAgreed ] = useState(false);

	const handleOnChangeNeeds = (position) => {
        const updatedCheckedState = need.map((item, index) =>
        index === position ? !item : item
      );
  
      setNeeds(updatedCheckedState);
    }

	const handleSubmit = (e) => {
        e.preventDefault();

        var selected_needs = [];

        for (var i = 0; i < needs.length; i++) {
            if (need[i]) {
                selected_needs.push(needs[i])
            }
        }

        let final_needs = JSON.stringify(selected_needs);
        let finalSelectedFields = JSON.stringify(selectedFields);

        ApiHelper.post('users/', { fullname, email, phone, password, type: 'giver', needs: final_needs, status, fields: finalSelectedFields, hobbies, questions, experience, age, statusAnswer }, (res) => {
            setFeedback(res.msg);
			console.log(res);
        })
    }

    const handleFieldSelect = (values) => {
        let finalFields = [];

        values.map((item) => {
            finalFields.push(item.value);
        })

        setSelectedFields(finalFields)
    }

	return (
		<>
			<SignupHero />

			<div className="container">
				<form id="signup-form" onSubmit={ (e) => handleSubmit(e) }>
					<div id="signup-title" className="give">
                        שלום <span>Giver</span> השב/י על מספר שאלות:
                    </div>

					{/* <div className="signup-form-question">
						<div className="question-text">
							מהו התחום המקצועי שהיית רוצה לחלוק את הידע שלך בו עם אחרים? 
						</div>

						<div className="question-guides">
							ניתן לסמן יותר מתשובה אחת
						</div>

						<div className="question-options">
							{ needs.map((name, index) => (
                                <label htmlFor="" className="question-option">
                                    <input type="checkbox" value={ name } name="" id="" onChange={() => handleOnChangeNeeds(index) }/>
                                    { name }
                                </label>
							))}
						</div>
					</div> */}

<div className="signup-form-question">
						<div className="question-text">
							מהו תחום העניין שהיית רוצה לקבל בו ידע ממומחה?
						</div>

						<div>
                            <Select options={fields} placeholder="מהו תחום העניין שהיית רוצה לחלוק את הידע שלך בו עם אחרים?" isMulti={ true } onChange={ handleFieldSelect } />
						</div>
					</div>

					<div className="signup-form-question">
						<div className="question-text">
							מהו הסטטוס הנוכחי שלך בתחום העניין הנבחר?
						</div>

						<div className="question-options">
							{ statuses.map((name, index) => (
                                <label htmlFor="" className="question-option">
                                    <input type="radio" name="status" onChange={ () => setStatus(name) } id="" />
                                    { name }
                                </label>
                            ))}
						</div>
					</div>

                    { status_questions[status] && (
                        <div className="signup-form-question">
                            <div className="question-text">
                                { status_questions[status] }
                            </div>

                            <div className="question-options">
                                <input type="text" value={ statusAnswer } onChange={ (e) => setStatusAnswer(e.target.value) } />
                            </div>
                        </div>
                    ) }

					<div id="giver-signup-details">
                        <div className="getter-signup-row">
                            <div className="getter-signup-col full">
                                <input type="text" value={ fullname } onChange={ (e) => setFullname(e.target.value) } placeholder="שם מלא" />
                            </div>
                        </div>

                        <div className="getter-signup-row">
                            <div className="getter-signup-col">
                                <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) } placeholder="כתובת אימייל" />
                            </div>

                            <div className="getter-signup-col">
                                <input type="text" value={ phone } onChange={ (e) => setPhone(e.target.value) } placeholder="מספר טלפון" />
                            </div>
                        </div>

						<div className="getter-signup-row">
							<div className="getter-signup-col">
								<input type="text" value={ password } onChange={ (e) => setPassword(e.target.value) } placeholder="סיסמא" />
							</div>

							<div className="getter-signup-col">
								<input type="text" value={ rePass } onChange={ (e) => setRePass(e.target.value) } placeholder="וידוא סיסמא" />
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
                                    <input value={ age } onChange={ (e) => setAge(e.target.value) } type="text" />
                                </div>

                                <div className="tell-mote-getter-col">
                                    <div>סטטוס משפחתי</div>
                                    <input type="text" />
                                </div>

                                <div className="tell-mote-getter-col">
                                    <div>שנות ניסיון בתחום</div>
                                    <input value={ experience } onChange={ (e) => setExperience(e.target.value) } type="text" />
                                </div>
                            </div>

                            <div className="tell-more-getter-row">
                                <div>
                                    <div>תחביבים</div>
                                    <input value={ hobbies } onChange={ (e) => setHobbies(e.target.value) } type="text" />
                                </div>
                            </div>

                            <div className="tell-more-getter-row">
                                <div>
                                    <div>על איזה שאלות את/ה חושב/ת שהמידע שלך יוכל לענות?</div>
                                    <textarea value={ questions } onChange={ (e) => setQuestions(e.target.value) } name="" id="" cols="30" rows="10"></textarea>
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

                        { feedback && <p id="signup-feedback">{ feedback }</p> }

                        <div>
                            <label className="agree-to-email">
                                <input type="checkbox" checked={ isEmailAgreed } onChange={ (e) => { setIsEmailAgreed(e.target.checked) } }/>
                                מאשר/ת את הסכמתי לקבל מסרים באימייל, בSMS ובכל אמצעי שיווק שהוא
                                (שדה חובה)
                            </label>
                        </div>

                        <div className="submit-btn-wrap">
						    <input type="submit" value="הרשמה" disabled={ !isEmailAgreed }/>
                        </div>
                    </div>
				</form>
			</div>
		</>
	);
};

export default GiverSignup;