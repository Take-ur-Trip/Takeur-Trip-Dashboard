import { React, useState, Fragment } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import "./login.scss";
import useAuth from '../../hooks/useAuth';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from "react-router-dom";

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export const Login = (props) => {
    const { user, isLoading } = useContext(UserContext);
    const navigate = useNavigate();
    if(user && !isLoading) {
      navigate('/');
    }
    const { logIn } = useAuth();
    const [error, setError] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
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
      const loginAttempt = await logIn(loginForm);
      if(loginAttempt.code == 403) {
        setError(true);
      }
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
          {/* <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography> */}
        <ModeToggle/>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
