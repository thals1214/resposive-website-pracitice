import React from "react";
import styled, { css, keyframes } from "styled-components";
import beer from "../image/beer1.jpg";
import coding from "../image/coding.webp";
import responsive from "../image/responsive.jpeg";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  margin: 100px 0px;
`;

const Box = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @keyframes setPadding {
    0% {
      padding: 0;
      opacity: 0;
    }
    100% {
      padding: 50px 200px;
      opacity: 1;
    }
  }

  animation: setPadding 2s forwards;
`;

const Thumb = styled.img`
  width: 40%;
  height: 200%;
  ${media.tablet`
  display: none;
  `}/* opacity: 1;
  transition: all 0.5s;
  :hover {
    opacity: 0.5;
  } */

  /* animation: fadeIn 1s infinite; */
`;

const Text = styled.div`
  width: 50%;
  color: gray;
  word-spacing: 10px;
  font-size: 0.8rem;
  ${media.tablet`
  text-align: center;
  width: 80%;
  `}
  h2 {
    color: black;
  }
`;

const Boxes = () => {
  return (
    <Wrapper>
      <Box style={{ backgroundColor: "lightgrey" }}>
        <Thumb src={beer} />
        <Text>
          <h2>What is Pub?</h2>A pub (short for public house) is an
          establishment licensed to serve alcoholic drinks for consumption on
          the premises. The term public house first appeared in the late 17th
          century, and was used to differentiate private houses from those which
          were, quite literally, open to the public as 'alehouses', 'taverns'
          and 'inns'. By Georgian times it had become common parlance, although
          taverns, as a distinct establishment, had largely ceased to exist by
          the beginning of the 19th century.[1] Today, pubs have no strict
          definition, but CAMRA states a pub has four characteristics:
        </Text>
      </Box>
      <Box>
        <Text>
          <h2>Web Develop</h2>Web development is the work involved in developing
          a Web site for the Internet (World Wide Web) or an intranet (a private
          network).[1] Web development can range from developing a simple single
          static page of plain text to complex web applications, electronic
          businesses, and social network services. A more comprehensive list of
          tasks to which Web development commonly refers, may include Web
          engineering, Web design, Web content development, client liaison,
          client-side/server-side scripting, Web server and network security
          configuration, and e-commerce development. characteristics:
        </Text>
        <Thumb src={coding} />
      </Box>
      <Box style={{ backgroundColor: "lightgrey" }}>
        <Thumb src={responsive} />
        <Text>
          <h2>Responsive web design</h2>Responsive web design (RWD) is an
          approach to web design that makes web pages render well on a variety
          of devices and window or screen sizes from minimum to maximum display
          size. Recent work also considers the viewer proximity as part of the
          viewing context as an extension for RWD.[1] Content, design and
          performance are necessary across all devices to ensure usability and
          satisfaction.[2][3][4][5] A site designed with RWD[2][6] adapts the
          layout to the viewing environment by using fluid, proportion-based
          grids,[7][8] flexible images,[9][10][11] and CSS3 media
          queries,[4][12][13] an extension of the @media rule, in the following
          ways:[14]
        </Text>
      </Box>
    </Wrapper>
  );
};

export default Boxes;
