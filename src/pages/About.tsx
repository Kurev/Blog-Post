
import Bio from '../components/about/Bio'
import Hero from '../components/about/Hero'
import Issue from '../components/about/Issue'
import MissionValues from '../components/about/MissionValues'
import MainLayout from '../layouts/MainLayout'


const About = () => {
  return (
    <MainLayout>
        <main>
            <section>
                <Hero />
                <Bio />
            </section>
            <section>
                <MissionValues />
                <Issue />
            </section>
        </main>
    </MainLayout >
  )
}

export default About