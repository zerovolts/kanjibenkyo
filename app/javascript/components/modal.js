import React from "react"

const Modal = ({visible, hideCallback, children}) => {
  const modal = (
    <div className="modal-container">
      <div className="modal visible">
        <div className="hide-modal-button" onClick={hideCallback}>
          <i className="fas fa-times"></i>
        </div>
        {children}
      </div>
    </div>
  )

  return visible ? modal : null
}

// class Modal extends React.Component {
//   state = {
//     hidden: true
//   }
//
//   show = () => {
//     this.setState({
//       hidden: false
//     })
//   }
//
//   hide = () => {
//     this.setState({
//       hidden: true
//     })
//   }
//
//   render() {
//     const modal = (
//       <div className="modal-container">
//         <div className="modal">
//           <div onClick={this.hide}><i className="fas fa-times"></i></div>
//         </div>
//       </div>
//     )
//
//     return this.state.hidden ? null : modal
//   }
// }

export default Modal
