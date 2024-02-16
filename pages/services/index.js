import ServicesPage from "../../components/templates/ServicesPage";
import ServicesData from "../../data.json";
import { getSession } from "next-auth/react";

function Services({ data }) {
  return <ServicesPage data={data} />;
}

export default Services;

// export async function getStaticProps() {
//   return {
//     props: { data: ServicesData },
//     revalidate: 60 * 60 * 10, // 10 hours
//   };
// }
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return { props: { data: ServicesData, session } };
}
