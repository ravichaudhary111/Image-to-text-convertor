import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [boldWords, setBoldWords] = useState([]);

  const onChange = e => setFile(e.target.files[0]);

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('/api/images/upload', formData, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });

      setText(res.data.text);
      setBoldWords(res.data.boldWords);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
      {text && (
        <div>
          <p>{text}</p>
          <p>Bold Words: {boldWords.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
