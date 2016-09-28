// Import React
import React from "react";
import TweetEmbed from "react-tweet-embed";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  jackie: require("../images/jackie.png"),
  javascript: require("../images/javascript.jpg"),
  javascript2: require("../images/javascript2.jpg"),
  jobTitles: require("../images/jobtitles.png"),
  kanban: require("../images/kanban.gif"),
  moduleCounts: require("../images/module_counts.png"),
  openClosed: require("../images/open_closed.jpg"),
  survivejs: require("../images/survivejs.png"),
  redmonk: require("../images/redmonk.png")
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "#09b5c4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              {"It's a great time to be an indie author"}
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1}>
              Quick Math
            </Heading>
            <List>
              <Appear><ListItem textColor="white">10000$ / (20$ * 0.9) = 556 units sold</ListItem></Appear>
              <Appear><ListItem textColor="white">10000$ / (20$ * 0.1) = 5000 units sold</ListItem></Appear>
              <Appear><ListItem textColor="white">~9x difference</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              {"Publishing vs. self-publishing"}
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1}>
              Technical Authoring
            </Heading>
            <List>
              <Appear><ListItem textColor="white">Technical content gets stale fast &#8594; Threat or opportunity?</ListItem></Appear>
              <Appear><ListItem textColor="white">For every success there are dozens of failures</ListItem></Appear>
              <Appear><ListItem textColor="white">Hard to stand out in competition</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.openClosed} bgDarken={0.5}>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Open
                </Heading>
                <Markdown style={{color: "white"}}>
          {`
* Easier to market
* Easier to collaborate
* Harder to monetize
          `}
                </Markdown>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Closed
                </Heading>
                <Markdown style={{color: "white"}}>
          {`
* Harder to market
* Harder to collaborate
* Easier to monetize
          `}
                </Markdown>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Link href="http://www.survivejs.com/">
              <Heading size={1} textColor="primary">
                SurviveJS
              </Heading>
            </Link>
            <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              JavaScript Usage on Sites
            </Heading>
            <Markdown>
          {`
* 2011 - 38.2%
* 2013 - 60.4%
* 2015 - 70.5%
* 2016 - 73.5%
* Source: [W3Techs](http://w3techs.com/technologies/history_overview/javascript_library/all/y)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Layout>
              <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
                <Image src={images.redmonk} />
              </Link>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} textColor="tertiary">
              Module Counts
            </Heading>
            <Layout>
              <Image src={images.moduleCounts} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} textColor="tertiary">
              Job Trends
            </Heading>
            <Layout>
              <Image src={images.jobTitles} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.indeed.com/jobtrends/q-backend-q-frontend-q-full-stack.html">Indeed</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Average salary of a React developer in SF - $153k</Quote>
              <Cite><Link href="http://www.indeed.com/salary?q1=React+Js+Front+End+Engineer&l1=San+Francisco%2C+CA">Indeed</Link></Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.kanban} margin="0px auto 40px" height="279px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.javascript} margin="0px auto 40px" height="650px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.jackie} margin="0px auto 40px" height="381px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.javascript2} margin="0px auto 40px" height="650px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1}>
              From Zero to $50k
            </Heading>
            <List>
              <Appear><ListItem textColor="white">Started selling in April 2015</ListItem></Appear>
              <Appear><ListItem textColor="white">First free sale on 11th, first paid one on 12th ($8.5)</ListItem></Appear>
              <Appear><ListItem textColor="white">July 2015 - 1.0 milestone, hit $1k (<Link href="http://survivejs.com/blog/the-story-so-far/">crisis of faith</Link>)</ListItem></Appear>
              <Appear><ListItem textColor="white">November 2015 - Hit $10k</ListItem></Appear>
              <Appear><ListItem textColor="white">February 2016 - 2.0 milestone, <Link href="http://www.amazon.com/SurviveJS-Webpack-React-apprentice-master/dp/152391050X">paper version</Link></ListItem></Appear>
              <Appear><ListItem textColor="white">April 2016 - Split into two books (lower pricepoint, bundle!).</ListItem></Appear>
              <Appear><ListItem textColor="white">Next target - Paper releases for the split books, Chinese translation</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1}>
              Achievements
            </Heading>
            <List>
              <Appear><ListItem textColor="white">Daily sales hover around $100-200</ListItem></Appear>
              <Appear><ListItem textColor="white">Continuous demand for related training and consulting</ListItem></Appear>
              <Appear><ListItem textColor="white">Thousands of paying readers (+ a lot more non-paying)</ListItem></Appear>
              <Appear><ListItem textColor="white">200k visitors per month at the site (100k Alexa)</ListItem></Appear>
              <Appear><ListItem textColor="white">Over hundred of contributors (Disqus, GitHub, direct feedback, Gitter)</ListItem></Appear>
              <Appear><ListItem textColor="white">Top 20 in <Link href="http://www.startupranking.com/survivejs">Startup Ranking</Link> Finland</ListItem></Appear>
              <Appear><ListItem textColor="white">2.5k+ followers at <Link href="https://twitter.com/survivejs">Twitter</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              {"What if succeeding in self-publishing wouldn't have to be this hard?"}
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
