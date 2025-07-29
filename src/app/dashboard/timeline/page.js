"use client";

import { useState } from "react";
import styles from "./timeline.module.css";

import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});


const TimelinePage = () => {
   const[name, setName] = useState({firstName:"", lastName:"", 
                                     email:"", phoneNum:"",
                                     password:"", staffID:"",
                                     username:"", department:"",});
    return   <div className={`${styles.formBody} ${outfit.className}`}>
      <h3 className={styles.heading}>Profile</h3>
      <div className={styles.profile}>
        <img src="/images/IMG_5708.jpg" className={styles.image} alt="profile image" />
        <div>
         <p className={styles.pName}>Ruhamah Chioma Eti</p>
         <p className={styles.pEmail}>ruhamaheti@gmail.com</p>
         </div>
         </div>
      <form>
        <div className={styles.row}>
        <div className={styles.inputContainer}>
        <span>First Name</span><br/>
        <input onChange={(e)=>setName({...name, firstName:e.target.value})} type="text" placeholder="Ayoleyi" value={name.firstName}></input>
        </div>
        <div className={styles.inputContainer}>
        <span>Last Name</span><br/>
        <input onChange={(e)=>setName({...name, lastName:e.target.value})} type="text" placeholder="Lurogho" value={name.lastName}></input>
        </div>
        </div>
        <div className={styles.row}>
        <div className={styles.inputContainer}>
        <span>Email</span><br/>
        <input onChange={(e)=>setName({...name, email:e.target.value})} type="text" placeholder="lavern.bins@gmail.com" value={name.email}></input>
        </div>
        <div className={styles.inputContainer}> 
        <span>Phone</span><br/>
        <input onChange={(e)=>setName({...name, phoneNum:e.target.value})} type="text" placeholder="08010296155" value={name.phoneNum}></input>
        </div>
        </div>
        <div className={styles.row}>
        <div className={styles.inputContainer}>
        <span>Password</span><br/>
        <input onChange={(e)=>setName({...name, password:e.target.value})} type="password" placeholder="0000000" value={name.password}></input>
        </div>
        <div className={styles.inputContainer}>
        <span>Staff ID</span><br/>
        <input onChange={(e)=>setName({...name, staffID:e.target.value})} type="text" placeholder="DT12673656" value={name.staffID}></input>
        </div>
        </div>
        <div className={styles.row}>
        <div className={styles.inputContainer}>
        <span>Username</span><br/>
        <input onChange={(e)=>setName({...name, username:e.target.value})} type="text" placeholder="Ayoleyi1" value={name.username}></input>
        </div>
        <div className={styles.inputContainer}> 
        <span>Department</span><br/>
        <input onChange={(e)=>setName({...name, department:e.target.value})} type="text" placeholder="Customer Happiness" value={name.department}></input>
      </div>
      </div>
      </form>
      </div>;

};
export default TimelinePage;
