import React, { useState } from 'react';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from "react-auth-kit";
import axios from 'axios';


const LoginPage = () => {
  const navigate=useNavigate();
  const [name,setName]=useState('');
  const [passwd,setPasswd]=useState('');
  const [load, setLoad]=useState(false)
  const [err, setErr] = useState(false)
  const path=process.env.REACT_APP_PATH;
  const signIn = useSignIn();

  const handleSubmit = async (e) => {
    setLoad(true);
    var res;
    e.preventDefault();
    try {
        res = await axios.post(`${path}auth/login`, {
          email: name,
          password: passwd,
        });
        signIn({
          token: res.data?.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { data: res.data?.user },
        });
        navigate(`/dashboard`);
    } catch (err) {
      console.log(err)
      setErr(true);
      setLoad(false);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoComplete='off'
                    placeholder="Eg. john@gmail.com"
                    clearable
                    error={err}
                    clearOnEscape
                    required
                />
                <Input
                    value={passwd}
                    required
                    onChange={e => setPasswd(e.target.value)}
                    error={err}
                    type="password"
                    autoComplete='off'
                    placeholder='Eg: ********'
                />
              {err && (
            <p className="font-extrabold text-red-600 text-lg text-center italic">
              User Name and Password do not match.
            </p>
          )}
          {/* <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" /> */}
             <Button
                isLoading={load}
                    >Sign-In
                </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
