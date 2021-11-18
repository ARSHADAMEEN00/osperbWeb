import React from 'react'
import TechnologyLayout from "./TechnologyLayout";

const ReactNativeTechno = () => {
  const businessIdea = [
    {
      id: 1,
      heading: " On-time delivery",
      content: <>
        React Native will save up to 35 percent on the development
        process due to its lean code base (compared with other
        frameworks). That&#x27;s much quicker than the vast majority of
        current technologies. Saving time is saving money and the
        opportunity to more quickly start your solution
      </>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd66d8109cc6762d793cf_timelapse.svg"


      ,
    },
    {
      id: 2,
      heading: "Scalable in every move",
      content: <>       COAX develops single-page applications (SPAs) using React.{" "}
        <br /> React Native is a super flexible platform that can operate and
        save time on the implementation phase with the increased load.
        It will operate flawlessly, whether you have a small website or
        a massive e-commerce store. It&#x27;s a reliable technology
        that&#x27;s not going to let your money and time go in vain
      </>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd671dcf5ec4cf6b2d29b_arrows-expand-up-right-green.svg"


    },
    {
      id: 3,
      heading: "Being professional",
      content:
        <>       We make the most of the technology and use <br />
          React Native to create market solutions that can work very
          efficiently. Furthermore, we sharpened our skills step by step,
          project by project, before we became true experts in our
          profession</>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd674c47804d0f195c153_bolt-green.svg"

    },
  ];
  const expertImage = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ccdfe2534dfc14be9d913_react-js-photo-01.jpg"

    },
    {
      id: 2,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/603ccdfe77575bb8562b1e0f_react-js-photo-02.jpg"



    },
  ];
  const technologyFeature = [
    {
      id: 1,
      heading: "IOS Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c0032754ebf0ac998975_Apple.svg"


      ,
      content: <>IOS mobile development is extremely beneficial to companies. iOS
        has more than 80% of the market for mobile services, which is
        primarily driven by iPhone and iPad app growth.
        <br />
        <br />
        COAX is an iOS app development company that creates custom
        solutions and ensures complete security, quick performance, and
        efficient project management.</>,
    },
    {
      id: 2,
      heading: "Android Development",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c002b6e5214868b32226_Android.svg"

      ,
      content: <>   Our Android app development company assists clients from all
        over the world who want to start developing mobile apps for
        their businesses. COAX provides Android software development
        services for both iOS and Android devices. <br />
        <br />
        We&#x27;ve shown how mobile apps can improve sales, multiply
        revenue, and earn a strong reputation for businesses based on
        our experience. It enables us to highlight a number of
        advantages of Android production for ventures.
      </>,
    },

  ];
  const platforms = [
    {
      id: 1,
      heading: " Technologies our React Native Developers Master",
      content:
        <>               Mobile apps developed with React Native are look very much alike
          from Java or Objective-C-built apps. The same basic blocks are
          used by React Native as standard apps for Android and iOS. Using
          the following instruments, our Response Native development
          company simply brings these blocks together</>,
      images: [
        {
          id: 1,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c7676cf89079b0bb76ee_react-native-libraries.svg"

          ,
          title: "React Native Libraries",
        },
        {
          id: 2,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c767f0141a0902d41789_redux-libraries.svg"
          ,
          title: "Redux Libraries",
        }, {
          id: 3,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c765952b3463fdbbbec6_GraphQL.svg"


          ,
          title: " GraphQL",
        }, {
          id: 4,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c766d65698a0668bcd9c_Babel%20Transpiler.svg"


          ,
          title: "   Babel Transpiler",
        },
        {
          id: 5,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c7676cf8903603bb76ec_Next%20JS.svg"



          ,
          title: "Next JS",
        }, {
          id: 6,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c7651fdd9d60f48a4ce6_Axios.svg"
          ,
          title: " Axios",
        },
        {
          id: 7,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c765d9c4d717e300c8cb_Apollo.svg"
          ,
          title: "  Apollo",
        }, {
          id: 8,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c7676cf8903603bb76ec_Next%20JS.svg"


          ,
          title: " Next JS",
        },
        {
          id: 9,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c7671451c58631b1690b_YARN%20Package%20Manager.svg"


          ,
          title: "YARN Package Manager",
        },
        {
          id: 10,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038cb631fdd9d3d378a7201_MongoBD.svg"



          ,
          title: " MongoBD",
        },
        {
          id: 11,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c765952b348205bbbec5_Enzyme.svg"



          ,
          title: "  Enzyme",
        }, {
          id: 12,
          url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038c7650be25879da6ce632_Bundler.svg"

          ,
          title: "  Bundler",
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
      heading: "Budget-Friendly Solutions",
      content:
        "  With React Native, for Android and iOS apps, the same codebase can be used. This saves time and costs a lot. So you can devote more money to your product marketing. ",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a1545b1710d67b728d_coins-line-blue.svg"


    },
    {
      id: 2,
      heading: "Faster development",
      content:
        "  Building a React Native app supporting both iOS and Android is around 30% faster than creating iOS and Android apps separately. Besides, the consistency, user interface, and efficiency do not suffer.", url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a17ad04e9415aa13d8_bolt-blue.svg"


    },
    {
      id: 3,
      heading: "Native performance",
      content:
        "   React Native outputs components that run as native views, unlike  PhoneGap or Cordova, so the users get great speed even though a lot of resources are used by the app. ",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a10681e816624d7667_performance-blue.svg"


    },
    {
      id: 4,
      heading: "Strong community",
      content: <>There is a very large community on the Respond Native site, so
        it&#x27;s really easy to get support or feedback, exchange
        information and expertise, and sharpen professional skills.
      </>,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2f6c4e8216502cbfd_users-solid-blue.svg"


    },
    {
      id: 5,
      heading: "Modern technologies",
      content:
        "   Our development services for the React Native app allow you to stay on top of modern developments so that you can safeguard your company against potential technological changes.",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d351cdc186360146c859_code%201.svg"


    },
    {
      id: 6,
      heading: "Easy-to-update functionality",
      content:
        "     The intuitive modular architecture of React Native offers the  ability to easily upgrade and update applications. Modules that    function both with web and mobile APIs may also be reused.",

      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d381d9c4d7f72200f83e_update.svg"

    },
  ];
  const technologyUsedby = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d4d91fdd9d7bb28a93ec_shopify.svg"
      ,
      title: "shopify",
    },
    {
      id: 2,
      title: "tesla",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d4dab1a1ba2ec3b411ee_tesla.svg"

      ,
    },
    {
      id: 3,
      title: "skype",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d4da2ca23e6f468073ec_skype.svg"

      ,
    },
    {
      id: 4,
      title: "facebook",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d4d967e6e43a6a105d04_facebook.svg"

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
      title: "bloomberg",
      url: "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038d4d92e0abf0b37f16603_bloomberg.svg"


      ,
    },

  ];

  return (
    <>
      <TechnologyLayout
        title="React Native"
        desciption={
          <>
            Our experience shows that business owners typically prefer
            cross-platform applications focused on getting the most value in
            the least time. If you&#x27;re one of them, then your attention
            is worthy of React Native. <br />
            <br />
            We get the most out of the capabilities of React Native to
            create excellent products

          </>
        }
        heroImage={
          "https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6038bb27977bde797e03d553_react-native-hire-illustration.png"
        }
        businessIdea={businessIdea}
        techDescription={
          <>
            <p>
              Despite being a relatively new technology, React Native, among
              other common frameworks, has gained a positive reputation.
              Allowing the development of cross-platform apps provides many
              benefits besides that. React Native is a chance to build
              &#x27;out of the box&#x27; tech solutions. For complex mobile
              apps, this open source, cross-platform technology is perfect.
              The creation of React Native Mobile is crucial for business to
              expand, stay competitive and satisfy the needs of users by
              offering online services.
            </p>
            <p>
              To be competitive in business, you should think about a mobile
              application where your service or product can be offered and
              sold. It comes to mind, but also bothers, the issue of what
              technology to use and how to create an app. We are happy to
              support you with the search for the best solution as a native
              app development business. We will clarify how a project should
              be started and provide you with knowledge that you should know.
              If there is such a strong percentage of those who love Respond
              Native, it clearly means that there is an increasing need for
              this programming language.
            </p>
            <p>
              For cross-platform app development, React Native is used. It
              ensures quicker and lower-cost mobile development on Android and
              iOS. For those who are interested in Android and iOS application
              development, we offer to see our React Native development
              company services.
            </p>
          </>
        }
        expertDescription={
          <>
            Does your company need a proprietary mobile solution? Often, the
            simplest solution, such as React Native, is always the safest. A
            JavaScript framework for creating native mobile apps is React
            Native. <br />
            <br />
            You don&#x27;t develop a web application or a cross-platform
            app, but you create an application that is almost identical,
            complete with components and APIs, to the actual native
            application.A rich mobile UI from the declarative components
            results in the output.Here is the best part; it will speed up
            deployment along a simple path to market using React Native
            development system with shared JavaScript code and reuse across
            multiple platforms. <br />
            <br />
            What&#x27;s more, since your solution for React Native is
            standardized across all platforms and devices, maintenance is
            very easy, reducing versioning and cost overhead.
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

export default ReactNativeTechno