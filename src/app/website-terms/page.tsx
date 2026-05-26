import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata = {
  title: "Website Terms of Use | Lending Bridge UK",
  description:
    "Review the terms and conditions for using our services. This page outlines your rights and important legal information",
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/website-terms",
  },
  openGraph: {
    title: "Website Terms & Conditions | Lending Bridge - Legal Terms of Use",
    description:
      "Review the terms and conditions for using our services. This page outlines your rights and important legal information",
    url: "https://www.lendingbridge.co.uk/website-terms",
    type: "website",
    siteName: "Lending Bridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Terms of Use | Lending Bridge UK",
    description:
      "Review the terms and conditions for using our services. This page outlines your rights and important legal information",
  },
};

const WebsiteTermsPage = () => {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px] mt-[50px]">
        <div className="flex flex-col gap-y-3 font-gilroy-regular text-[18px]">
          <h1 className="font-gilroy-bold text-[20px] md:text-[32px]">
            Website Terms
          </h1>
          <p>
            THESE TERMS AND CONDITIONS APPLY TO ALL USE OF THE WEBSITE. IF YOU
            PROCEED TO USE THE WEBSITE, YOU WILL BE DEEMED TO HAVE ACCEPTED THE
            TERMS AND CONDITIONS AND WILL BE BOUND BY ITS TERMS.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS
            WEBSITE
          </h2>
          <p>
            These terms and conditions (the “Terms and Conditions”) (together
            with the various documents referred to in them) sets out the terms
            on which you may make use of our website
            <a href="https://lendhub.co.uk/">https://lendhub.co.uk/</a> (the
            “Website”). Use of the Website includes accessing it, perusing it,
            or using any of the functionality offered via it.
          </p>
          <p>
            Please read these Terms and Conditions carefully before you start to
            use the Website as they represent a binding legal agreement and you
            will be bound by them. If you do not agree to these Terms and
            Conditions, you must not use the Website.
          </p>
          <p>
            You are also responsible for ensuring that all persons who access
            the Website though your internet connection are aware of the Terms
            and Conditions, and that they comply with them.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Other applicable policies
          </h2>
          <p>
            The following additional terms and policies also apply to your use
            of the Website:
          </p>
          <p>
            Our Platform Terms, which sets out the terms on which you may use
            our platform offered via our Website.
          </p>
          <p>
            Our Privacy Notice, which sets out the terms on which we process any
            personal data we collect from you, or that you provide to us.
          </p>
          <p>
            Our Cookies Policy, which sets out information about the cookies on
            the Website.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Information about the owner of the Website
          </h2>
          <p>
            The Website is operated by Lendhub Group Limited (“We”, “Our”, “Us”
            or “Lendhub”). You can contact us at
            <a href="mailto:info@lendhub.co.uk">info@lendhub.co.uk</a>.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Changes to these Terms and Conditions
          </h2>
          <p>
            Please note that we reserve the right to revise or amend these terms
            at any time to reflect changes to our business or changes in law. It
            is your responsibility to check these Terms and Conditions before
            each use of the Website.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            We may change our Website
          </h2>
          <p>
            We may update and change our Website from time to time to reflect
            changes to our products or services, our users’ needs, our business
            priorities or for any other reason.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            We may suspend or withdraw the Website
          </h2>
          <p>Our Website is made available free of charge. </p>
          <p>
            We do not guarantee that our Website, or any content on it, will
            always be available or be uninterrupted. We may suspend or withdraw
            or restrict the availability of all or any part of our Website for
            business and operational reasons.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Your responsibilities
          </h2>
          <p>When using this Website, you agree:</p>
          <p>- to only use this Website for lawful purposes;</p>
          <p>
            - that you are responsible for restricting access to your computer
            and devices;
          </p>
          <p>
            - not to impersonate other people or any other organisation or use
            any other user’s identity when using the Website; and
          </p>
          <p>
            - to refrain from using our Website and online communications
            systems for unauthorised mass-communication such as “spam” or “junk
            email”.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            We are not responsible for viruses and you must not introduce them
          </h2>
          <p>
            We do not guarantee that the Website will be secure or free from
            bugs or viruses. You are responsible for configuring your
            information technology, computer programmes and platforms to access
            the Website. You should use your own virus protection software.
          </p>
          <p>
            You must not misuse our Website by knowingly introducing viruses,
            trojans, worms, logic bombs or other material that is malicious or
            technologically harmful. You must not attempt to gain unauthorised
            access to our Website, the server on which our Website is stored, or
            any server, computer or database connected to our Website. You must
            not attack our Website via a denial-of-service attack or a
            distributed denial-of service attack. By breaching this provision,
            you would commit a criminal offence under the Computer Misuse Act
            1990. We will report any such breach to the relevant law enforcement
            authorities, and we will co-operate with those authorities by
            disclosing your identity to them. In the event of such a breach,
            your right to use our Website will cease immediately.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            How you may use material on our Website
          </h2>
          <p>
            We are the owners and/or the licensees of all intellectual property
            rights inherent in the Website, and in the material published on it
            including, but not limited to, text, graphics, logos, icons, images,
            sound clips, video clips, data compilations, page layout, underlying
            code and software. Unless specifically stated otherwise, nothing in
            these terms or on the Website shall give effect to any transfer of
            such intellectual property rights from us to you.
          </p>
          <p>
            Your sole right to use the intellectual property inherent in the
            Website is a non-exclusive licence to make use of such content only
            as is strictly necessary to enable you to access the Website and to
            peruse its contents.
          </p>
          <p>
            You may print off one copy, and may download extracts, of any
            page(s) from the Website for your personal use and you may draw the
            attention of others within your organisation to content posted on
            the Website.
          </p>
          <p>
            You must not modify the paper or digital copies of any materials you
            have printed off or downloaded in any way, and you must not use any
            illustrations, photographs, video or audio sequences or any graphics
            separately from any accompanying text.
          </p>
          <p>
            Our status (and that of any identified contributors) as the authors
            of content on the Website must always be acknowledged.
          </p>
          <p>
            You must not use any part of the content on the Website for
            commercial purposes without obtaining a licence to do so from us or
            our licensors.
          </p>
          <p>
            If you print off, copy or download any part of the Website in breach
            of these Terms and Conditions, your right to use the Website will
            cease immediately and you must, at our option, return or destroy any
            copies of the materials you have made.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            How we may use your personal information
          </h2>
          <p>
            We will use your personal information as set out in our Privacy
            Notice.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Uploading content to our Website
          </h2>
          <p>
            Whenever you make use of a feature that allows you to upload content
            to our Website, or to make contact with us or other users of the
            Website, you must comply with the following standards:
          </p>
          <p>
            - any information or content you submit is up-to-date, accurate and
            truthful;
          </p>
          <p>
            - not to submit information or content that is unlawful or otherwise
            objectionable including, but not limited to, content that is
            defamatory, abusive, offensive, racist, sexist, homophobic,
            threatening, vulgar, obscene, hateful, content which promotes or
            incites violence, is otherwise inappropriate or will constitute a
            criminal offence or give rise to civil liability;
          </p>
          <p>
            - not to use this Website to advertise or offer to sell any goods or
            services for any commercial purpose, or to promote any surveys,
            contests or chain letters;
          </p>
          <p>
            - not to post or make available any material which is protected by
            copyright, trade mark or other proprietary right on this Website
            without the express permission of the owner of the copyright, trade
            mark or any other proprietary right and you will be solely liable
            for any damages resulting from any infringement of the above. If you
            believe that any materials on this Website infringe your copyright
            or trademark, you may request that they be removed. This request
            must be emailed with your name, address and telephone number along
            with any supporting information.
          </p>
          <p>
            Any content you upload to our Website will be considered
            non-confidential and non-proprietary. You retain all of your
            ownership rights in your content, but you grant us and other users
            of our Website an irrevocable, perpetual, royalty-free,
            transferable, sub-licensable licence to use, store, reproduce,
            redesign, modify and copy that content and to distribute and make it
            available to third parties via any media or format without your
            approval and without notice to you.
          </p>
          <p>
            We also have the right to disclose your identity to any third party
            for any reason, including where, without limitation, a third party
            is claiming that any content posted or uploaded by you to our
            Website constitutes a violation of their intellectual property
            rights, or of their right to privacy, or is in breach of these Terms
            and Conditions.
          </p>
          <p>
            You are solely responsible for securing and backing up your content.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Do not rely on information on the Website
          </h2>
          <p>
            The content on our Website is provided for general information only.
            It is not intended to amount to advice on which you should rely. You
            must obtain professional or specialist advice before taking, or
            refraining from, any action on the basis of the content on our
            Website.
          </p>
          <p>
            Although we make reasonable efforts to update the information on our
            Website, we make no representations, warranties or guarantees,
            whether express or implied, that the content on our Website is
            accurate, complete or up to date.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Indemnity</h2>
          <p>
            You acknowledge that you must comply with the responsibilities set
            out herein and that if you breach any of these Terms and Conditions
            you may be personally liable to us or any third party that suffers
            harm as a result.
          </p>
          <p>
            You agree to indemnify and keep indemnified us, our successors and
            assignors, our directors, trustees, offices, employees and agents
            from and against all liabilities, claims, losses, costs, damages and
            expenses including legal fees which are reasonably incurred by us
            should you breach any of these Terms and Conditions.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Limitation of our liability
          </h2>
          <p>
            Nothing in these Terms and Conditions excludes or limits our
            liability for death or personal injury arising from our negligence,
            or our fraud or fraudulent misrepresentation, or any other liability
            that cannot be excluded or limited by law.
          </p>
          <p>
            To the extent permitted by law, we exclude all conditions,
            warranties, representations or other terms which may apply to the
            Website or any content on it, whether express or implied.
          </p>
          <p>
            We will not be liable, under any circumstances, for the following
            types of loss or damage whether in contract, tort (including
            negligence), breach of statutory duty, or otherwise, even if
            foreseeable:
          </p>
          <p>- loss of profits, sales, business, or revenue;</p>
          <p>- business interruption;</p> <p>- loss of anticipated savings;</p>
          <p>- loss of business opportunity, goodwill or reputation;</p>
          <p>- loss or damage to data; or</p>
          <p>- any indirect or consequential loss or damage.</p>
          <p>
            You accept and acknowledge that we are not responsible for nor are
            we liable for any loss or damage whether in contract, tort
            (including negligence), breach of statutory duty, or otherwise, even
            if foreseeable, arising under or in connection with:
          </p>
          <p>- your use, or inability to use, the Website;</p>
          <p>
            - the accuracy, veracity or reliability of any content, opinion,
            advice or statement made or provided via this Website;
          </p>
          <p>- all activities that occur under your computer or device;</p>
          <p>- your use of any third party websites or links in the Website;</p>
          <p>- our disclosure of any information you submit to us; and</p>
          <p>- our use of any information you submit to us.</p>
          <p>
            We will not be liable for any loss or damage caused by a virus,
            distributed denial-of-service attack, or other technologically
            harmful material that may infect your computer equipment, computer
            programs, data or other proprietary material due to your use of the
            Website or to your downloading of any content from it, or from any
            Website linked to it.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Events outside our control
          </h2>
          <p>
            We will not be liable or responsible for any failure to perform, or
            delay in performance or, any of our obligations under these Terms
            and Conditions that is caused by an Event Outside Our Control (as
            defined in the paragraph below).
          </p>
          <p>
            An Event Outside Our Control means any act or event beyond our
            reasonable control, including without limitation strikes, lock-outs
            or other industrial action by third parties, civil commotion, riot,
            invasion, terrorist attack or threat of terrorist attack, war
            (whether declared or not) or threat or preparation for war, fire,
            explosion, storm, flood, earthquake, subsidence, epidemic, or other
            natural disaster, or failure of public or private
            telecommunications.
          </p>
          <p>
            If an Event Outside Our Control takes place that affects the
            performance of our obligations under these Terms and Conditions our
            obligations under these terms of use will be suspended and the time
            for performance of our obligations will be extended for the duration
            of the Event Outside Our Control.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Linking to the Website
          </h2>
          <p>
            You may link to our home page, provided you do so in a way that is
            fair and legal and does not damage our reputation or take advantage
            of it.
          </p>
          <p>
            You must not establish a link in such a way as to suggest any form
            of association, approval or endorsement on our part where none
            exists.
          </p>
          <p>
            You must not establish a link to the Website in any website that is
            not owned by you.
          </p>
          <p>
            The Website must not be framed on any other site, nor may you create
            a link to any part of the Website other than the home page.
          </p>
          <p>
            We reserve the right to withdraw linking permission without notice
            and you agree to take all necessary steps to remove any links to the
            Website following a request from us to do so.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Third party website links &amp; resources in the Website
          </h2>
          <p>
            Where the Website contains links to other sites and resources
            provided by third parties, these links are provided for your
            information only.
          </p>
          <p>
            We have no control over the contents of those sites or resources.
            Use of the such sites shall not be subject to their terms and
            conditions.
          </p>
          <p>
            We assume no responsibility for the content of websites linked to
            from the Website. We will not be liable for any loss or damage that
            may arise from your use of them.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Applicable law and jurisdiction{" "}
          </h2>
          <p>
            Please note that the Terms and Conditions, and its subject matter
            are governed by English law. You and we both agree that the courts
            of England and Wales will have exclusive jurisdiction over any
            disputes.
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <ClientBroker />
      </div>
      <div className="mt-5 lg:mt-[100px]">
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
};

export default WebsiteTermsPage;
