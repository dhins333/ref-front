import React,{useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import SkeletonCard from './SkeletonCard'
import Card from './Card';
import axios from 'axios';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
const FoldersList = (props) => {

    const loaderRef = React.createRef();
    const state = useSelector((state) => {
        return state;
    });
    const dispatch = useDispatch();
    
    
       

    useEffect(() => {
        const effectFunction = async () => {
            try{
                if(state.folderArray.length === 0){
                    const countResponse = await axios.get('/api/folders/count');
                    const count = countResponse.data.count;
                    const max = Math.ceil(count/8);
                    const foldersResponse = await axios.get('/api/folders?skipVal=0');
                    const folders = foldersResponse.data;
                    dispatch({
                        type:'ADD_FOLDERS_TO_ARRAY',
                        folderArray:folders,
                        max,
                        skips:state.skips + 1
                    })
                }
            }catch(e){
                console.log(e);
            }
        }
        effectFunction();
    },[])

    useEffect(() => {
        loaderRef.current.innerHTML = '';
    })

    const cardClick = (id) => {
        props.history.push(`/${id}`);
    }

    const skeletonGen = () => {
        const skeletonArray = [0,0,0,0,0,0,0,0];
        for (let i in skeletonArray){
            skeletonArray[i] = <SkeletonCard key={i}/>;
        }
        return skeletonArray;
    }

    const cardGen = () => {
        return state.folderArray.map((data,index) => {
            return <Card name={data.folderName} key= {index} logo={data.logo} onClick = {() => {
                cardClick(data._id);
            }}/>
        })
    }

    const buttonClick = async() => {
        loaderRef.current.innerHTML = '<div class="loader"></div>'
        try{
            const newFoldersResponse = await axios.get(`/api/folders?skipVal=${state.skips}`);
            const newFolders = newFoldersResponse.data;
            dispatch({
                type:'ADD_FOLDERS_TO_ARRAY',
                folderArray:newFolders,
                skips:state.skips + 1
            })
        }catch(e){
            console.log(e);
        }
    }

    const renderButton = () => {
        
        if(state.skips < state.max){
            return(
                <Button onClick={buttonClick} />
            )
        }

        return undefined;
    }

    return(
        <>
            <div className="folders">
                {state.folderArray.length === 0 ? skeletonGen() : cardGen() }    
            </div>
            {renderButton()}
            <div ref={loaderRef} className='loaderContainer'></div>
        </>
    )
}

export default withRouter(FoldersList);