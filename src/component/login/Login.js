
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useContext } from "react";
import Context from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";


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


export default function LogIn() {

    const [password, setPassword] = useState({})
    const [passwordShown, setPasswordShown] = useState(false);
    // console.log(userName);

    const {
        // register,
        // handleSubmit,
        // getValues,
        // reset,
        formState: { errors },
    } = useForm();

    const navigateLogin = useNavigate();
    const { userName, setUserName } = useContext(Context)
    const { setUserAccessToken } = useContext(Context);

    const handleLogin = () => {
        fetch(`http://localhost:4001/users/login`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName, password })
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (!data.message) {
                    console.log('data');
                    localStorage.setItem("Token", data.accessToken)
                    setUserAccessToken(data.accessToken);
                    navigateLogin("/home");
                } else {
                    console.log('datgga');
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
            password: data.get('password'),
        });
        handleLogin()
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
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="userName"
                                label="User Name"
                                name="userName"
                                autoComplete="userName"
                                autoFocus
                                onChange={({ target: { value } }) => {
                                    setUserName(value)
                                }
                                }
                            />
                            {errors.username && (
                                <div className="error-invalid-value">
                                    {" "}
                                    שדה זה חובה או שם המשתמש אינו תקין
                                </div>
                            )}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={passwordShown ? "text" : "password"}
                                id="password"

                                autoComplete="current-password"
                                onChange={({ target: { value } }) => {
                                    setPassword(value)
                                }
                                }
                            />
                            {errors.password && (
                                <div className="error-invalid-value">
                                    שדה זה חובה או סיסמה אינה תקינה
                                </div>
                            )}
                            <VisibilityIcon
                                style={{ color: "black", position: "absolute", left: "850px", bottom: "140px" }}
                                onClick={() => setPasswordShown(!passwordShown)}
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4, color: 'white' }} />
                </Container>
            </ThemeProvider>
        </div>
    );
}