const ObjectComponent = () => {
    
    const myObject = { name: "john", age: 30, statement: "I'm in New York!" };
    const { name, age, statement } = myObject;

    return (
    <div className="objectStyle">
        <h1>Object Literal</h1>
        <div>
            <h3>About Me:</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Statement: {statement}</p>
        </div>
    </div>
    );
};

export default ObjectComponent;
