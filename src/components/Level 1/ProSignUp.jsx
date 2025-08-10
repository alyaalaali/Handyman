const ProSignUp = () => {
    return (
        <>
        <form className="user-sign-up" action="/provider/sign-up" >
            <label>Username</label>
            <br />
            <input type="text" placeholder="Enter a username" />
            <br />
            <br />

            <label >National ID number: </label>
            <br />
            <input type="number" placeholder="CBR"/>
            <br />
            <br />

            <label>Email</label>
            <br />
            <input type="text" placeholder="Enter your email" />
            <br />
            <br />

            <label>Password</label>
            <br />
            <input type="text" placeholder="Enter your password" />
            <br />
            <br />



            <label for="Cetogery">Cetogery type: </label>

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
            <button type="submit">continue</button>
            
        </form>
        </>
    )
}
export default ProSignUp