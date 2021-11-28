const ProItem = () => {
    return ( 
        <div className="pro-item">
            <div className="pro-item-right">
                <div className="giver-img">
                    <img src="/images/get-mini.png" alt="" />
                </div>
            </div>

            <div className="pro-item-middle">
                <div className="name">דניאלה שטיין</div>
                <div className="description">בוגרת תואר מדעי המחשב, מכללת כנרת. נמצאת לפני עבודה בתחום</div>
            </div>

            <div className="pro-item-left">
                <img src="/images/calendar.png" alt="" />
                <button className="cute-btn">בחר תאריך</button>
            </div>
        </div>
     );
}
 
export default ProItem;