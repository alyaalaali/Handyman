const ApplicantList = () => {
    return (
        <>
        <a href="/active/requests">Back</a>

        <div className="applicant-list">
            <h2>Applicants</h2>
            <form className="applicant-form">
                <img src="applicant.image" alt="applicant.image" />
                
                <div>
                <h3>Applicant</h3>   
                <p>profession</p>
                </div>
                <br />

                <p>Rating: ---</p>
                <button>Accept</button>
            </form>
        </div>
        </>
    )
}
export default ApplicantList