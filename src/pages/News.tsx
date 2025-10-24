import MainLayout from "../layouts/MainLayout";
import Hero from "../components/news/Hero";
import NewsUpdates from "../components/news/NewsUpdates";

const News = () => {
  return (
    <MainLayout>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <NewsUpdates />
        </section>
      </main>
    </MainLayout>
  );
};

export default News;
