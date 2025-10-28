
import Hero from "../components/livesTouched/Hero";
import Sector from "../components/livesTouched/Sector";
import Testimony from "../components/livesTouched/Testimony";
import TimeLine from "../components/livesTouched/TimeLine";
import MainLayout from "../layouts/MainLayout";

const LivesTouched = () => {
  return (
    <MainLayout>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Sector />
        </section>
        <section>
          <Testimony />
        </section>
        <section>
          <TimeLine />
        </section>
      </main>
    </MainLayout>
  );
};

export default LivesTouched;
