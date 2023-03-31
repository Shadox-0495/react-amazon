import React, { useRef, useState, useEffect } from "react";
import useMemory from "../features/memory";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Snackbar, Alert, Slide } from "@mui/material";

export default function Login(props: any) {
	const { type, title } = props;
	const { currentUser, signup, login, loginProviders, singUpWithProvider, logOut } = useMemory();
	const [formType, setFormType] = useState(currentUser ? "logout" : type || "login");
	const [loading, setLoading] = useState(false);
	const userEmailRef = useRef<HTMLInputElement | null>();
	const userPasswordRef = useRef<HTMLInputElement | null>();
	const userPasswordConfirmRef = useRef<HTMLInputElement | null>();
	const navigate = useNavigate();

	const msg: Record<string, any> = {
		login: () => (
			<>
				¿ Don't have an account ?
				<Button
					onClick={() => {
						changeForm("sign up", "Sign Up");
					}}
				>
					Signup
				</Button>
			</>
		),
		"sign up": () => (
			<>
				¿ Already have an account ?{" "}
				<Button
					onClick={() => {
						changeForm("login", "Sign In");
					}}
				>
					Log In
				</Button>
			</>
		),
		logout: () => (
			<Button variant="contained" color="primary" onClick={logOutOffApp}>
				Log Out
			</Button>
		),
	};

	/*const emailRef = useRef();
	const passRef = useRef();
	const [open, setOpen] = useState(false);
	const [error, setError] = useState("");
	
	

	function SlideTransition(props: any) {
		return <Slide {...props} direction="left" />;
	}

	async function handleSubmit(e: any) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await signin(emailRef.current.value, passRef.current.value);
			navigate("/");
		} catch {
			setError("Fallo al iniciar session");
			setOpen(true);
		}
		setLoading(false);
	}

	

	function closeError(event, reason) {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	}

	

	return (
		<>
			<div className="frm-session-contenedor">
				<div className="frm-session">
					<h2>Ingresar</h2>
					<div className="session-alt"> {altProviders()} </div>
					<form className="session-datos" onSubmit={handleSubmit}>
						<TextField aria-invalid="false" size="small" id="correo" label="Correo*" inputRef={emailRef} variant="outlined" />
						<TextField aria-invalid="false" size="small" id="contraseña" label="Contraeña*" inputRef={passRef} variant="outlined" type="password" />
						<Button type="submit" disabled={loading} variant="contained" color="primary">
							Ingresar
						</Button>
					</form>
					<div data-opcion="cambiar-contraseña">
						<Link to="/forgot-password">Olvido la contraseña?</Link>{" "}
					</div>
					<div data-opcion="crear-cuenta">
						No tienes una cuenta? <Link to="/signup">Registrate</Link>{" "}
					</div>
					<Snackbar open={open} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} TransitionComponent={SlideTransition} autoHideDuration={3000} onClose={closeError}>
						<Alert variant="filled" severity="error">
							{error}
						</Alert>
					</Snackbar>
				</div>
			</div>
		</>
	);*/

	function submitForm(Event: React.FormEvent) {
		Event.preventDefault();
		if (formType == "login") logIntoApp();
		if (formType == "sign up") signUpIntoApp();
	}

	function changeForm(type: string, title: string) {
		setFormType(type);
	}

	/*function altProviders() {
		for (const [key, value] of Object.entries(loginProviders)) {
			return (
				<Button
					disabled={loading}
					variant="contained"
					color="primary"
					onClick={() => {
						altSignIn(value);
					}}
				>
					Ingresar con {key}
				</Button>
			);
		}
	}

	async function altSignIn(provider: any) {
		console.log(provider);
		try {
			setLoading(true);

			await singUpWithProvider(provider);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	}*/

	/*
     const emailRef=useRef();
    const passRef=useRef();
    const passConfRef=useRef();
    const { signup , loginProviders , singUpWithProvider }  = useAuth();
    const [open,setOpen] = useState(false);
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    function SlideTransition(props) {
        return <Slide {...props} direction="left" />;
      }

    async function handleSubmit(event){
        event.preventDefault();
        if(passRef.current.value !== passConfRef.current.value){ setOpen(true); return setError("Las contraseñas no son iguales");}

        try{
            setError("");
            setLoading(true);
            await signup(emailRef.current.value,passRef.current.value);
            history.push("/app");
        }
        catch(event){
            setError("Fallo al registrarse:" + event);
            console.log(open);
            setOpen(true);
        }
        setLoading(false);
    }

    async function altSignIn(provider){
        try{
            setError("");
            setLoading(true);
            await singUpWithProvider(provider);
            history.push("/app");
        }
        catch(event){
            setError("Fallo al registrarse:" + event);
            setOpen(true);
        }
        setLoading(false);
    }

    function closeError(event,reason){
        if (reason === "clickaway") { return; }
        setOpen(false);
    }

    function altProviders(){
        for (const  [key, value] of Object.entries(loginProviders)) {
            return <Button disabled={loading} variant="contained" id={"btnLogin"+key} color="primary" onClick={()=>{ altSignIn(value); }} >Registrarse con {key}</Button>
        }
    }
    */

	async function logIntoApp() {}

	async function logOutOffApp() {
		try {
			await logOut();
			navigate("/");
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	}

	async function signUpIntoApp() {
		//if(userPasswordRef.current.value !== userPasswordConfirmRef.current.value){ setOpen(true); return setError("Las contraseñas no son iguales");}

		try {
			await signup(userEmailRef.current!.value, userPasswordRef.current!.value);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	}

	useEffect(() => {}, []);

	return (
		<>
			<div className="login" data-type={formType}>
				<div className="login__header"></div>
				<form className="login__body" onSubmit={submitForm}>
					<TextField aria-invalid="false" className="login__email" size="small" label="Email*" inputRef={userEmailRef} variant="outlined" />
					<TextField aria-invalid="false" className="login__pass" size="small" label="Password*" inputRef={userPasswordRef} variant="outlined" type="password" />
					<TextField aria-invalid="false" className="login__confirmPass" size="small" label="Confirm password*" inputRef={userPasswordConfirmRef} variant="outlined" type="password" />
					<Button type="submit" variant="contained" color="primary">
						{formType}
					</Button>
				</form>
				<div className="login__footer">{msg[formType]() || ""}</div>
			</div>
		</>
	);
}
