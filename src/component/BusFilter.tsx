function BusFilter (props: {buses: string[]}) {
 
    const busFilter = props.buses.map(eachBus =>{
        return <div className='busNumber'>{eachBus}</div>
    })

 return(<div className='busFilter'>
    {busFilter}
 </div>);
};

export { BusFilter };