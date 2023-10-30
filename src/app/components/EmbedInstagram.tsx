import { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const EmbedInstagram = ({url}: {url: string}) => {

    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
                // Focus the page
                window.focus();
                // Add listener to check when page is not focussed
                // (i.e. iframe is clicked into)
                window.addEventListener("blur", onWindowBlur);

                return function cleanup() {
                    window.removeEventListener("blur", onWindowBlur);
                }
      });

      const onWindowBlur = () => {
        if (isMouseOver) {
            console.log(url)
        }
      };
    
    return (
        <div onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)}>
            <InstagramEmbed url={url} width={328}/>
        </div>
    )
}

export default EmbedInstagram