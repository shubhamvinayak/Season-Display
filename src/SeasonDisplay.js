import React from 'react';
import './seasonDisplay.css'
const seasonConfig = {
    summer: {
        text: "It's summer",
        icon: 'sun'
    },
    winter: {
        text: 'Hey its winter',
        icon: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const Seasondisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, icon } = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`} />
        </div>
    )

}

export default Seasondisplay;