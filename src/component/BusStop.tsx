import axios from 'axios';
import { useEffect, useState } from 'react';
import { BusLine } from './BusLine'
import { Placeholder } from  './Placeholder';
import { Error } from './Error';
import { BusFilter } from './BusFilter';


function BusStop(props: {name: string, id: string}) {
   const [busTimes, setBusTimes] = useState<{bus:string, time: number}[]>([]);
   const [buses, setBuses] = useState<string[]>([]);
   const [errorMessage, setErrorMessage]  = useState('');
   const [isLoading, setIsLoading]  = useState(true);

   useEffect(()=> {
    const url = `${process.env.REACT_APP_SERVER_URL}/stop/${props.id}`;
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
   
   if (isLoading) {
       return  <Placeholder/>
   }

   if (errorMessage!=='') {
    return <Error message={errorMessage}/>
}
   const timetable = busTimes.map((eachBusTime, index)=>{
       return  <BusLine bus={eachBusTime.bus} time={eachBusTime.time} key={index}/>
   })

//    setBuses(busTimes.map(eachBus=>{
//        return eachBus.bus;
//    }))

    return (
    <div>
     <h3>{props.name}</h3>

     <div>{timetable}</div>
    </div>
    )
}

export { BusStop };