import style from "../css/MainComponent.module.css"

function MainComponent({children}) {

    //props.children

    return (
            <div className={style.mainBox}>
                {children}
            </div>
    )
}

export default MainComponent;