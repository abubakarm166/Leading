import slugify from "slugify";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const ABOUT_ITEMS = [
  {
    id: 1,
    img: "/svg/about-home.svg",
    content:
      "Specialising in short-term bridging finance on all types of residential, commercial and semi-commercial properties. Our solutions are made seamless, stress-free and simple to follow",
  },
  {
    id: 2,
    img: "/svg/about-thumbs.svg",
    content:
      "Our specialty lies in assessing each loan on its own merits and working closely with our clients and brokers to ensure deal completes without a hitch.",
  },
  {
    id: 3,
    img: "/svg/about-man.svg",
    content:
      "With a dedicated relationship manager, you can expect clear communication and quick processing times from start to finish!",
  },
];

export const FEATURES = [
  {
    id: 1,
    title: "Speak to decision makers directly",
    subTitle: "Speak to decision makers directly",
    content:
      "Decision makers of the business at your disposal at any time to tackle any queries. Our Clients are able to talk to decision-makers of the business atany time to tackle any queries or issues they might have regarding the terms & conditions.",
    img: "/gif/talk.gif",
    contentImg: "/svg/feature-one.svg",
  },
  {
    id: 2,
    title: "Fast",
    subTitle: "Fast",
    content:
      "Quick, Easy, and Stress- Free financing when you need it most. Our standard timeline to process a loan is much faster than others in the industry. We have turned around loans in less than 48 hours!",
    img: "/gif/timer.gif",
    contentImg: "/svg/feature-two.svg",
  },
  {
    id: 3,
    title: "Transparent",
    subTitle: "Transparent",
    content:
      "We'll let you know from the start! We send indicative terms within 2 hours of inquiry. Our team's ability to act quickly helps us make instant decisions, making the process quicker. Other lenders have a longer due diligence process when authorizing a loan.",
    img: "/gif/search.gif",
    contentImg: "/svg/feature-three.svg",
  },
  {
    id: 4,
    title: "Simple",
    subTitle: "Simple",
    content:
      "We understand that loan processes can get really time-consuming and detailed with most lenders. But with lending bridge, we keep it simple. Complete your application with your relationship manager's assistance and we'll take care of the rest. We're here to help you every step of the way.",
    img: "/gif/happy.gif",
    contentImg: "/svg/feature-four.svg",
  },
  {
    id: 5,
    title: "Reliable",
    subTitle: "Reliable",
    content:
      "When we say we'll deliver, we mean it. Clients return to us because they trust us to get the job done, regardless of the complexity of the situation. We always let you know from the start.",
    img: "/gif/reliable.gif",
    contentImg: "/svg/feature-five.svg",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    title: "Residential Bridges & BTL Bridges",
    content:
      "Our Residential Bridging Product can help you provide the immediate capital you might need to secure a Residential OR BTL Property seeking assistance with an auction purchase or addressing a short-term gap in your cash shortage. Our tailored solutions are designed to meet your needs seamlessly.",
    img: "/svg/product-one.svg",
    slug: slugify("Residential Bridges & BTL Bridges".toLowerCase()),
    highlights: [
      {
        title: "Up to 70% LTV",
        img: "/gif/discount.gif",
      },
      {
        title: "Rates starting from 0.99%",
        img: "/gif/analytics.gif",
      },
      {
        title: "Minimum loan size £150,000",
        img: "/gif/money.gif",
      },
      {
        title: "AVM Valuations accepted for properties valued up to 700K.",
        img: "/gif/home.gif",
      },
    ],
  },
  {
    id: 2,
    title: "Commercial Bridge Loans",
    content:
      "Our Bridging Loans for Commercial Properties cater to both, individuals and businesses with a versatile funding option. Whether you're acquiring property, financing redevelopment projects, navigating changes in use, or leveraging existing assets to raise capital, we're here to assist every step of the way.",
    img: "/svg/product-two.svg",
    slug: slugify("Commercial Bridge Loans".toLowerCase()),
    highlights: [
      {
        title: "Up to 70% LTV",
        img: "/gif/discount.gif",
      },
      {
        title: "Rates starting from 0.99%",
        img: "/gif/analytics.gif",
      },
      {
        title: "Minimum loan size £150,000",
        img: "/gif/money.gif",
      },
    ],
  },
  {
    id: 3,
    title: "Semi-Commercial Bridges",
    content:
      "Our Semi-commercial Bridging Products can help you seamlessly cover purchase or refinance any semi-commercial properties. Whether you're acquiring a property, funding light refurb, or raising capital from existing assets, we're here to help every step of the way.",
    img: "/svg/product-three.svg",
    slug: slugify("Semi-Commercial Bridges".toLowerCase()),
    highlights: [
      {
        title: "Up to 70% LTV",
        img: "/gif/discount.gif",
      },
      {
        title: "Rates starting from 0.99%",
        img: "/gif/analytics.gif",
      },
      {
        title: "Minimum loan size £150,000",
        img: "/gif/money.gif",
      },
    ],
  },
  {
    id: 4,
    title: "Light Refurbs Bridges",
    content:
      "Sometimes, small upgrades on your property is everything you need to maximise the value of your projects. Our Light Refurbs Bridging Product is the right fit to help you execute your conversion plans.",
    img: "/svg/product-four.svg",
    slug: slugify("Light Refurbs Bridges".toLowerCase()),
    highlights: [
      {
        title: "First and Second Charges Accepted",
        img: "/gif/credit-card.gif",
      },
      {
        title: "Up to 70% LTV",
        img: "/gif/discount.gif",
      },
      {
        title: "Rates starting from 0.99%",
        img: "/gif/analytics.gif",
      },
      {
        title: "Minimum loan size £150,000",
        img: "/gif/money.gif",
      },
      {
        title: "AVM Valuations accepted for properties valued up to 700K.",
        img: "/gif/home.gif",
      },
    ],
  },
  {
    id: 5,
    title: "Auction Bridging Finance",
    content:
      "We understand that Properties bought at an Auction requires very quick processing times because of the standard 28-day payment term. Our Specialty of Fast Processing makes us the perfect partner to handle these loans for you or your clients.",
    img: "/svg/product-five-updated.svg",
    slug: slugify("Auction Bridging Finance".toLowerCase()),
    highlights: [
      {
        title: "Up to 70% LTV",
        img: "/gif/discount.gif",
      },
      {
        title: "Rates starting from 0.99%",
        img: "/gif/analytics.gif",
      },
      {
        title: "Minimum loan size £150,000",
        img: "/gif/money.gif",
      },
      {
        title: "5 Day Completions",
        img: "/gif/calendar.gif",
      },
    ],
  },
  {
    id: 6,
    title: "Refinance Bridge Loans",
    content:
      "At Lending Bridge, we help you overcome these hurdles. Our Bridging Product for Bad Credit and CCJ's helps clients facing these issues so they can still execute their property plans without a hitch.",
    img: "/svg/product-six.svg",
    slug: slugify("Refinance Bridge Loans".toLowerCase()),
    highlights: [
      {
        title: "Up to 70% LTV",
        img: "/gif/discount.gif",
      },
      {
        title: "Rates starting from 0.99%",
        img: "/gif/analytics.gif",
      },
      {
        title: "Minimum loan size £150,000",
        img: "/gif/money.gif",
      },
      {
        title: "Re-bridge is also considered",
        img: "/gif/wallet.gif",
      },
    ],
  },
  {
    id: 7,
    title: "Bridging Finance for Complex Cases",
    content:
      "Are you an overseas buyer who wants to buy property in the UK or you are stuck in an impossible situation that requires extremely fast turn-around times? Lending Bridge is your solution! Mastering impossible situations and creating tailored finance solutions is where we shine and our extremely easy process makes it possible for everyone to follow.",
    img: "/svg/product-one.svg",
    slug: slugify("Bridging Finance for Complex Cases".toLowerCase()),
    highlights: [
      {
        title: "Up to 70% LTV",
        img: "/gif/discount.gif",
      },
      {
        title: "Rates starting from 0.99%",
        img: "/gif/analytics.gif",
      },
      {
        title: "Minimum loan size £150,000",
        img: "/gif/money.gif",
      },
      {
        title: "Adverse Credit History Accepted",
        img: "/gif/wallet.gif",
      },
      {
        title: "Senior-Citizens can also appy",
        img: "/gif/caring.gif",
      },
      {
        title: "Expats and Foreign Nationals are also accepted",
        img: "/gif/strategic-alliance.gif",
      },
      {
        title: "Complex Company Structure",
        img: "/gif/office-building.gif",
      },
      {
        title: "Very tight Deadlines",
        img: "/gif/deadline.gif",
      },
      {
        title:
          "Commercial Properties like Pubs, Hotels & Care Homes also considered.",
        img: "/gif/hostel.gif",
      },
    ],
  },
  {
    id: 8,
    title: "Development Exit Finance",
    content:
      "Looking for a Bridge Loan to help you repay your initial loan for a development project? Our Product is the right fit for your needs. We understand that to maximise the value of your projects, sometimes you require the extra time to finalise your plans.",
    img: "/svg/product-eight.svg",
    slug: slugify("Development Exit Finance".toLowerCase()),
    highlights: [
      {
        title: "No Physical Valuation Required",
        img: "/gif/house.gif",
      },
      {
        title: "Up to 70% LTV",
        img: "/gif/discount.gif",
      },
      {
        title: "Rates starting from 0.99%",
        img: "/gif/analytics.gif",
      },
      {
        title: "Minimum loan size £150,000",
        img: "/gif/money.gif",
      },
    ],
  },
];

export const PRODUCT_KEY_INFO = [
  {
    id: 1,
    title: "Quotes Sent Within 2 Hours",
    content: "We send indicative terms within 2 hours of enquiry.",
    quote:
      '"Our teams quick response gets you started right away, unlike other lenders who require longer due diligence."',
    img: "/svg/key-info-quote.svg",
  },
  {
    id: 2,
    title: "CCJ's and Bad Credit Accepted",
    content: "CCJ's and bad credit? We say yes when others say no!",
    quote:
      '"CCJs and Bad Credit pose problems with most lenders. However, we will consider a client with CCJs or Bad Credit granted our added checks are passed."',
    img: "/svg/key-info-credit.svg",
  },
  {
    id: 3,
    title: "5-Day Loan Completion",
    content: "Quick, easy and stress-free financing when you need it most.",
    quote:
      '"Our standard timeline to process a loan is much faster than others in the industry. We have turned around loans in less than 12 hours."',
    img: "/svg/key-info-time.svg",
  },
  {
    id: 4,
    title: "Relaxed Lending Criteria",
    content:
      "Dedicated manager handles the process, making it simple and stress-free, from start to finish.",
    quote:
      '"We help the client as much as possible through the process and have a dedicated relationship manager for the client who is able to assist them at every stage."',
    img: "/svg/about-thumbs.svg",
  },
  {
    id: 5,
    title: "Speak Directly to Underwriters",
    content:
      "Decision makers of the business at your disposal any time to tackle any queries.",
    quote:
      '"Our clients are able to talk to decision makers of the business at any time to tackle any queries or issues they might have regarding the terms & conditions."',
    img: "/svg/key-info-writer.svg",
  },
  {
    id: 6,
    title: "Principle Lenders",
    content: "No intermediaries intervening the process.",
    quote:
      "As principle lenders, we use our own funds and our underwriters make decisions in house.",
    img: "/svg/about-man.svg",
  },
];

export const BROKER_INFO = [
  {
    id: 1,
    title: "3-Month Minimum Term",
    img: "/svg/broker-info-one.svg",
    activeImg: "/svg/broker-info-one-active.svg",
  },
  {
    id: 2,
    title: "No Maximum Loan Sizes",
    img: "/svg/broker-info-two.svg",
    activeImg: "/svg/broker-info-two-active.svg",
  },
  {
    id: 3,
    title: "12-Month Standard Term",
    img: "/svg/broker-info-three.svg",
    activeImg: "/svg/broker-info-three-active.svg",
  },
  {
    id: 4,
    title: "18-Month Term Available Subject to Application",
    img: "/svg/broker-info-four.svg",
    activeImg: "/svg/broker-info-four-active.svg",
  },
  {
    id: 5,
    title: "Broker and Proc Fee paid on the same day as completion.",
    img: "/svg/broker-info-five.svg",
    activeImg: "/svg/broker-info-five-active.svg",
  },
  {
    id: 6,
    title: "Interest Rates Starting from 0.99%",
    img: "/svg/broker-info-six.svg",
    activeImg: "/svg/broker-info-six-active.svg",
  },
  {
    id: 7,
    title: "First Charge Properties Only",
    img: "/svg/broker-info-seven.svg",
    activeImg: "/svg/broker-info-seven-active.svg",
  },
  {
    id: 8,
    title: "Attractive Fees for Introducers",
    img: "/svg/broker-info-eight.svg",
    activeImg: "/svg/broker-info-eight-active.svg",
  },
  {
    id: 9,
    title: "Arrangement Fees Starting from 1%",
    img: "/svg/broker-info-nine.svg",
    activeImg: "/svg/broker-info-nine-active.svg",
  },
];

export const APPOINTMENT_TIME_SLOTS = [
  "09:30 AM",
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "01:30 PM",
  "02:30 PM",
  "03:30 PM",
  "04:30 PM",
  "05:30 PM",
];

export const BROKER_FAQ = [
  {
    question: "How do I submit a deal to Lending Bridge?",
    answer:
      "Simply reach out to us via phone, email, or our online enquiry form. Our team will review the case and provide terms swiftly. Let’s work together to find the best funding solutions for your clients!",
  },
  {
    question: "What commissions do brokers receive?",
    answer: "Minimum 1% fee",
  },
  {
    question: "When do brokers get paid?",
    answer: "Same day as loan completion",
  },
  {
    question: "Do you have a minimum and maximum loan size?",
    answer:
      "Our minimum loan size is £100,000 and we do not have a maximum loan size.",
  },
  {
    question: "Can you lend to foreign nationals or complex structures?",
    answer:
      "Yes! We assess cases individually and can lend to foreign nationals, expats, trusts, offshore companies, and complex borrower structures.",
  },
  {
    question: "How quickly can Lending Bridge complete a deal?",
    answer:
      "We pride ourselves on speed, with completions possible in as little as 24 hours, depending on the case. Our in-house legal team ensures a smooth and efficient process.",
  },
  {
    question: "Can you help if my client has adverse credit?",
    answer:
      "Yes! We are flexible. We assess the deal on a case-by-case basis and focus on the asset and exit strategy rather than just credit history.",
  },
];

export const GENERAL_FAQ = [
  {
    question: "What is a bridging loan?",
    answer:
      "A bridging loan is a short-term finance solution used to bridge the gap between purchasing a property and securing long-term funding or selling an existing asset.",
  },
  {
    question: "Who can apply for a bridging loan?",
    answer:
      "Our bridging loans are available to individuals, investors, developers, and businesses looking for fast and flexible funding.",
  },
  {
    question: "How quickly can I receive funds?",
    answer:
      "We specialise in rapid funding, with loans completed in as little as 24–48 hours, depending on the case and legal requirements.",
  },
  {
    question: "What types of properties can be used as security?",
    answer:
      "We lend against a variety of property types, including residential, commercial, HMOs, and mixed-use properties.",
  },
  {
    question: "How do I apply for a bridging loan?",
    answer:
      "Applying is simple:\n• Get in touch early –\n  o For property purchases (including auctions): Contact us as early as possible, ideally before the auction or as soon as you secure the deal.\n  o For refinancing an existing bridge and/or capital raise: Contact us with details of your current loan, including outstanding balance, lender terms, and preferred exit strategy.\n• Fast approval – We provide a same-day decision in principle.\n• Legal and valuation process – We work swiftly to complete legal checks and valuation.\n• Funding within days – With our in-house solicitors and streamlined process, we aim to complete in 5–7 days.",
  },
  {
    question: "Why choose Lending Bridge?",
    answer:
      "• Fast & flexible funding – We complete in days, not weeks.\n• Direct access to decision-makers – Immediate answers, faster approvals and flexible solutions\n• Tailored solutions – Every deal is structured to fit your needs.\n• Reliable & transparent – We deliver exactly what we promise.",
  },
  {
    question: "Can I repay my loan early?",
    answer:
      "Yes, early repayment is allowed without penalties. Early repayment can reduce the overall interest payable.",
  },
  {
    question: "What is the typical term length for a bridging loan?",
    answer:
      "Our bridging loans have flexible terms ranging from 1 to 18 months, depending on your specific needs and exit strategy.",
  },
  {
    question: "What is an exit strategy, and why is it important?",
    answer:
      "An exit strategy is a plan for repaying your bridging loan, typically through property sale or refinancing. A clear exit strategy is crucial as it outlines how you intend to repay the loan at the end of the term.",
  },
  {
    question: "Do I need a deposit for a bridging loan?",
    answer:
      "While traditional deposits aren't always required, having equity in the property or additional assets can strengthen your application and may influence loan terms.",
  },
  {
    question: "How does adverse credit affect my application?",
    answer:
      "We assess each application on its merits, focusing on the property's value and your exit strategy. While adverse credit may influence terms, it doesn't automatically disqualify you from obtaining a loan.",
  },
  {
    question:
      "Are there any properties or situations Lending Bridge won't consider?",
    answer:
      "We evaluate each case individually. However, certain property types, like operational care homes or places of worship, may fall outside our lending criteria.",
  },
  {
    question: "How does Lending Bridge handle interest payments?",
    answer:
      "Interest can be serviced monthly or retained and paid at the start of the loan term, depending on your preference and the loan agreement.",
  },
  {
    question: "Can I use multiple properties as security for one loan?",
    answer:
      "Yes, we can consider multiple properties as collateral to support a single loan application, potentially allowing you to access more funds.",
  },
  {
    question: "What happens if I can't repay the loan on time?",
    answer:
      "If you're unable to repay the loan at the end of the term, it's essential to contact us immediately. We aim to work collaboratively to find a solution, which may include extending the loan term or exploring alternative repayment options.",
  },
];

export const SOCIAL_LINKS = {
  google:
    "https://www.google.com/search?q=lending+bridge+uk&sca_esv=1610bf8db0cd784a&sxsrf=AHTn8zpsZOp2H97GtmeCoT-wa0UVSE21oQ%3A1744813956548&ei=hL__Z62MIc-N4-EP7NTM0As&ved=0ahUKEwit3tDA4tyMAxXPxjgGHWwqE7oQ4dUDCBE&uact=5&oq=lending+bridge+uk&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWxlbmRpbmcgYnJpZGdlIHVrMgQQIxgnMgQQIxgnMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjBNVCeLVjvMnADeACQAQCYAYwBoAHyAqoBAzAuM7gBA8gBAPgBAZgCBaAChwLCAggQABiwAxjvBcICCxAAGLADGKIEGIkFwgILEAAYgAQYsAMYogTCAgsQABiABBiGAxiKBcICBRAAGO8FmAMAiAYBkAYFkgcDMy4yoAfgE7IHAzAuMrgHgAI&sclient=gws-wiz-serp",
  instagram: "https://www.instagram.com/lending.bridge/?hl=en",
  facebook: "https://www.facebook.com/p/Lending-Bridge-100092390863207/",
};

export const INTEREST_RATES = {
  residential: 1.05,
  "semi-commercial": 1.25,
  commercial: 1.25,
  land: 1.5,
};

export const LTV_RATES = {
  residential: 75,
  "semi-commercial": 65,
  commercial: 65,
  land: 65,
};
