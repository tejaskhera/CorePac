import styled from "styled-components"
import {
  FaUtensils,
  FaTshirt,
  FaSprayCan ,
  FaSmoking,
  FaLeaf,
  FaPills,
  FaShoppingCart,
  FaMicrochip,
  FaWineBottle,
} from "react-icons/fa"

const IndustriesWeServe = () => {
  const industries = [
    {
      id: 1,
      name: "Food and Beverages",
      icon: FaUtensils,
      color: "#FF6B35",
      description: "Safe, sustainable packaging for food products and beverages",
    },
    {
      id: 2,
      name: "Apparel and Fashion",
      icon: FaTshirt,
      color: "#E91E63",
      description: "Stylish packaging solutions for clothing and fashion brands",
    },
    {
      id: 3,
      name: "Cosmetics Industry",
      icon: FaSprayCan ,
      color: "#9C27B0",
      description: "Elegant packaging for beauty and cosmetic products",
    },
    {
      id: 4,
      name: "Tobacco Industry",
      icon: FaSmoking,
      color: "#795548",
      description: "Compliant packaging solutions for tobacco products",
    },
    {
      id: 5,
      name: "CBD Packaging",
      icon: FaLeaf,
      color: "#4CAF50",
      description: "Specialized packaging for CBD and hemp products",
    },
    {
      id: 6,
      name: "Pharmaceutical Industry",
      icon: FaPills,
      color: "#2196F3",
      description: "Medical-grade packaging for pharmaceutical products",
    },
    {
      id: 7,
      name: "E-Commerce Packaging",
      icon: FaShoppingCart,
      color: "#FF9800",
      description: "Durable shipping solutions for online businesses",
    },
    {
      id: 8,
      name: "Electronics Industry",
      icon: FaMicrochip,
      color: "#607D8B",
      description: "Protective packaging for electronic devices and components",
    },
    {
      id: 9,
      name: "Liquor Industry",
      icon: FaWineBottle,
      color: "#8BC34A",
      description: "Premium packaging solutions for alcoholic beverages",
    },
  ]

  return (
    <IndustriesSection>
      <div className="container">
        <SectionHeader data-aos="fade-up">
          <SectionSubtitle>OUR EXPERTISE</SectionSubtitle>
          <SectionTitle>Industries We Serve</SectionTitle>
          <SectionDescription>
            Delivering specialized packaging solutions across diverse industries with precision, quality, and innovation
            tailored to your specific needs.
          </SectionDescription>
        </SectionHeader>

        <IndustriesGrid>
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} data-aos="fade-up" data-aos-delay={index * 100} color={industry.color}>
              <CardHeader>
                <IconContainer color={industry.color}>
                  <industry.icon />
                </IconContainer>
                <CardNumber>{String(industry.id).padStart(2, "0")}</CardNumber>
              </CardHeader>

              <CardContent>
                <IndustryName>{industry.name}</IndustryName>
                <IndustryDescription>{industry.description}</IndustryDescription>
              </CardContent>

              <CardOverlay color={industry.color} />
            </IndustryCard>
          ))}
        </IndustriesGrid>

        <CTASection data-aos="fade-up">
          <CTAText>Ready to elevate your brand with custom packaging?</CTAText>
          <CTAButton>Get Started Today</CTAButton>
        </CTASection>
      </div>
    </IndustriesSection>
  )
}

const IndustriesSection = styled.section`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
  }
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`

const SectionSubtitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0277bd;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-transform: uppercase;
`

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const SectionDescription = styled.p`
  font-size: 18px;
  color: #5a6c7d;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const IndustryCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    
    ${(props) => `
      background: linear-gradient(135deg, ${props.color}15 0%, ${props.color}05 100%);
    `}
  }
  
  &:hover > div:last-child {
    opacity: 1;
    transform: scale(1);
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  background: linear-gradient(135deg, ${(props) => props.color} 0%, ${(props) => props.color}dd 100%);
  box-shadow: 0 8px 20px ${(props) => props.color}40;
`

const CardNumber = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #bdc3c7;
  background: #ecf0f1;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardContent = styled.div`
  position: relative;
  z-index: 2;
`

const IndustryName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
  line-height: 1.3;
`

const IndustryDescription = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  line-height: 1.6;
`

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${(props) => props.color}20 0%, ${(props) => props.color}10 100%);
  transform: scale(0);
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 1;
`

const CTASection = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #0277bd 0%, #01579b 100%);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(2, 119, 189, 0.3);
`

const CTAText = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const CTAButton = styled.button`
  background: white;
  color: #0277bd;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
  }
`

export default IndustriesWeServe
