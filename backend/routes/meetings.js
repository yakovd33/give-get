const express = require('express');
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const pool = require('../db');
const sendSms = require('../sms');

router.get('/', (req, res, next) => {
    res.send('lalala')
});

router.get('/:user_id', verifyToken, async (req, res, next) => {
    let user_id = req.params.user_id;
    let uid = req.headers.uid;

    try {
        let meeting_query = await pool.query(`SELECT * FROM meetings WHERE (giver_id = ${ user_id } AND getter_id = ${ uid }) OR (giver_id = ${ uid } AND getter_id = ${ user_id })`);

        if (meeting_query.rows.length) {
            res.status(200).json(meeting_query.rows[0]);
            return;
        }
    } catch (e) {
        console.log(e); 
    }
    
    res.send('');
});

router.post('/:user_id', verifyToken, async (req, res, next) => {
    let user_id = req.params.user_id;
    let uid = req.headers.uid;
    let date = req.body.date;
    let hour = req.body.hour;

    
    try {
        let cur_user_query = await pool.query(`SELECT * FROM users WHERE id = ${ uid }`);
        
        if (cur_user_query.rows.length) {
            let cur_user = cur_user_query.rows[0];
            // Check if current user is a giver
            
            if (cur_user.type == 'giver') {
                // Check if meeting already exists, if it does - UPDATE
                let meeting_query = await pool.query(`SELECT * FROM meetings WHERE (giver_id = ${ user_id } AND getter_id = ${ uid }) OR (giver_id = ${ uid } AND getter_id = ${ user_id })`);

                if (!meeting_query.rows.length) {
                    // Insert new meeting
                    pool.query("INSERT INTO meetings (giver_id, getter_id, date, time) VALUES ($1, $2, $3, $4)", [
                        uid,
                        user_id,
                        date,
                        hour
                    ]);
                } else {
                    // Update meeting
                    pool.query(`UPDATE meetings SET date = $1,   time = $2 WHERE giver_id = ${ uid } AND getter_id = ${ user_id }`, [
                        date,
                        hour
                    ]);
                }

                // Send SMS to giver and getter
                let giver_phone = cur_user.phone;
                
                let getter_user_query = await pool.query(`SELECT * FROM users WHERE id = ${ user_id }`);

                let sms_msg = `נקבעה פגישה
                בתאריך ${date} בשעה ${hour}`;

                if (getter_user_query.rows.length) {
                    let getter_user = getter_user_query.rows[0];
                    sendSms(getter_user.phone, sms_msg);
                }

                // Get getter
                sendSms(giver_phone, sms_msg);
            }
        }

    } catch (e) {
        console.log(e);
    }
})

module.exports = router;