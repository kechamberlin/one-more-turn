import styled from 'styled-components';

export const HomePageIntroStyle = styled.div`
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2);
  border: 2px solid #dda833;
  padding: 0.6rem 1rem;
  border-radius: 1px;
  text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  .home-image {
    position: relative;
  }
  .image-text {
    font-size: 4.5rem;
    color: #f5efd7;
    position: absolute;
    // top: 50%;
    top: 66%;
    // top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    text-shadow: 1px 2px 4px black;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 1056px) {
    .image-text {
      font-size: 4rem;
    }
  }
  @media (max-width: 961px) {
    .image-text {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 865px) {
    .image-text {
      font-size: 3rem;
    }
  }
  @media (max-width: 770px) {
    .image-text {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 674px) {
    .image-text {
      font-size: 2rem;
    }
  }
  @media (max-width: 579px) {
    .image-text {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 425px) {
    .image-text {
      font-size: 1rem;
      top: 75%;
    }
  }
  @media (max-width: 375px) {
    .image-text {
      font-size: 0.9rem;
      top: 75%;
    }
  }
  @media (max-width: 320px) {
    .image-text {
      font-size: 0.7rem;
      top: 75%;
    }
  }
`;

export const HomePageGrid = styled.div`
  margin-top: 6rem;
  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
  @media (max-width: 320px) {
    font-size: 1.25rem;
  }
`;
