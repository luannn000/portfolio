import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projetos");
  }

  return (
    <div>
      <div className="w-4/5 mt-5 mx-auto relative before:absolute before:content-[''] before:left-0 before:h-full border-l-4 border-l-primary">
        <h1 className="text-9xl ml-3">Bem-vindo</h1>
        <p className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo laudantium quo voluptates provident et in, est iure, esse odio laborum omnis nam soluta ut inventore praesentium, nemo officiis natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a dolorem saepe dolorum. Necessitatibus inventore quia eius eum, tenetur iure illo impedit quidem veritatis architecto eveniet cumque culpa possimus vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores mollitia dolore accusantium quo facilis ex laboriosam totam illum, animi eum quasi nisi tenetur. Officiis maiores consequuntur laborum, maxime mollitia quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsa consectetur natus architecto blanditiis. Inventore quibusdam et fugiat omnis magni, eaque, quod dignissimos dolor, laudantium animi eligendi veritatis enim aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit nam quam ex obcaecati, et sequi, quae dolorum illo mollitia magnam praesentium velit quidem consequuntur amet molestias, numquam expedita dolor?</p>
      </div>

      <form className="flex justify-center mt-6" onSubmit={handleClick}>
        <button className="btn btn-primary">Veja meus projetos</button>
      </form>
    </div>
  );
}

export default Home;