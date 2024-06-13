import {AppProps} from "next/app";
import {BaseLayout} from "@/widgets/layouts";

const App = ({Component, pageProps}: AppProps) => (
  <BaseLayout>
    <Component {...pageProps} />
  </BaseLayout>
)

export default App