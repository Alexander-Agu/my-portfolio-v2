import "./link.css";

type linkProps = {
    link : string,
    name: string
};


export default function Link({link, name}: linkProps) {
  return (
    <a href={link}
      className='
        hover:text-green-400     
      '
    > 
      {name}
    </a>
  )
}