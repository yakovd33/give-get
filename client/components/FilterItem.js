const FilterItem = ({image, title, options}) => {
    return ( 
        <div className="filter-item">
            <div className="img"><img src="/images/filters/1.png" alt="" /></div>
            <div className="title">בוגר תואר</div>
            <div className="options">
                <select name="" id="">
                    <option value="">הכל</option>
                </select>
            </div>
        </div>
     );
}
 
export default FilterItem;