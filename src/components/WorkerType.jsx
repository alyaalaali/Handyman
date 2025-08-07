const WorkerType = () => {
    return (
        <div className="worker-type">
        <form className="user-selection">
            <h2>User Selection</h2>
            <li>first definition</li>
            <li>Second definition</li>
            <li>Third definition</li>
            <br />
            <button className="selection-button" type="submit">User</button>
        </form>
        <br />

        <form className="provider-selection" >
            <h2>Provider Selection</h2>
            <li>first definition</li>
            <li>Second definition</li>
            <li>Third definition</li>
            <br />
            <button className="selection-button" type="submit">Provider</button>
        </form>

        
        </div>
    )

}
export default WorkerType