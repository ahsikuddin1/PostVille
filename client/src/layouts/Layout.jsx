// import React from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// export default function Layout(props) {
//   const { currentUser, handleLogout } = props;
//   return (
//     <div className="App">
//       <Header
//         currentUser={currentUser}
//         handleLogout={handleLogout}
//       />
//       {props.children}
// <Footer/>
//     </div>
//   )
// }
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Content = styled.div`
  flex: 1;
  position: relative;
  display: flex;
`

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="App">
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <Content>{props.children}</Content>
      <Footer />
    </div>
  );
}
