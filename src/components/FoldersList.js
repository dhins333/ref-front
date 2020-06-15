import React,{useEffect, useReducer, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import SkeletonCard from './SkeletonCard'
import mainReducer from '../reducers/mainReducer';
import MainContext from '../context/mainContext';
import Card from './Card';
import axios from 'axios';
import Button from './Button';
const FoldersList = (props) => {

    const loaderRef = React.createRef();
    const [state,dispatch] = useReducer(mainReducer,{
        folderArray:[],
        max:0,
        skips:0
    })
    
       

    useEffect(() => {
        const effectFunction = async () => {
            try{
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
        <MainContext.Provider value={{state,dispatch}}>
            <div className="folders">
                {state.folderArray.length === 0 ? skeletonGen() : cardGen() }    
            </div>
            {renderButton()}
            <div ref={loaderRef} className='loaderContainer'></div>
        </MainContext.Provider>
    )
}

export default withRouter(FoldersList);