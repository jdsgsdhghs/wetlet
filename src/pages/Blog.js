import React from "react";
import HeroImageBlock from "../components/HeroImageBlock";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import styled from "styled-components";
import BlogSection from "../components/Blog";
import BlogCarouselSection from "../components/BlogCarouselSection";
import BlogRewardSection from "../components/BlogRewardSection";
const BlogWrapper = styled.div`
  text-align: center;
  background-color: white;
  padding: 2rem 1rem 0 1rem;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
`;

const BlogPage = () => {
  return (
    <div>
      <HeroImageBlock
        imageSrc="/assets/images/hero-home.png"
        titleImageSrc="/assets/images/title-moz.png"
      />
      <BottomNav />
      <BlogSection />
      <BlogWrapper>
       
      </BlogWrapper>
      <BlogCarouselSection />
      <BlogRewardSection />
      <Footer />
    </div>
  );
};

export default BlogPage;
