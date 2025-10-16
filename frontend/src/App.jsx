import UrlShortener from "./pages/UrlShortener";
import { UrlProvider } from "./context/UrlContext";

function App() {
  return (
    <UrlProvider>
      <UrlShortener />
    </UrlProvider>
  );
}

export default App;
