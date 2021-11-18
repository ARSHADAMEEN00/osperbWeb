import React from 'react'
import TechnologyLayout from "./TechnologyLayout";

const ReactJsTechno = () => {
  const businessIdea = [
    {
      id: 1,
      heading: "Web Applications Development",
      content:
        "            React is the best way to develop big and fast web apps. It allows creating interactive UIs, smoothly updating components,and efficiently dealing with SEO thanks to server-side rendering.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd66d8109cc6762d793cf_timelapse.svg"

      ,
    },
    {
      id: 2,
      heading: " SPA Development",
      content: <>       COAX develops single-page applications (SPAs) using React.{" "}
        <br />
        It guarantees 3 main benefits: flawless performance, easy
        testing &amp; support for server-side rendering.</>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd671dcf5ec4cf6b2d29b_arrows-expand-up-right-green.svg"

    },
    {
      id: 3,
      heading: "  React Migration",
      content:
        <>              We ensure a smooth migration from any JavaScript platform to
          React.
          <br />
          Our React developers have extensive experience in building
          React.js applications of any complexity.</>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd674c47804d0f195c153_bolt-green.svg"

    },
  ];
  const expertImage = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ccdfcb15be36441400865_django-photo-01.jpg"
    },
    {
      id: 2,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ccdfe77575bb8562b1e0f_react-js-photo-02.jpg"


    },
  ];
  const technologyFeature = [
    {
      id: 1,
      heading: "ERP Applications",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg"

      ,
      content:
        "COAX software development team has a proven track record in implementing, customizing, and integrating ERP using React. ",
    },
    {
      id: 2,
      heading: "E-commerce Applications",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg"

      ,
      content:
        "   We assist in the creation of React.js e-commerce applications that are highly dependable, stable, and sensitive. ",
    },
    {
      id: 3,
      heading: "Realtime Applications",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg"
      ,
      content:
        "   Using React along with Next.js and services like Firebase or GraphQL will make realtime applications slick and instant."
      ,
    },
    {
      id: 4,
      heading: "  Cross-platform Applications",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2c478040cdc95ca74_shopping-bag-green.svg"

      ,
      content:
        <>  That&#x27;s true that knowledge of React opens the world of
          hybrid applications, that can be developed for iOS and Android.
        </>,
    },
    {
      id: 5,
      heading: "Enterprise Applications",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a160bdd777e42d2da4_comment-green.svg"

      , content:
        " The component oriented architecture of React solves the legacystack problem along with fast implementation cycles. "
    },
    {
      id: 6,
      heading: "Social Applications",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a1c478049f3995ca73_extension-green.svg"
      ,
      content:
        "  Building services where people chat, send videos, audio and need  instant updates is possible with React technology.  ",
    },

  ];
  const platforms = [
    {
      id: 1,
      heading: "Technologies our developers use with React.js",
      content:
        <>   <strong>UI libraries:</strong> Ant Design, Material UI, React
          bootstrap
          <br />
          <strong>UI components development:</strong> Storybook
          <br />
          <strong>State management: </strong>React Redux, Redux Thunk,
          Redux Saga
          <br />
          <strong>Testing libaries</strong>: Jest, Enzyme, Mocha
          <br /></>,
      images: [
        {
          id: 1,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c7676cf89079b0bb76ee_react-native-libraries.svg"
          ,
          title: "Custom React.js development",
        },
        {
          id: 2,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60c879d0983105a19b142c7d_react-ux-ui-development.png"

          ,
          title: " React UX/UI development and design",
        }, {
          id: 3,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cd19a77575b199a2b3077_app-development.png"

          ,
          title: "App modernization",
        }, {
          id: 4,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cd19a875cc760e82e7f4a_mobile-development.png"

          ,
          title: "React Native mobile development",
        },
      ],
    },

    {
      id: 2,
      heading: " Cloud Platforms We Use",
      content:
        "In this digital day-and-age, having a website is a necessity.And as the pace of technological innovation quickens, having anapp either custom for your employees or for your users its vitalto the survival, let alone the success, of your business.",
      images: [
        {
          id: 1,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cf37d7101992b7f78de3e_avs-logo.svg",
          title: "Amazon Web Services",
        },
        {
          id: 2,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cf37dbe64ee9bd65b3498_google-cloud-logo.svg",
          title: " Google Cloud Platform",
        },
        {
          id: 3,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cf37dc2eaa6be11a83a17_hetzner-logo.svg",
          title: "Hetzner",
        },
        {
          id: 4,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cf37d545b1749aa7bc7f1_azure-logo.svg",
          title: " Azure",
        },
        {
          id: 5,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cf37dbe64eea0675b3494_digital-ocean-logo.svg",
          title: "Digital Ocean",
        },
      ],
    },
  ];
  const benifits = [
    {
      id: 1,
      heading: "High performance",
      content:
        "             The React library enables high performance web and mobile applications to be developed.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a17ad04e9415aa13d8_bolt-blue.svg"

    },
    {
      id: 2,
      heading: "Digital DOM",
      content:
        "  Digital DOM enables a web app to be partially modified without  impacting the entire UI.", url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a10681e816624d7667_performance-blue.svg"

    },
    {
      id: 3,
      heading: "Reusable modules",
      content:
        " Reusable modules significantly save time on the UI component development.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602d01f871c9d0292d34152b_arrow-long-right.svg"

    },
    {
      id: 4,
      heading: "Server-side rendering",
      content:
        "  Thanks to the server-side rendering, React fixes several SEO problems.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2211d087eed20f21b_template-blue.svg"

    },
    {
      id: 5,
      heading: "Well-structured code",
      content:
        " React-based projects are easy to debug and evaluate by means of   a well-structured code.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a18f26e171ac8de922_arrow-top-right-r-blue.svg"

    },
    {
      id: 6,
      heading: "Growing community",
      content:
        " It is easy to learn and has a broad and continuously growingcommunity.",

      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60463f623986930769369ed6_traffic.svg"
    },
  ];
  const technologyUsedby = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60c88285ce4de658317c6c4c_reddit.svg",
      title: "reddit",
    },
    {
      id: 2,
      title: "facebook",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d4d967e6e43a6a105d04_facebook.svg"
      ,
    },
    {
      id: 3,
      title: "twitter",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5e7be89248b4f2a508_twitter.svg"

      ,
    },
    {
      id: 4,
      title: "dropbox",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5b0b58bd37d78c5467_dropbox.svg"
      ,
    },
    {
      id: 5,
      title: "netflix",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5d097ef53a1b87756c_netflix.svg"

      ,
    },
    {
      id: 6,
      title: "paypal",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5d0c5e0d1ecdece9c4_paypal.svg"

      ,
    },
  ];

  return (
    <>
      <TechnologyLayout
        title="React.js"
        desciption={
          <>
            From the enterprise applications to streaming, <br />
            React JS development has helped companies <br />
            achieve the most challenging tech aims. <br />

          </>
        }
        heroImage={
          "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60391d23af60618f03038487_react-js-hire-illustration.png"
        }
        businessIdea={businessIdea}
        techDescription={
          <>
            At its core, React was built for fast web pages and
            applications. This technology is used in COAX for at least 4
            years.
          </>
        }
        expertDescription={
          <>
            The new, cutting-edge technology and front-end development tools
            are applied by our team. For web apps, our dedicated developers
            create clean and secure HTML, CSS, and JS code.
          </>
        }
        expertImage={expertImage}
        technologyFeature={technologyFeature}
        platforms={platforms}
        businessImg="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603f3eb6c586ca1b093b6c1f_python-hire-illustration-02.svg"
        benifits={benifits}
        technologyUsedby={technologyUsedby}
      />
    </>
  );
};

export default ReactJsTechno