import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
const axios = require('axios').default;

const AddNewHero = () => {
  const router = useRouter();

  const [superHero, setSuperHero] = useState('');
  const [realName, setRealName] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/hero', {
        superHero,
        realName,
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Adding new hero identity</h1>
      <form onSubmit={handleForm}>
        <MDBInput
          onChange={(e) => setSuperHero(e.target.value)}
          label="Superhero"
          type="text"
          name="superHero"
          value={superHero}
        />
        <MDBInput
          className="my-2"
          onChange={(e) => setRealName(e.target.value)}
          label="Realname"
          type="text"
          name="realName"
          value={realName}
        />

        <MDBBtn type="submit">Add new hero</MDBBtn>
      </form>
    </div>
  );
};

export default AddNewHero;
