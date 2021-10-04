/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from "react-redux";

import './spinner-with-love.style.scss';

class SpinnerWithLove extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.pendingImageApproval > 0 && <div className="lds-heart"><div></div></div>}
                
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        pendingImageApproval: state.image.pendingImageApproval
    }
}

export default connect(mapStateToProps)(SpinnerWithLove)