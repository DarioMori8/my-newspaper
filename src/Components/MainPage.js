import FrontPageTop from './FrontPageTop.js'
import SecondaryNotice from "./SecondaryNotice";
import ThirdGroupOfNotice  from "./ThirdGroupOfNotice";
import FinalGroupOfNotice from "./FinalGroupOfNotice";
import Footer from "./Footer";
function MainPage(){
    return(
        <>
        <FrontPageTop/>
        <SecondaryNotice/>
        <ThirdGroupOfNotice/>
        <FinalGroupOfNotice/>
        <Footer/>
        </>
    )
}
export default MainPage;