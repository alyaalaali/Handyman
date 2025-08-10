
const RequestForm = () => {
    return (
    <>
        <div className="request-form">
        <h1>Hello</h1>
        <div>
            <h2>Create Request</h2>
            <form action="/requests">
                
            <label for="Cetogery">Cetogery </label>

            <select list="Cetogery" name="cetogery">
            <option value=""></option>
            <option value="Fitness">Fitness</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>   
            <option value="Information Technology">IT</option>  
            <option value="Human Resources">Human Resources</option> 
            <option value="Media & Communications">Media & Communications</option>  
            <option value="Artificial Intelligence">AI</option>  
            <option value="Legal">Legal</option>  
            <option value="Healthcare">Healthcare</option>   
            <option value="Manufacturing">Manufacturing</option>   
            <option value="Agriculture">Agriculture</option>  
            <option value="Security & Law Enforcement">Security & Law Enforcement</option>
            </select>
            <br />
            <br />

            <label>Title</label>
            <input type="text" />
            <br />
            <br />

            <label>Description</label>
            <input type="text" />
            <br />
            <br />

            <label>Pay</label>
            <input type="text" />
            <br />
            <br />

            <button type="submit">send</button>
            </form>
        </div>
        
        </div>
            

        </>
    )

}
export default RequestForm