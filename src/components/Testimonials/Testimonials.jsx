import styled from 'styled-components';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Person1 from '../../../src/assets/website/person1.png';
import Person2 from '../../../src/assets/website/person2.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      image: Person1,
      rating: 5,
      comment: 'Best packaging ever! Quality and design exceeded expectations'
    },
    {
      name: 'Michael Davis',
      image: Person2,
      rating: 5,
      comment: 'Impressed with the quality,design, and attention to detail. Highly recommend'
    }
  ];

  return (
    <TestimonialsSection>
      <div className="container">
        <SectionTitle data-aos="fade-up">Our Testimonials</SectionTitle>
        <SectionSubtitle data-aos="fade-up">Hear it from those who know</SectionSubtitle>
        
        <TestimonialsContainer>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <TestimonialImage>
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
              </TestimonialImage>
              
              <TestimonialContent>
                <TestimonialRating>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span>({testimonial.rating} Rating)</span>
                </TestimonialRating>
                <TestimonialText>{testimonial.comment}</TestimonialText>
              </TestimonialContent>
              
              <BlueSquare />
            </TestimonialCard>
          ))}
        </TestimonialsContainer>
        
        <SeeMoreButton data-aos="fade-up">
          <Link to="/contact">
            See More <FaArrowRight />
          </Link>
        </SeeMoreButton>
      </div>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  background-color: #0A679A;
  padding: 60px 0;
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const TestimonialImage = styled.div`
  width: 220px;
  height: 220px;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 576px) {
    width: 120px;
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
  padding: 20px 30px;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TestimonialRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  svg {
    color: #000;
    margin-right: 2px;
    font-size: 18px;
  }
  
  span {
    margin-left: 5px;
    font-size: 14px;
    color: #666;
  }
`;

const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const BlueSquare = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background-color: #7FB3D5;
  border-top-right-radius: 20px;
  z-index: 1;
`;

const SeeMoreButton = styled.div`
  text-align: center;
  
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #2E86C1;
    color: white;
    padding: 10px 25px;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s ease;
    
    svg {
      font-size: 14px;
    }
    
    &:hover {
      background-color: #2874A6;
    }
  }
`;

export default Testimonials;