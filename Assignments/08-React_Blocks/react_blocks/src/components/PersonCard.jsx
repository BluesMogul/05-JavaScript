import style from "../css/PersonCard.module.css"

const SubComponent = (props) => {

    const { firstName, lastName, age, hairColor } = props;


    return (
        <div className={style.subBox}>
            <div>
                <p className={style.name} id="name">{lastName}, {firstName}</p>
                <p className={style.details} id="age">Age: {age}</p>
                <p className={style.details} id="hairColor">Hair Color: {hairColor}</p>
            </div>
        </div>
    )
}
export default PersonCard