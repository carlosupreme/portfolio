import bronzeGif from '../../assets/bronze.gif';
import silverGif from '../../assets/silver.gif';
import goldGif from '../../assets/gold.gif';

export default function Medal({podium}: { podium: "gold" | "silver" | "bronze" }) {
    const podiumImage = {
        gold: goldGif,
        silver: silverGif,
        bronze: bronzeGif
    }

    return (
        <img src={podiumImage[podium]} alt="third place"
             className="w-10 absolute -right-5 -top-2 transition-transform group-hover:scale-150"/>
    )
}