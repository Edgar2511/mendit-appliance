import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Wrench,
  Refrigerator,
  WashingMachine,
  Microwave,
  Zap,
  Utensils,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  MainContainer,
  ThemeToggleContainer,
  ThemeButton,
  HeaderSection,
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  Logo,
  MainTitle,
  Subtitle,
  HeaderCallButton,
  MainContent,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  FeaturesGrid,
  FeatureItem,
  FeatureIconContainer,
  FeatureTitle,
  FeatureDescription,
  ServiceAreaSection,
  ServiceAreaContent,
  ServiceAreaDescription,
  ServiceAreaHighlight,
  ServiceAreaHighlightText,
  ServiceAreaHighlightSpan,
  MapCard,
  MapImageContainer,
  MapImage,
  MapCaption,
  MapCaptionText,
  ContactCard,
  ContactTitle,
  ContactDescription,
  ContactInfo,
  ContactItem,
  ContactItemText,
  ContactButton,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalImage,
  ModalFooter,
  ModalFooterTitle,
  ModalFooterText,
} from "../components/styled/StyledComponents";

import map from "../assets/map.jpeg";
import logo from "../assets/logo.png";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleCall = () => {
    window.location.href = "tel:818-588-2183";
  };

//   const handleEmail = () => {
//     window.location.href = "mailto:Menditappliance@gmail.com";
//   };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MainContainer darkMode={darkMode}>
      {/* Fixed Call Button */}
      {/* <FixedButtonContainer>
        <CallButton onClick={handleCall}>
          <Phone size={24} />
          Call Now
        </CallButton>
      </FixedButtonContainer> */}

      {/* Theme Toggle */}
      <ThemeToggleContainer>
        <ThemeButton darkMode={darkMode} onClick={toggleTheme}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </ThemeButton>
      </ThemeToggleContainer>

      {/* Header Section */}
      <HeaderSection darkMode={darkMode}>
        <HeaderContainer>
          <HeaderContent>
            <LogoContainer>
              <Logo src={logo} alt="Mend It Appliance Logo" />
            </LogoContainer>
            <MainTitle darkMode={darkMode}>Mend It Appliance</MainTitle>
            <Subtitle darkMode={darkMode}>
              Professional Home Appliance Repair Solutions
            </Subtitle>
            <HeaderCallButton onClick={handleCall}>
              <Phone size={20} />
              Call Now: (818) 588-2183
            </HeaderCallButton>
          </HeaderContent>
        </HeaderContainer>
      </HeaderSection>

      {/* Services Section */}
      <MainContent>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <SectionTitle darkMode={darkMode}>What We Repair</SectionTitle>
          <SectionSubtitle darkMode={darkMode}>
            Expert repair services for all your home appliances
          </SectionSubtitle>
        </div>

        <ServicesGrid>
          <ServiceCard darkMode={darkMode}>
            <ServiceIcon>
              <Refrigerator size={48} />
            </ServiceIcon>
            <ServiceTitle darkMode={darkMode}>Refrigerators</ServiceTitle>
            <ServiceDescription darkMode={darkMode}>
              All brands and models
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard darkMode={darkMode}>
            <ServiceIcon>
              <WashingMachine size={48} />
            </ServiceIcon>
            <ServiceTitle darkMode={darkMode}>Washing Machines</ServiceTitle>
            <ServiceDescription darkMode={darkMode}>
              Front & top load
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard darkMode={darkMode}>
            <ServiceIcon>
              <Microwave size={48} />
            </ServiceIcon>
            <ServiceTitle darkMode={darkMode}>Microwaves</ServiceTitle>
            <ServiceDescription darkMode={darkMode}>
              All types and sizes
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard darkMode={darkMode}>
            <ServiceIcon>
              <Zap size={48} />
            </ServiceIcon>
            <ServiceTitle darkMode={darkMode}>Dryers</ServiceTitle>
            <ServiceDescription darkMode={darkMode}>
              Electric & gas dryers
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard darkMode={darkMode}>
            <ServiceIcon>
              <Utensils size={48} />
            </ServiceIcon>
            <ServiceTitle darkMode={darkMode}>Dishwashers</ServiceTitle>
            <ServiceDescription darkMode={darkMode}>
              Built-in & portable
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard darkMode={darkMode}>
            <ServiceIcon>
              <Wrench size={48} />
            </ServiceIcon>
            <ServiceTitle darkMode={darkMode}>Other Appliances</ServiceTitle>
            <ServiceDescription darkMode={darkMode}>
              Various home appliances
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>

        {/* Key Features */}
        <FeaturesGrid>
          <FeatureItem>
            <FeatureIconContainer color="orange" darkMode={darkMode}>
              <Shield size={32} color="#ea580c" />
            </FeatureIconContainer>
            <FeatureTitle darkMode={darkMode}>2 Month Warranty</FeatureTitle>
            <FeatureDescription darkMode={darkMode}>
              All repairs backed by our guarantee
            </FeatureDescription>
          </FeatureItem>

          <FeatureItem>
            <FeatureIconContainer color="blue" darkMode={darkMode}>
              <Clock size={32} color="#2563eb" />
            </FeatureIconContainer>
            <FeatureTitle darkMode={darkMode}>Flexible Hours</FeatureTitle>
            <FeatureDescription darkMode={darkMode}>
              8AM - 8PM, Monday to Sunday
            </FeatureDescription>
          </FeatureItem>
        </FeaturesGrid>

        {/* Service Area Map */}
        <ServiceAreaSection>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <SectionTitle darkMode={darkMode}>Service Area</SectionTitle>
            <ServiceAreaContent>
              <ServiceAreaDescription darkMode={darkMode}>
                We proudly serve residents of Los Angeles County and Ventura
                County, providing fast and reliable appliance repair service
                right at your home
              </ServiceAreaDescription>
              <ServiceAreaHighlight darkMode={darkMode}>
                <ServiceAreaHighlightText darkMode={darkMode}>
                  <ServiceAreaHighlightSpan darkMode={darkMode}>
                    Cities we serve:
                  </ServiceAreaHighlightSpan>
                  Los Angeles, Glendale, Pasadena, Santa Clarita, Simi Valley,
                  Thousand Oaks, Oxnard, Ventura and many other communities
                  throughout Los Angeles and Ventura Counties
                </ServiceAreaHighlightText>
              </ServiceAreaHighlight>
            </ServiceAreaContent>
          </div>

          <MapCard darkMode={darkMode}>
            <MapImageContainer>
              <MapImage
                src={map}
                alt="Service Area Map - Los Angeles and Ventura Counties"
                onClick={() => setMapModalOpen(true)}
              />
              {/* <MapOverlay /> */}
            </MapImageContainer>
            <MapCaption>
              <MapCaptionText darkMode={darkMode}>
                Fast response within service area • Free in-home diagnostics
              </MapCaptionText>
            </MapCaption>
          </MapCard>
        </ServiceAreaSection>

        {/* Contact Section */}
        <ContactCard darkMode={darkMode}>
          <ContactTitle>Need Appliance Repair?</ContactTitle>
          <ContactDescription>
            Call us today for fast, reliable service in Los Angeles and Ventura
            Counties
          </ContactDescription>
          <ContactInfo>
            <ContactItem>
              <Phone size={20} />
              <ContactItemText large>(818) 588-2183</ContactItemText>
            </ContactItem>
            <ContactItem>
              <Mail size={20} />
              <ContactItemText large>Menditappliance@gmail.com</ContactItemText>
            </ContactItem>
            <ContactItem>
              <Clock size={20} />
              <ContactItemText>8AM - 8PM, Monday to Sunday</ContactItemText>
            </ContactItem>
            <ContactItem>
              <MapPin size={20} />
              <ContactItemText>
                Los Angeles and Ventura Counties
              </ContactItemText>
            </ContactItem>
          </ContactInfo>
          <ContactButton onClick={handleCall}>
            <Phone size={20} />
            Call Now for Service
          </ContactButton>
        </ContactCard>
      </MainContent>

      {/* Map Modal */}
      {mapModalOpen && (
        <ModalOverlay onClick={() => setMapModalOpen(false)}>
          <ModalContent
            darkMode={darkMode}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalCloseButton
              darkMode={darkMode}
              onClick={() => setMapModalOpen(false)}
              aria-label="Close map"
            >
              <svg
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </ModalCloseButton>
            <ModalImage
              src={map}
              alt="Service Area Map - Los Angeles and Ventura Counties"
            />
            <ModalFooter darkMode={darkMode}>
              <ModalFooterTitle darkMode={darkMode}>
                Our Service Area
              </ModalFooterTitle>
              <ModalFooterText darkMode={darkMode}>
                Los Angeles County and Ventura County
              </ModalFooterText>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default Index;
