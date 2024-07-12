import '../App.css'
import star from '../assets/icons/star.png'
import lovebites1 from './Lovebites/images/lovebites1.png'
import lovebites2 from './Lovebites/images/lovebites2.png'
import lovebites3 from './Lovebites/images/lovebites3.png'
import lovebites4 from './Lovebites/images/lovebites4.png'
import loveingredient1 from "./Lovebites/images/ingredient1.png";
import loveingredient2 from "./Lovebites/images/ingredient2.png";
import loveingredient3 from "./Lovebites/images/ingredient3.png";
import loveingredient4 from "./Lovebites/images/ingredient4.png";
import loveingredient5 from "./Lovebites/images/ingredient5.png";
import loveingredient6 from "./Lovebites/images/ingredient6.png";
import loveingredient7 from "./Lovebites/images/ingredient7.png";
import loveingredient8 from "./Lovebites/images/ingredient8.png";
import loveingredient9 from "./Lovebites/images/ingredient9.png";
import loveingredient10 from "./Lovebites/images/ingredient10.png";
import loveingredient11 from "./Lovebites/images/ingredient11.png";
import blisspops1 from './Blisspops/images/bliss1.png'
import blisspops2 from './Blisspops/images/bliss2.png'
import blisspops3 from './Blisspops/images/bliss3.png'
import blisspops4 from './Blisspops/images/bliss4.png'
import blissingredients1 from "./Blisspops/images/blissingredient1.png";
import blissingredients2 from "./Blisspops/images/blissingredient2.png";
import blissingredients3 from "./Blisspops/images/blissingredient3.png";
import blissingredients4 from "./Blisspops/images/blissingredient4.png";
import blissingredients5 from "./Blisspops/images/blissingredient5.png";
import blissingredients6 from "./Blisspops/images/blissingredient6.png";
import blissingredients7 from "./Blisspops/images/blissingredient7.png";
import blissingredients8 from "./Blisspops/images/blissingredient8.png";
import blissingredients9 from "./Blisspops/images/blissingredient9.png";
import blissingredients10 from "./Blisspops/images/blissingredient10.png";
import blissingredients11 from "./Blisspops/images/blissingredient11.png";
import blissingredients12 from "./Blisspops/images/blissingredient12.png";
import beautybombs1 from './BeautyBombs/images/beauty1.png'
import beautybombs2 from './BeautyBombs/images/beauty2.png'
import beautybombs3 from './BeautyBombs/images/beauty3.png'
import beautybombs4 from './BeautyBombs/images/beauty4.png'
import beautyingredient1 from "./BeautyBombs/images/beautyingredient1.png";
import beautyingredient2 from "./BeautyBombs/images/beautyingredient2.png";
import beautyingredient3 from "./BeautyBombs/images/beautyingredient3.png";
import beautyingredient4 from "./BeautyBombs/images/beautyingredient4.png";
import beautyingredient5 from "./BeautyBombs/images/beautyingredient5.png";
import beautyingredient6 from "./BeautyBombs/images/beautyingredient6.png";
import beautyingredient7 from "./BeautyBombs/images/beautyingredient7.png";
import beautyingredient8 from "./BeautyBombs/images/beautyingredient8.png";
import beautyingredient9 from "./BeautyBombs/images/beautyingredient9.png";
import beautyingredient10 from "./BeautyBombs/images/beautyingredient10.png";
import beautyingredient11 from "./BeautyBombs/images/beautyingredient11.png";
import snoozecubes1 from "./Snoozecubes/images/snoozecubes1.png";
import snoozecubes2 from "./Snoozecubes/images/snoozecubes2.png";
import snoozecubes3 from "./Snoozecubes/images/snoozecubes3.png";
import snoozecubes4 from "./Snoozecubes/images/snoozecubes4.png";
import snoozeingredients1 from "./Snoozecubes/images/snoozeingredient1.png";
import snoozeingredients2 from "./Snoozecubes/images/snoozeingredient2.png";
import snoozeingredients3 from "./Snoozecubes/images/snoozeingredient3.png";
import snoozeingredients4 from "./Snoozecubes/images/snoozeingredient4.png";
import snoozeingredients5 from "./Snoozecubes/images/snoozeingredient5.png";
import snoozeingredients6 from "./Snoozecubes/images/snoozeingredient6.png";
import snoozeingredients7 from "./Snoozecubes/images/snoozeingredient7.png";
import snoozeingredients8 from "./Snoozecubes/images/snoozeingredient8.png";
import snoozeingredients9 from "./Snoozecubes/images/snoozeingredient9.png";
import { useParams } from 'react-router-dom'

const chocolates = [
  {
    name: "Lovebites",
    description:
      "Ignite passion with Nutrachoco's Aphrodisiac Chocolate, blending organic Maca Root, Ginseng, and Saffron for a sensory delight that energizes and tantalizes, perfect for couples seeking romance and vitality.",
    price: 150,
    discountPrice: 120,
    offer: 20,
    mainImages: [lovebites1, lovebites2, lovebites3, lovebites4],
    ingredients: [
      {
        name: "Cacao",
        url: loveingredient1,
      },
      {
        name: "Shilajit",
        url: loveingredient2,
      },
      {
        name: "Panax ginseng",
        url: loveingredient3,
      },
      {
        name: "Kaunch Beej",
        url: loveingredient4,
      },
      {
        name: "Maca root",
        url: loveingredient5,
      },
      {
        name: "Saffron",
        url: loveingredient6,
      },
      {
        name: "Epimedium",
        url: loveingredient7,
      },
      {
        name: "Safed Muesli",
        url: loveingredient8,
      },
      {
        name: "Cordeyceps",
        url: loveingredient9,
      },
      {
        name: "Moringa",
        url: loveingredient10,
      },
      {
        name: "Ashwagandha",
        url: loveingredient11,
      },
    ],
    productDescriptionTitle: "Embrace Passion and Vitality",
    productDescriptionMain:
      "Indulge in the luxury of Nutrachoco’s Aphrodisiac Chocolate, expertly blended to kindle desire and enhance vitality. Each piece is a symphony of organic ingredients like Maca Root, Ginseng, and exotic Saffron, sourced with an unwavering commitment to environmental stewardship. Enriched with the natural prowess of Ashwagandha and Moringa, this chocolate not only delights the senses but also invigorates the spirit. Perfect for couples seeking a sweet spark of romance and energy.",
  },
  {
    name: "SnoozeCubes",
    description:
      "Ignite passion with Nutrachoco's Aphrodisiac Chocolate, blending organic Maca Root, Ginseng, and Saffron for a sensory delight that energizes and tantalizes, perfect for couples seeking romance and vitality.",
    price: 150,
    discountPrice: 120,
    offer: 20,
    mainImages: [snoozecubes1, snoozecubes2, snoozecubes3, snoozecubes4],
    ingredients: [
      {
        name: "Cacao",
        url: snoozeingredients1,
      },
      {
        name: "Jatamansi",
        url: snoozeingredients2,
      },
      {
        name: "Bhrami extract",
        url: snoozeingredients3,
      },
      {
        name: "Chamomile Extract",
        url: snoozeingredients4,
      },
      {
        name: "Tagar",
        url: snoozeingredients5,
      },
      {
        name: "Passion flower",
        url: snoozeingredients6,
      },
      {
        name: "Rose Oil",
        url: snoozeingredients7,
      },
      {
        name: "Melotonin",
        url: snoozeingredients8,
      },
      {
        name: "Ashwagandha",
        url: snoozeingredients9,
      },
    ],
    productDescriptionTitle: " Unwind with Nature’s Best",
    productDescriptionMain:
      "Let the serene blend of Jatamansi, Chamomile, and Ashwagandha in our Sleep and Stress Relief Chocolate guide you to peaceful slumber. Infused with natural Melatonin and the soothing aroma of Rose Oil, each organic square is a step towards tranquility. Embrace the luxurious, gentle embrace of nature’s finest ingredients, and drift into restorative sleep while supporting our planet’s well-being.",
  },
  {
    name: "Blisspops",
    description:
      "Find natural balance with Nutrachoco's Blisspops, infused with Shatavari, Siberian Ginseng, and Black Cohosh to soothe symptoms, complemented by Chamomile and Amla extract for eco-conscious comfort during your cycle.",
    price: 150,
    discountPrice: 120,
    offer: 20,
    mainImages: [blisspops1, blisspops2, blisspops3, blisspops4],
    ingredients: [
      {
        name: "Cacao",
        url: blissingredients1,
      },
      {
        name: "Shatavari",
        url: blissingredients2,
      },
      {
        name: "Ginseng (Siberian)",
        url: blissingredients3,
      },
      {
        name: "Amla extract",
        url: blissingredients4,
      },
      {
        name: "Black Cohosh",
        url: blissingredients5,
      },
      {
        name: "Tulsi Extract",
        url: blissingredients6,
      },
      {
        name: "Burdock root",
        url: blissingredients7,
      },
      {
        name: "Chamomile Extract",
        url: blissingredients8,
      },
      {
        name: "Licorice",
        url: blissingredients9,
      },
      {
        name: "Moringa",
        url: blissingredients10,
      },
      {
        name: "Ashwagandha",
        url: blissingredients11,
      },
      {
        name: "Saffron",
        url: blissingredients12,
      },
    ],
    productDescriptionTitle: "Harmonize Your Body, Naturally",
    productDescriptionMain:
      "Experience the soothing elegance of our PCOD/PMS Relief Chocolate, designed to bring balance and comfort during your cycle. Infused with the healing essences of Shatavari, Siberian Ginseng, and Black Cohosh, our chocolate offers a luxurious, organic remedy to alleviate symptoms naturally. Enhanced with the calming properties of Chamomile and the rejuvenating power of Amla extract, each bite supports your body’s harmony and health, the eco-conscious way.",
  },
  {
    name: "Beautyboms",
    description:
      "Glow from within with Nutrachoco's Skin and Hair Enhancement Chocolate, rich in Brahmi, Gotu Kola, and Bhringraj for nourished skin and strengthened hair, accompanied by Green Tea and essential vitamins E and C for radiant beauty and sustainable wellness.",
    price: 150,
    discountPrice: 120,
    offer: 20,
    mainImages: [beautybombs1, beautybombs2, beautybombs3, beautybombs4],
    ingredients: [
      {
        name: "Cacao",
        url: beautyingredient1,
      },
      {
        name: "Gokshura",
        url: beautyingredient2,
      },
      {
        name: "Amla",
        url: beautyingredient3,
      },
      {
        name: "Lavender oil",
        url: beautyingredient4,
      },
      {
        name: "Green Tea extract",
        url: beautyingredient5,
      },
      {
        name: "Brhami",
        url: beautyingredient6,
      },
      {
        name: "Gotu Kola",
        url: beautyingredient7,
      },
      {
        name: "Reishi",
        url: beautyingredient8,
      },
      {
        name: "Bhringraj",
        url: beautyingredient9,
      },
      {
        name: "Vitamin E",
        url: beautyingredient10,
      },
      {
        name: "Vitamin C",
        url: beautyingredient11,
      },
    ],
    productDescriptionTitle: "Radiate Beauty from Within",
    productDescriptionMain:
      "Indulge in the luxury of Nutrachoco’s Aphrodisiac Chocolate, expertly blended to kindle desire and enhance vitality. Each piece is a symphony of organic ingredients like Maca Root, Ginseng, and exotic Saffron, sourced with an unwavering commitment to environmental stewardship. Enriched with the natural prowess of Ashwagandha and Moringa, this chocolate not only delights the senses but also invigorates the spirit. Perfect for couples seeking a sweet spark of romance and energy.",
  },
];


function ProductImage({ src, alt, className }) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}

function ProductInfo({ title, description, price, salePrice, discount }) {
  return (
    <div className="flex flex-col  text-yellow-950 max-md:max-w-full">
      <h1 className="text-5xl font-bold capitalize leading-[55.2px] max-md:max-w-full max-md:text-4xl">
        {title}
      </h1>
      <p className="mt-7 text-[16px] leading-5 max-md:max-w-full">
        {description}
      </p>
      <div className="flex font-semibold items-center mt-10 text-3xl w-3/4">
        <div className='relative mr-5'>
          <div className="flex-auto  my-auto ">₹{price}</div>
          <div className="border-yellow-950 border-2 left-0 right-0 top-[35%] absolute"></div>
        </div>
        <div className="flex-auto self-stretch my-auto">₹{salePrice}</div>
        <div className="justify-center self-stretch md:px-6 md:py-3 px-4 py-2.5 text-base text-white capitalize bg-yellow-950">
          {discount}% OFF
        </div>
      </div>
      <hr className="shrink-0 mt-9 h-px bg-black border border-black border-solid max-md:max-w-full" />
    </div>
  );
}

function ProductUnit() {
  return (
    <div className="flex flex-col text-base font-bold capitalize whitespace-nowrap text-yellow-950 max-md:mt-8">
      <div className="m-2">Unit</div>
      <select
        className="  fill-yellow-950 w-full p-3 border-yellow-950 border-2 "
        name="units"
        id="units"
      >
        <option value="rupees">Rupees</option>
        <option value="usd">USD</option>
      </select>
    </div>
  );
}

function ProductPack() {
  return (
    <div className="flex flex-col text-base font-bold capitalize whitespace-nowrap text-yellow-950 max-md:mt-8">
      <div className="m-2">Pack</div>
      <select
        className="  fill-yellow-950 w-full p-3 border-yellow-950 border-2 "
        name="units"
        id="units"
      >
        <option value="rupees">None</option>
        <option value="rupees">Pack of 10</option>
        <option value="usd">Pack of 5</option>
      </select>
      <button className="justify-center px-12 py-4 mt-8 text-base font-bold text-center text-white capitalize bg-yellow-950 max-md:px-5">
        Add to Cart
      </button>
    </div>
  );
}

function ProductReview() {
  return (
    <>
      <div className="mt-20 text-base font-bold capitalize text-[#A6896C] max-md:mt-10 max-md:max-w-full">
        Your Review
      </div>
      <textarea className="shrink-0 mt-3.5 border border-black border-solid h-[140px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between mt-5 text-base font-bold capitalize max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col text-stone-500">
          <div className="pb-2 text-[#A6896C]">Your Rating</div>
          <div className="grid grid-cols-5 gap-1">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
        <button className="justify-center self-start px-9 py-4 text-center text-white whitespace-nowrap bg-yellow-950 max-md:px-5">
          Submit
        </button>
      </div>
    </>
  );
}

function ProductDescription({chocolateID}) {
  return (
    <section className="flex flex-col px-5 text-center capitalize">
      <h2 className="self-center text-3xl font-bold leading-[55.04px] text-yellow-950">
        Product Description
      </h2>
      <p className="mt-8 w-full text-base text-black max-md:mt-10 max-md:max-w-full">
        <span className="font-bold text-[#A6896C]">
          {chocolates[chocolateID - 1].productDescriptionTitle}
        </span>
        <br />
        <br />
        {chocolates[chocolateID - 1].productDescriptionMain}
      </p>
    </section>
  );
}

function Singleproductpage() {
  const {chocolateID} = useParams()
  console.log(chocolateID);
  if (chocolateID > 0 && chocolateID <= 4) {
      const productImages = [
        {
          src: chocolates[chocolateID - 1].mainImages[0],
          alt: "Product image 1",
          className:
            "shrink-0 max-w-full  aspect-square w-[150px] max-md:mt-8 ",
        },
        {
          src: chocolates[chocolateID - 1].mainImages[1],
          className: "shrink-0 max-w-full  aspect-square w-[150px] max-md:mt-8",
        },
        {
          src: chocolates[chocolateID - 1].mainImages[2],
          alt: "Product image 3",
          className: "shrink-0 max-w-full  aspect-square w-[150px] max-md:mt-8",
        },
        {
          src: chocolates[chocolateID - 1].mainImages[3],
          alt: "Product image 4",
          className: "shrink-0 max-w-full aspect-square w-[150px] max-md:mt-8",
        },
      ];

      return (
        <div className="flex flex-col justify-center bg-white font-display">
          <div className="flex justify-center items-center px-16 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
            <div className="mt-16 w-full max-w-[1281px]  max-md:my-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow  max-md:mt-10 max-md:max-w-full">
                    <ProductImage
                      src={chocolates[chocolateID - 1].mainImages[0]}
                      alt="Main product image"
                      className="self-center max-w-full  aspect-square w-[550px]"
                    />
                    <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-4 max-md:w-3/4 max-md:mt-0 max-md:gap-0 ">
                        {productImages.map((image, index) => (
                          <div
                            key={index}
                            className="flex flex-col w-3/4 max-md:ml-0 max-md:w-full"
                          >
                            <ProductImage
                              src={image.src}
                              alt={image.alt}
                              className={image.className}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-16 w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                    <ProductInfo
                      title={chocolates[chocolateID - 1].name}
                      description={chocolates[chocolateID - 1].description}
                      price={chocolates[chocolateID - 1].price}
                      salePrice={chocolates[chocolateID - 1].discountPrice}
                      discount={chocolates[chocolateID - 1].offer}
                    />
                    <div className="mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                          <ProductUnit />
                        </div>
                        <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                          <ProductPack />
                        </div>
                      </div>
                    </div>
                    <ProductReview />
                  </div>
                </div>
              </div>
              <div className="mt-32">
                <ProductDescription chocolateID={chocolateID} />
              </div>
              <div className="flex justify-center items-center flex-col mt-10">
                <div className="self-center text-3xl font-bold leading-[45.04px] text-yellow-950">
                  Ingredients
                </div>
                <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-10 font-bold mt-16">
                  {chocolates[chocolateID - 1].ingredients.map(
                    (ingredient, key) => (
                      <div
                        key={key}
                        className={`flex flex-col items-center justify-center`}
                      >
                        <div className="flex flex-col items-center gap-4">
                          <img src={ingredient.url} alt={ingredient.name} />
                          <div>{ingredient.name}</div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
  else {
    return <div className='flex flex-col items-center justify-center text-6xl mt-10 font-semibold font-display'>
      No Chocolate Found
    </div>
  }

}

export default Singleproductpage;