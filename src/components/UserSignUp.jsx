const UserSignUp = () => {
    return (
        <form className="user-sign-up" action="/user/sign-up" >
            <label>Username:</label>
            <br />
            <input type="text" placeholder="Enter a username" />
            <br />

            <label>Email:</label>
            <br />
            <input type="text" placeholder="Enter your email" />
            <br />

            <label>Password:</label>
            <br />
            <input type="text" placeholder="Enter your password" />
            <br />

            <label>Confirm Password:</label>
            <br />
            <input type="text" placeholder="Confirm your password" />
            <br />

            <button type="submit">continue</button>
            
        </form>
    )
}
export default UserSignUp
