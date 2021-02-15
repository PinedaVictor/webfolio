import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiBiceps } from "react-icons/gi";
import { AiOutlineCode } from "react-icons/ai";
import {
  Pi,
  FirebaseIcon,
  Sass,
  Nx,
  ReactIcon,
  Scala,
  Java,
  Arduino,
  Ts,
  Ai,
  Ps,
  // Figma,
} from "../../Assets/icons";
import { Wave } from "../../Assets/vectors";
import gig from "../../Assets/images/me2Back.png";

type SVGIcon = React.FC<React.SVGProps<SVGSVGElement>>;

export const Dexterity: React.FC = () => {
  const [accentDiv, setAccentDiv] = useState<Array<number>>([]);
  const GenAccentDivs = () => {
    const tempArr = [];
    for (let i = 0; i < 35; i++) {
      tempArr.push(Math.random() * (50 - 5) + 5);
    }
    setAccentDiv(tempArr);
  };

  useEffect(() => {
    GenAccentDivs();
  }, []);

  const DexSoftwareIcons = () => {
    const icons = [
      Pi,
      Sass,
      Scala,
      Java,
      Arduino,
      Ts,
      ReactIcon,
      FirebaseIcon,
      Nx,
    ];
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse",
        }}
      >
        {icons.map((Icon: SVGIcon, index) => (
          <Col
            xs={4}
            sm={2}
            lg={2}
            key={index}
            style={{
              padding: "10px",
            }}
          >
            <Icon width="4rem" height="5rem" />
          </Col>
        ))}
      </div>
    );
  };

  return (
    <Container fluid id="dexWrapper">
      <Row id="dexSectionRow">
        <p id="dexterityTitle">Dexterity</p>
        <div id="dexBicepIconWrapper">
          <GiBiceps id="dexBicepIcon" size="5rem" color="white" />
        </div>
      </Row>
      <Row id="softwareAndDesignRow">
        <Col className="dexCol" xs={12} sm={12} md={12} lg={6} xl={6}>
          <div id="softwareIconsWrapper">
            <DexSoftwareIcons />
          </div>
          <div id="dexSoftwareTitleWrapper">
            <p id="dexSoftwareTitle">Software</p>
          </div>
          <AiOutlineCode id="dexCodeOutline" size="20rem" color="white" />
          <Wave width="90rem" id="waveOne" />
          <Wave width="90rem" id="waveTwo" />
        </Col>
        <Col className="dexCol" xs={12} sm={12} md={12} lg={6} xl={6}>
          <div style={{ top: "5rem" }}>
            {accentDiv.map((item, index) => (
              <div
                key={index}
                id="accentDesignDiv"
                className="accentDesign"
                style={{
                  width: `${item}%`,
                }}
              />
            ))}
          </div>
          <img
            id="selfPortraitImg"
            src={gig}
            width="700px"
            height="700rem"
            style={{
              right: "-8rem",
            }}
          />
          <div id="dexDesignTitleWrapper">
            <p id="dexDesignTitle">Design</p>
          </div>
          <div id="dexDesignIconsWrapper">
            <Ai width="4rem" style={{ marginRight: "10px" }} />
            <Ps width="4rem" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
