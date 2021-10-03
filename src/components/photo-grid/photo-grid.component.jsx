// /* eslint-disable react/prop-types */
// import React, { Component } from 'react';
// import './footer.styles.scss';

// class Footer extends Component {

//     constructor() {
//         super();
//         this.getSelectedImages = this.getSelectedImages.bind(this);
//         this.clearSelected = this.clearSelected.bind(this);
//     }

//     clearSelected() {
//         for (var i = 0; i < this.props.images.length; i++)
//           if (this.props.images[i].isSelected == true)
//               this.props.images[i].isSelected = false;

//         return this.props;
//     }

//     getSelectedImages() {
//         var selected = [];
//         for (var i = 0; i < this.props.images.length; i++)
//           if (this.props.images[i].isSelected == true)
//             selected.push(i);
//         return selected.length;
//     }

//     render() {
//         return (
//             <div>

//             <div className="footer">
//                 <button onClick={this.clearSelected}>
//                     clear
//                 </button>
//                 {this.getSelectedImages().toString()}
//                  Selected
//             </div>
//             </div>
//         )
//     }
// }

// export default Footer;