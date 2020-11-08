import React from 'react';
import './sendMsg.css';
import {useState} from 'react';

const SendMsg = (props) =>{
    var arr = [];
    var [value, setValue] = useState(arr);
    function sendMessage(msg){
        arr.push(<p>{msg}</p>);
        setValue(arr)
        props.onSendMsg(value);
        var inputEl = document.getElementById('message');
        inputEl.value = '';
        inputEl.focus();
    }
    return(
        <div className='send'>
            <input type='text' id='message' onChange={e=>setValue(e.target.value)}
                 placeholder='Type Message Here'/>
            <button onClick={sendMessage} style={{backgroundColor:'transparent',outline:'none',marginTop:'14px',marginLeft:'1180px',fontSize:'37px',color:'white',border:'0px'}}><i class="fas fa-paper-plane"></i></button>
        </div>
    );
}

export default SendMsg;