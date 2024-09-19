
export const getAllProperties = async ()=>{
    try {
        const response = await fetch('https://66e888fb490b560ad9f083bd--velvety-chaja-b21459.netlify.app/api/properties',{
            method: 'GET',
        });
        return response.json();
    } catch (error) {
        console.log('Error: ',error);
    }
}

export const postProperty = async (property,user)=>{
    try {
        const response = await fetch('https://66e888fb490b560ad9f083bd--velvety-chaja-b21459.netlify.app/api/properties/create',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify(property)
        });
        return response.json();
    } catch (error) {
        console.log('Error: ',error);
    }
}

export const updateProperty = async (id,data,user)=>{
    try {
        const response = await fetch(`https://66e888fb490b560ad9f083bd--velvety-chaja-b21459.netlify.app/api/properties/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (error) {
        console.log('Error: ',error);
    }
}

export const uploadPropertyImage = async (id,formData,user)=>{
    try {
        const response = await fetch(`https://66e888fb490b560ad9f083bd--velvety-chaja-b21459.netlify.app/api/properties/uploadimage/${id}`,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${user?.token}`
            },
            body: formData,
        });
        return response.json();
    } catch (error) {
        
    }
}

export const deleteProperty = async (id,user)=>{
    try {
        const response = await fetch(`https://66e888fb490b560ad9f083bd--velvety-chaja-b21459.netlify.app/api/properties/${id}`,{
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user?.token}`
            },
        });
        return response.json();
    } catch (error) {
        console.log('Error: ',error);
    }
}

export const likeProperty = async(id,user)=>{
    try {
        const response = await fetch(`https://66e888fb490b560ad9f083bd--velvety-chaja-b21459.netlify.app/api/properties/like/${id}`,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${user?.token}`
            }
        })
        return response.json();
    } catch (error) {
        console.log('Error: ',error);
    }
}

export const dislikeProperty = async(id,user)=>{
    try {
        const response = await fetch(`https://66e888fb490b560ad9f083bd--velvety-chaja-b21459.netlify.app/api/properties/dislike/${id}`,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${user?.token}`
            }
        })
        return response.json();
    } catch (error) {
        console.log('Error: ',error);
    }
}
