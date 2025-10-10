import Benifits from "../components/home/Benifits";
import Feature from "../components/home/Feature";
import Hero from "../components/home/Hero";
import YearsOfService from "../components/home/YearsOfService";
import MainLayout from "../layouts/MainLayout";

const home = () => {
  return (
    <MainLayout>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Benifits />
        </section>
        <section>
          <Feature />
        </section>
        <section>
          <YearsOfService />
        </section>
      </main>
    </MainLayout>
  );
};

export default home;
