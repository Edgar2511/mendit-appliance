import styled from "styled-components";

// Main container with gradient background
export const MainContainer = styled.div<{ darkMode: boolean }>`
  min-height: 100vh;
  background: ${(props) =>
    props.darkMode
      ? "linear-gradient(to bottom right, #111827, #1f2937)"
      : "linear-gradient(to bottom right, #fff7ed, #eff6ff)"};
  transition: all 0.3s ease;
  overflow-x: hidden;
`;

// Fixed button container
export const FixedButtonContainer = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
`;

// Theme toggle container
export const ThemeToggleContainer = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 50;
`;

// Call button
export const CallButton = styled.button`
  background: #f97316;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #ea580c;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

// Theme toggle button
export const ThemeButton = styled.button<{ darkMode: boolean }>`
  background: ${(props) =>
    props.darkMode ? "rgba(31, 41, 55, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  border: 1px solid
    ${(props) =>
      props.darkMode ? "rgba(107, 114, 128, 0.3)" : "rgba(229, 231, 235, 0.3)"};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

// Header section
export const HeaderSection = styled.div<{ darkMode: boolean }>`
  background: ${(props) =>
    props.darkMode ? "rgba(17, 24, 39, 0.9)" : "rgba(255, 255, 255, 0.9)"};
  backdrop-filter: blur(4px);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

export const HeaderContent = styled.div`
  text-align: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Logo = styled.img`
  height: 5rem;
  width: auto;
`;

export const MainTitle = styled.h1<{ darkMode: boolean }>`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${(props) => (props.darkMode ? "#fff" : "#1e293b")};
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p<{ darkMode: boolean }>`
  font-size: 1.25rem;
  color: ${(props) => (props.darkMode ? "#d1d5db" : "#4b5563")};
  margin-bottom: 1.5rem;
`;

export const HeaderCallButton = styled.button`
  background: #f97316;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #ea580c;
    transform: scale(1.05);
  }
`;

// Main content container
export const MainContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

// Section titles
export const SectionTitle = styled.h2<{ darkMode: boolean }>`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${(props) => (props.darkMode ? "#fff" : "#1e293b")};
  margin-bottom: 1rem;
  text-align: center;
`;

export const SectionSubtitle = styled.p<{ darkMode: boolean }>`
  font-size: 1.125rem;
  color: ${(props) => (props.darkMode ? "#d1d5db" : "#4b5563")};
  text-align: center;
  margin-bottom: 3rem;
`;

// Services grid
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled.div<{ darkMode: boolean }>`
  background: ${(props) => (props.darkMode ? "#1f2937" : "#fff")};
  border: 1px solid ${(props) => (props.darkMode ? "#374151" : "#e2e8f0")};
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

export const ServiceIcon = styled.div`
  color: #2563eb;
  margin: 0 auto 1rem;
  width: 3rem;
  height: 3rem;
`;

export const ServiceTitle = styled.h3<{ darkMode: boolean }>`
  font-weight: 600;
  color: ${(props) => (props.darkMode ? "#fff" : "#1e293b")};
  margin-bottom: 0.5rem;
`;

export const ServiceDescription = styled.p<{ darkMode: boolean }>`
  font-size: 0.875rem;
  color: ${(props) => (props.darkMode ? "#d1d5db" : "#4b5563")};
`;

// Features grid
export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeatureItem = styled.div`
  text-align: center;
`;

export const FeatureIconContainer = styled.div<{
  color: string;
  darkMode: boolean;
}>`
  background: ${(props) =>
    props.darkMode
      ? props.color === "orange"
        ? "rgba(251, 146, 60, 0.3)"
        : "rgba(96, 165, 250, 0.3)"
      : props.color === "orange"
      ? "#fed7aa"
      : "#dbeafe"};
  padding: 0.75rem;
  border-radius: 9999px;
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FeatureTitle = styled.h3<{ darkMode: boolean }>`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => (props.darkMode ? "#fff" : "#1e293b")};
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p<{ darkMode: boolean }>`
  color: ${(props) => (props.darkMode ? "#d1d5db" : "#4b5563")};
`;

// Service area section
export const ServiceAreaSection = styled.div`
  margin-bottom: 4rem;
`;

export const ServiceAreaContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ServiceAreaDescription = styled.p<{ darkMode: boolean }>`
  font-size: 1.125rem;
  color: ${(props) => (props.darkMode ? "#d1d5db" : "#4b5563")};
  margin-bottom: 1rem;
`;

export const ServiceAreaHighlight = styled.div<{ darkMode: boolean }>`
  background: ${(props) =>
    props.darkMode ? "rgba(251, 146, 60, 0.2)" : "#fff7ed"};
  border: 1px solid
    ${(props) => (props.darkMode ? "rgba(251, 146, 60, 0.5)" : "#fed7aa")};
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const ServiceAreaHighlightText = styled.p<{ darkMode: boolean }>`
  font-size: 1rem;
  color: ${(props) => (props.darkMode ? "#d1d5db" : "#374151")};
`;

export const ServiceAreaHighlightSpan = styled.span<{ darkMode: boolean }>`
  font-weight: 600;
  color: ${(props) => (props.darkMode ? "#fb923c" : "#ea580c")};
`;

export const MapCard = styled.div<{ darkMode: boolean }>`
  background: ${(props) => (props.darkMode ? "#1f2937" : "#fff")};
  border: 1px solid ${(props) => (props.darkMode ? "#374151" : "#d1d5db")};
  border-radius: 0.5rem;
  padding: 1.5rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const MapImageContainer = styled.div`
  position: relative;
`;

export const MapImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.5s ease;
  zoom: 0.65;
  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    height: 24rem;
  }
`;

export const MapOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  border-radius: 0.5rem;
  pointer-events: none;
`;

export const MapCaption = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const MapCaptionText = styled.p<{ darkMode: boolean }>`
  font-size: 0.875rem;
  color: ${(props) => (props.darkMode ? "#9ca3af" : "#6b7280")};
`;

// Contact card
export const ContactCard = styled.div<{ darkMode: boolean }>`
  background: ${(props) => (props.darkMode ? "#1f2937" : "#1e293b")};
  color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const ContactTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ContactDescription = styled.p`
  color: #d1d5db;
  margin-bottom: 1.5rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ContactItemText = styled.span<{ large?: boolean }>`
  font-size: ${(props) => (props.large ? "1.125rem" : "1rem")};
  font-weight: ${(props) => (props.large ? "600" : "400")};
`;

export const ContactButton = styled.button`
  background: #f97316;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #ea580c;
    transform: scale(1.05);
  }
`;

// Modal
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div<{ darkMode: boolean }>`
  position: relative;
  max-width: 72rem;
  width: 100%;
  background: ${(props) => (props.darkMode ? "#1f2937" : "#fff")};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export const ModalCloseButton = styled.button<{ darkMode: boolean }>`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 5px;
  right: 5px;
  z-index: 10;
  background: ${(props) =>
    props.darkMode ? "rgba(31, 41, 55, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#1f2937")};
  border: none;
  border-radius: 9999px;
  padding: 0.5rem;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.darkMode ? "#374151" : "#fff")};
    transform: scale(1.1);
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
`;

export const ModalFooter = styled.div<{ darkMode: boolean }>`
  padding: 1rem;
  background: ${(props) => (props.darkMode ? "#1f2937" : "#fff")};
  text-align: center;
`;

export const ModalFooterTitle = styled.h3<{ darkMode: boolean }>`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => (props.darkMode ? "#fff" : "#1f2937")};
  margin-bottom: 0.5rem;
`;

export const ModalFooterText = styled.p<{ darkMode: boolean }>`
  color: ${(props) => (props.darkMode ? "#d1d5db" : "#4b5563")};
`;
