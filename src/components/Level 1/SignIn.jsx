const SignIn = () => {
    return (
        <form action="/sign-in">
            <h2>Sign In</h2>

            <label>Username: </label>
            <br />
            <input type="text" placeholder="Enter your username"  />
            <br />

            <label>Password: </label>
            <br />
            <input type="password" placeholder="Enter your password" />
            <br />
            <br />

            <button type="submit">submit</button>
        </form>
    )
}
export default SignIn