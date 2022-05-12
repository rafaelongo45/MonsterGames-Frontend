import RenderHeader from "../Header";
import RenderFooter from "../Footer";
import RenderSignInPage from "./RenderSignInPage";

function SignInPage (){
  return (
    <>
      <RenderHeader />
      <RenderSignInPage />
      <RenderFooter/>
    </>
  );
}

export default SignInPage;