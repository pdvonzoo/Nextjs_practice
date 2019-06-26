import Fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Prices from "../components/Prices";

const Index = props => (
  <Layout>
    <div>
      <h1>Welcome to this site</h1>
      <Prices bpi={props.bpi} />
      {props.bpi.time.updated}
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  return {
    bpi: data
  };
};

export default Index;
