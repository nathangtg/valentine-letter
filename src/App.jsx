import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css"; // Ensure this contains the styles for .dramatic-text
import Bg_1 from "./assets/Bg_1.webp";
import Bg_2 from "./assets/Bg_2.webp";
import Bg_3 from "./assets/Bg_3.webp";

function DramaticReply() {
  // Assuming your parallax container has a ref attached to it
  const parallaxRef = React.useRef();

  return (
    <div className="dramatic-reply-container">
      <Parallax pages={3} ref={parallaxRef}>
        {/* Background Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${Bg_1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></ParallaxLayer>

        {/* Page 1 - Opening */}
        <ParallaxLayer
          offset={0.5}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="dramatic-text">
            Halo Nadin without the E yes, despite the stormy weather between us
            (It was raining when I wrote this), your message was a bolt out of
            the blue. Hope this finds you in good spirits but if you're not also
            then oh well what can I do, I am not a God. And despite me saying
            no, I can't actually say no to you but oh well, I guess guilt trip
            is a thing
          </div>
        </ParallaxLayer>

        {/* Page 2 - Main Content */}
        <ParallaxLayer
          offset={1.1}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${Bg_2})`,
            backgroundSize: "cover",
            backgroundPositionY: " -16dvh",
            backgroundPositionX: "center",
            backgroundAttachment: "fixed",
          }}
        />

        <ParallaxLayer
          offset={1.7}
          speed={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="dramatic-text">
            Valentines Day is indeed a time for reflection on the bonds that
            matter, regardless of where we stand. It's heartening to hear from
            you, truly. Your wishes mean a lot, and I reciprocate with all my
            heart. Take care of yourself too (Don't Die), and let's promise to
            chase our dreams, wherever they lead us (Either it is at ITB or NUS
            or NTU or Wollongong bla bla).
          </div>
        </ParallaxLayer>

        {/* Page 3 - Closing */}

        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={1}
          style={{
            backgroundPositionX: "center",
            backgroundImage: `url(${Bg_3})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="dramatic-text">
            In the spirit of moving forward and embracing the future, let's not
            dwell on what's past. Instead, let's look forward to new stories,
            adventures, and perhaps, paths that cross again (Science and Tech
            are close :p) assuming you are doing science. Stay strong, and yes,
            Australia is still on the list. Until next time, and if the stars
            are aligned (or if you're in the vicinity), and odds are in us may I
            see you in an undetermined time in the future.
            <br /> <br />
            Not Nathan G
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default DramaticReply;
