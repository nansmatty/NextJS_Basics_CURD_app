import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';

const axios = require('axios').default;

const EachHero = ({ hero }) => {
  const router = useRouter();

  const heroId = router.query.id;

  const deleteHero = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/hero/${heroId}`);
      router.push('/');
    } catch (error) {
      console.log(hero);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Identity of Hero</h1>
      <MDBCard className="border border-2 my-2" style={{ maxWidth: '22rem' }}>
        <MDBCardBody>
          <MDBCardTitle>{hero.superHero}</MDBCardTitle>
          <MDBCardText>{hero.realName}</MDBCardText>
          <MDBBtn onClick={deleteHero} className="mx-2 btn btn-danger">
            <strong>Delete hero</strong>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
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

export default EachHero;
