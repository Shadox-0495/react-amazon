import React, { useRef, useState, useEffect } from "react";
import useMemory from "../features/memory";
import { Link, useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Button, Card, CardContent, CardActions } from "@mui/material";
import { Mail, Lock } from "@mui/icons-material";

export default function Login(props: any) {
	const { type, title } = props;
	const { currentUser, fbSignup, fbLogin, fbLogout, showLogin, toast } = useMemory();
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
					Login
				</Button>
			</>
		),
		logout: () => (
			<Button variant="contained" color="primary" onClick={logOutOffApp}>
				Log Out
			</Button>
		),
	};

	function submitForm(Event: React.FormEvent) {
		Event.preventDefault();
		if (formType == "login") logIntoApp();
		if (formType == "sign up") signUpIntoApp();
	}

	function changeForm(type: string, title: string) {
		setFormType(type);
	}

	const validEmail = (email: string) => {
		return String(email)
			.toLowerCase()
			.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	};

	async function signUpIntoApp() {
		//if any of the required fields are empty then exit function
		if (userEmailRef.current!.value == "" || userPasswordRef.current!.value == "" || userPasswordConfirmRef.current!.value == "") {
			toast.error("Email, password, or confirm password fields are empty", { position: "bottom-right" });
			return;
		}
		if (!validEmail(userEmailRef.current!.value)) {
			toast.error("Didn't provide a valid email.", { position: "bottom-right" });
			return;
		}
		//if the password and confirm password aren't the same exit function
		if (userPasswordRef.current!.value !== userPasswordConfirmRef.current!.value) {
			toast.error("Password and confirm password fields doesn't match.", { position: "bottom-right" });
			return;
		}

		try {
			await fbSignup(userEmailRef.current!.value, userPasswordRef.current!.value);
			showLogin(false);
			navigate("/");
		} catch (err) {
			toast.error(`Caught error while trying to signup: ${err}`, { position: "bottom-right" });
		}
		userEmailRef.current!.value = "";
		userPasswordRef.current!.value = "";
		userPasswordConfirmRef.current!.value = "";
		setLoading(false);
	}

	async function logIntoApp() {
		//if any of the required fields are empty then exit function
		if (userEmailRef.current!.value == "" || userPasswordRef.current!.value == "") {
			toast.error("Email or password fields are empty", { position: "bottom-right" });
			return;
		}

		if (!validEmail(userEmailRef.current!.value)) {
			toast.error("Didn't provide a valid email.", { position: "bottom-right" });
			return;
		}

		try {
			await fbLogin(userEmailRef.current!.value, userPasswordRef.current!.value);
			showLogin(false);
			navigate("/");
		} catch (err) {
			toast.error(`Caught error while trying to login: ${err}`, { position: "bottom-right" });
		}
		userEmailRef.current!.value = "";
		userPasswordRef.current!.value = "";
		setLoading(false);
	}

	async function logOutOffApp() {
		try {
			await fbLogout();
			navigate("/");
		} catch (err) {
			toast.error(`Caught error while trying to logout: ${err}`, { position: "bottom-right" });
		}
		setLoading(false);
	}

	useEffect(() => {
		setFormType(currentUser ? "logout" : type || "login");
	}, [currentUser]);

	return (
		<>
			<Card className="login" data-type={formType}>
				<CardContent>
					<form className="login__body" onSubmit={submitForm}>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Mail />
									</InputAdornment>
								),
							}}
							aria-invalid="false"
							className="login__email"
							size="small"
							label="Email*"
							inputRef={userEmailRef}
							variant="outlined"
						/>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Lock />
									</InputAdornment>
								),
							}}
							aria-invalid="false"
							className="login__pass"
							size="small"
							label="Password*"
							inputRef={userPasswordRef}
							variant="outlined"
							type="password"
						/>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Lock />
									</InputAdornment>
								),
							}}
							aria-invalid="false"
							className="login__confirmPass"
							size="small"
							label="Confirm password*"
							inputRef={userPasswordConfirmRef}
							variant="outlined"
							type="password"
						/>
						<Button type="submit" variant="contained" color="primary">
							{formType}
						</Button>
					</form>
				</CardContent>
				<CardActions className="login__footer">{msg[formType]() || ""}</CardActions>
			</Card>
		</>
	);
}
