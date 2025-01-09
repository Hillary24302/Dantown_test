import Layout from "./dashboard/layout";
import Dashboard from "./dashboard/page";

const HomePage = () => {
  return (
    <div>
      <Layout>
        {/* <div>Welcome to the Dashboard!</div> */}
        <Dashboard />
      </Layout>
    </div>
  );
};
export default HomePage;
