import { ReactElement } from 'react';
import { TubeProps } from './TubeLine';



function TubeName (props: TubeProps) : ReactElement  {

    return (
        <div className={`tube ${props.color}`}>
        <p>{props.tube}</p>
    </div>
    )
  
}

export { TubeName };