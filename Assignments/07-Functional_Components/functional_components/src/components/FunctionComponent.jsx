const FunctionComponent = () => {
    const myFunction = (arg1, arg2, arg3) => {
        return (
            arg1 + arg2 + arg3
        )
    }
    
    return (
        <div className="functionStyle">
            <h1>Function</h1>
            <div>
                <p style={{ textAlign: "center" }}>{myFunction("Hello ", "Cleveland! ", "Let's learn to Mambo!")}</p>
            </div>
        </div>
    )
}

export default FunctionComponent