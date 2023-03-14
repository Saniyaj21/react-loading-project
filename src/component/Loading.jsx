import { useState } from 'react';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Loading = () => {

    const [percentage, setPercentage] = useState(0);
    for (let i = 1; i <= 1; i++) {
        setTimeout(() => {
            if (percentage < 100) {

                setPercentage(percentage + 1)
            }
        }, 45);
    }







    return (
        <>
            <div className='progress'>
                <CircularProgressbar value={percentage} text={`${percentage}%`} minValue={0}





                />;

            </div>


        </>
    )
}

export default Loading