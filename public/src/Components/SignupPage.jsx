import React from "react";
import { Button, SIZE } from "baseui/button";
import { Input } from "baseui/input";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalButton,
  ModalFooter,
  ModalHeader,
  ROLE,
} from "baseui/modal";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const path = process.env.REACT_APP_PATH;
  const [modal, setModal] = React.useState("");

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
        const newobj = {
          name,
          email,
          password,
        };
        const res = await axios.post(`${path}users/`, newobj);
        if (res.data === "Success") {
          navigate("/login");
        }
    } catch (err) {
      setLoad(false);
      setModal(err.response.data.message);
      setIsOpen(true);
    }
    setLoad(false);
  };

  const [isOpen, setIsOpen] = React.useState(false);
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form className="flex flex-col space-y-4" onSubmit={submitHandle}>
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
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size={SIZE.compact}
              placeholder="Eg. john@gmail.com"
              type="email"
              pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
              clearable
              clearOnEscape
              required
            />
            <Input
              required
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
            <Input
              required
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
            {err && (
              <p className="text-red-600">Password does not match. Retry!</p>
            )}
            <Button isLoading={load}>Sign Up</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
