import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Link from 'next/link';

const axios = require('axios').default;

const index = ({ heroes }) => {
  return (
    <div className="container">
      <h1 className="display">SuperHero Identity Manager</h1>
      <div>
        {heroes.map((hero, index) => (
          <MDBCard
            key={index}
            className="border border-2 my-2"
            style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
              <MDBCardTitle>{hero.superHero}</MDBCardTitle>
              <Link href={`/${hero._id}`}>
                <MDBBtn className="mx-2">View Hero</MDBBtn>
              </Link>
              <Link href={`/${hero._id}/edit`}>
                <MDBBtn>Edit hero</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const {
    data: { heroes },
  } = await axios.get('http://localhost:3000/api/hero');
  return {
    props: { heroes }, // will be passed to the page component as props
  };
}

export default index;
