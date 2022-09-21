import React, { useState, useEffect } from "react";

const Profile = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    city: "",
    gender: "",
    number: "",
    mail: "",
    proffesion: "",
    zipcode: "",
    dob: "",
    adress: "",
    // profile_img: "",
  });
  const {
    userId,
    firstName,
    lastName,
    city,
    gender,
    number,
    mail,
    proffesion,
    zipcode,
    dob,
    adress,
    // profile_img,
  } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleEditProfile = async () => {
    console.log("lem", file.length);
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("userId", userId);
    data.append("first_name", firstName);
    data.append("last_name", lastName);
    data.append("email", mail);
    data.append("gendar", gender);
    data.append("city", city);
    data.append("phone", number);
    data.append("dob_date", dob);
    data.append("proffesion", proffesion);
    data.append("zipcode", zipcode);
    data.append("Adress", adress);

    //  try {
    //     await updateUser(data);
    // //    showAlert("Profile Updated Successfully....","success");
    //  } catch (error) {
    //    console.log("error", error);
    //    // showAlert('In valide data', "error");
    //  }

    console.log(data);
  };

  const handleFileChange = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("profile");
      console.log("output", output);
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    setFile(event.target.files);
    console.log(file);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="text-right">Profile {">"} Edit Profile</p>
            </div>
          </div>

          <div className="col-md-8" style={{ justifyContent: "center" }}>
            <div className="form-group text-center img_upload">
              <img
                id="profile"
                style={{
                  maxwidth: "10%",
                  borderRadius: "50%",
                  height: "140px",
                }}
                src=""
                //   {
                //     userData.profile_img
                //       ? `${baseurl}/images/${userData.profile_img}`
                //       : "/assets/images/default_user.png"

                //   }
                className="img-fluid"
              />
              <label
                className=""
                style={{ marginTop: "-15px", cursor: "pointer" }}
              >
                <i className="fas fa-camera bg-info p-2 rounded-circle text-white"></i>
                <br />
                <input
                  id="file"
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="form-control"
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div
                className="p-3 mb-5 bg-white rounded"
                style={{ marginTop: "30px" }}
              >
                <h4 className="text-center mt-3 mb-5">Personal Details</h4>
                <div className="col-md-12">
                  <form className="mx-5">
                    <div className="row mb-3">
                      <label
                        htmlFor="inputName"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-solid fa-user mr-5"></i>First Name
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          id="inputFullName"
                          name="firstName"
                          value={firstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputName"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-solid fa-user mr-5"></i>Last Name
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          id="inputFullName"
                          name="lastName"
                          value={lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputBirthday"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-solid fa-cake-candles mr-5"></i>
                        Birthday
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="date"
                          className="form-control"
                          id="inputBirthday"
                          name="dob"
                          value={dob}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputGender"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-solid fa-mercury mr-5"></i>Gender
                      </label>
                      <div className="col-sm-6">
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          value={gender}
                          name="gender"
                          onChange={handleChange}
                        >
                          <option selected>Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputCity"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-solid fa-city mr-5"></i>City
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                          value={city}
                          name="city"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputCity"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-solid fa-city mr-5"></i>Adress
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                          value={adress}
                          name="adress"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputNumber"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-solid fa-mobile-screen-button mr-5"></i>
                        Mobile Number
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="number"
                          className="form-control"
                          id="inputNumber"
                          value={number}
                          name="number"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputEmail"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-solid fa-envelope-open mr-5"></i>Mail
                        Address
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          value={mail}
                          name="mail"
                          disabled
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputProfession"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-solid fa-user-tie mr-5"></i>Profession
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          id="inputProfession"
                          value={proffesion}
                          name="proffesion"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputZipCode"
                        className="col-sm-6 col-form-label"
                      >
                        <i className="fa-brands fa-usps mr-5"></i>Zip Code
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="number"
                          className="form-control"
                          id="inputZipCode"
                          value={zipcode}
                          name="zipcode"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="d-grid gap-2 mt-5 mb-3 ">
                      <button
                       className="btn btn-primary"
                        size="lg"
                        style={{ width: "100%" }}
                        onClick={() => handleEditProfile()}
                      >
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
