import React,{useState,useEffect} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror';
import {Controlled as CodeMirror} from 'react-codemirror2';
import axios from 'axios';
require('codemirror/mode/javascript/javascript');


const DataPage = (props) => {
    const [value,setValue] = useState('');
    
    useEffect(() => {
        const effectFunc = async () => {
            const dataResp = await axios.get(`/api/files/${props.match.params.id}/data`);
            const data = dataResp.data.data;
            setValue(data);
        }
        effectFunc();
    },[])

    const options = {
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true
      }

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