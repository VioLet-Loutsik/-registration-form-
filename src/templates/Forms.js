import React from "react";
import "./forms.css";
import { useForm } from "react-hook-form";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendValue = (dataInput) => {
    console.log(dataInput);
  };
  return (
    <div className="mainBlock">
      <div className="headerWhite">hi</div>
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

        <div>
          <h2 className="formHeaderSecond">Driver Information</h2>
          <form onSubmit={handleSubmit(sendValue)}>
            <div>
              <label htmlFor="text">Driver's Name</label>
              <input
                type="text"
                {...register("firstName", {
                  required: "This field is required",
                })}
              />
              <div>{errors.firstName && <p>{errors.firstName.message}</p>}</div>
            </div>
            <div>
              <input
                type="text"
                {...register("lastName", {
                  required: "This field is required",
                  maxLength: {
                    value: 20,
                    message: "Maximum length 20 characters",
                  },
                })}
              />
              <div>{errors.lastName && <p>{errors.lastName.message}</p>}</div>
            </div>



            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
