import React from 'react'
import TechnologyLayout from "./TechnologyLayout";

const PythonTechno = () => {
  const businessIdea = [
    {
      id: 1,
      heading: "Profit from working with Python",
      content:
        " There is widespread demand for Python programming services and        there are sound explanations why. The experience of working with this language has helped us to make sure that if we create a project in Python, we get the benefits we deserve.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd66d8109cc6762d793cf_timelapse.svg",
    },
    {
      id: 2,
      heading: "Python for your business",
      content:
        " Companies and organizations around the world are motivated by the need for modernization to buy python application creation to build their personalized solutions and solve problems that require modernization.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd671dcf5ec4cf6b2d29b_arrows-expand-up-right-green.svg",
    },
    {
      id: 3,
      heading: "Solutions for business needs",
      content:
        " We develop solutions that meet various business needs and features that help to leverage scalability and increase the percentage of web presence, interest among end-users.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd674c47804d0f195c153_bolt-green.svg",
    },
  ];
  const expertImage = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ccdfd966471be41e002af_python-photo-01.jpg",
    },
    {
      id: 2,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ccdfd4e5931b388bc193f_python-photo-02.jpg",
    },
  ];
  const technologyFeature = [
    {
      id: 1,
      heading: "Python SaaS Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg",
      content:
        " We use Python to build SaaS products, including mobile and web applications, powerful data storage, APIs, and cloud hosting.",
    },
    {
      id: 2,
      heading: "Web Application Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg",
      content:
        " Implement a dependable and fau lt-free microservices architecture created by experts.",
    },
    {
      id: 3,
      heading: "Rich Portal Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg",
      content:
        "   We know everything there is to know about the web, from front-end technology to the tiniest specifics of web server software behavior. Our programmers will create a high-end web app for you using Python and Django that will help you succeed in business.",
    },
    {
      id: 4,
      heading: " Server-Side Software Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2c478040cdc95ca74_shopping-bag-green.svg",
      content:
        <>Stability and survivability under high load are important for operating system agents and context processes. We&#x27;ll concentrate on system agents and processes to ensure that your server can manage peak loads indefinitely. To provide security and fortify your servers, our programmers have Python programming skills</>,
    },
    {
      id: 5,
      heading: "Data Science",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a160bdd777e42d2da4_comment-green.svg",
      content:
        " We provide data-driven business solutions by assisting you with Python editing, integration, version control, packaging, and debugging tools. Our Python experts create custom data processing and capture apps and tools, as well as data science custom solutions that will help your business.",
    },
    {
      id: 6,
      heading: " Machine Learning",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a1c478049f3995ca73_extension-green.svg",
      content:
        "   We use Python frameworks and libraries, such as Django, Tornado,Flask, and Pyramid, to incorporate machine learning algorithms in digital marketing, data processing, legal, and healthcare  solutions as a Python development business. Data processing and  scientific computing libraries are used by our Python programmers.",
    },
    {
      id: 7,
      heading: "Python Backend Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg",
      content:
        "For ERP, CMS, e-commerce, CRM, API, mobile, and web solutions,we use Python backend creation. With Python, our backend developers can build desktop and mobile apps.",
    },
  ];
  const platforms = [
    {
      id: 1,
      heading: " Technologies our Python Developers Master",
      content:
        " Python developers with extensive knowledge can be hired at COAX in JavaScript, CSS, HTML required for project implementation.Our delivery managers have worked extensively to upgrade the Python development services expertise at COAX. Thus, in Python,we successfully delivered 20+ designs.",
      images: [
        {
          id: 1,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60338a433673a7702965a6cb_1200px-Ruby_logo.svg.png",
          title: "Ruby",
        },
        {
          id: 2,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603c9c7bdce047c69c3ddc00_python.svg",
          title: "Java",
        },
        {
          id: 3,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603c9c7b16c1592f98170526_C%23.svg",
          title: " C#",
        },
      ],
    },

    {
      id: 2,
      heading: "Cloud Platforms We Use",
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
      heading: "Simplier",
      content:
        "       Less punctuation and symbols are used in Python, so the code is shorter and simpler. For scriptwriting, its simpler syntax than in other languages takes less time. In comparison, Python is loved for lighter learning curves.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d351cdc186360146c859_code%201.svg",
    },
    {
      id: 2,
      heading: "Perfect for reusable code",
      content:
        "For reusable code, the object-oriented model functions perfectly. All in Python is an object that functions with some peculiarities as an entity of data..",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a1545b1710d67b728d_coins-line-blue.svg",
    },
    {
      id: 3,
      heading: "Large contributors group",
      content:
        <> A large contributors&#x27; group. In Python, about 7 million developers code.</>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2f6c4e8216502cbfd_users-solid-blue.svg",
    },
    {
      id: 4,
      heading: " Machine learning",
      content:
        "    Language recognition, text or image analytics are possible.Python makes it possible to construct machine learning algorithms.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602d01f871c9d0292d34152b_arrow-long-right.svg",
    },
    {
      id: 5,
      heading: "Efficient frameworks",
      content:
        "Efficient frameworks for various types of web applications for Django and Flask. With a number of other systems and languages,Python facilitates integration.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2211d087eed20f21b_template-blue.svg",
    },
    {
      id: 6,
      heading: "Big data projects",
      content:
        " Big data projects involving data mining, analytics, aggregation of uncategorized datasets, etc., are the perfect language to develop.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2545b176e8e7b728f_shield-line-blue.svg",
    },
  ];
  const technologyUsedby = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5b0b58bd37d78c5467_dropbox.svg",
      title: "dropbox",
    },
    {
      id: 2,
      title: "nasa",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5d17f07dd9120c3ecf_nasa.svg",
    },
    {
      id: 3,
      title: "netflix",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5d097ef53a1b87756c_netflix.svg",
    },
    {
      id: 4,
      title: "youtube",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5fbaed799c4eb764e4_youtube.svg",
    },
    {
      id: 5,
      title: "google",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5b1948c638f3629eb5_google.svg",
    },
  ];

  return (
    <>
      <TechnologyLayout
        title="Python"
        desciption={
          <>
            Python is an exceptional modern programming language that hundreds
            of well-known brands are using to solve their digitalization and
            business automation tasks.
            <br />
            <br />A large group of developers around the world has this
            technology, which extends the possibilities of using professional
            developments to accelerate the growth of the backend. Python is
            especially popular for developing machine learning and artificial
            intelligence projects. <br />
            <br />
            For developing machine learning and artificial intelligence
            projects, Python is particularly common.
            <br />
          </>
        }
        heroImage={
          "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60391d122cb46eccc3ff6955_python-hire-illustration.png"
        }
        businessIdea={businessIdea}
        techDescription={
          <>
            As a python development agency, COAX sees a great benefit in the
            development of Python. At first, the choice of programming language
            can seem difficult, but for many instances, python website creation
            is a very good option. The reasons for this are:
            <br />‍<br />
            1. For big data solutions, Python is fine and copes with complex
            tasks faster.
            <br />‍<br />
            2. The Python ecosystem is growing, developers remain calm and their
            positions are strengthened by the python community. This programming
            language is therefore ranked as #1 in 2019.
            <br />‍<br />
            3. In the case of python web app creation, debugging takes less time
            and begins to update quickly.
          </>
        }
        expertDescription={
          <>
            In working with the following technologies, Python developers at
            COAX have incredible experience. For a long time, no one would have
            to wait to enjoy the fantastic outcome. <br />‍<br />
            Python is a functional, expressive programming language with
            features that make it interactive, include graphical modules, add
            animations and allow the programs to be developed, experimented and
            watched.
            <br />‍<br />
            Our engineers are ready to build a custom website that fits a
            specific company thanks to the fantastic knowledge of programming
            languages. Seasoned team of Python web developers
            <br />‍<br />
            Fair time/money ratio in COAX, Python web development has reasonable
            prices for any pocket.
            <br />‍<br />
            Efficient practices in agile project management
            <br />
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

export default PythonTechno