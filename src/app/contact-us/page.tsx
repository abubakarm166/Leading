import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const ContactUsPage = () => {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <ContactUs noBorder />
      <Footer />
    </main>
  );
};

export default ContactUsPage;
