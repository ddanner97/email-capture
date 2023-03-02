const apiKey = "$2b$10$YtglDrWiRzphuz5Z9vlh.uA/Ak0ZnHcvSIAUZr0y5B5SK.E/KPFbe"
const collectionId = "6327791ba1610e63862f9268"
const url = `https://api.jsonbin.io/v3/b`;

export const createBin = (data) => {
    
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': `${apiKey}`,
            'X-Collection-Id': `${collectionId}`
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
    
    return response
}