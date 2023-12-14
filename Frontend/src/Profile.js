import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import img1 from "./assets/user.png";
import { useUserContext } from "./context/user_context";
import { AiFillPlusCircle } from "react-icons/ai";
const Profile = () => {
  const [editing, setEditing] = useState(false);
  const { userId, setUserId, profile, setProfile } = useUserContext();
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    profilepic: "",
  });
  const [originalData, setOriginalData] = useState({ ...userData });
  const [userDataChanged, setUserDataChanged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/customer/detail",
          {
            userId,
          }
        );

        setUserData(data);
        setOriginalData(data);
        //console.log(userData);
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) fetchData();
  }, []);

  async function ConvertToBAse64(e) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const handleUpload = async (e) => {
    let imageAsset = await ConvertToBAse64(e);
    setUserData({ ...userData, profilepic: imageAsset });
    //console.log(imageAsset);
    setUserDataChanged(true);
  };
  const handleUpdate = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/customer/detail/update",
        {
          userId,
          name: userData.name,
          username: userData.username,
          email: userData.email,
          address: userData.address,
          profilepic: userData.profilepic,
        }
      );

      if (data.message === "Username is already in use") {
        alert("Username is already in use");
      } else if (data.message === "Email is already in use") {
        alert("Email is already in use");
      } else if (data.message === "user Not Found") {
        alert("user Not Found");
      } else {
        setOriginalData({ ...userData });
        setEditing(false);
        alert("details updated");
        setProfile(userData.profilepic);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <div
        style={{
          width:"50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "50px",
          border: "1px solid #3c49382e",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 9px 8px"
        }}
      >
        <div style={{width: "90%"}}>
          <div style={{ textAlign: "center" }}>
            {editing ? (
              <label htmlFor="chooseAvatar" children="Choose Avatar">
                <div
                  style={{
                    fontSize: "50px",
                    height: "250px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AiFillPlusCircle
                    className="addImagePlus"
                    style={{ fontSize: "80px" }}
                  />
                  <input
                    accept="image/*"
                    id="chooseAvatar"
                    type={"file"}
                    //css={fileUploadStyle}
                    onChange={(e) => {
                      handleUpload(e);
                    }}
                    height={0}
                    width={0}
                    style={{
                      display: "none",
                    }}
                  />
                </div>
              </label>
            ) : (
              <img
                src={
                  userData?.profilepic !== "none" ? userData.profilepic : img1
                }
                alt="profile pic"
                style={{
                  height: "250px",
                  width: "250px",
                  borderRadius: "100%",
                  border: "4px solid #94d08a",
                }}
              />
            )}
          </div>
          <div style={{ textAlign: "right" }}>
            <span
              style={{
                fontSize: "20px",
                padding: "7px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className={!editing ? "editButton" : "cancelButton"}
              onClick={() => {
                setEditing(!editing);
                setUserData(originalData);
              }}
            >
              {editing ? (
                <i class="bi bi-x-lg"></i>
              ) : (
                <i class="bi bi-pencil-fill"></i>
              )}
            </span>
          </div>
          <div style={{ marginTop: "0px" }}>
            <div className="profile-input-container">
              <div className="profile-input-label">Name</div>
              <input
                type="text"
                name="name"
                className="profile-input"
                value={userData.name}
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                  setUserDataChanged(e.target.value !== originalData.name);
                }}
                disabled={!editing}
              />
            </div>
            <div className="profile-input-container">
              <div className="profile-input-label">Username</div>
              <input
                type="text"
                name="username"
                className="profile-input"
                value={userData.username}
                onChange={(e) => {
                  setUserData({ ...userData, username: e.target.value });
                  setUserDataChanged(e.target.value !== originalData.username);
                }}
                disabled={!editing}
              />
            </div>
            <div className="profile-input-container">
              <div className="profile-input-label">Email</div>
              <input
                type="text"
                name="name"
                className="profile-input"
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                  setUserDataChanged(e.target.value !== originalData.email);
                }}
                disabled={!editing}
              />
            </div>
            <div className="profile-input-container">
              <div className="profile-input-label">Address</div>
              <textarea
                type="text"
                name="name"
                className="profile-input"
                rows="4"
                value={userData.address}
                onChange={(e) => {
                  setUserData({ ...userData, address: e.target.value });
                  setUserDataChanged(e.target.value !== originalData.address);
                }}
                disabled={!editing}
              />
            </div>
            {editing && (
              <div
                className="profile-input-container"
                style={{ textAlign: "center" }}
              >
                <button
                  style={{
                    height: "60px",
                    width: "150px",
                    fontSize: "25px",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (userDataChanged) handleUpdate();
                  }}
                  //disabled={!userDataChanged}
                >
                  Update
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display:flex;
flex-direction:row;
aling-items:center;
justify-content:center;
  .profile-input-label {
    font-size: 25px;
    font-weight:500;
    font-family: 'Great Vibes', cursive;
    margin-bottom: 10px;
  }
  .profile-input {
    border-radius: 10px;
    border: 2px solid #7bd27b;
    background-color: #f2fff5;
    width: 100%;
    height:auto;
    font-size: 20px;
  }
  .profile-input-container {
    margin-top: 20px;
  }
  button {
    background-color: #609860;
    transition: border-radius 0.3s ease;
  }
  button:hover {
    background-color: #436a43;
    border-radius: 10px;
  }
  .editButton {
    background-color: #6ec06e;
  }
  .editButton:hover {
    background-color: #4fa752;
  }
  .cancelButton {
    background-color: #e45757d6;
    color: white;
  }
  .cancelButton:hover {
    background-color: #cc3c3c;
  }
  .addImagePlus{
    color: #4da877c4;
  }
  .addImagePlus:hover {
    color: #6778aa;
    cursor: pointer;
  }
`;

export default Profile;
