import React from "react";
import Footer from '../components/footer'
import Icons from "../components/icons";

export function FooterContainer() {

    return(
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="https://wego.here.com/directions/mix//C4-Fitness,-New-Kandy-Road,-Kirikitta-North:e-eyJuYW1lIjoiQzQgRml0bmVzcyIsImFkZHJlc3MiOiJOZXcgS2FuZHkgUm9hZCwgV2VsaXdlcml5YSBTb3V0aCwgU3JpIExhbmthIiwibGF0aXR1ZGUiOjcuMDE4OTYwMjI4MTk2MSwibG9uZ2l0dWRlIjo4MC4wMjYwMjMzODc5MDksInByb3ZpZGVyTmFtZSI6ImZhY2Vib29rIiwicHJvdmlkZXJJZCI6MTE1MDgxNTIwMzM2NTgzfQ==?map=7.01896,80.02602,15,normal&fb_locale=en_GB">New Kandy Road, <br/>Kirikitta North, <br/>Sri Lanka</Footer.Link>
                    <Footer.Link href="#">011234567</Footer.Link>
                    <Footer.Link href="#">c4fitness@gmail.com</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/pages/category/Gym-Physical-Fitness-Center/C4-Fitness-115081520336583/"><Icons className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/c4fitness/?hl=en"><Icons className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/"><Icons className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://twitter.com/?lang=enhttps://twitter.com/?lang=en"><Icons className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )

}