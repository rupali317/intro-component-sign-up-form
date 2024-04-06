import { Form } from "./components/Form";
import * as GlobalStyles from "./styles/Global.style";
import { FreeTrial } from "./components/FreeTrial";

function App() {
  return (
    <>
      <GlobalStyles.BaseStyles />
      <GlobalStyles.ResetStyles />
      <GlobalStyles.DefaultStyles />
      <section>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section>
        <FreeTrial />
        <Form />
      </section>
    </>
  );
}

export default App;
