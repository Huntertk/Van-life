export const serverD = async () => {
        const response = await fetch('api/vans')
         if (!response.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
        const data = await response.json()
        return data.vans
    }