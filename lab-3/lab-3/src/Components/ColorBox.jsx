import {useState} from "react";

const getRandomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
}

export default function ColorBox({colors}){
    const [color,setColor] = useState(getRandomColor(colors));
     return (
            <div 
            className="ColorBox"
            style={{ backgroundColor: color}}
            onClick={() => setColor(getRandomColor(colors))}
            >
            </div>
        );
}
