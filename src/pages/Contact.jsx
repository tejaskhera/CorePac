import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import styled from "styled-components";
import { toast } from "react-toastify";
import Loader from "../components/Loader/Loder";
import Contact from "../assets/website/contact.png";
import Contact2 from "../assets/website/contact2.png";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message ||
      !formData.mobile
    ) {
      toast.error("Please fill in all fields.", {
        position: "top-center",
      });
      return;
    }
    try {
      setLoading(true);
      // validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        toast.error("Please enter a valid email address.", {
          position: "top-center",
        });
        setLoading(false);
        return;
      } else {
        // send email
        fetch(`${import.meta.env.VITE_Backend_URL}/contact-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => {
            if (res.ok) {
              setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                mobile: "",
              });
              toast.success("Your message has been sent successfully.", {
                position: "top-center",
              });
              setLoading(false);
            } else {
              toast.error(
                "An error occurred while sending your message. Please try again.",
                {
                  position: "top-center",
                }
              );
              setLoading(false);
            }
          })
          .catch((error) => {
            console.error("Error sending email:", error);
            toast.error(
              "An error occurred while sending your message. Please try again.",
              {
                position: "top-center",
              }
            );
            setLoading(false);
          });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred while sending your message. Please try again.", {
        position: "top-center",
      });
      setLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Contact CorePac USA
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src={Contact}
              alt="CorePac USA Illustration"
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />

            <h2 className="text-2xl font-semibold mb-4">
              Welcome to CorePac USA
            </h2>
            <p className="mb-6">
              Where innovation meets precision in the world of printing and
              packaging. With a passion for excellence and a commitment to
              delivering top-notch services, CorePac USA° stands as your trusted
              partner in the realm of bespoke printing solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <FiMail className="mr-2" />
                <span>info@CorePacUSA.com</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-2" />
                <span>+1 718 734 4408</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-2" />
                <span>9816 E Colonical Dr, Orlando FL 32817, United States</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4 contact">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                ></textarea>
              </div>
              <StyledWrapper>
                <button
                  className="cta flex items-center"
                  style={{ marginBottom: "4rem" }}
                >
                  <span>Send</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </button>
              </StyledWrapper>
            </form>
            <img
              src={Contact2}
              alt="CorePac USA Illustration"
              className="w-full h-auto rounded-lg shadow-lg mt-8  max-h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
    {loading && <Loader />}
    </>
  );
}

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #65d9f3;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: #65d9f3;
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active {
    transform: scale(0.95);
  }
`;
