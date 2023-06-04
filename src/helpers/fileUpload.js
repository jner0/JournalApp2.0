
export const fileUpload = async() => {

    if( !file ) throw new Error('No tenemos ningun archivo a subir');
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dvvhz9wti/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'react-journal2');
    formData.append('file', file);

    try {
        
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }

}