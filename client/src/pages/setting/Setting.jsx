import React, { useState } from 'react'
import axios from "axios";
import "./setting.scss"
import{useSelector} from "react-redux"
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import storage from '../../firebase';
const Setting = () => {
    const user=useSelector(state=>state.user.user);
    const [uploadedDP,setUploadedDP]=useState(user.dp);
    const[img,setImg]=useState("");
    const[email,setEmail]=useState(user.email);
    const[name,setName]=useState("");
    const[userName,setUserName]=useState(user.user);
    const[cnfrmEmail,setCnfrmEmail]=useState("");
    const[password,setPassword]=useState("");
    const[cnfrmPassword,setcnfrmPassword]=useState("");
    const [progress,setProgress]=useState(0);
    const handelUpload=async(upload)=>{
        try {
            await axios.put(`http://localhost:8050/api/user/update/${user.id}`,upload).then(d=>console.log("uploaded"))
            setProgress(0)
        } catch (error) {
             console.error(error.message);
        }

    }
    const infoUpload=(e)=>{
        e.preventDefault();
        handelUpload({userName,email,password});
    }
    const imageUpload=(e)=>{
        e.preventDefault();
        console.log(img);
        const file_name=new Date().getTime()+user.email.slice(0,3)+user.id.slice(0,4);
        const meta_data = {
            contentType: '*'
        };
        const storage_ref =ref(storage,`profile_photos/${file_name}`);
        const upload = uploadBytesResumable(storage_ref,img,meta_data);
        upload.on('state_changed', 
        (snapshot) => {
        const _progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(_progress);
        switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }, 
        (error) => {
// Handle unsuccessful uploads
        }, 
        () => {
        getDownloadURL(upload.snapshot.ref).then((profileImg) => {
            handelUpload({profileImg});
        });
        });
    }
    
    return (
        <div className="wrapper">
            <div className="photo_update">
                <h5>{userName}</h5>
                <h6>{email}</h6>
                <div className="dp_wrapper">
                    <img src={uploadedDP} alt="" />
                </div>
                
                <label className="label">
                    <input type="file" required accept="image/*" onChange={e=>{setImg(e.target.files[0])}}/>
                    <span >Change photo</span>
                </label>
                <button onClick={e=>imageUpload(e)}>UPLOAD{`${progress} %`}</button>
            </div>
            <div className="info_update">
                <form action="" className="form">
                <input type="text" name="" id="name" placeholder='Name' onChange={e=>setName(e.target.value)  }/>
                <input type="text" name="" id="user_name" placeholder='User Name' onChange={e=>setUserName(e.target.value)}/>
                <input type="email" name="" id="email" placeholder='New Email'  onChange={e=>setEmail(e.target.value)}/>
                <input type="email" name="" id="cnfrm_email" placeholder='Confirm Email' style={{border:email===cnfrmEmail?"":"1px solid red"}} onChange={e=>setCnfrmEmail(e.target.value)}/>
                <input type="password" name="" id="password" placeholder='New Password' onChange={e=>setPassword(e.target.value)}autoComplete="on"/>
                <input type="password" name="" style={{border:password===cnfrmPassword?"":"1px solid red"}} id="cnfrm_password" placeholder='Confirm Password' onChange={e=>setcnfrmPassword(e.target.value)} autoComplete="on"/>
                <button type="submit" onClick={e=>infoUpload(e)} disabled={((email===cnfrmEmail && password===cnfrmPassword) &&  (email!=="" && password!==""))?false:true}>Update</button>
                </form>
            </div>
        </div>
    )
}
export default Setting;
//to be done
// inform user after update 
// instant update after file upload
// make the code clean
//ui 



