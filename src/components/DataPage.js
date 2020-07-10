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
            const dataResp = await axios.get(`/api/files/${props.match.params.id}/data`);
            const data = dataResp.data.data;
            setValue(data);
            console.log(dataResp.data.lang);
            setLang(dataResp.data.lang);
        }
        effectFunc();
    },[])



    return(
        <div>
            <CodeMirror
            value={value}
            options={options}
            />
        </div>
    )
}

export default DataPage;