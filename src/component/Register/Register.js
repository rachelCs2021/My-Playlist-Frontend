

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(110, 62, 62)',
        },
        secondary: {
            main: '#616161',
        },
    },
});

export default function Register() {

    const [userName, setUserName] = useState({})
    const [password, setPassword] = useState({})
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState({})

    const navigateRegister = useNavigate();

    const handleRegister = () => {

        fetch(`http://localhost:4005/users/register`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName, password, email })
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem("Token", data.accessToken)
                // setUserAccessToken(res.data.token);
                if (data.accessToken) {
                    return navigateRegister("/home");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        // reset();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            userName: data.get('userName'),
            email: data.get('email'),
            password: data.get('password'),
        });
        handleRegister()
    };

    return (
        <div className='parallax'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            bgcolor: 'white',
                            opacity: 0.6,
                            padding: 5,
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid> */}
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="userName"
                                        label="userName"
                                        name="userName"
                                        autoComplete="userName"
                                        onChange={({ target: { value } }) => {
                                            setUserName(value)
                                        }
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={({ target: { value } }) => {
                                            setEmail(value)
                                        }
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={passwordShown ? "text" : "password"}
                                        id="password"
                                        autoComplete="new-password"
                                        onChange={({ target: { value } }) => {
                                            setPassword(value)
                                        }
                                        }
                                    />
                                    <VisibilityIcon
                                        style={{ color: "black", position: "absolute", left: "855px", bottom: "75px" }}
                                        onClick={() => setPasswordShown(!passwordShown)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                                /> */}
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5, color: 'white' }} />
                </Container>
            </ThemeProvider>
        </div>
    );
}