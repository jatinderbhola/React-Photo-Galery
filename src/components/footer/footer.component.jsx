/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './footer.styles.scss';

import { connect } from "react-redux";

import {
    getSelectedCount,
} from "./../../redux/Image/image.actions";

class Footer extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="footer">
                    <button onClick={this.clearSelected}>
                        clear
                    </button>
                    <div> {this.props.selectedCount} </div>
                    <div> Selected </div>
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
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Footer)