"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { IoEye, IoEyeOff } from "react-icons/io5";
const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState("account"); // Default to 'account'
  const [changePasswordData, setChangePasswordData] = useState({
    role: "staff",
    phone: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setChangePasswordData({ ...changePasswordData, [name]: value });
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      if (!changePasswordData.oldPassword) {
        setMessage("Old password is required!");
        return;
      }

      if (
        changePasswordData.newPassword !== changePasswordData.confirmNewPassword
      ) {
        setMessage("Passwords do not match!");
        return;
      }

      console.log("Password change request:", changePasswordData);
      setMessage("Password successfully updated!");
    }, 1500);
  };
  const showAccount = () => setActiveTab("account");
  const showSecurity = () => setActiveTab("security");
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result?.toString() ?? null); // Safely set the state
      setIsEditing(true); // Set editing to true when an image is uploaded
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle saving the profile image to the backend
  const saveProfileImage = async () => {
    if (!profileImage) {
      alert("Please upload a profile image.");
      return;
    }
  };
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Only call if ref is not null
    }
  };

return (
<div className=" w-full  pb-8">
  <div className="flex items-center space-x-4 py-5 lg:py-6">
    <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
    Profile
    </h2>
    <div className="hidden h-full py-1 sm:flex">
      <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
    </div>
    <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
      <li className="flex items-center space-x-2">
        <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Admin</a>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </li>
      <li> Profile</li>
    </ul>
  </div>
  <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
    <div className="col-span-12 lg:col-span-4">
      <div className="card p-4 sm:p-5">
        <div className="flex items-center space-x-4">
          <div className="avatar size-14">
            <img className="rounded-full" src="/profile.png" alt="avatar" />
          </div>
          <div>
            <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
            Driving School Pro
            </h3>
            <p className="text-xs+">123 Main Street, City, Country</p>
              <p className="text-xs+">+123-456-7890</p>
          </div>
        </div>
        <ul className="mt-6 space-y-1.5 font-inter font-medium">
        <li>
              {/* <button onClick={showAccount} className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent" href="#"> */}
              <button
                onClick={showAccount}
                className={`group flex w-full items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all ${
                  activeTab === "account"
                    ? "bg-primary text-white"
                    : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                }`}
              >
<svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Account</span>
              </button>
            </li>
            <li>
              {/* <button onClick={showSecurity} className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" > */}
              <button
                onClick={showSecurity}
                className={`group flex w-full items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all ${
                  activeTab === "security"
                    ? "bg-primary text-white"
                    : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Security</span>
              </button>
            </li>
         
          
          
        </ul>
      </div>
    </div>
    <div className="col-span-12 lg:col-span-8">
    
      <div className="card">
          {activeTab === "account" && (
            <div>
              <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                  Account Setting
                </h2>
                <div className="flex justify-center space-x-2">
                  <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                    Cancel
                  </button>
                  <button
                    className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex flex-col">
                  <span className="text-base font-medium text-slate-600 dark:text-navy-100">
                    Avatar
                  </span>
                  <div className="avatar mt-1.5 size-20">
                    <img
                      className="mask is-squircle"
                      src="/profile.png"
                      alt="avatar"
                    />
                    <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700">
                      <button
                        onClick={
                          isEditing ? saveProfileImage : triggerFileInput
                        }
                        className="btn size-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="uploadInput"
                            style={{ display: "none" }}
                          />
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    </div>
                  </div>
</div>
                <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span>User name </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="User name"
                        type="text"
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-regular fa-user text-base" />
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Name </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Enter name"
                        type="text"
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-regular fa-user text-base" />
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Email Address </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Enter email address"
                        type="text"
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-regular fa-envelope text-base" />
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Phone Number</span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Enter phone number"
                        type="text"
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa fa-phone" />
                      </span>
                    </span>
                  </label>
                </div>
                <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
              </div>
            </div>
          )}
{activeTab === "security" && (
            <div>
              <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                  Change password
                </h2>
                <div className="flex justify-center space-x-2">
                  <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                    Cancel
                  </button>
                  <button
                    className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div>
                  <form onSubmit={handlePasswordChange} className="space-y-4">
                    <div>
                      <label className="block ">Select Role:</label>
                      <select
                        name="role"
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        value={changePasswordData.role}
                        onChange={handleChange}
                      >
                        <option value="staff">Staff</option>
                        <option value="student">Student</option>
                      </select>
                    </div>
                    <div>
                      <label className="block ">Phone Number:</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Enter phone number"
                        value={changePasswordData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
<div className="relative">
                      <label className="block">New Password:</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="newPassword"
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Enter new password"
                        value={changePasswordData.newPassword}
                        onChange={handleChange}
                        required
                      />
                      <span
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400 mt-4"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <IoEye /> : <IoEyeOff />}
                      </span>
                    </div>
                    <div className="relative">
                      <label className="block">Confirm New Password:</label>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmNewPassword"
                        // className="w-full rounded border-gray-300 p-2 dark:bg-gray-800 dark:text-gray-200"
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Confirm new password"
                        value={changePasswordData.confirmNewPassword}
                        onChange={handleChange}
                        required
                      />
                      <span
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400 mt-4"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? <IoEye /> : <IoEyeOff />}
                      </span>
                    </div>
{message && (
                      <p className="text-sm text-red-600">{message}</p>
                    )}
                  </form>
                </div>
                <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
              </div>
            </div>
          )}
        </div>
    </div>
  </div>
</div>

  );
};

export default AdminProfile;



