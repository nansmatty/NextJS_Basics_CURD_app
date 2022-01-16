import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
const axios = require('axios').default;

const EditHero = ({ hero }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const [superHero, setSuperHero] = useState(hero.superHero);
  const [realName, setRealName] = useState(hero.realName);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/api/hero/${heroId}`, {
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
      <h1 className="display-3">Editing hero identity</h1>
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

        <MDBBtn type="submit" className="btn btn-success">
          Save hero data
        </MDBBtn>
      </form>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const {
    data: { hero },
  } = await axios.get(`http://localhost:3000/api/hero/${id}`);
  return {
    props: { hero }, // will be passed to the page component as props
  };
}

export default EditHero;
