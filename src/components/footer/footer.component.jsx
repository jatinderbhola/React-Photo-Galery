/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import { connect } from "react-redux";

import './footer.style.scss';
import {
    getSelectedCount,
    clearSelected
} from "./../../redux/Image/image.actions";

class Footer extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="footer">
                <div className="child-section margin">
                    <FontAwesomeIcon icon={faTimes} size="lg" onClick={this.props.clearSelected} />
                    <div> 
                        <div>{this.props.selectedCount + " Selected"}</div>
                    </div>
                    <div className="child-section width">
                        <FontAwesomeIcon icon={faTimes}  size="lg" onClick={this.props.clearSelected} />
                        <FontAwesomeIcon  icon={faTimes}  size="lg" onClick={this.props.clearSelected} />
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
      selectedCount: state.image.selectedCount
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getSelectedCount: () => dispatch(getSelectedCount()),
        clearSelected: () => dispatch(clearSelected()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Footer)