import MainLayout from "../layouts/MainLayout";
import Hero from "../components/news/Hero";
import NewsUpdates from "../components/news/NewsUpdates";

const News = () => {
  return (
    <MainLayout>
      <div>
        <section>
          <Hero />
        </section>
        <section>
          <NewsUpdates />
        </section>
      </div>
    </MainLayout>
  );
};

export default News;
