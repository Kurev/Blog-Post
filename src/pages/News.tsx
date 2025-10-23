import MainLayout from "../layouts/MainLayout";
import Hero from "../components/news/Hero";
import NewsUpdate from "../components/news/NewUpdate";

const News = () => {
  return (
    <MainLayout>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <NewsUpdate />
        </section>
      </main>
    </MainLayout>
  );
};

export default News;
