const ArrayComponent = () => {

    //JavaScript Array
    const myArray = [2, 4, 6, 8, 10];
    //destructuring example:
    const [, , third] = myArray;

    return (
        <div className="arrayStyle">
            <h1>Array</h1>
            <p>First Number: {myArray[0]}</p>
            <p>Third of Five Destructured: {third}</p>
      </div>
    )
}

export default ArrayComponent