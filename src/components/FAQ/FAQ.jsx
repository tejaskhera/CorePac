import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Review1 from '../../../src/assets/website/review1.png';
import Review2 from '../../../src/assets/website/review2.png';
import Review3 from '../../../src/assets/website/review3.png';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your Minimum Order Quantity?',
      answer: 'There is no MOQ with CorePac. We serve individual customers also with varying requirements and of all categories.'
    },
    {
      question: 'What is your Turn Around Time from Order Placement to Delivery?',
      answer: 'Our Turn Around Time is one of the best in the industry. TAT varies based on requirements and quantity. It usually varies between 7 to 15 working days.'
    },
    {
      question: 'Does your company use eco-friendly material as well?',
      answer: 'Yes, one of our major objectives is to achieve sustainability and we procure environemnt friendly materials from all across the globe.'
    },
    {
      question: 'Do you provide designing services as well?',
      answer: 'Yes, feel free to reach out to our team so we can understand your requirements.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <div className="container" id="faq">
        <SectionTitle data-aos="fade-up">Need Help?</SectionTitle>
        <SectionSubtitle data-aos="fade-up">Everything you need to know about CorePac USA</SectionSubtitle>
        
        <FAQContainer data-aos="fade-up">
          {faqs.map((faq, index) => (
            <FAQItem key={index} isactive={activeIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer isactive={activeIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
        
        <SupportTeam data-aos="fade-up">
          <SupportTeamImages>
            <img src={Review1} alt="Support Team Member" />
            <img src={Review2} alt="Support Team Member" />
            <img src={Review3} alt="Support Team Member" />
          </SupportTeamImages>
          <SupportTeamTitle>Still have questions?</SupportTeamTitle>
          <SupportTeamText>
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </SupportTeamText>
          <Link to="/contact">
          <SupportButton>Get in touch</SupportButton>
          </Link>
        </SupportTeam>
      </div>
    </FAQSection>
  );
};

const FAQSection = styled.section`
  background-color: white;
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  text-align: center;
  color: #666;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 60px;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 15px;
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  font-weight: 500;
  color: #333;
`;

const FAQIcon = styled.div`
  color: #0A679A;
  font-size: 14px;
`;

const FAQAnswer = styled.div`
  padding: ${props => (props.isactive ? '0 0 15px' : '0')};
  max-height: ${props => (props.isactive ? '1000px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${props => (props.isactive ? '1' : '0')};
  color: #666;
`;

const SupportTeam = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const SupportTeamImages = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 -5px;
  }
`;

const SupportTeamTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
`;

const SupportTeamText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const SupportButton = styled.button`
  background-color: #0A679A;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #01579b;
  }
`;

export default FAQ;