import React from "react";
import TechnologyLayout from "./TechnologyLayout";

const NodeTechno = () => {
  const businessIdea = [
    {
      id: 1,
      heading: "Development company",
      content:
        " The development company of Node.js should be able to provide you with a cross-platform framework or website that can be quickly extended as the company expands. You will need to find a highly skilled Node.js development company if you need to get not just a standard website, but a powerful tool for your business that will stand out in the market.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd66d8109cc6762d793cf_timelapse.svg",
    },
    {
      id: 2,
      heading: "Node.js for businesses",
      content:
        <> Node.js is used by major prestigious companies such as Netflix, Paypal, eBay, Trello to minimize page loading time, achieve lightweight solutions, and handle fast streaming of media.They use the web production of Node.js actively, and why? Practice reveals that Node&#x27;s websites have strong traffic and are lightweight.In order to achieve various business needs Node.js is a powerful and detailed system.</>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd671dcf5ec4cf6b2d29b_arrows-expand-up-right-green.svg",
    },
    {
      id: 3,
      heading: "Business benefits",
      content:
        " It is used for back-end and front-end growth and easily carries massive data requests and constant user requests. COAX Software helps you to turn your attention to the development of Node.js and takes into account its benefits for your project.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd674c47804d0f195c153_bolt-green.svg",
    },
  ];
  const expertImage = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ccdfc990eb33fd16e025a_node-js-photo-01.jpg",
    },
    {
      id: 2,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ccdfd93f8508f4675cabf_node-js-photo-02.jpg",
    },
  ];
  const technologyFeature = [
    {
      id: 1,
      heading: "Real-Time App Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg",
      content:
        "With real-time app development using Node JS, you can get a quick transfer of information.",
    },
    {
      id: 2,
      heading: "Microservices Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg",
      content:
        " Implement a dependable and fau lt-free microservices architecture created by experts.",
    },
    {
      id: 3,
      heading: "Rich Portal Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg",
      content:
        "With Node JS Application Development, you can create a rich portal.",
    },
    {
      id: 4,
      heading: "Ecommerce Solutions",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2c478040cdc95ca74_shopping-bag-green.svg",
      content:
        "We assist in the creation of Node.JS e-commerce applications that are highly dependable, stable, and sensitive.",
    },
    {
      id: 5,
      heading: "Social Networking Application",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a160bdd777e42d2da4_comment-green.svg",
      content:
        "Node JS allows you to create seamless social networking apps for your company.",
    },
    {
      id: 6,
      heading: "IoT-Based Application",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a1c478049f3995ca73_extension-green.svg",
      content: "For a smarter IoT app, use Node JS&#x27; advanced technology.",
    },
  ];
  const platforms = [
    {
      id: 1,
      heading: "Technologies our Node.js Developers Master",
      content: `With MongoDB, Express.js, Angular and Node.js, our team of top Node.js developers has a high degree of expertise (MEAN stack).The developers and software architects of COAX Software Node js are well versed in the development of complex Node.js-based applications that completely fulfill business requirements.`,
      images: [
        {
          id: 1,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038cb631fdd9d3d378a7201_MongoBD.svg",
          title: "Mongo DB",
        },
        {
          id: 2,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60350a9f93715c25991bbf3c_angular.png",
          title: "Angular Js",
        },
        {
          id: 3,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ca0aca83b1ad5c8a17786_ExpresJS.svg",
          title: "Express JS",
        },
        {
          id: 1,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ca10e83ba308288d25ece_mean-js.png",
          title: "MEAN Stack",
        },
      ],
    },

    {
      id: 2,
      heading: "Cloud Platforms We Use",
      content: `In this digital day-and-age, having a website is a necessity.
            And as the pace of technological innovation quickens, having an
            app either custom for your employees or for your users its vital
            to the survival, let alone the success, of your business.
            `,
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
      heading: "Optimal",
      content:
        " With WebSockets providing open two-way communication networks,Node.js is the perfect technology for developing real-time web apps.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a17ad04e9415aa13d8_bolt-blue.svg",
    },
    {
      id: 2,
      heading: "Perform better",
      content:
        " Its input/output actions are event-driven and non-blocking,which makes the app lighter and makes it better to run.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a10681e816624d7667_performance-blue.svg",
    },
    {
      id: 3,
      heading: "Fastest technology",
      content:
        "Node.js uses the V8 JavaScript engine, which makes it the fastest website and application technology.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602d01f871c9d0292d34152b_arrow-long-right.svg",
    },
    {
      id: 4,
      heading: "Compatible with multiple platforms",
      content:
        "It is multi-platform compatible and can be easily integrated  with the latest technologies, such as Angular or React.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2211d087eed20f21b_template-blue.svg",
    },
    {
      id: 5,
      heading: "Perfectly scalable",
      content:
        "It builds on the principle of the event loop, which makes it perfectly scalable.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a18f26e171ac8de922_arrow-top-right-r-blue.svg",
    },
    {
      id: 6,
      heading: "Handle the heavy traffic",
      content: " It can handle the heavy traffic of data and users.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60463f623986930769369ed6_traffic.svg",
    },
  ];
  const technologyUsedby = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5b756ff5453303017d_ebay.svg",
      title: "ebay",
    },
    {
      id: 2,
      title: "uber",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5e0b58bd9ec68c546a_uber.svg",
    },
    {
      id: 3,
      title: "linkedin",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5d7bde752e722fadaa_linkedin.svg",
    },
    {
      id: 4,
      title: "netflix",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5d097ef53a1b87756c_netflix.svg",
    },
    {
      id: 5,
      title: "paypal",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5d0c5e0d1ecdece9c4_paypal.svg",
    },
  ];

  return (
    <>
      <TechnologyLayout
        title="Node.js"
        desciption={
          <>
            {" "}
            Build scalable and performant apps your customers will enjoy. <br />
            With Node.js software development is fast, resulting in lightweight,
            yet highly efficient products.
            <br />
          </>
        }
        heroImage={
          "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60391d54a45a7150e591742e_node-js-hire-illustration.png"
        }
        businessIdea={businessIdea}
        techDescription=" Why is Node.js for those projects selected as a prior
        technology? The excellent ecosystem of Node.js for full-stack
        development, namely the creation of flexible custom applications
        running on the client and server side.
      "
        expertDescription={
          <>
            JavaScript fans of COAX Software began playing around with Node.js
            as soon as they found it in 2010. The tool gave us the long-awaited
            superpower to use every capability for startups and established
            companies alike to generate value at scale.
            <br />
            <br />
            At COAX Software, all the Node powers combine to enable effective
            web and mobile solutions for your unique company to ensure the best
            possible results. To help the business gain wider access across
            various channels, we have learned the art of high-end mobile porting
            and migration services. <br />
            <br />
            To provide you with high-performance applications, our team of
            Node.js experts creates stable and adaptable server-side APIs. In
            designing stable and scalable architectures, our Node developers
            have extensive expertise, keeping them detailed, well-structured and
            up-to-date along the way.
            <br />
          </>
        }
        expertImage={expertImage}
        technologyFeature={technologyFeature}
        platforms={platforms}
        businessImg="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603f3eb2eb5caa7b678a6cab_node-js-hire-illustration-02.svg"
        benifits={benifits}
        technologyUsedby={technologyUsedby}
      />
    </>
  );
};

export default NodeTechno