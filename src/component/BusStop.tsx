import axios from 'axios';
import { useEffect, useState } from 'react';
import { BusLine } from './BusLine'



function BusStop(props: {name: string, id: string}) {
   const [busTimes, setBusTimes] = useState<{bus:string, time: number}[]>([]);
   const [errorMessage, setErrorMessage]  = useState('');
   const [isLoading, setIsLoading]  = useState(true);

   useEffect(()=> {
    const url = `https://transports-server-12.herokuapp.com/stop/${props.id}`;
    axios.get(url)
    .then(data => {
         setBusTimes(data.data);
         setIsLoading(false);
    })
    .catch(error =>{
        setIsLoading(false);
        setErrorMessage(error.response.data);
    })

   }, []);

   console.log(busTimes);
   
   const timetable = busTimes.map((eachBusTime)=>{
       return  ( <BusLine bus={eachBusTime.bus} time={eachBusTime.time}/>)
   })

    return (
    <div>
     <h3>{props.name}</h3>
<div>{timetable}</div>
 </div>


    )
}

export { BusStop };