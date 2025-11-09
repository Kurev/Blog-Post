import Bills from "../components/legislative/Bills"
import Bio from "../components/legislative/Bio"
import Committe from "../components/legislative/Committe"
import MainLayout from "../layouts/MainLayout"


const Legislative = () => {
  return (
    <MainLayout>
      <div>
        <section>
          <Bio />
        </section>
        <section>
          <Bills />
        </section>
        <section>
          <Committe />
        </section>
      </div>
    </MainLayout>
  )
}

export default Legislative