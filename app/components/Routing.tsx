// import React from 'react'
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// const USER_TYPES = {
//     PUBLIC: 'Public User',
//     NORMAL_USER: 'Normal User',
//     ADMIN_USER: 'Admin User'
// } 
// const CURRENT_USER_TYPE = USER_TYPES.PUBLIC;
// const Routing = () => {


//     return (
//         <Router>
//             <div>
//                 <Routes>
//                     <Route path="/" element={<PublicElement><Home /></PublicElement>}></Route>
//                     <Route path="/admin" element={<UserElement><Admin /></UserElement>}></Route>
//                     <Route path="/user" element={<User />}></Route>
//                     <Route path="*" element={<div>Page Not Found</div>}></Route>
//                 </Routes>
//             </div>
//         </Router>
//     )
// }
// const Home = () => {
//     return (
//         <div>Home</div>
//     )
// }
// const Admin = () => {
//     return (
//         <div>Admin</div>
//     )
// }
// const User = () => {
//     return (
//         <div>User</div>
//     )
// }
// export default Routing

// const PublicElement = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <div>{children}</div>
//     )
// }
// const UserElement = ({ children }: { children: React.ReactNode }) => {
//     if (CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
//         return <>{children}</>
//     }
//     else {
//         return <div>you not have access </div>
//     }

// }