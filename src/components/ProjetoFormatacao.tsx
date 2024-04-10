import { Link } from "react-router-dom";

interface ProjetoFormatacaoProps {
  link: string,
  src: string,
  alt: string
}

const ProjetoFormatacao = ({ link, src, alt }: ProjetoFormatacaoProps) => {
  return (
    <Link to={ link } target="_blank">
      <div className='relative'>
        <img className="size-72 rounded-xl md:hover:blur-sm md:duration-150" src={ src } alt={ alt } />
        <p className='absolute left-2 bottom-2 text-primary font-outline-1 text-2xl'><strong>{ alt }</strong></p>
      </div>
    </Link>
  );
}

export default ProjetoFormatacao;