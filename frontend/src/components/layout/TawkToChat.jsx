import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    // Prevent adding the script multiple times
    if (document.getElementById("tawkToScript")) return;

    const s1 = document.createElement("script");
    s1.id = "1j3l3469i";
    s1.async = true;
    s1.src = "https://embed.tawk.to/68aea460e052891921d82c31/1j3l3469i";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    document.body.appendChild(s1);

    return () => {
      if (document.getElementById("tawkToScript")) {
        document.getElementById("tawkToScript").remove();
      }
    };
  }, []);

  return null;
};

export default TawkToChat;
