import { React, useEffect, useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import "./login.scss";

import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { useDispatch } from 'react-redux';
import { useNavigate} from "react-router-dom";

const Login = ({isLoggedIn}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      if(isLoggedIn) {
        navigate('/dashboard');
      }
    })
    const [error, setError] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
        loading: false
    })

    const handleChange = event => {
        const { name, value } = event.target;
        setLoginForm((prevState) => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }

    const handleLogin = async () => {
      setLoginForm((prevState) => {
        return {
          ...prevState,
          loading: true
        }
      })

      dispatch(login({email: loginForm.email, password: loginForm.password})).then(() => {
        navigate('/dashboard')
      }).catch(() => {
        setLoginForm((prevState) => {
          return {
            ...prevState,
            loading: true
          }
        })
        setError(true);
      })
    }

  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 500,
            mx: 'auto', // margin left & right
            my: 25, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Takeur' Trip Dashboard</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
            {!error ? "" : <Typography level="h6" style={{color: "#ff3333"}}>Incorrect credentials. Try again!</Typography>}
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="example@example.com"
            onChange={handleChange}
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            label="Password"
          />
          <Button sx={{ mt: 1 /* margin top */ }} onClick={handleLogin}>Log in</Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}


const mapStateToProps = state => {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn, message
  }
}

export default connect(mapStateToProps)(Login);