const ReviewForm = () => {

  const addReview = async() => {
    try {
      const response = await axios.post('http://localhost:3000/review/new')
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2>Rate Your Experience</h2>
      <form onSubmit={addReview}>
        <label>Rating</label>
        <select name="rating" className="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />

        <label>description</label>
        <textarea name="description"></textarea>
        <br />

        <button >send</button>
      </form>
    </>
  )
}
export default ReviewForm
