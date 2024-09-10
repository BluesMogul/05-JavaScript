import style from "../css/HeaderComponent.module.css"

const HeaderComponent = () => {

    return (
        <div className={style.headerBox}>
            <p className={style.headerText}>Site Header</p>
        </div>
    )
}

export default HeaderComponent;