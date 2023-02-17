const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: "",
			planets: "",
			ships: {}
		},
		actions: {
			getChar: () => {
				const store = getStore()	
				const requestOptions = {
						method: 'GET',
						redirect: 'follow'
					  };
					  
					  fetch("https://www.swapi.tech/api/people", requestOptions)
						.then(response => response.json())
						.then(result => {
							setStore({characters: result.results})})
						.catch(error => console.log('error', error));
										
			},
			getPlan: () => {
				const store = getStore()	
				const requestOptions = {
						method: 'GET',
						redirect: 'follow'
					  };
					  
					  fetch("https://www.swapi.tech/api/planets", requestOptions)
						.then(response => response.json())
						.then(result => {
							setStore({planets: result.results})})
						.catch(error => console.log('error', error));
			},
			getShip: async () => {
				const store = getStore()	
				const requestOptions = {
						method: 'GET',
						redirect: 'follow'
					  };
					  
					  const response = await fetch("https://www.swapi.tech/api/starships", requestOptions)
						if (response.ok) {
							const responseJSON = await response.json()
						
							setStore({ships: responseJSON.results})}
						else {
							console.log('error');}
			}
		
		}
	};
};

export default getState;