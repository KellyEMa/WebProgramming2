import ColorBox from "./ColorBox";


export default function ColorBoxContainer({colors}) {
return(

    <div className="ColorboxContainer">
        {colors.map((color,index) =>(
            <ColorBox
            colors={colors}
            key={index}
            singleColor={color}
        />
        ))}
    </div>
 
    );  
}