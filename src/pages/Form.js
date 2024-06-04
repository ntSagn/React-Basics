const Form = (event) => {
    const handleForm = (event) => {
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);
        let formDataObj = Object.fromEntries(formData.entries());
        let formDataJson = JSON.stringify(formDataObj);
        
        if(formDataObj.name === "" || formDataObj.age === "" || formDataObj.address === "" || formDataObj.gender === undefined){
            alert("Please fill out the form");
        }
        console.log(formDataObj);
        console.log(formDataJson);
    }

    
    return (
        <form className="form" onSubmit={handleForm}>
            <div className="container mt-2">
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" id="name" name="name" />
            </div>
            <div className="container mt-2">
                <label htmlFor="age">Age:</label>
                <input className="form-control" type="number" id="age" name="age" />
            </div>
            <div className="container mt-2">
                <label htmlFor="address">Address:</label>
                <input className="form-control" type="text" id="address" name="address" />
            </div>
            <div className="container mt-2 d-flex align-items-center">
                <label htmlFor="gender">Gender:</label>
                <div>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
            <div className="container mt-2">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>

        </form>
    );
}

export default Form;