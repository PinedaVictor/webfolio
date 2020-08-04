import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "../../../components/ui/wrapper";
import FeatureBox from "../../../components/box-image/layout-five";
import Heading from "../../../components/ui/heading";
import Anchor from "../../../components/ui/anchor";
import { SectionWrap } from "./features-area.style";

const FeaturesArea = ({ headingStyle, linkStyle, featureBoxStyle }) => {
  const featureData = useStaticQuery(graphql`
    query ResolutionsFeaturesQuery {
      allProjectsJson(filter: { is_featured: { eq: true } }, limit: 6) {
        edges {
          node {
            path
            newTab
            accordion
            fields {
              slug
            }
            title
            excerpt
            icon {
              img_two {
                childImageSharp {
                  fixed(width: 253, height: 55, quality: 100) {
                    ...GatsbyImageSharpFixed_tracedSVG
                  }
                }
              }
              img_hover {
                childImageSharp {
                  fixed(width: 253, height: 55, quality: 100) {
                    ...GatsbyImageSharpFixed_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const features = featureData.allProjectsJson.edges;
  return (
    <SectionWrap>
      <Container>
        <Row>
          {features.map(
            (feature) => (
              console.log("newTab feild: ", feature.node.newTab),
              (
                <Col lg={4} md={6} key={feature.node.fields.slug}>
                  <FeatureBox
                    {...featureBoxStyle}
                    imageSrc={feature.node.icon.img_two.childImageSharp}
                    hoverImg={feature.node.icon.img_hover.childImageSharp}
                    title={feature.node.title}
                    desc={feature.node.excerpt}
                    path={
                      feature.node.newTab
                        ? feature.node.path
                        : `/projects/${feature.node.fields.slug}`
                    }
                    accordion={feature.node.accordion}
                    visitExternal={feature.node.newTab}
                  />
                </Col>
              )
            )
          )}
        </Row>
        {/* TODO: Good place for get resume functionality */}
        <Row>
          <Col lg={12}>
            <Heading {...headingStyle}>
              {/* Challenges are just opportunities in disguise.{" "} */}
              <Anchor {...linkStyle} path="/">
                Send me the resume!
              </Anchor>
            </Heading>
          </Col>
        </Row>
      </Container>
    </SectionWrap>
  );
};

FeaturesArea.defaultProps = {
  featureBoxStyle: {
    boxStyle: {
      mt: "30px",
    },
  },
  headingStyle: {
    as: "h3",
    fontSize: "18px",
    fontweight: 500,
    lineHeight: 1.4,
    color: "#333333",
    mt: "60px",
    textalign: "center",
    responsive: {
      small: {
        mt: "45px",
      },
    },
  },
  linkStyle: {
    layout: "underline",
    hover: {
      layout: 2,
    },
  },
};

export default FeaturesArea;
