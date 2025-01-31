import React, { useState } from "react";

const ProjectDetail = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="flex flex-col gap-2 bg-[#d2d2b4] bg-cover bg-opacity-60 p-3 justify-center text-[#74613C]">
      <h1 className="text-3xl md:text-5xl text-[#74613C] p-5 font-merriweather mx-auto text-justify">
        Indus Valley Mukteshwar
      </h1>
      <p className="md:mx-16 text-lg md:text-xl font-merriweather text-justify mx-3">
        Welcome to Indus Valley Mukhteshwar, a place where peace resides. This
        is a 10-acre private gated township in the lap of the Himalayas. We are
        not selling cottages; we are selling the environment that we create
        around you.
      </p>
      <p className="md:mx-16 text-lg md:text-xl font-merriweather text-justify mx-3">
        This project is at the height of 8000ft from sea level, which is why it
        also witnesses snowfall around winter. Around the year, the weather in
        Mukteshwar has been cool and pleasant, and to date, we haven’t felt the
        need to install fans in our cottages. Places like Nainital Shimla Masuri
        dehradun are overcrowded and hustle and bustle now; these places haven’t
        even recorded any snowfall in the last 6-7 years due to global warming.
      </p>
      <p className="md:mx-16 text-lg md:text-xl font-merriweather text-justify mx-3 ">
        Enjoy the terrific panoramic view of Nanda Devi Himalayan glaciers from
        every property. We have built these cottages in an organized way that
        every cottage faces the Himalayas. There are 70 villas in the project,
        out of which we have delivered 43. Around 15 families have already
        permanently moved to Indus Valley.
      </p>
      <p
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          fontFamily: "Merriweather",
        }}
        className="text-3xl md:text-5xl text-[#74613C] p-5 font-merriweather mx-auto text-justify"
      >
        Offerings of Indus Valley
      </p>

      <ul className="flex flex-col gap-3 md:px-16 text-lg md:text-xl font-merriweather w-full">
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Independent cottages:</strong> simplex and duplex
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Customized, tailored-made cottages:</strong> as per customer
          design
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>1-2 BHK apartments and Studio apartments</strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Streetlights across the project</strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>CCTV surveillance with 24/7 security guards</strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Private Project Road:</strong> which reaches out to every
          cottage
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Hillcrest Cafe:</strong> A small dine-in the township
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Clubhouse</strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Trekking:</strong> Beautiful trek around the project
        </li>
      </ul>

      <p
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          fontFamily: "Merriweather",
        }}
        className="text-3xl md:text-5xl text-[#74613C] p-5 font-merriweather mx-auto text-justify"
      >
        Unique points of Indus Valley
      </p>

      <ul className="flex flex-col gap-3 md:px-16 text-lg md:text-xl font-merriweather w-full">
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Secluded gated community</strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>At the height of 8 thousand feet from sea level</strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>360-degree panoramic views of Nanda Devi Glaciers</strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>
            A private road that reaches out to every single property
          </strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Private designated parking in your cottage</strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Elite crowd</strong>
        </li>
        <li className="flex gap-3 font-merriweather">
          <p>
            <strong>&#x2022;</strong>
          </p>{" "}
          <strong>Snowfall during winters</strong>
        </li>
      </ul>

      <p
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          fontFamily: "Merriweather",
        }}
        className="text-3xl md:text-5xl text-[#74613C] p-5 font-merriweather mx-auto text-justify"
      >
        Location of Indus Valley
      </p>
      <p className="md:mx-16 text-lg md:text-xl font-merriweather text-justify mx-3">
        It is a 7-hour drive from Delhi and a 1-hour drive from Nainital, a
        perfect destination to invest in your dream house. The project is in
        Sundarkhal, which is in the main Mukteshwar region. This project is 5
        minutes from the Dhanachuli market, where the residents can get all
        their daily essentials.
      </p>

      <p
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          fontFamily: "Merriweather",
        }}
        className="text-3xl md:text-5xl text-[#74613C] p-5 font-merriweather mx-auto text-justify"
      >
        Why second homes are the Future of Smart Real Estate Investment
      </p>
      <p className="md:mx-16 text-lg md:text-xl font-merriweather text-justify mx-3">
        Living in an urbanized colony around a concrete jungle, there must have
        been a time when most of the individuals residing in these cities wished
        to have a small place on hills where they could relax from their
        fast-paced lifestyle and enjoy the natural beauty of the Himalayas. A
        place beyond daily tensions, where they can rethink, redevelop new
        thoughts, and reinvent themselves.
      </p>

      <p
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          fontFamily: "Merriweather",
        }}
        className="text-3xl md:text-5xl text-[#74613C] p-5 font-merriweather mx-auto text-justify"
      >
        What is a second home or a vacation home?
      </p>
      <p className="md:mx-16 text-lg md:text-xl font-merriweather text-justify mx-3">
        There was a time when these second homes were seen as a statement of
        luxury, but now they are the need of the hour for the people living in
        political cities. These aesthetic cottages on hills are worth every
        penny you are paying for as there is a high appreciation recorded on
        these properties, especially post-COVID, as people have started
        realizing the value of a peaceful environment.
      </p>
      <p
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          fontFamily: "Merriweather",
        }}
        className="text-3xl md:text-5xl text-[#74613C] p-5 font-merriweather mx-auto text-justify"
      >
        Reasons why someone should invest in Indus Valley Mukteshwar, Nainital
      </p>
      <p className="md:mx-16 text-lg md:text-xl font-merriweather text-justify mx-3">
        Property Appreciation: Post covid, there was a sudden change in the
        market trend and customer taste. They realized the need for a place to
        be secluded with their loved ones.
        <br />
        <br />
        That’s why properties on hill stations have witnessed a great hike in
        their market value. If we talk about the Indus Valley in particular,
        there was a 40% increase in the value of the land in just the last three
        years.
        <br />
        <br />
        Personal paradise for your loved ones: Who doesn’t want to spend time
        with their family? A warm, small cottage in the lap of the Himalayas is
        the perfect way to express your feelings for your family. Create a
        Legacy and Family Asset for generations. Potential for Rental Income:
        Return on investment is one of the key things that many individuals are
        concerned about, and for that, after purchasing a property at Indus
        Valley, you can rent out your cottage with Indus Valley homestay, or you
        can rent it out by yourself on various hotel booking platforms like
        Airbnb, booking.com, MakeMyTrip.
        <br />
        <br />
        Relief from hot and humid weather: Places like Delhi NCR are overcrowded
        and have become a concrete jungle of buildings and roads. The
        temperatures are going beyond expectations; heat waves are one of the
        most crucial phases that people have to deal with, and that’s why a
        place in the mountains is essential for residents from plain areas.
        <br />
        <br />
      </p>
      <p
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          fontFamily: "Merriweather",
        }}
        className="text-3xl md:text-5xl text-[#74613C] p-5 font-merriweather mx-auto"
      >
        Discover Peace, Discover Indus Valley
      </p>

      {showMore && (
        <p className="md:mx-16 text-lg md:text-xl font-merriweather text-justify mx-3">
          Discover the charm of Mukteshwar nestled amidst the Kumaon hills with
          our luxury cottages for sale. Perfectly blending contemporary comfort
          . These cottages offer a peaceful retreat amidst nature's beauty.
          Whether you seek a weekend getaway or a permanent abode in the lap of
          the Himalayas,
          <br />
          <br />
          our cottages in Mukteshwar provide you to experience life's simple
          joys. Our cottages in Nainital offer breathtaking views of snow-capped
          peaks, valleys, and dense forests right from your doorstep. Wake up to
          the melodious chirping of birds and the fresh mountain air, as you sip
          your morning tea on the veranda or cozy up by the fireplace with a
          good book. Our customers say these are some of the finest homes in
          Uttarakhand hills.
          <br />
          <br />
          Located amidst the neighborhood, this property boasts breathtaking
          views of the surrounding hills and lush greenery. The studio apartment
          in Uttarakhand is thoughtfully designed to maximize space and
          functionality, featuring a comfortable sleeping area, a well-appointed
          kitchenette, and a modern bathroom.
          <br />
          <br />
          <strong>Key Features of our property in Uttarakhand</strong>
          <br />
          <br />
          <ul>
            <li>
              <strong>&#x2022;</strong> Scenic Location: Enjoy the beauty of
              nature with hilly views of the Himalayas and verdant valleys right
              from your doorstep.
            </li>
            <br />

            <li>
              <strong>&#x2022;</strong> Peaceful Environment: Experience
              ambience and peacefulness in the heart of the mountains, away from
              the noise and pollution of urban areas.
            </li>
            <br />

            <li>
              <strong>&#x2022;</strong> Well-Appointed Accommodation: The
              property features well-designed living spaces equipped with modern
              amenities to ensure comfort and convenience.
            </li>
            <br />

            <li>
              <strong>&#x2022;</strong> Spacious Gardens: Embrace outdoor living
              with expansive gardens perfect for relaxation, meditation, or
              hosting gatherings with friends and family.
            </li>
            <br />

            <li>
              <strong>&#x2022;</strong> Explore Attractions: Explore nearby
              attractions such as Mukteshwar Temple, Chauli Ki Jali, and Bhalu
              Gaad Waterfalls, offering opportunities for adventure and cultural
              experiences.
            </li>
            <br />

            <li>
              <strong>&#x2022;</strong> Investment Potential: Whether as a
              rental property or investment opportunity, this home in Mukteshwar
              promises excellent returns in one of India's tourist destinations.
            </li>
          </ul>
          <br />
          <br />
          <strong>Why Mukteshwar?</strong>
          <br />
          <br />
          <p>
            Mukteshwar, with its pleasant climate, lush forests, and captivating
            vistas, has emerged as a favored destination for nature lovers and
            adventure enthusiasts alike. From trekking and birdwatching to apple
            orchards and colonial-era architecture, Mukteshwar offers a unique
            blend of experiences that appeal to travelers seeking an authentic
            mountain getaway.
          </p>
          <br />
          <br />
          <p>
            Mukteshwar offers a compelling choice for those seeking a serene
            retreat away from the hustle and bustle of popular tourist spots in
            Uttarakhand like Nainital, Bhimtal, and Mussoorie. Situated at an
            elevation of 8000 feet above sea level, Mukteshwar boasts a peaceful
            atmosphere and breathtaking views that are unmatched. The lower
            property rates here present excellent potential for investment,
            making it an attractive option for those seeking to capitalize on
            the region's growth.
          </p>
          <br />
          <br />
          <p>
            Unlike Nainital, which has experienced a decline in snowfall in
            recent years, Mukteshwar reliably receives snowfall between December
            and February every year. This consistent snowfall adds to
            Mukteshwar's charm as a winter destination, making it a preferred
            choice for those seeking snowy landscapes and a serene environment
            away from the tourist crowds. Moreover, its average temperature,
            which is consistently 5 - 10 degrees cooler than nearby hill
            stations like Nainital and Bhimtal, provides a refreshing escape
            from the summer heat.
          </p>
          <br />
          <br />
          <strong>Why To Invest In Mukteshwar:</strong>
          <br />
          <br />
          <ul>
            <li>
              <strong>&#x2022;</strong> Mukteshwar land cost is increasing
              exponentially. Post-COVID, we have seen 35% growth in land rates,
              which will go higher in upcoming years. Some so many families have
              moved permanently to the Indus Valley over the years. Investment
              can not always be calculated as to how much return you are
              getting. Sometimes, getting pure air and a peaceful environment
              can be counted as a mental investment for the soul.
            </li>
            <br />
            <li>
              <strong>&#x2022;</strong> Investment Potential: With its growing
              popularity as a tourist destination and a rise in demand for
              vacation homes, investing in Mukteshwar real estate offers a
              promising appreciation value.
            </li>
            <br />
            <li>
              <strong>&#x2022;</strong> Escape from the hustle and bustle: Break
              free from the hustle and bustle of city life and embrace a slower
              pace amidst nature's bounty. Mukteshwar offers a peaceful
              sanctuary away from the chaos.
            </li>
            <br />
            <li>
              <strong>&#x2022;</strong> Year-round vacations Whether blanketed
              in snow during winters or adorned with blooming flowers in
              summers, Mukteshwar captivates visitors with its timeless beauty
              throughout the year. Owning a cottage here ensures year-round
              vacations and cherished memories.
            </li>
            <br />
            <li>
              <strong>&#x2022;</strong> Large Open Personal Garden
            </li>

            <li>
              <strong>&#x2022;</strong> Wide Front View
            </li>
          </ul>
        </p>
      )}
      {!showMore && (
        <button
          onClick={toggleShowMore}
          className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-lg"
          style={{
            textAlign: "left",
            padding: "0.5rem 1rem",
            display: "inline-block",
            transition: "background-color 0.3s ease",
            width: "fit-content",
            margin: "auto",
          }}
        >
          Read More
        </button>
      )}

      <a
        href="https://www.theshubhamgroup.com"
        target=""
        className="text-xl font-bold text-center underline"
      >
        Learn more about the Shubham Group
      </a>
    </div>
  );
};

export default ProjectDetail;
