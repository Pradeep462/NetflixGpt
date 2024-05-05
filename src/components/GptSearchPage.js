import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          alt=""
          className="h-[100vh] w-[100vw] object-cover"
          aria-hidden="true"
          data-uia="nmhp-card-hero+background+image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000cc] from-0% via-[#00000000] via-60% to-[#000000cc] to-100% "></div>
      </div>

      <GptSearchBar />
      <GptSearchSuggestion />
    </div>
  );
};

export default GptSearchPage;
