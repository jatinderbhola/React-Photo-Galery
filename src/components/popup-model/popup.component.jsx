import React from 'react';
// styling
import './popup.style.scss';

/* eslint-disable react/prop-types */
const PopUp = (props) => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp, selectedCount } = props 

    return (
        
        <div className="PopUp">
            <button className="popup-x" onClick={()=> setPopUp(false, null)}> x </button>

            <div className="pu-content-container">
                <h1>Send {selectedCount} photos to website</h1>
            </div>

            <div className="pu-button-container">
                <input className="button-style" type="button" onClick={()=> setPopUp(false, null)} value="Cancel" />
                <input className="button-style" type="button" disabled={selectedCount === 0} onClick={()=> setPopUp(false, true)}  value="send" />
            </div>
        </div>
    );
}

export default PopUp;