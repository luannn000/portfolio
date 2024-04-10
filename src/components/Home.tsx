import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projetos/");
  }

  return (
    <div>
      <div className="w-4/5 mt-5 mx-auto relative before:absolute before:content-[''] before:left-0 before:h-full border-l-4 border-l-primary">
        <h1 className="text-9xl ml-3">Bem-vindo</h1>
        <p className="ml-3">Me chamo Luan Coelho, sou estudante do Instituto Federal de Educação, Ciência e Tecnologia da Bahia, atualmente estou fazendo bacharelado de Sistemas de Informação. Entrei no mundo da programação com a linguagem Python, a qual aprendi no canal Curso em Vídeo e, a partir daí, passei por diversas outras linguagens, como Java, C e PHP, até me fixar no Javascript. Neste momento, estou estudando React com o intuito de virar um desenvolvedor Fullstack</p>
      </div>

      <form className="flex justify-center mt-6 mb-10 md:mb-0" onSubmit={handleClick}>
        <button className="btn btn-primary">Veja meus projetos</button>
      </form>
    </div>
  );
}

export default Home;