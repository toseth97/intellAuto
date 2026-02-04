// app/not-found.jsx

import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function NotFound() {
    return (
        <section className={`page_404 ${poppins.className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="col-sm-10 col-sm-offset-1 text-center">
                            <div className="four_zero_four_bg pt-4">
                                <h1 className="text-center">404</h1>
                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">Look like you're lost</h3>
                                <p>
                                    The page you are looking for is not
                                    available!
                                </p>
                                <a href="/" className="link_404 rounded">
                                    Go to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
