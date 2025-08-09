const UserSignUp = () => {
    return (
        <form className="user-sign-up" action="/user/sign-up" >
            <label>Username</label>
            <br />
            <input type="text" placeholder="Enter a username" />
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

            <label>More fields</label>
            <br />
            <input type="text" placeholder="Enter your password" />
            <br />
            <br />


            <button type="submit">continue</button>
            
        </form>
    )
}
export default UserSignUp
