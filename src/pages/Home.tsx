
import Benifits from "../components/home/Benifits"
import Feature from "../components/home/Feature"
import Hero from "../components/home/Hero"
import YearsOfService from "../components/home/YearsOfService"
import MainLayout from "../layouts/MainLayout"


const home = () => {
  
  return (
    <MainLayout>
      <main>
        <section >
          <Hero />
          <Benifits />
        </section>

        <section>
          <Feature />
          <YearsOfService/>
        </section>
      </main>
    </ MainLayout >
  )
}

export default home