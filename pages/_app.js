import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="w-full min-h-[calc(100vh-48px)] bg-gray-100 overflow-auto">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
