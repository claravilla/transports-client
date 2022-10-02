function BusLine (props: {bus:string, time: number}) {
    return (
        <div className='busLine'>
            <div className='busNumber'>{props.bus}</div>
             {props.time === 0 && <div className='busTime due'>due</div>}
             {props.time !== 0 && <div className='busTime'>{props.time} min</div>}
             </div>
        
    )
}

export { BusLine };