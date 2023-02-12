import axios from 'axios';
import { useEffect, useState } from 'react';
import { BusLine } from './BusLine'
import { Placeholder } from  './Placeholder';
import { Error } from './Error';
import { BusFilter } from './BusFilter';


function BusStop(props: {name: string, id: string}) {
   const [busTimes, setBusTimes] = useState<{bus:string, time: number}[]>([]);
//    const [buses, setBuses] = useState<string[]>([]);
   const [errorMessage, setErrorMessage]  = useState('');
   const [isLoading, setIsLoading]  = useState(true);

   useEffect(()=> {
    const url = `${process.env.REACT_APP_SERVER_URL}/StopPoint/${props.id}/Arrivals?app_id=${process.env.REACT_APP_PRIMARY_KEY}&app_key=${process.env.REACT_APP_SECONDARY_KEY}`;
    axios.get(url)
    .then(data => {
        const results:Array<{[key: string]: any}> = data.data;
        let busTimes = results.map((eachBus)=>{
            return {
                bus:eachBus.lineId, 
                time: Math.floor(eachBus.timeToStation/60),
            }
        }).sort((a, b)=>{
            return (a.time-b.time);
        })
         setBusTimes(busTimes); 
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