import TubeName from './TubeName';
import TubeStatus from './TubeStatus';

export interface TubeProps {
    tube: string,
    color: string
}


function Line (props:TubeProps) {
    return (
        <div className='line'>
            <TubeName tube={props.tube} color={props.color}/>
            <TubeStatus tube={props.tube}/>
        </div>
    )
}

export default Line