import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  //call the register, handleSubmit, watch and formState from useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [getData, setGetData] = useState();
  //call onSubmit
  const onSubmit = (data) => {
    setGetData(data);
    console.log("data", data);
  };

  return (
    /*handleSubmit-handleSubmit will validate your inputs before invoking onSubmit */
    <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
      {/*register your input into the hook by invoking the "register" function */}
      <div className="formInput">
        <label className="formName">FirstName</label>
        <input
          placeholder="Enter Your FirstName"
          {...register("firstName", { required: true })}
        />
        {/*errors will return when field validation fails */}
        {errors.firstName && (
          <span className="error">This field is required</span>
        )}
      </div>
      {/* include validation with required or other standard HTML validation rules */}
      <div className="formInput">
        <label className="formName">LastName</label>
        <input
          placeholder="Enter Your LastName"
          {...register("lastName", { required: true })}
        />
        {/*errors will return when field validation fails */}
        {errors.lastName && (
          <span className="error">This field is required</span>
        )}
      </div>
      <div className="formInput">
        <label className="formName">ParentName</label>
        <input
          className=""
          placeholder="Enter Your Parent Name"
          {...register("parentName", { required: true })}
        />
        {/*errors will return when field validation fails */}
        {errors.parentName && (
          <span className="error">This field is required</span>
        )}
      </div>
      <div className="formInput">
        <label className="formName">Email</label>
        <input
          placeholder="Enter Your Email"
          {...register("email", { required: true })}
        />
        {/*errors will return when field validation fails */}
        {errors.email && <span className="error">This field is required</span>}
      </div>
      <div className="formInput">
        <label className="formName">Mobile No</label>
        <input
          placeholder="Enter Your Mobile No"
          {...register("mobileNumber", { required: true })}
        />
        {/*errors will return when field validation fails */}
        {errors.mobileNumber && (
          <span className="error">This field is required</span>
        )}
      </div>

      <input type="submit" />

      {getData && (
        <div>
          <p>First Name: {getData.firstName}</p>
          <p>Last Name: {getData.lastName}</p>
          <p>Parent Name: {getData.parentName}</p>
          <p>Email: {getData.email}</p>
          <p>Mobile Number: {getData.mobileNumber}</p>
        </div>
      )}
    </form>
  );
}
export default Form;
