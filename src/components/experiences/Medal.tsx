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
        <img src={podiumImage[podium]} alt={`${podium} medal`}
             className="w-10 absolute -right-5 -top-2"/>
    )
}