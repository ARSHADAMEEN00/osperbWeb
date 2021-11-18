import React from 'react'
import TechnologyLayout from "./TechnologyLayout";

const DjangoTechno = () => {
  const businessIdea = [
    {
      id: 1,
      heading: "Django solutions",
      content:
        "         The solutions built by Django are capable of high performance management that is compatible and simple for various types of content to be updated.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd66d8109cc6762d793cf_timelapse.svg"
      ,
    },
    {
      id: 2,
      heading: "Django essentials",
      content:
        <>Big supporters of Django development services are those seeking a single dashboard to handle multiple websites. It&#x27;s acknowledged that our professionals offer the best.</>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd671dcf5ec4cf6b2d29b_arrows-expand-up-right-green.svg"
    },
    {
      id: 3,
      heading: "Django for your business idea",
      content:
        " Our innovation and creativity know no bounds. We leverage the ability of Django, which has become the most sought-after platform for programming.It is now common to build websites and apps on Django due to its exceptional functions and reliability.",
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
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ccdfd4e5931bcbabc193e_django-photo-02.jpg"
    },
  ];
  const technologyFeature = [
    {
      id: 1,
      heading: "Prototypes and MVPs",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2628b767f08893e31_template-green.svg",
      content:
        "    Python and Django are suitable for prototyping and designing minimum viable products because they are fast and easy to use (MVP). Our clients save time to market and resources on web creation by using Django. With the support of our web development team, you can get an early version of your web application in a month or two.",
    },
    {
      id: 2,
      heading: " Custom web applications",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e5947248176_browser-green.svg"
      ,
      content:
        " Django allows for rapid web creation. Django is used by Dropbox, YouTube, Instagram, PayPal, eBay, Yelp, and Reddit. P2P        marketplaces, social media websites, news aggregators,        recruiting channels, and a number of other custom apps were     created using Django, the most common Python web framework.     ",
    },
    {
      id: 3,
      heading: " Custom web applicationst",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg",
      content:
        <>Django-based web applications will help you save time when it comes to managing workflows through your company. A mobile app      that streamlines doctor-patient contact, a framework that helps        small companies handle client relationships, and appointment scheduling tools for health centers are only a few of the     process automation projects we&#x27;ve worked on</>
    },
    {
      id: 4,
      heading: " Chatbots and virtual agents",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a160bdd777e42d2da4_comment-green.svg"
      ,
      content:
        " Another type of project where Django shines is artificial   intelligence chatbots that communicate with people via voice        commands or text messaging. To implement chatbots that        understand the context and respond to user inquiries, we use Natural Language Processing (NLU) technology. For web interfaces        and social media platforms, we create virtual agents.",
    },
    {
      id: 5,
      heading: "Data mining and analysis",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd671dcf5ec4cf6b2d29b_arrows-expand-up-right-green.svg"
      , content:
        "   If you have a huge amount of unstructured data to go through, wewill assist you. Data collection, data segmentation, and the        development of predictive models are all part of our data        analysis services. To find useful patterns and relationships in        data, we use statistical and computational methods. You can use       data mining to reveal knowledge and achieve a competitive    advantage."
    },
    {
      id: 6,
      heading: " Test automation",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a1c478049f3995ca73_extension-green.svg",
      content:
        <> API testing, Behavior Guided Development (BDD), and browser        testing can all be achieved with Python-based software. For        example, to automate web UIs, we use Selenium, an open-source       tool. We also write unit tests, integration tests, and    end-to-end tests to ensure that the application&#x27;s entire   flow is checked.</>,
    },

  ];
  const platforms = [
    {
      id: 1,
      heading: "Technologies our Django Developers Master",
      content:
        " Our Django creation and design experience cuts through several companies.We know what works for a business upfront and        follow suit accordingly. We are able to deliver the best        solution that keeps you ahead of the competition at all times,   through comprehensive market analysis and competitive research. In Django, we specialize in fashion and retail marketing  services, coaching and consulting, social networks, real estate,healthcare, banking, publishing, education and lifestyle. We are known for creating flexible Python Django Programming     Solutions that cover the perspectives of detailed clients. Some  of our esteemed services for Django Web Creation include:",
      images: [
        {
          id: 1,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603c9dcf290749020f1e41fc_logo.png",
          title: "",
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
      heading: "Perfectly Scalable",
      content:
        " Businesses are increasing over time and thus demand that their website and application structure be scalable to an extreme        level. Highly scalable solutions can be accomplished using Django.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a1628b766a53893e2e_arrows-expand-up-right-blue.svg"
    },
    {
      id: 2,
      heading: "The Highly Secure",
      content:
        "To ensure high security, Django is customized. All websites and apps developed using Django appear to be impeccably protected with its robust security features.", url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2545b176e8e7b728f_shield-line-blue.svg"
    },
    {
      id: 3,
      heading: "The Great Speed",
      content:
        <> This is the software that organizations use for marketing,        distribution, and customer service automation, organization and        synchronization. It&#x27;s a customer-centered technology that        guarantees the customers&#x27; continued loyalty and patronage.</>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602d01f871c9d0292d34152b_arrow-long-right.svg"
    },
    {
      id: 4,
      heading: " Rich in Features",
      content:
        "   This is the mechanism that guarantees the correct flow and management of business procedures. This enables the quick distribution of data from one department to another.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2b5af2925d8b08fb3_sync-blue.svg"
    },
    {
      id: 5,
      heading: "Modern technologies",
      content:
        " Our development services for the Django app allow you to stay on      top of modern developments so that you can safeguard your        company against potential technological changes.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a10681e816624d7667_performance-blue.svg"
    },
    {
      id: 6,
      heading: "Easy-to-update functionality",
      content:
        "  The intuitive modular architecture of Django offers the ability        to easily upgrade and update applications. Modules that function       both with web and mobile APIs may also be reused.",

      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d381d9c4d7f72200f83e_update.svg"
    },
  ];
  const technologyUsedby = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5c0066ae5809c9aa5e_instagram.svg",
      title: "instagram",
    },
    {
      id: 2,
      title: "nasa",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5d17f07dd9120c3ecf_nasa.svg",
    },
    {
      id: 3,
      title: "youtube",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5fbaed799c4eb764e4_youtube.svg"
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
      title: "pinterest",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d4d900244d314b97d509_pinterest.svg"
      ,
    },
    {
      id: 6,
      title: "spotify",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603cee5eaf2cc57859ee9726_spotify.svg"

      ,
    },
  ];

  return (
    <>
      <TechnologyLayout
        title="Django"
        desciption={
          <>
            Django is a high-level Web platform for Python that promotes
            rapid growth and clean, pragmatic architecture. <br />
            <br />
            Built by seasoned developers, it takes care of much of the Web
            development hassle, so you can concentrate on writing your app
            without reinventing the wheel. It&#x27;s open source and free.
            Django was designed to support developers as quickly as possible
            to move apps from idea to completion.
            <br />‍<br />
            Security is taken seriously by Django and helps developers
            prevent several common security errors. Some of the Web&#x27;s
            busiest sites exploit Django&#x27;s ability to grow rapidly and
            flexibly.
            <br />
          </>
        }
        heroImage={
          "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60391d1d72a9e4fc24c60da9_django-hire-illustration.png"
        }
        businessIdea={businessIdea}
        techDescription={
          <>
            Django is suitable for developing reliable and simple solutions
            to complex needs. For small-to-large business requirements,
            stable, scalable, high-performance web solutions can be
            achieved. <br />‍<br />
            To keep you ahead of the competition, our market analyst team
            performs comprehensive analysis and covers all the competitors
            and target audience information. Using Django, a high-level
            Python web platform, we specialize in creating high-performing
            and elegant web applications. <br />‍<br />
            We are your dream partner for Django web development services,
            considered to be continuously wowing customers from different
            industries and geographies.
            <br />‍<br />
            Our team of certified Django developers creates robust web apps
            to make your website more engaging and profitable, allowing
            greater functionality.
          </>
        }
        expertDescription={
          <>
            Our team of certified Django developers creates robust web apps
            to make your website more engaging and profitable, allowing
            greater functionality.
            <br />‍<br />
            Django is suitable for developing reliable and simple solutions
            to complex needs. For small-to-large business requirements,
            stable, scalable, high-performance web solutions can be
            achieved. To keep you ahead of the competition, our market
            analyst team performs comprehensive analysis and covers all the
            competitors and target audience information.
            <br />‍<br />
            Using Django, a high-level Python web platform, we specialize in
            creating high-performing and elegant web applications. We are
            your dream partner for Django web development services,
            considered to be continuously wowing customers from different
            industries and geographies.
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

export default DjangoTechno