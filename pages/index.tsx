import Layout from '../components/layout';

const Home = ({}) => {
  return (
    <Layout>
      <h2>Home</h2>
    </Layout>
  );
};
export default Home;
export async function getStaticProps() {
  return {
    props: {},
  };
}
