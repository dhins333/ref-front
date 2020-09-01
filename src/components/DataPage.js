import React,{useState,useEffect} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror';
import {Controlled as CodeMirror} from 'react-codemirror2';
import axios from 'axios';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');


const DataPage = (props) => {
    const [value,setValue] = useState('');
    const [lang,setLang] = useState('javascript');

    const options = {
        mode: lang,
        theme: 'material',
        lineNumbers: true
      }
    
    useEffect(() => {
        const effectFunc = async () => {
            try{
                const dataResp = await axios.get(`/api/files/${props.match.params.id}/data`);
                const data = dataResp.data.data;
                setValue(data);
                setLang(dataResp.data.lang);
            }catch(e){
                document.querySelector('.dataPage').innerHTML = '<h1 style="color:#ffffff">404 Not Found'
            }
        }
        effectFunc();
    },[props.match.params.id])



    return(
        <div className = 'dataPage'>
            <CodeMirror
            value={value}
            options={options}
            />
        </div>
    )
}

export default DataPage;