const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/jrgiuliani/contacts")
					.then((response) => {
						return response.json()
					})
					.then((data) => {
						console.log("data: ", data)
						setStore({ contacts: data.contacts })
					})
					.catch((error) => { return error })
			},
			addContact: async (contacto) => {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/jrgiuliani/contacts", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contacto)
					})
					if (response.ok) {
						console.log('Contacto creado')
						getActions().getContacts()
					}
				} catch (error) {
					console.log(error)
				}
			},
			deleteContact: async (conId) =>{
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/jrgiuliani/contacts/${conId}`,{
						method: "DELETE"
					});
					if (response.status==204) {
						console.log(`Contacto eliminado.`);
						getActions().getContacts()
						
					}else {
						console.error('Hubo un problema al eliminar el usuario');
					}
				} catch (error) {
					console.error(error);
				}
			},
			editContact: async (cambios,id) =>{
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/jrgiuliani/contacts/${id}`,{
						method:"PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(cambios)
					})
					if (response.ok) {
						console.log('Contacto editado')
						getActions().getContacts()
					}
				}	catch (error) {
						console.log(error)}
			}
		}
	};
};

export default getState;
