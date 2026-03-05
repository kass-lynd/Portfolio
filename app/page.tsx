import ContactFooter from "@/Components/contactFooter";
import Footer from "@/Components/footer";
import HomeViewport from "@/Components/homeViewport";
import ContactButton from "@/Components/contactButton";
import Image from "next/image";
import Nav from "@/Components/nav";

export default function Home() {
    return (
        <div>
            <Nav />
            <main>
                <HomeViewport />
            </main>
            <footer>
                <div>
                    <ContactFooter />
                </div>
                <div>
                    <Footer />
                </div>
            </footer>
        </div>
    );
}
