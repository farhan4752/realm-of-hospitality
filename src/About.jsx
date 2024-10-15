import { Helmet } from "react-helmet-async";
import ErrorPage from "./ErrorPage";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Realm-of-hospitality | About</title>
      </Helmet>
      <ErrorPage></ErrorPage>
    </div>
  );
};

export default About;
