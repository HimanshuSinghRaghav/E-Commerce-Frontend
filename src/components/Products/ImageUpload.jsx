import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setProductImage } from '../../Redux/AddProductDataSlice';


const ImageUpload = () => {
  const {imageUrl} = useSelector((state) =>state.addProduct)
  console.log( imageUrl, "ooooooooooooooooooooooooooo")
  const [imageUrls, setImageUrl] = useState(imageUrl);
 const dispatch = useDispatch()
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'aa4ixwqc'); // Replace with your upload preset name
    formData.append('cloud_name' , "dq8wdyqs3")
    formData.append('crop' , 'lfill')
    formData.append('width' , '250')
    formData.append('height' , '250')
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dq8wdyqs3/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
      console.log(response)
    const data = await response.json();
    setImageUrl(data.secure_url);
    dispatch(setProductImage(data.secure_url))
  };

  return (
    <div>
      <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 h-96 flex justify-center items-center rounded-lg border-dashed border-2 border-gray-900/25 px-6 py-10">
                {!imageUrls && <div className="text-center">
           
                  <FontAwesomeIcon icon={faImage} className="mx-auto h-12 w-12 text-gray-300"/>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-slate-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-800 focus-within:ring-offset-2 hover:text-slate-800"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" accept="image/*" onChange={handleImageUpload} className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 10MB</p>
                </div>}
                {imageUrls  && <Image cloudName="your_cloud_name" publicId={imageUrls} />}
                {!imageUrls && imageUrl && <Image cloudName="your_cloud_name" publicId={imageUrl} />}
              </div>
    </div>
  );
};

export default ImageUpload;
