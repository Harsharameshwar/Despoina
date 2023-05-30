import React, { useEffect, useState } from "react";
import { Input } from "baseui/input";
import { Button, SIZE } from "baseui/button";
import {
  Modal,
  ModalBody,
  ModalButton,
  ModalFooter,
  ModalHeader,
  ROLE,
} from "baseui/modal";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const auth = useAuthUser();
  const navigate= useNavigate();
  const user = auth()?.data;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [err, setErr] = React.useState(false);

  const path = process.env.REACT_APP_PATH;
  const [isOpen, setIsOpen] = React.useState(false);
  const [modal, setModal] = React.useState("");

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get(`${path}users/${user?._id}`);
        res?.data && setName(res.data.name);
        res?.data && setEmail(res.data.email);
      } catch (err) {
        setLoad(false);
        setModal(err.response.data.message);
        setIsOpen(true);
      }
    }
    fetch();
  },[]);

  const passHandle = () => {
    if (!(cpassword === password)) {
      setErr(true);
    }
    if (cpassword === password) {
      setErr(false);
    }
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      if (password === "") {
        const obj = { name, email };
        const res = await axios.put(`${path}users/${user?._id}`, obj);
        if (res.status === 200) {
          navigate('/dashboard');
        }
        setLoad(false);
      } else {
        const obj = { name, email, password };
        const res = await axios.put(`${path}users/${user?._id}`, obj);
        if (res.status === 200) {
          navigate('/dashboard');
        }
        setLoad(false);
      }
    } catch (err) {
      setLoad(false);
      setModal(err.response.data.message);
      setIsOpen(true);
    }
  };

  return (
    <>
      <Modal
        onClose={() => setIsOpen(false)}
        closeable
        isOpen={isOpen}
        animate
        autoFocus
        size={SIZE.default}
        role={ROLE.dialog}
      >
        <ModalHeader>Notice!</ModalHeader>
        <ModalBody>{modal}</ModalBody>
        <ModalFooter>
          <ModalButton onClick={() => setIsOpen(false)}>Okay</ModalButton>
        </ModalFooter>
      </Modal>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8">Account Settings</h1>
        <div className="max-w-md mx-auto">
          <form autoComplete="off" onSubmit={submitHandle}>
            <div className="mb-6">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                size={SIZE.compact}
                placeholder="Eg. John Michle"
                pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
                clearable
                autoFocus
                clearOnEscape
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size={SIZE.compact}
                placeholder="Eg. name@gamil.com"
                type="email"
                pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                clearable
                clearOnEscape
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="newPassword" className="block font-bold mb-2">
                New Password
              </label>
              <Input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                error={err}
                placeholder="*********"
                // startEnhancer={<Key/>}
                clearable
                size={SIZE.compact}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block font-bold mb-2">
                Confirm Password
              </label>
              <Input
                value={cpassword}
                error={err}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
                onKeyUp={passHandle}
                type="password"
                id="password"
                placeholder="*********"
                // startEnhancer={<Key/>}
                clearable
                size={SIZE.compact}
              />
            </div>
            {err && (
              <p className="text-red-600">Password does not match. Retry!</p>
            )}
            <Button isLoading={load}>Save Changes</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
