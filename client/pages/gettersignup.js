import React, { useState } from 'react';
import SignupHero from "../components/SignupHero";
import ApiHelper from '../helpers/ApiHelper';
import Select from 'react-select';
import { fields } from '../constants/fields';

const GetterSignup = () => {
    const needs = [
		'בחירת תואר',
		'בחירת קורס',
		'בחירת מקום עבודה'
	];

    const purposes = [
        'בחירת תואר',
        'בחירת קורס',
        'בחירת מקום עבודה'
    ]

    const [ need, setNeeds ] = useState(
		new Array(needs.length).fill(false)
	);

	const [ purpose, setPurpose ] = useState('');
	const [ field, setField ] = useState('');

    // General fields
    const [ fullname, setFullname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ rePass, setRePass ] = useState('');
    const [ feedback, setFeedback ] = useState('');
    const [ wouldLikeToShare, setWouldLikeToShare ] = useState(false);
    const [ selectedFields, setSelectedFields ] = useState([]);
    const [ isEmailAgreed, setIsEmailAgreed ] = useState(false);

    const handleOnChangeNeeds = (position) => {
        const updatedCheckedState = need.map((item, index) =>
        index === position ? !item : item
      );
  
      setNeeds(updatedCheckedState);
    }

    const handleExpand = (e) => {
        setPurpose(e.target.value);

        let radio = document.querySelector("input[type='radio'][name='purpose']:checked");
        radio.checked = false;
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

        ApiHelper.post('users/', { fullname, email, phone, password, type: 'getter', needs: final_needs, purpose, fields: finalSelectedFields, wouldLikeToShare }, (res) => {
            setFeedback(res.msg);
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
                    <div id="signup-title">
						שלום <span>Getter</span> השב/י על מספר שאלות:
					</div>

                    {/* <div className="signup-form-question">
                        <div className="question-text">
                            מהו התחום המקצועי שהיית רוצה לקבל עליו ידע מאחרים?
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
                        מהו התחום המקצועי שהיית רוצה לחלוק אותו עם מאחרים?
                        </div>

                        <div className="question-options">
                            <Select options={fields} placeholder="מהו התחום המקצועי שהיית רוצה לקבל עליו ידע?" isMulti={ true } onChange={ handleFieldSelect } />
                        </div>
                    </div>

                    <div className="signup-form-question">
                        <div className="question-text">
                            לאיזו מטרה היית רוצה לקבל ידע על תחום זה?
                        </div>

                        <div className="question-options">
                            { needs.map((name, index) => (
                                <label htmlFor="" className="question-option">
                                    <input type="radio" name="purpose" onChange={ () => setPurpose(name) } id="" />
                                    { name }
                                </label>
                            ))}

                            <label htmlFor="" className="question-option">
                                <input type="radio" name="purpose" id="" />
                                אחר
                                <input type="text" className="expend-answer" onChange={ (e) => handleExpand(e) }/>
                            </label>
                        </div>
                    </div>

                    {/* <div className="signup-form-question">
                        <div className="question-text">
                            מהו תחום העניין שהיית רוצה לקבל בו ידע ממומחה?
                        </div>

                        <div>
                            <select name="" id="" onChange={ (e) => setField(e.target.value) }>
                                <option value="">
                                    בחר/י תחום שמעניין אותך
                                </option>

                                { fields.map((name) => (
                                    <option value={ name }>{ name }</option>
                                )) }
                            </select>
                        </div>
                    </div> */}

                    <div id="giver-signup-details">
						<div className="getter-signup-row">
							<div className="getter-signup-col">
								<input type="text" value={ fullname } onChange={ (e) => setFullname(e.target.value) } placeholder="שם מלא" />
							</div>

							<div className="getter-signup-col">
								<input type="text" placeholder="כתובת" />
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

						<div className="getter-signup-row">
							<div id="getter-has-to-give-question">
								<div className="question">
									האם יש לך ידע בתחום מקצועי כלשהו שהיית רוצה
									לשתף בו אחרים?
								</div>
								<div className="answer">
									<button onClick={ () => setWouldLikeToShare(true) } className={ `${ wouldLikeToShare ? 'button-chosen' : '' }` }>כן</button>
									<button onClick={ () => setWouldLikeToShare(false) } className={ `${ !wouldLikeToShare ? 'button-chosen' : '' }` }>לא</button>
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
}
 
export default GetterSignup;