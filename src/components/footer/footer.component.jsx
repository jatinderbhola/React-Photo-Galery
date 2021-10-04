/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShare, faUser } from '@fortawesome/fontawesome-free-solid';
import { connect } from "react-redux";
import PopUp from '../popup-model/popup.component';

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
                    <FontAwesomeIcon icon={faTimes} size="lg" title="clear selection" onClick={this.props.clearSelected} />
                    <div> 
                        <div>{this.props.selectedCount + " Selected"}</div>
                    </div>
                    <div className="child-section width">
                        <FontAwesomeIcon icon={faShare}  size="lg" title="post images for approval" onClick={this.props.clearSelected} />
                        <FontAwesomeIcon  icon={faUser}  size="lg" title="user account" onClick={this.props.clearSelected} />
                    </div>
                    <PopUp />
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