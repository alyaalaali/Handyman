const ReviewForm = () => {
    return (
        <>
        <h2>Rate Your Experience</h2>
        <form action="/add/review">
            <label htmlFor="">Rating</label>
            <select name="rating" className="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </form>
        </>
    )
}
export default ReviewForm