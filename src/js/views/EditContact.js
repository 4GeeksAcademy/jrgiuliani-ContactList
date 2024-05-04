import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState({});
    const params =useParams()
	console.log("esto es params:",params)
	let ident=params.id


	const handleChange = (e)=>{
		setEdit({
			...edit,
			[e.target.name]:e.target.value
		})
	}
	useEffect(()=>{
		setEdit(params)
	},[])
	return (
		<div className="container">
			<div className="d-flex justify-content-center align-items-center fs-1">
				<p>Edit Contact</p>
			</div>
			<form>
				<div className="mb-3">
					<label for="Name" className="form-label fw-bold">Full Name</label>
					<input type="text" className="form-control" id="Name" value={edit.name} 
					name ="name"
					onChange={handleChange}/>
				</div>
				<div className="mb-3">
					<label for="Email" className="form-label fw-bold">Email</label>
					<input type="email" className="form-control" id="Email" value={edit.email}
					name ="email"
					onChange={handleChange} />
				</div>
				<div className="mb-3">
					<label for="Phone" className="form-label fw-bold">Phone</label>
					<input type="text" className="form-control" id="Phone" value={edit.phone} 
					name ="phone"
					onChange={handleChange}/>
				</div>
				<div className="mb-3">
					<label for="Address" className="form-label fw-bold">Address</label>
					<input type="text" className="form-control" id="Address" value= {edit.address} 
					name ="address"
					onChange={handleChange}/>
				</div>
				<Link to= "/">
				<button type="button" className="btn btn-primary w-100" onClick={()=>{
					actions.editContact(edit,ident)		
				}}>Save Changes</button>
				</Link>
				<Link to = "/">
					<a>or get back to contacs</a>
				</Link>
			</form>
		</div>
	)
}
	;