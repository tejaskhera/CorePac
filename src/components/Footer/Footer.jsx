import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import Loader from "../Loader/Loder";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email to subscribe.", {
        position: "top-center",
      });
      return;
    }

    try {
      // chcek if email is valid
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        toast.error("Please enter a valid email address.", {
          position: "top-center",
        });
        return;
      } else {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_Backend_URL}/subscribe-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );
        if (res.ok) {
          setEmail("");
          toast.success("You have successfully subscribed to our newsletter.", {
            position: "top-center",
          });
          setLoading(false);
          setEmail("");
        } else {
          toast.error(
            "An error occurred while sending your subscription email. Please try again.",
            {
              position: "top-center",
            }
          );
          setLoading(false);
          setEmail("");
        }
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "An error occurred while sending your subscription email. Please try again.",
        {
          position: "top-center",
        }
      );
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterBrand>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="site-logo footer-logo"
              />
            </Link>
          </FooterBrand>

          <FooterLinksSection>
            <FooterLinksColumn>
              <FooterLinksTitle>Company</FooterLinksTitle>
              <FooterLinks>
                <FooterLink to="/products">Shop</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink
                  as="a"
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    const faqSection = document.getElementById("faq");
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  FAQ
                </FooterLink>
              </FooterLinks>
            </FooterLinksColumn>

            <FooterLinksColumn>
              <FooterLinksTitle>Category</FooterLinksTitle>
              <FooterLinks>
                <FooterLink to="/category/flexible-pouches">Pouches</FooterLink>
                <FooterLink to="/category/shrink-sleeves">Bags</FooterLink>
                <FooterLink to="/category/corrugated-boxes">Boxes</FooterLink>
                <FooterLink to="/category/rigid-gift-boxes">Gifts</FooterLink>
                <FooterLink to="/category/labels-and-stickers">
                  Labels
                </FooterLink>
              </FooterLinks>
            </FooterLinksColumn>

            <FooterLinksColumn>
              <FooterLinksTitle>Join our newsletter</FooterLinksTitle>
              <NewsletterForm onSubmit={handleSubscribe}>
                <NewsletterInput
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <NewsletterButton type="submit">Subscribe</NewsletterButton>
              </NewsletterForm>
            </FooterLinksColumn>
          </FooterLinksSection>
        </FooterContent>

        <FooterBottom>
          <FooterCopyright>
            Copyright 2025 COREPAC. All rights reserved
          </FooterCopyright>
          <FooterLegal>
            <FooterLegalLink to="/">Terms of condition</FooterLegalLink>
            <FooterLegalLink to="/">Privacy Policy</FooterLegalLink>
          </FooterLegal>
        </FooterBottom>
      </div>
      {loading && <Loader />}
      <style>
        {`
          @media (max-width: 768px) {
            .footer-logo {
              width: 300px !important;
            }
          }
          @media (max-width: 576px) {
            .footer-logo {
              width: 150px !important;
            }
          }
        `}
      </style>
      <style>
        {`
          /* shared responsive logo class */
          .site-logo {
            width: 200px;
            height: auto;
            max-width: 100%;
            display: block;
          }

          @media (max-width: 1024px) {
            .site-logo { width: 180px; }
          }
          @media (max-width: 768px) {
            .site-logo { width: 140px; }
          }
          @media (max-width: 576px) {
            .site-logo { width: 110px; }
          }
        `}
      </style>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: white;
  padding-top: 60px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterBrand = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterLinksSection = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const FooterLinksColumn = styled.div`
  flex: 1;
  min-width: 150px;
`;

const FooterLinksTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #333;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled(Link)`
  font-size: 14px;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #0A679A;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NewsletterInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #0A679A;
  }
`;

const NewsletterButton = styled.button`
  padding: 10px;
  background-color: #0A679A;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #01579b;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #eee;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterCopyright = styled.div`
  font-size: 14px;
  color: #666;
`;

const FooterLegal = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterLegalLink = styled(Link)`
  font-size: 14px;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #0A679A;
  }
`;

export default Footer;
