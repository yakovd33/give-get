import React, { useState, useEffect } from "react";
import Link from "next/link";
import ApiHelper from "../helpers/ApiHelper";
import AuthHelper from "../helpers/AuthHelper";
import { Router } from "next/router";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [feedback, setFeedback] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		
		ApiHelper.post("users/login/", { email, password }, (res) => {
			setFeedback(res.feedback);

			if (res.success) {
				// TODO: Redirect to homepage
				window.location = "/";
				AuthHelper.saveUser(res.user);
			}
		});
	};

	useEffect(() => {
		if (AuthHelper.isLogged()) {
			window.location = "/";
		}
	}, []);

	return (
		<div>
			<div id="login-hero">
				<h2 id="login-hero-title">התחברות</h2>
			</div>

			<form action="" id="login-form" onSubmit={(e) => handleSubmit(e)}>
				<p id="login-para">
					על מנת להתחבר, יש להזין את פרטי ההתחברות שלכם:
				</p>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="כתובת אימייל"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="סיסמא"
				/>

				{feedback && <div id="login-feedback">{feedback}</div>}

				<input type="submit" className="cute-btn" value="התחברות" />

				<div id="not-registered-msg">
					לא רשומים?{" "}
					<Link href="/signup">
						<a href="/">הרשמה</a>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
