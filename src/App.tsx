import Layout from './components/Layout';
import Analytics from './components/Analytics';
import Principal from './sections/Principal';

const App = () => {
  return (
    <>
      <Analytics />
      <Layout>
        <Principal />
      </Layout>
    </>
  );
};

export default App;
