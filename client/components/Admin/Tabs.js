import React from 'react'

const Tabs = ({ tabs, tab, setTab }) => {
    return (
        <div id="tab-triggers">
            { tabs.map((tabItem) => (
                <button className={ `tab-trigger ${ tab == tabItem.name ? 'active' : '' }` } onClick={ () => setTab(tabItem.name) }>{ tabItem.label }</button>
            )) }
        </div>
    )
}

export default Tabs