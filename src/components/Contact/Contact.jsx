import styled from 'styled-components';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <ContactSection>
      <div className="container">
        <ContactHeader data-aos="fade-up">Contact Us</ContactHeader>
        <ContactTitle data-aos="fade-up">We&apos;d love to hear from you</ContactTitle>
        <ContactSubtitle data-aos="fade-up">Our friendly team is always here to chat</ContactSubtitle>
        
        <ContactCards>
          <ContactCard data-aos="fade-up" data-aos-delay="100">
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactCardTitle>Email</ContactCardTitle>
            <ContactCardText>info@CorePacUSA.com</ContactCardText>
          </ContactCard>
          
          <ContactCard data-aos="fade-up" data-aos-delay="200">
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactCardTitle>Office</ContactCardTitle>
            <ContactCardText>9816 E Colonical Dr, Orlando FL 32817, United States</ContactCardText>
          </ContactCard>
          
          <ContactCard data-aos="fade-up" data-aos-delay="300">
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactCardTitle>Commercial Support</ContactCardTitle>
            <ContactCardText>+1 718 734 4408</ContactCardText>
          </ContactCard>
        </ContactCards>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  background-color: #0A679A;
  padding: 80px 0;
  color: white;
  text-align: center;
`;

const ContactHeader = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ContactSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;

const ContactCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }
`;

const ContactCard = styled.div`
  text-align: center;
  max-width: 250px;
`;

const ContactIcon = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

const ContactCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ContactCardText = styled.p`
  font-size: 14px;
`;

export default Contact;