

import { GiHospitalCross } from "react-icons/gi";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 foo text-slate-200 font-Nunito">
                <aside>
                    <GiHospitalCross size={60} />
                    <p>HP Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className=" font-bold uppercase mb-3 text-slate-50 font-Nunito">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="font-bold uppercase mb-3 text-slate-50 font-Nunito">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="font-bold uppercase mb-3 text-slate-50 font-Nunito">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;