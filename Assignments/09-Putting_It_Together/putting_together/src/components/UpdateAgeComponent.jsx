import React, { useState } from 'react'
import style from '../css/UpdateAgeComponent.module.css'

const UpdateAgeComponent = (props ) => {
    const { firstName, lastName, age, hairColor } = props;
    const [currentAge, setCurrentAge] = useState(age)

    const birthDay = () => {
        setCurrentAge(currentAge+1)
    }


    return (
        <>
            <div className={style.infoBox}>
                <div>
                    <p className={style.name} id="name">{lastName}, {firstName}</p>
                    <p className={style.details} id="age">Age: {currentAge}</p>
                    <p className={style.details} id="hairColor">Hair Color: {hairColor}</p>
                    <p>&nbsp;</p>
                    <button onClick={birthDay}>Birthday Button for {firstName} {lastName}</button>
                </div>
            </div>
        </>
    )
}

export default UpdateAgeComponent;