import style from "../css/ChildComponent.module.css"

const ChildComponent = () => {
    
    const childString = "This is the child element."

    return (
        <div className={style.childBox}>
            <div>
                <p className={style.titleStyle}>FIRST CHILD</p>
                <p className={style.titleStyle}>{childString}</p>
            </div>
        </div>   
    )
}
export default ChildComponent;