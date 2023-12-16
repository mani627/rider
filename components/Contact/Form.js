import { useState } from "react";

export default function Form(props) {
  let initialState = {
    name: "",
    mobile: "",
    title: "",
    description: "",
  };
  const [queryTitle, setQueryTitle] = useState([
    "General Questions",
    "Account and Registration",
    "Billing and Payments",
  ]);
  const [formDetail, setFormDetail] = useState(initialState);

  const getInputValue = (e) => {
    setFormDetail((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "mobile"
          ? e.target.value.replace(/[^0-9]/g, "")
          : e.target.value,
    }));
  };

  const Submit = (e) => {
    e.preventDefault();
    setFormDetail(initialState);
  };

  return (
    <form onSubmit={Submit} className="contact-form row">
      <div className="col-12">
        <input
          type="text"
          onChange={getInputValue}
          name="name"
          placeholder="Name"
          value={formDetail.name}
        />
      </div>
      {!props.page && (
        <div className="col-12">
          <input type="email" placeholder="Email Address" />
        </div>
      )}
      <div className="col-12">
        <input
          type="text"
          name="mobile"
          value={formDetail.mobile}
          onChange={getInputValue}
          placeholder="Phone Number"
        />
      </div>
      {props.page && (
        <div>
          <select
            value={formDetail.title}
            className="form-select"
            name="title"
            onChange={getInputValue}
            aria-label="Default select example"
          >
            <option selected value="">
              Select Query
            </option>
            {queryTitle.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
      )}

      <div className="col-12">
        <textarea
          value={formDetail.description}
          name="description"
          onChange={getInputValue}
          placeholder="Write your message"
        ></textarea>
      </div>
      <div className="col-12">
        <button className="theme-btn" type="submit">
        {props.page?"Support":"Message Submit"}  
        </button>
      </div>
    </form>
  );
}
