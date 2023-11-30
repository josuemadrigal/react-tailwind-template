import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <>
      <div className="py-10 px-10">
        <InstagramEmbed
          url="https://www.instagram.com/p/CwgFpZYO0D1/?img_index=1"
          width={300}
        />
      </div>
    </>
  );
};

export default Instagram;
