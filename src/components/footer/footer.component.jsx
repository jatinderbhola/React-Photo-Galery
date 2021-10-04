/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser } from '@fortawesome/fontawesome-free-solid';
import { connect } from "react-redux";
import ShareMe from '../share-me/share-me.component';

import './footer.style.scss';
import {
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
                        <div>
                            { 
                                (this.props.selectedCount === 0 && "No Image Selected") ||
                                (this.props.selectedCount === 1 && "1 Image Selected") ||
                                (this.props.selectedCount + " Images Selected")
                            }
                        </div>
                    </div>
                    <div className="child-section width">
                        <ShareMe selectedCount={this.props.selectedCount} />
                        <FontAwesomeIcon icon={faUser}  size="lg" title="post images for approval" />
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
        clearSelected: () => dispatch(clearSelected()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Footer)