import ServicesPage from "../../components/templates/ServicesPage";
import ServicesData from "../../data.json";

function Services( {data} ) {
  return <ServicesPage data={data} />;
}

export default Services;

export async function getStaticProps() {
  return {
    props: { data: ServicesData },
    revalidate: 60 * 60 * 10, // 10 hours
  };
}
