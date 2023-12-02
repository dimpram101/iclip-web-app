import React, { useState, useEffect } from "react";
import HeaderSection from "./components/HeaderSection";
import Divider from "../../components/Divider";
import UpcomingSection from "./components/UpcomingSection";
import GenreSection from "./components/GenreSection";
import PopulerSection from "./components/PopulerSection";
const BrowseAllPage = () => {
  const [images, setImages] = useState([]);
  const [genres, setGenres] = useState([]);

  return (
    <div className="max-w-screen-2xl mx-auto pt-8 pb-12">
      <HeaderSection />

      <Divider className="my-12 opacity-25" />

      <GenreSection />

      <Divider className="my-12 opacity-25" />

      <UpcomingSection />

      <Divider className="my-12 opacity-25" />

      <PopulerSection />
    </div>
  );
};
export default BrowseAllPage;
