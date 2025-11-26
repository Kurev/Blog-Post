
import Directory from "../components/project/Directory"
import Hero from "../components/project/Hero"
import Location from "../components/project/Location"
import MainLayout from "../layouts/MainLayout"


const Projects = () => {
  return (
    <MainLayout>
      <div>
        <section>
          <Hero />
        </section>
        <section>
          <Location />
        </section>
        <section className="pb-15">
          <Directory />
        </section>
      </div>
    </MainLayout>
  )
}

export default Projects