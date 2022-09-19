import { ReactElement } from 'react';

function Error(props:{message:string}): ReactElement {
    return (
        <div className='tube'>
           <p>{props.message}</p> 
        </div>
    )
}

export default Error; 