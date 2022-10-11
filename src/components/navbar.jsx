import React, { Component } from "react";

// Stateless Functional Component

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-3">
      <div className="container">
        <a href="" className="navbar-brand ms-2">
          Navbar
          <span className="badge badge-pill text-bg-primary mx-5">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-3">
//         <div className="container">
//           <a href="" className="navbar-brand ms-2">
//             Navbar
//             <span className="badge badge-pill text-bg-primary mx-5">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar;
