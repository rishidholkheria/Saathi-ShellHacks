import React, { useState, useEffect } from "react";
import { database } from "../../firebase";
const SignIn = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const onClickPost = () => {
    const nTitle = title;
    const nDesc = desc;
    const nCity = city;
    const nAddress = address;

    database
      .ref("posts")
      .set({
        title: nTitle,
        desc: nDesc,
        address: nAddress,
        city: nCity,
      })
      .catch(alert);

    console.log(nTitle, nDesc, nAddress, nCity);
  };

  return (
    <div>
      <h3>Add new post</h3>
      <div>
        <div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="desc">Description</label>
            <input
              type="text"
              placeholder="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <div>
              <button onClick={onClickPost}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
