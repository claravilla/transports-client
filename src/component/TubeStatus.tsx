import axios from 'axios';
import { useState, useEffect } from 'react';
import Error from './Error';
import Placeholder from './Placeholder';

function TubeStatus(props: {tube:string}) {

    const [tubeStatus, setTubeStatus] = useState('');
    const [errorMessage, setErrorMessage]  = useState('');
    const [isLoading, setIsLoading]  = useState(true);
    const [statusColor,setStatusColor] = useState('');
    const tube: string = props.tube.split(' ')[0].toLowerCase();
    const url: string = `http://localhost:8080/${tube}`;
    let color:string;


    useEffect(()=> {
        axios.get(url)
        .then((data)=> {
            setTubeStatus(data.data);
            setStatusColor(findStatusColor(data.data));
            setIsLoading(false);
        })
        .catch((error) => {
            setErrorMessage(error.response.data);
            setIsLoading(false);
        })
    },[]);


   function findStatusColor(status:string):string {
        switch(status) {
            case 'Good Service':
            color = 'green';
            break;
         case 'Minor Delays':
            color = 'orange';
             break;
         case 'Severe Delays':
            color  = 'red';
             break;
         default: 
         color  = 'grey';
        }
        return color;
   }

    if (isLoading) {
        return  <Placeholder/>
    }

    if (!isLoading && errorMessage!=='') {
        return <Error message={errorMessage}/>
    }

    return (<div className={`tube ${statusColor}`}> 
  <p>{tubeStatus}</p></div>)


    // return (
    
    //     {(isLoading) &&
    //         <Placeholder/>
    //     }

    //     {(!isLoading && errorMessage!=='') &&
    //         <Error message={errorMessage}/>
    //     }


    //      {(!isLoading && errorMessage==='') &&
    //         <div className={`tube ${statusColor}`}> 
    //     {tubeStatus}</div>
       

    //      }
   
     
    // )
}

export default TubeStatus;