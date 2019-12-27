function status(response) {  
    if (response.status >= 200 && response.status < 300) {  
        return Promise.resolve(response)  
    } else {  
        return Promise.reject(new Error(response.statusText))  
    }  
}

function json(response) {  
    return response.json()  
}

const _Fetch = {
	Store: "fetch/storage.json",
	Database: "fetch/data.json",
	Event: "fetch/event.json"
}


