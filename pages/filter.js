import FilterItem from "../components/FilterItem"
import ProItem from "../components/ProItem"

const Filter = () => {
    return ( 
        <div className="container">
            <div id="filter-wrap">
                <h3 id="filter-title">שלום <span>Getter</span>, אנא בחר את האפשרות שהכי מתאימה לך</h3>

                <div id="filter-items">
                    <FilterItem/>
                    <FilterItem/>
                    <FilterItem/>
                    <FilterItem/>
                    <FilterItem/>
                    <FilterItem/>
                </div>

                <h3 id="pros-list-title">רשימת מומחים:</h3>
                <div id="pros-list">
                    <ProItem/>
                    <ProItem/>
                    <ProItem/>
                </div>
            </div>
        </div>
     );
}
 
export default Filter;