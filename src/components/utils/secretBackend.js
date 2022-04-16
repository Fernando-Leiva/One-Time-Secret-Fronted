

export const sendSecret = async (value) => {
    console.log(value)
    try {
        const response = await fetch('http://localhost:5050/redirect/secret',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({secret:value})
        })
        const objSecret = response.json()
        return objSecret
    } catch (error) {
        return {error:error,data:{}}
    }
}

export const getSecret = async (uuid) => {
    try {
        const response = await fetch(`http://localhost:5050/redirect/secret/${uuid}`,{
            method: 'GET'
        })
        const message =  await response.json()
        return message
    } catch (error) {
        console.log(error)
        return error
    }
}