import React from "react"

const Calendar = ({ date, setDate }) => {
	return (
		<div className="giz-calendar">
			<div className="giz-calendar-header">
				<div>
					קביעת מועד פגישה
				</div>
			</div>
			<div className="giz-calendar-content">
				<div className="giz-calendar-title-switch">
					<div className="giz-calendar-title-slide">ינואר 2021</div>
				</div>
				<div className="calendar-hide">
					<div className="giz-calendar-weekday">
						<div>א</div>
						<div>ב</div>
						<div>ג</div>
						<div>ד</div>
						<div>ה</div>
						<div>ו</div>
						<div>ש</div>
					</div>

					<div className="giz-calendar-day">
						{[...Array(31)].map((_, index) => (
							<div><button className={ `${ index + 1 == date ? 'active' : ''}` } onClick={ (e) => { e.preventDefault(); setDate(index + 1) } }><span className="giz-calendar-day-count">{ index + 1 }</span></button></div>
						))}
          			</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
