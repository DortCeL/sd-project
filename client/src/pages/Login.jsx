import { useState } from "react";

export default function Signup() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();

		console.log(username, email, password);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h3>Sign up</h3>
				<label>Username</label>
				<input
					type='text'
					onChange={(e) => {
						setUsername(e.target.value);
					}}
					value={username}
					name='username'
					placeholder='Username...'
				/>

				<label>Email</label>
				<input
					type='email'
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					value={email}
					name='email'
					placeholder='Email...'
				/>

				<label>Password</label>
				<input
					type='password'
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					value={password}
					name='password'
					placeholder='********'
				/>
			</form>
		</>
	);
}
