const Child = ({inputField, setInputField}) => {
    function handle (e) {
        setInputField(e.target.value);
    }
    return (
        <div className="child">
            <h3>Child Component</h3>
            <input type="text" onChange={handle} />
        </div>
    )
}

export default Child;