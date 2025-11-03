import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const generateMetadata = () => {
    const url = 'https://www.lendingbridge.co.uk/complaints';

    return {
        title: 'Complaints',
        description: 'Complaints page for lending bridge',
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: 'Complaints',
            description: 'Complaints page for lending bridge',
            url,
            type: "article",
            siteName: "Lending Bridge",
        }
    }
}

const ComplaintsPage = () => {
    return <main className="bg-primary-bg">
        <Navbar />
        <div className="px-5 lg:px-[100px] mt-[50px]">
            <div className="flex flex-col gap-y-3 font-gilroy-regular text-[18px]">
                <h1 className="font-gilroy-bold text-[20px] md:text-[32px]">Complaints</h1>
                <p>We take customer experience and feedback very seriously and aim to maintain very
                high levels of service at all times. But occasionally, you may feel that our service has
                not met your expectations, and you want to raise this with us.</p>
                <p>You can send your complaint or an expression of dissatisfaction to the following address: <br />Lending Bridge Holdings Limited<br />101 - 103 Branston St, Birmingham B18 6BA, United Kingdom</p>
                <div>
                    <a href='tel:0330 034 1137' className="text-primary underline inline-block">0330 034 1137</a>
                    <a href='mailto:info@lendingbridge.co.uk' className="text-primary underline mt-1 block">info@lendingbridge.co.uk</a>
                </div>
                <p>We aim to resolve all complaints in a timely manner and propose a mutually
                acceptable solution promptly.</p>
                <p>If you decide to write to us, we will send you a written acknowledgement within five
                working days of receiving your complaint.</p>
                <p>We will fully investigate and send you a detailed response (&lsquo;final response&rsquo;) within
                eight weeks of receiving your complaint.</p>
                <p>The Website is not intended for children and we do not knowingly collect personal
                data relating to children. In order for us to conduct our investigations thoroughly
                please include as much information as possible in your complaint.</p>
                <p>Once we have all the necessary information, we will consider the complaint fairly and
                impartially before notifying you of our decision in writing.</p>
                <p>You may accept our decision or reject it. If you reject it, we will revisit your complaint
                in light of any additional information. If you do not respond, we will treat your
                complaint as closed. In the unlikely event that no response is provided by us within
                the eight week period, we will write to you again explaining why.</p>
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
}

export default ComplaintsPage;