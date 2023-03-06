// import React from "react";
import "./forms.css";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendValue = (dataInput) => {
    console.log(dataInput);
  };

// onClickFunction
const [block, setBlock] = useState(true);
function onClickFunction() {

  setBlock(!block);
}
// let totalCheckbox = document.querySelector('.total')

// function selectedChechbox() {
  // let firstCheckbox = document.querySelector('.checkboxFirst')
  // let secondCheckbox = document.querySelector('.checkboxSecond')
  // let thirdCheckbox = document.querySelector('.checkboxThird')


//   getSum(firstCheckbox, secondCheckbox, thirdCheckbox )  

// }

// function getSum(firstCheckbox, secondCheckbox, thirdCheckbox ) {
//  let result = (firstCheckbox + secondCheckbox + thirdCheckbox)
//  totalCheckbox.innerHTML = result;
// }  


const idtochange = block ? "" : "blueColor";
//   const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0); 
// function selectedCheckbox() {
//   setTotalSelectedCheckboxes(document.querySelectorAll('input[type=checkbox]:checked').value)
// }
// useEffect(() => {
//   console.log(totalSelectedCheckboxes);
// }, [totalSelectedCheckboxes]);

// function selectedCheckbox() {
//   let firstCheckbox = document.querySelector('.checkboxFirst').addEventListener('change', calculateIt1);
//     let secondCheckbox = document.querySelector('.checkboxSecond').addEventListener('change', calculateIt1);
//   let thirdCheckbox = document.querySelector('.checkboxThird').addEventListener('change', calculateIt1);
//   let result = Number(firstCheckbox.value) + Number(secondCheckbox.value) + Number(thirdCheckbox.value)
//   if ( firstCheckbox.checked,secondCheckbox.checked, thirdCheckbox.checked) {
//     console.log(result);
//   }
// }

const [number1, setNumber1] = useState(200);
  const [number2, setNumber2] = useState(300);
  const [number3, setNumber3] = useState(400);
  const [total, setTotal] = useState(number1 + number2 + number3);
  function calculateTotal() {
    setTotal(number1 + number2 + number3);
  }

  return (
    <div className="mainBlock">
      <div className="headerWhite">
        <h1>Car Race Registration Form</h1>
      </div>
      <div className="sportCar"></div>
      <div className="formRegistration">
        <div>
          <h2 className="formHeader">Car Race Registration Form</h2>
          <div className="infoForm">
            <p>
              <b>Location:</b> 1379 Horseshoe Lane, Philadelphia, PA, 19108
            </p>
            <p>
              <b>Race Dates:</b>Race Dates: October 1, 2023 / October 4, 2023 /
              October 7, 2023
            </p>
            <p>
              <b>Time:</b> 8:00AM - 5:00PM
            </p>
          </div>
          <div className=" infoInvite">
            <p>Please fill-up the form below to register to the event:</p>
          </div>
        </div>

        <div >
          <form onSubmit={handleSubmit(sendValue)}>
            <h2 className="formHeaderSecond">Driver Information</h2>

            <div className="lineInput" id={idtochange} >
              <label htmlFor="text" className="lineBlock">
                Driver's Name
              </label>
              <div>
                <input
                  type="text" onClick={onClickFunction}
                  className="inputSmall" 
           
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                />
                <div>
                  {errors.firstName && (
                    <p className="errorMessage">{errors.firstName.message}</p>
                  )}
                </div>
                <label className="form-sub-label">First Name</label>
              </div>
              <div>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "This field is required",
                    maxLength: {
                      value: 30,
                      message: "Maximum length 20 characters",
                    },
                  })}
                />
                <div>
                  {errors.lastName && (
                    <p className="errorMessage">{errors.lastName.message}</p>
                  )}
                </div>
                <label className="form-sub-label">Last Name</label>
              </div>
            </div>




            <div className="lineInput">
              <label htmlFor="birthday" className="lineBlock">
                Date of Birthday
              </label>
              <div>
                <input
                  type="date"
                  {...register("dateBirthday", {
                    required: "This field is required",
                  })}
                />
                <div>
                  {errors.dateBirthday && (
                    <p className="errorMessage">
                      {errors.dateBirthday.message}
                    </p>
                  )}
                </div>
                <label className="form-sub-label">Date</label>
              </div>
            </div>
            <div className="lineInput" id={idtochange} >
              <label htmlFor="phoneNumber" className="lineBlock">
                Phone Number
              </label>
              <div>
                <input
                  type="text"
                  value="00373 "
                  className="inputSmall" onClick={onClickFunction}
                  {...register("areaCode", {
                    required: "This field is required",
                  })}
                />

                <div>
                  {errors.areaCode && (
                    <p className="errorMessage">{errors.areaCode.message}</p>
                  )}
                </div>
                <label className="form-sub-label">Area Code</label>
              </div>
              <div>
                <input
                  type="text"
                  {...register("phoneNumber", {
                    required: "This field is required",
                  })}
                />
                <div>
                  {errors.phoneNumber && (
                    <p className="errorMessage">{errors.phoneNumber.message}</p>
                  )}
                  <label className="form-sub-label">Phone Number</label>
                </div>
              </div>
            </div>
            <div className="lineInput">
              <label htmlFor="email" className="lineBlock">
                Email
              </label>
              <div>
                <input
                  type="email"
                  className="classEmail"
                  {...register("email", {
                    required: "This field is required",
                  })}
                />

                <div>
                  {errors.email && (
                    <p className="errorMessage">{errors.email.message}</p>
                  )}
                </div>
                <label className="form-sub-label">example@example.com</label>
              </div>
            </div>

            <div className="lineInput">
              <label htmlFor="text" className="lineBlock">
                Adress
              </label>

              <div className="blockAdress">
                <div>
                  <input
                    type="text"
                    className="classEmail"
                    {...register("adress", {
                      required: "This field is required",
                    })}
                  />
                  <div>
                    {errors.adress && (
                      <p className="errorMessage">{errors.adress.message}</p>
                    )}
                  </div>
                  <label className="form-sub-label">Street Adress 1</label>
                </div>

                <div className="street-two">
                  <input
                    type="text"
                    className="classEmail"
                    {...register("adress", {
                      required: "This field is required",
                    })}
                  />
                  <div>
                    {errors.adress && (
                      <p className="errorMessage">{errors.adress.message}</p>
                    )}
                  </div>
                  <label className="form-sub-label">Street Adress 2</label>
                </div>

                <div className="classCityState">
                  <div>
                    <input
                      type="text"
                      name="city"
                      className="inputSmall"
                      {...register("city", {
                        required: "This field is required",
                      })}
                    />
                    <div>{errors.city && <p>{errors.city.message}</p>}</div>
                    <label className="form-sub-label">City</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="stateprovence" className=""
                      {...register("stateprovence", {
                        required: "This field is required",
                      })}
                    />
                    <div>
                      {errors.stateprovence && (
                        <p className="errorMessage">
                          {errors.stateprovence.message}
                        </p>
                      )}
                    </div>
                    <label className="form-sub-label">State / Province</label>
                  </div>
                </div>
                <div className="postalZipCode">
                  <input 
                    type="number"
                    name="postalZipcode"
                    {...register("postalZipcode", {
                      required: "This field is required",
                    })}
                  />
                  <div>
                    {errors.postalZipcode && (
                      <p className="errorMessage">
                        {errors.postalZipcode.message}
                      </p>
                    )}
                  </div>
                  <label className="form-sub-label">Postal / Zip Code</label>
                </div>
              </div>
            </div>

            <div className="lineInput">
              <label className="lineBlock">Emergency Contact Person</label>
              <div>
                <input
                  type="text"
                  className="inputSmall"
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                />
                <div>
                  {errors.firstName && (
                    <p className="errorMessage">{errors.firstName.message}</p>
                  )}
                </div>
                <label className="form-sub-label">First Name</label>
              </div>
              <div>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "This field is required",
                    maxLength: {
                      value: 30,
                      message: "Maximum length 20 characters",
                    },
                  })}
                />
                <div>
                  {errors.lastName && (
                    <p className="errorMessage">{errors.lastName.message}</p>
                  )}
                </div>
                <label className="form-sub-label">Last Name</label>
              </div>
            </div>

            <div className="lineInput">
              <label className="lineBlock">Emergency Person Phone Number</label>
              <div>
                <input
                  type="number"
                  className="inputSmall"
                  {...register("areaCode", {
                    required: "This field is required",
                  })}
                />
                <div>
                  {errors.areaCode && (
                    <p className="errorMessage">{errors.areaCode.message}</p>
                  )}
                </div>
                <label className="form-sub-label">Area Code</label>
              </div>

              <div>
                <input
                  type="text"
                  {...register("phoneNumber", {
                    required: "This field is required",
                  })}
                />
                <div>
                  {errors.phoneNumber && (
                    <p className="errorMessage">{errors.phoneNumber.message}</p>
                  )}
                </div>
                <label className="form-sub-label">Phone Number</label>
              </div>
            </div>

            <div className="lineInput">
              <label className="lineBlock">
                Relationship to Emergency Contact Person
              </label>
              <input
                type="text"
                className="classEmergency"
                {...register("emergencyPerson", {
                  required: "This field is required",
                })}
              />
              <div>
                {errors.emergencyPerson && (
                  <p className="errorMessage">
                    {errors.emergencyPerson.message}
                  </p>
                )}
              </div>
            </div>

            <div className="carDetail">
              <h2 className="formHeaderSecond">Car Details</h2>

              <div className="lineInput">
                <label className="lineBlock">Make</label>
                <input
                  type="text"
                  {...register("make", {
                    required: "This field is required",
                  })}
                />
                <div>
                  {errors.make && (
                    <p className="errorMessage">{errors.make.message}</p>
                  )}
                </div>
              </div>

              <div className="lineInput">
                <label className="lineBlock">Model</label>
                <input
                  type="text"
                  {...register("model", { required: "This field is required" })}
                />
                <div>
                  {errors.model && (
                    <p className="errorMessage">{errors.model.message}</p>
                  )}
                </div>
              </div>

              <div className="lineInput">
                <label className="lineBlock">Year</label>
                <input
                  type="number"
                  placeholder="dd/mm/yyyy"
                  {...register("year", { required: "This field is required" })}
                />
                <div>
                  {errors.year && (
                    <p className="errorMessage">{errors.year.message}</p>
                  )}
                </div>
              </div>

              <div className="lineInput">
                <label className="lineBlock">Car Colore</label>
                <input type="color" {...register("carColor")} />
              </div>

              <div className="lineInput">
                <label className="lineBlock">Modifications</label>
                <textarea rows="8" cols="40" {...register("modifications")} />
              </div>

              <div className="lineInput">
                <label className="lineBlock">Licence Plate Number</label>
                <input
                  type="number"
                  {...register("year", { required: "This field is required" })}
                />
                <div>
                  {errors.year && (
                    <p className="errorMessage">{errors.year.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="registrationPayment">
              <h2 className="formHeaderSecond">Registration Payment</h2>
              <div className="lineInput">
                <label className="lineBlock">Registration Fee</label>
                <div className="blockPayment">
                  <div className="dayParticipation">
                    <input type="checkbox" className="checkboxFirst"{...register("checkboxFirstDay")} value={number1} onChange={e => setNumber1(+e.target.checked)} />
                    <label>1Day Participation 200$</label>
                  </div>
                  <div className="dayParticipation">
                    <input type="checkbox" className="checkboxSecond" {...register("checkboxFirstDay")} value={number2} onChange={e => setNumber2(+e.target.checked)} />
                    <label>2Day Participation 300$</label>
                  </div>
                  <div  className="dayParticipation">
                    <input type="checkbox" className="checkboxThird" {...register("checkboxFirstDay")} value={number3} onChange={e => setNumber3(+e.target.checked)} />
                    <label>3Day Participation 400$</label>
                  </div>
                  <div className="total">
                    <p>Total</p>
                    <p className="result" >${calculateTotal}</p>
                    <p>{total}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="registrationPayment">
              <h2 className="formHeaderSecond">Release & Agreement</h2>
              <div className="lineInput">
                <label className="lineBlock">Driver's Signature</label>
                <textarea
                  rows="8"
                  cols="40"
                  className="textareaRelease"
                  {...register("modifications")}
                />
              </div>
              <div className="lineInput">
                <label className="lineBlock">Date Signed</label>
                <input type="date" {...register("date")} />
              </div>
            </div>
            <input type="submit" value="register" className="class-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

// result();
export default Forms;
