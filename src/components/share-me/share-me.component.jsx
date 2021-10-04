/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/fontawesome-free-solid';
import { connect } from "react-redux";
import PopUp from '../popup-model/popup.component';
import './share-me.style.scss';
import { toast } from "react-toastify";
import {
    clearSelected,
    pendingImageApproval
} from "../../redux/Image/image.actions";
import WebsiteDateService from '../../services/WebsiteDateService';

class ShareMe extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ws: null,
            popUp: false
        };
    }

    // single websocket instance for the own application and constantly trying to reconnect.

    componentDidMount() {
        this.connect();
    }

    timeout = 250; // Initial timeout duration as a class variable

    /**
     * @function connect
     * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
     */
    connect = () => {
        var ws = new WebSocket("ws://localhost:3001/ws");
        let that = this; // cache the this
        var connectInterval;

        // websocket onopen event listener
        ws.onopen = () => {
            console.log("connected websocket main component");

            this.setState({ ws: ws });

            that.timeout = 250; // reset timer to 250 on open of websocket connection 
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };

        // websocket onclose event listener
        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout; //increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
        };

        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );
            
            ws.close();
        };

        // websocket onerror event listener
        ws.onmessage = (event, err) => {
            console.log({event, err});
            this.props.pendingImageApproval({
                type: 'reset-upload-count-by-1',
                count : 1
            })
        };
    };

    /**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
    check = () => {
        const { ws } = this.state;
        if (!ws || ws.readyState == WebSocket.CLOSED) {this.connect();} //check if websocket instance is closed, if so call `connect` function.
    };

    togglePopUp = (isVisible, post) => {
        if(typeof isVisible === 'boolean'){
            this.setState({popUp: isVisible})
        }else{
            this.setState({popUp: !this.state.popUp})
        }

        if(typeof post === 'boolean' && post === true){
            // post images
            let selectedImages = this.props.images.filter(image => image.isSelected);
            
            if(selectedImages && selectedImages.length > 0){
                this.props.pendingImageApproval({
                    type: 'set-upload-count',
                    count: selectedImages.length
                })

                toast.warn("Uploading images for approval!");

                let promises = selectedImages.map(image => {
                    return WebsiteDateService.post(image.id);
                })

                Promise.allSettled(promises)
                .then((results)=> {
                    results.forEach(result => {
                        if (result.status === "rejected") {
                            this.props.pendingImageApproval({
                                type: 'reset-upload-count-by-1',
                                count : 1
                            })

                            if(result?.reason?.response?.data?.error){
                                toast.error(result?.reason?.response?.data?.error);
                            }else{
                                toast.error("Photo is already uploaded!", {autoClose: 5000});
                            }
                            console.error({result});
                        }
                    });
                })
            }
        }
    }

    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faShare}  size="lg" title="post images for approval" onClick={this.togglePopUp} />
                {this.state.popUp && <PopUp selectedCount={this.props.selectedCount} setPopUp={this.togglePopUp} />}
            </div>
        )
    }

}



const mapStateToProps = state => {
    return {
      selectedCount: state.image.selectedCount,
      images: state.image.images
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        pendingImageApproval : (action) => dispatch(pendingImageApproval(action)),
        clearSelected: () => dispatch(clearSelected())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareMe)