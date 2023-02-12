import axios from 'axios';
import { useState, useEffect } from 'react';
import { Error } from './Error';
import { Placeholder } from './Placeholder';
import { Details } from './Details';
 
function TubeStatus(props: {tube:string}) {

    const [tubeStatus, setTubeStatus] = useState('');
    const [statusDetails, setStatusDetails] = useState('');
    const [errorMessage, setErrorMessage]  = useState('');
    const [isLoading, setIsLoading]  = useState(true);
    const [statusColor,setStatusColor] = useState('');
   const tubeId: { [key: string]: string; } =  {
         piccadilly : 'piccadilly',
         victoria : 'victoria',
         northern : 'northern',
         hammersmith : 'hammersmith-city',
    }
    const tube: string = props.tube.split(' ')[0].toLowerCase();
    const url: string = `${process.env.REACT_APP_SERVER_URL}/Line/${tubeId[tube]}/Status?app_id=${process.env.REACT_APP_PRIMARY_KEY}&app_key=${process.env.REACT_APP_SECONDARY_KEY}`;
    let color:string;


    useEffect(()=> {
        axios.get(url)
        .then((data)=> {
            const status: string = data.data[0].lineStatuses[0].statusSeverityDescription;
            const details: string = data.data[0].lineStatuses[0].reason;
            setTubeStatus(status);
            setStatusDetails(details);
            setStatusColor(findStatusColor(status));
            setIsLoading(false);
        })
        .catch((error) => {
            setErrorMessage(error.response.data.message);
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

    if (errorMessage!=='') {
        return <Error message={errorMessage}/>
    }

    return (<div className={`tube ${statusColor}`}> 
  <p>{tubeStatus}</p>

  { statusDetails!=='' && <Details details={statusDetails}/> }

  </div>)


   
}

export  {TubeStatus};