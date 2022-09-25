function BusLine (props: {bus:string, time: number}) {
    return (
        <div className='busLine'>
            <div className='busNumber'>{props.bus}</div>
            <div className='busTime'>{props.time} min</div>
        </div>
    )
}

export { BusLine };