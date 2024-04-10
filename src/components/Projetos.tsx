import { Link } from 'react-router-dom';
import cronometro from '../img/cronometro.png';
import jogoDaVelha from '../img/jogo-da-velha.png'
import jogaDaCobrinha from '../img/jogo-da-cobrinha.png';
import genius from '../img/genius.png';
import ProjetoFormatacao from './ProjetoFormatacao';

const Projetos = () => {
  return (
    <div className="w-4/5 mt-5 mx-auto text-center">
      <h1 className="text-9xl">Projetos</h1>

      <div className='flex gap-2 w-11/12 mx-auto my-16 flex-wrap justify-center'>
        <ProjetoFormatacao link='https://luannn000.github.io/JS/Cronometro/index.html' src={cronometro} alt='Cronomêtro' />
        <ProjetoFormatacao link='https://luannn000.github.io/JS/JogoDaVelha/index.html' src={jogoDaVelha} alt='Jogo da Velha' />
        <ProjetoFormatacao link='https://luannn000.github.io/TS/JogoDaCobrinha/out/index.html' src={jogaDaCobrinha} alt="Jogo da Cobrinha" />
        <ProjetoFormatacao link='https://luannn000.github.io/JS/GeniusGame/index.html' src={genius} alt="Genius" />
      </div>
    </div>
  );
}

export default Projetos;