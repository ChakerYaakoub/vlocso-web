import React from 'react';
import "./Footer.css"
import playeStore from "../../assets/playeStore1.png"
import appStore from "../../assets/AppStore.png"
import { Link } from 'react-router-dom';
import { FaCcMastercard, FaCcPaypal, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiVisaFill } from 'react-icons/ri';


const Footer: React.FC = () => {
    return (


        <footer className="footer">
            <div className='FooterGride'>
                <div>



                    <p className='h2 '>   Nos applications </p>



                    <button className='mt-4 mr-4 md:mr-0 '> <img src={playeStore} alt="playeStore" className='w-32  md:w-52' /></button>
                    <button className='mt-4 m-auto'>
                        <img src={appStore} alt="AppStore" className='w-32  md:w-52' />

                    </button>





                </div>



                <div>
                    <p className='h2 '>    A propos de nous </p>

                    <div className='grid grid-cols-1 gap-2 justify-center items-center py-5 '>



                        <Link className='hover:text-blue-500' to="/Politiques" >Politiques de confidentialité </Link>
                        <Link className='hover:text-blue-500' to="/Condition" >Condition générale d’utilisation </Link>

                        <Link className='hover:text-blue-500' to="/About" >Qui sommes-nous </Link>



                    </div>
                </div>
                <div>


                    <p className='h2 '>        Nos réseaux sociaux </p>
                    <div className='flex gap-10  m-auto py-5 text-3xl md:text-4xl '>


                        <a className='hover:text-blue-500' target='_blank' href="https://www.facebook.com" ><FaFacebook /> </a>
                        <a className='hover:text-blue-500' target='_blank' href="https://www.instagram.com" ><FaInstagram /> </a>


                        <a className='hover:text-blue-500' target='_blank' href="https://www.linkedin.com" ><FaLinkedin /> </a>
                        <a className='hover:text-blue-500' target='_blank' href="https://www.twitter.com" ><FaXTwitter /> </a>
                    </div>





                </div>
                <div>


                    <p className='h2 '>            Méthode de paiement </p>
                    <div className='flex gap-10  m-auto py-5 text-4xl md:text-5xl '>


                        <Link className='hover:text-blue-500' to="/paiementMethode" ><RiVisaFill /> </Link>
                        <Link className='hover:text-blue-500' to="/paiementMethode" ><FaCcPaypal /> </Link>


                        <Link className='hover:text-blue-500' to="/paiementMethode" ><FaCcMastercard /> </Link>

                    </div>
                </div>


            </div>


            <div className="footer-bottom">


                <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Vlocso™. All Rights Reserved.</span>
            </div>


        </footer>


    );
};

export default Footer;

