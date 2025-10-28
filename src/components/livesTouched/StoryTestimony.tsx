import { useLocation } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const StoryTestimony = () => {
  const location = useLocation();
  const testimony = location.state?.selected;

  return (
    <MainLayout>
      <div>
        <img src={testimony.img} alt="" className="w-full min-h-screen"/>
        <div>
            <div>
                
            </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StoryTestimony;
