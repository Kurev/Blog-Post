
import Directory from "../components/project/Directory"
import Hero from "../components/project/Hero"
import Location from "../components/project/Location"
import MainLayout from "../layouts/MainLayout"


const Projects = () => {
  return (
    <MainLayout>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Location />
        </section>
        <section>
          <Directory />
        </section>
      </main>
    </MainLayout>
  )
}

export default Projects