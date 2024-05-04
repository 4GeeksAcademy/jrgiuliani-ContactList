import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({});
	const handleChange = (e)=>{
		setData({
			...data,
			[e.target.name]:e.target.value
		})
	}
	return (
		<div className="container">
			<div className="d-flex justify-content-center align-items-center fs-1">
				<p>Add new contact</p>
			</div>
			<form>
				<div className="mb-3">
					<label for="Name" className="form-label fw-bold">Full Name</label>
					<input type="text" name="name" className="form-control" id="Name" placeholder="Full Name" 
					 onChange={handleChange}
					 />
				</div>
				<div className="mb-3">
					<label for="Email" className="form-label fw-bold">Email</label>
					<input type="email" name="email"className="form-control" id="Email" placeholder="Enter email" 
					onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label for="Phone" className="form-label fw-bold">Phone</label>
					<input type="text" name="phone" className="form-control" id="Phone" placeholder="Enter phone"
					onChange={handleChange} />
				</div>
				<div className="mb-3">
					<label for="Address" className="form-label fw-bold">Address</label>
					<input type="text" name = "address" className="form-control" id="Address" placeholder="Enter address"
					onChange={handleChange} />
				</div>
				<Link to = "/">
				<button type="button" className="btn btn-primary w-100" onClick={()=>{
					actions.addContact(data)
				}}>Save</button>
				</Link>
				<Link to = "/">
					<a>or get back to contacs</a>
				</Link>
			</form>
		</div>
	)
}
	;