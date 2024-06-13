import {MainHeader} from "@/widgets/main/header";
import {MainBody} from "@/widgets/main/body";
import {MainFooter} from "@/widgets/main/footer";

export const Main = () => {

  return (
    <div className='bg-amber-400'>
      <MainHeader/>
      <MainBody/>
      <MainFooter/>
    </div>
  )
}