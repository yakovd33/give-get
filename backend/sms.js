const axios = require("axios");
const qs = require("querystring");

const sendSms = (number, msg) => {
	axios
		.post(
			"https://my.textme.co.il/api",
			`
    <?xml version="1.0" encoding="UTF-8"?>
    <sms>
    <user>
    <username>${process.env.SMS_USERNAME}</username>
    <password>${process.env.SMS_PASSWORD}</password>
    </user>

    <source>GIVEGET</source>
    <destinations>
    <phone id="someid1">${number}</phone>
    </destinations>

    <message>${msg}</message>
    </sms>
    `
		)
		.then((result) => {
			console.log(result.data);
			// Do somthing
		})
		.catch((err) => {
			console.log(err);
			// Do somthing
		});
};

module.exports = sendSms;
