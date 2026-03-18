import ContactFooter from "@/components/contactFooter";
import Footer from "@/components/footer";
import HomeViewport from "@/components/homeViewport";
import Image from "next/image";
import Nav from "@/components/nav";

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
