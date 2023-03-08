import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <main>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='font-bold text-5xl mb-8'>Texto chamativo aqui</h1>
          <p className='text-lg mb-8 px-10'>Texto complementar explicando o que o aplicativo faz</p>
          <button className='bg-black text-white px-10 py-1 rounded font-bold'>Iniciar</button>
        </div>
      </main>
    </>
    );
}

export default App;
