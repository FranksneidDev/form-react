

interface ItemListProps {
    image: string;
    text: string;
}


export default function ItemsList({image, text}:ItemListProps): JSX.Element {
     return (
         <div className="flex w-[86vw] pt-[3vw] gap-[3vw] sm:w-[17vw] sm:gap-[.5vw] sm:pt-[.5vw]">
             <img className="sm:w-[1vw]" src={image} alt="icon-list"/>
             <p className="text-Charcoal-Grey font-bold sm:text-[.7vw]">{text}</p>
         </div>
     );
 }