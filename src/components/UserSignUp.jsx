const UserSignUp = () => {
    return (
        <form className="user-sign-up">
            <label>Username:</label>
            <input type="text" placeholder="" />
            <br />

            <label>Email:</label>
            <input type="text" placeholder="" />
            <br />

            <label>Password:</label>
            <input type="text" placeholder="" />
            <br />

            <label>Confirm Password:</label>
            <input type="text" placeholder="" />
            <br />

            <button type="submit">continue</button>
            
        </form>
    )
}
export default UserSignUp
