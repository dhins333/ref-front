import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import Files from './Files';
import axios from 'axios';
const FilesList = (props) => {

    const [files,setFiles]  = useState([]);
    useEffect(() => {
        const effectFunc = async () => {
            const filesResp = await axios.get(`/api/folders/${props.id}`);
            const files = filesResp.data;
            setFiles(files);
        }
        effectFunc();
    },[])

    const renderFiles = () => {
        return files.map((file,index) => {
            return <li key={index} className='files'><Link style={{ textDecoration: 'none' }} to={`/files/${file._id}/data`}><Files fileName={file.fileName}/></Link></li>
        })
    }

    return(
        <div>
            <ul className='filesList'>
                {files.length === 0 ? <div className='loaderContainer'><div className='loader'></div></div> : renderFiles()}
            </ul>
        </div>
    )
}

export default FilesList;