import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { ChevronRightIcon, SearchIcon, UserIcon } from "lucide-react";

const productData = [
  {
    id: 1,
    image: "/src/Home_Page_Task/Rectangle_570-1.png",
    price: "₹22,323",
    originalPrice: "₹22,323",
    name: "Yemeraly Wings Diamond...",
    badge: "TRENDING",
    badgeColor: "bg-[#dceef6]",
    discount: "10 % on off Making Charges",
  },
  {
    id: 2,
    image: "/src/HomePage_Task/Rectangl_1771.png",
    price: "₹22,323",
    originalPrice: "₹22,323",
    name: "Yemeraly Wings Diamond...",
    badge: "BEST SELLER",
    badgeColor: "bg-[#fde3e3]",
    discount: "10 % on Making Charges",
  },
  {
    id: 3,
    image: "/src/Home_Page_Task/Rectangle 570-1.png",
    price: "₹22,323",
    originalPrice: "₹22,323",
    name: "Yemeraly Wings Diamond...",
    badge: "NEW",
    badgeColor: "bg-[#bcceff]",
    discount: "10 % on Making Charges",
  },
  {
    id: 4,
    image: "/src/Home_Page_Task/Rectangle 570-1.png",
    price: "₹22,323",
    originalPrice: "₹22,323",
    name: "Yemeraly Wings Diamond...",
    badge: "TRENDING",
    badgeColor: "bg-[#dceef6]",
    discount: "10 % on Making Charges",
  },
  {
    id: 5,
    image: "/src/Home_Page_Task/Rectangle 570-1.png",
    price: "₹22,323",
    originalPrice: "₹22,323",
    name: "Yemeraly Wings Diamond...",
    badge: "TRENDING",
    badgeColor: "bg-[#dceef6]",
    discount: "10 % on Making Charges",
  },
];

const categoryImages = [
  { id: 1, image: "/src/Home_Page_Task/Rectangle 570-1.png", span: "col-span-1" },
  { id: 2, image: "//src/Home_Page_Task/Rectangle 570-1.png", span: "col-span-1" },
  { id: 3, image: "/image-181.png", span: "col-span-1" },
  { id: 4, image: "/image-182.png", span: "col-span-1" },
  { id: 5, image: "/image-183.png", span: "col-span-1" },
  { id: 6, image: "/image-184.png", span: "col-span-1" },
];

const genderCategories = [
  { id: 1, image: "/image-185.png" },
  { id: 2, image: "/image-186.png" },
  { id: 3, image: "/image-187.png" },
  { id: 4, image: "/image-188.png" },
];

const reviewData = [
  {
    id: 1,
    name: "Himesh",
    date: "May 25 ,2022",
    rating: 4.5,
    text: "Talk about a range of elements, including customer  service. Be detailed, specific, and honest. Leave outlinks and personal information.",
  },
  {
    id: 2,
    name: "Himesh",
    date: "May 25 ,2022",
    rating: 4.5,
    text: "Talk about a range of elements, including customer  service. Be detailed, specific, and honest. Leave outlinks and personal information.",
  },
  {
    id: 3,
    name: "Himesh",
    date: "May 25 ,2022",
    rating: 4.5,
    text: "Talk about a range of elements, including customer  service. Be detailed, specific, and honest. Leave outlinks and personal information.",
  },
];

const newsData = [
  {
    id: 1,
    logo: "/image-258.png",
    text: "Ratan Tata-backed BlueStonevaluation tops $410Min latest round.",
  },
  {
    id: 2,
    logo: "/image-258.png",
    text: "Ratan Tata-backed BlueStonevaluation tops $410Min latest round.",
  },
  {
    id: 3,
    logo: "/image-259.png",
    text: "Ratan Tata-backed BlueStonevaluation tops $410Min latest round.",
  },
  {
    id: 4,
    logo: "/image-260.png",
    text: "Ratan Tata-backed BlueStonevaluation tops $410Min latest round.",
  },
];

const collectionImages = [
  { id: 1, image: "/src/Home_Page_Task/image 11.pngg" },
  { id: 2, image: "/image-163.png" },
  { id: 3, image: "/image-164.png" },
  { id: 4, image: "/image-165.png" },
  { id: 5, image: "/image-166.png" },
  { id: 6, image: "/image-167.png" },
];

const categoryCircles = [
  { id: 1, name: "Rings", image: "/rectangle-1771.png", ellipse: "/ellipse-193.png" },
  { id: 2, name: "Earrings", image: "/src/Home_Page_Task/image 11.png", ellipse: "/ellipse-21.svg" },
  { id: 3, name: "Tanmaniya", image: "/kisspng-necklace-orra-jewellery-tanmaniya-diamond-mangalsutra-5b.png", ellipse: "/ellipse-21.svg" },
  { id: 4, name: "Bangles", image: "/4-26813.png", ellipse: "/ellipse-21.svg" },
  { id: 5, name: "Bracelets", image: "/3-84.png", ellipse: "/ellipse-21.svg" },
  { id: 6, name: "Pendants", image: "/image-75.png", ellipse: "/ellipse-21.svg" },
  { id: 7, name: "Rings", image: "/rectangle-1771.png", ellipse: "/ellipse-21.svg" },
];

const navItems = [
  "NEW ARRIVAL",
  "RINGS",
  "EARRINGS",
  "PENDANTS",
  "BRACELETS & BANGLES",
  "SOLITIARES",
  "GOLD COINS",
  "ALL JEWELLERY",
];

export const Green = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full relative">
<header className="sticky top-0 z-50 w-full bg-white">
<div className="w-full h-6 bg-[#009278]">
<div className="flex items-center justify-between px-4 h-full flex-wrap gap-2 md:flex-nowrap">
<div className="flex items-center gap-2 text-xs md:text-sm">
<span className="[font-family:'Mulish',Helvetica] font-normal text-white text-[8px] md:text-[9px] hidden sm:inline">
Refer and earn extra discount{" "}
              </span>
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#521cc5] text-[8px] md:text-[9px] hidden sm:inline">
Click here...
              </span>
</div>
<div className="flex items-center gap-2">
<span className="[font-family:'Mulish',Helvetica] font-semibold text-white text-[9px] md:text-[11px]">
Pincode
              </span>
</div>
</div>
</div>
<div className="w-full h-auto md:h-[83px] bg-[#00d5ac05] shadow-[0px_2px_2px_#00000040]">
<div className="flex flex-col md:flex-row items-center justify-between px-3 md:px-5 py-3 md:py-0 md:h-full gap-3 md:gap-0">
<div className="flex items-center gap-2 md:gap-4">
<div className="relative w-32 md:w-44 h-[40px] md:h-[50px]">
<img
                  className="absolute top-0 left-0 w-[60px] h-[50px]"
                  alt="Group"
                  src="/group-7743.svg"
                />
<div className="absolute top-1 md:top-1.5 left-12 md:left-[66px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Avenir-Roman',Helvetica] font-normal text-black text-sm md:text-xl tracking-[2px] md:tracking-[5.00px]">
GEMLAY
                </div>
<div className="absolute top-5 md:top-[31px] left-24 md:left-[163px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Avenir-Regular',Helvetica] font-normal text-[6px] md:text-[7.5px]">
<span className="text-black">BY </span>
<span className="[font-family:'Avenir-Medium',Helvetica] font-medium text-[#009278]">
GARNET LANEE
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-2 md:gap-4 flex-1 justify-center px-2 md:px-0 hidden sm:flex">
<div className="relative w-full md:w-[451px]">
<Input
                  className="w-full h-[30px] bg-white rounded-[40px] border border-solid border-[#002433] pl-4 pr-4 [font-family:'Mulish',Helvetica] font-normal text-[#bcb7af] text-[10px] md:text-[11px]"
                  placeholder="SearchIcon Products...."
                />
</div>
</div>
<div className="flex items-center gap-3 md:gap-8 flex-wrap md:flex-nowrap justify-center md:justify-start">
<div className="flex items-center gap-2 md:gap-4">
<div className="flex flex-col items-center gap-1">
<img className="w-4 md:w-5 h-4 md:h-5" alt="Group" src="/group.svg" />
<span className="[font-family:'Mulish',Helvetica] font-semibold text-black text-[9px] md:text-[11px]">
GSP
                  </span>
</div>
<Separator orientation="vertical" className="h-8 md:h-12 bg-[#efefef]" />
<div className="flex flex-col items-center gap-1">
<img className="w-4 md:w-5 h-4 md:h-5" alt="Black" src="/black-2.svg" />
<span className="[font-family:'Mulish',Helvetica] font-semibold text-black text-[9px] md:text-[11px]">
OFFERS
                  </span>
</div>
<Separator orientation="vertical" className="h-8 md:h-12 bg-[#efefef]" />
<div className="flex flex-col items-center gap-1">
<img className="w-4 md:w-5 h-4 md:h-5" alt="Wishlist" src="/wishlist.png" />
<span className="[font-family:'Mulish',Helvetica] font-semibold text-black text-[9px] md:text-[11px]">
WISHLIST
                  </span>
</div>
<Separator orientation="vertical" className="h-8 md:h-12 bg-[#efefef]" />
<div className="flex flex-col items-center gap-1">
<img className="w-4 md:w-5 h-4 md:h-5" alt="Black" src="/black-1.svg" />
<span className="[font-family:'Mulish',Helvetica] font-semibold text-black text-[9px] md:text-[11px]">
CART
                  </span>
</div>
<Separator orientation="vertical" className="h-8 md:h-12 bg-[#efefef]" />
<div className="flex flex-col items-center gap-1">
<img className="w-4 md:w-5 h-4 md:h-5" alt="Image traced" src="/image-63--traced-.svg" />
<span className="[font-family:'Mulish',Helvetica] font-semibold text-black text-[9px] md:text-[11px]">
VERIFY REPORT
                  </span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-4 md:w-5 h-4 md:h-5 rounded-[9.99px/9.98px] border border-solid border-[#dfe1de] bg-[linear-gradient(180deg,rgba(237,237,237,1)_0%,rgba(255,255,255,1)_100%)] flex items-center justify-center">
<img className="w-2 h-2" alt="Profile" src="/profile.svg" />
</div>
<div className="flex flex-col hidden sm:block">
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#2c3875] text-[11px] md:text-[13px] text-center tracking-[-0.28px]">
Hi, Ashish Sood
                  </span>
<div className="w-full h-0.5 bg-[#007a64] rounded-[20px]" />
</div>
</div>
</div>
</div>
</div>
<nav className="w-full h-auto md:h-[42px] bg-neutral-100 overflow-x-auto">
<div className="flex items-center justify-start md:justify-center gap-3 md:gap-8 h-full px-3 md:px-14 py-2 md:py-0 min-w-max md:min-w-0">
{navItems.map((item, index) => (
              <span
                key={index}
                className={`[font-family:'Mulish',Helvetica] text-[10px] md:text-[13px] tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer hover:text-[#007a64] transition-colors ${
                  index === 0 ? "font-bold text-neutral-700" : "font-normal text-black"
                }`}
              >
{item}
              </span>
))}
          </div>
</nav>
</header>
<section className="relative w-full h-auto md:h-[776px] min-h-[600px] md:min-h-auto">
<img
          className="absolute top-0 left-0 w-full h-[250px] md:h-[480px] object-cover"
          alt="Hero Banner"
          src="/image-276.png"
        />
<div className="absolute top-[280px] md:top-[540px] left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-12 flex-wrap justify-center w-full px-2">
{categoryCircles.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="relative w-[80px] md:w-[113px] h-[80px] md:h-[113px]">
<img
                  className="absolute top-0 left-0 w-full h-full"
                  alt="Ellipse"
                  src={category.ellipse}
                />
<img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[90px] max-h-[90px] object-cover"
                  alt={category.name}
                  src={category.image}
                />
</div>
<span className="[font-family:'Avenir_LT_Pro-Roman',Helvetica] font-normal text-[#302f2f] text-[11px] md:text-[15px] text-center">
{category.name}
              </span>
<img className="w-[15px] md:w-[23px] h-1" alt="Group" src="/group-7559.png" />
</div>
))}
        </div>
<div className="absolute top-[478px] left-0 w-[89px] h-[73px]">
<img
            className="absolute top-0 left-0.5 w-[87px] h-[71px]"
            alt="Group"
            src="/group-7419.png"
          />
<div className="absolute top-[51px] left-[33px] [font-family:'Mulish',Helvetica] font-bold text-white text-[8px] tracking-[-0.28px] leading-[22px] whitespace-nowrap">
Spin to Win
          </div>
<div className="absolute top-[27px] left-12 w-[9px] h-[9px] rounded-[4.5px/4.49px] bg-[linear-gradient(180deg,rgba(1,36,51,1)_0%,rgba(0,122,100,1)_100%)]" />
</div>
<div className="absolute top-[680px] left-0 w-[147px] bg-white rounded-[0px_10px_10px_0px] border border-solid border-[#007a64] shadow-[0px_2px_2px_#00000040] p-2">
<img
            className="w-[58px] h-[62px] object-cover mb-2"
            alt="Image"
            src="/image-244.png"
          />
<div className="[font-family:'Mulish',Helvetica] font-normal text-[#c90000] text-[10px] text-center tracking-[-0.28px] leading-[18px] whitespace-nowrap">
Anuya from Hyderabad
          </div>
<div className="[font-family:'Mulish',Helvetica] font-bold text-[#302f2f] text-[10px] tracking-[-0.28px] leading-[18px] whitespace-nowrap">
Carry Fire Diamond Rings
          </div>
<div className="[font-family:'Mulish',Helvetica] font-semibold text-[#c90000] text-[9px] text-center tracking-[-0.28px] leading-[18px] whitespace-nowrap">
about 10 minutes ago
          </div>
</div>
<div className="absolute top-[680px] right-[78px]">
<img className="w-14 h-[55px]" alt="Group" src="/group-7461.png" />
</div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14">
<div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 mb-8 md:mb-12">
<div className="flex items-center gap-4 w-full lg:w-auto">
<div className="w-full md:w-[654px] h-[180px] md:h-[215px] rounded-[117px] border-[none] bg-[linear-gradient(92deg,rgba(248,246,246,1)_0%,rgba(248,246,246,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[117px] before:[background:linear-gradient(89deg,rgba(217,217,217,0.14)_0%,rgba(217,217,217,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
<div className="absolute top-[9px] left-[9px] w-[638px] h-[196px] rounded-[117px] bg-[linear-gradient(92deg,rgba(242,242,242,1)_0%,rgba(248,246,246,0)_100%)]" />
<div className="absolute top-[45px] left-[76px] flex flex-col gap-2">
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#302f2f] text-4xl tracking-[0] leading-[normal]">
EXPRESS
                </span>
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-4xl tracking-[0] leading-[normal]">
DELIVERY
                </span>
</div>
<img
                className="absolute top-[126px] left-[310px] w-[185px] h-[38px]"
                alt="Vector"
                src="/vector-14.svg"
              />
<img
                className="absolute top-0 left-[344px] w-[237px] h-[261px] object-cover"
                alt="Delivery truck"
                src="/delivery-truck-4637488-3871590-5.png"
              />
</div>
</div>
<Separator orientation="vertical" className="hidden lg:block h-[140px] bg-[#f9f4f4]" />
<div className="flex items-center gap-4 w-full lg:w-auto">
<div className="w-full md:w-[659px] h-[180px] md:h-[215px] rounded-[117px] border-[none] rotate-180 bg-[linear-gradient(92deg,rgba(248,246,246,1)_0%,rgba(248,246,246,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[117px] before:[background:linear-gradient(89deg,rgba(217,217,217,0.14)_0%,rgba(217,217,217,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
<div className="absolute top-[10px] left-0 w-[650px] h-[196px] rounded-[117px] rotate-180 bg-[linear-gradient(90deg,rgba(242,242,242,1)_0%,rgba(248,246,246,0)_100%)]" />
<div className="absolute top-[57px] right-[41px] flex flex-col gap-2 rotate-180">
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#302f2f] text-4xl tracking-[0] leading-[normal]">
SPECIAL
                </span>
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-4xl tracking-[0] leading-[normal]">
DISCOUNT
                </span>
</div>
<img
                className="absolute top-[123px] right-[10px] w-[154px] h-[57px] rotate-180"
                alt="Vector"
                src="/vector-15.svg"
              />
<img
                className="absolute top-[25px] right-[95px] w-[252px] h-[165px] object-cover rotate-180"
                alt="Image"
                src="/image-168.png"
              />
</div>
</div>
</div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14">
<div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
<div className="flex items-center gap-2 md:gap-4">
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
<div className="flex flex-col items-center gap-2">
<h2 className="[font-family:'Mulish',Helvetica] font-medium text-[#161212] text-lg md:text-xl tracking-[0] leading-[normal]">
COLLECTIONS
              </h2>
<p className="[font-family:'Avenir_LT_Pro-Medium',Helvetica] font-medium text-[#007a64] text-[12px] md:text-[15px] tracking-[1.5px] md:tracking-[2.25px] leading-[normal] text-center">
DISCOVER YOUR WORLD OF JEWELLERY
              </p>
</div>
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 w-full">
{collectionImages.map((item) => (
            <img
              key={item.id}
              className="w-full h-[205px] rounded-[20px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
              alt="Collection"
              src={item.image}
            />
))}
        </div>
<div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[13px] tracking-[1.30px] leading-[normal]">
DISCOVER ALL
          </span>
<ChevronRightIcon className="w-[7px] h-2.5 text-[#007a64]" />
</div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14 bg-gradient-to-br from-[#f8f6f6] to-transparent">
<div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
<div className="flex items-center gap-2 md:gap-4">
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
<div className="flex flex-col items-center gap-2">
<h2 className="[font-family:'Mulish',Helvetica] font-bold text-[#302f2f] text-lg md:text-xl tracking-[0] leading-[normal]">
TRENDING PRODUCTS
              </h2>
<p className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[12px] md:text-[15px] tracking-[1.5px] md:tracking-[2.25px] leading-[normal] text-center">
DISCOVER YOUR WORLD OF JEWELLERY
              </p>
</div>
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-8 w-full">
{productData.map((product) => (
            <Card key={product.id} className="bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
<CardContent className="p-0">
<div className="relative">
<img
                    className="w-full h-[250px] rounded-t-[20px] object-cover"
                    alt={product.name}
                    src={product.image}
                  />
<Badge
                    className={`absolute top-3 left-2 ${product.badgeColor} rounded-[20px] px-4 py-1 [font-family:'Mulish',Helvetica] font-medium text-[#302f2f] text-[9px] tracking-[-0.28px] leading-[18px]`}
                  >
{product.badge}
                  </Badge>
<div className="absolute top-3 right-3">
<img className="w-[22px] h-[71px]" alt="Group" src="/group-7490.png" />
</div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2f] text-xl tracking-[0] leading-[normal]">
{product.price}
                    </span>
<div className="flex flex-col">
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2f] text-[13px] tracking-[0] leading-[normal] line-through">
{product.originalPrice}
                      </span>
</div>
</div>
<p className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[13px] tracking-[-0.28px] leading-[18px] mb-2">
{product.name}
                  </p>
<p className="[font-family:'Mulish',Helvetica] font-bold text-[#16a06e] text-[11px] tracking-[-0.28px] leading-[18px] mb-3">
{product.discount}
                  </p>
<div className="flex items-center gap-2 mb-3">
<img
                      className="w-3 h-3"
                      alt="Image traced"
                      src="/image-136--traced-.svg"
                    />
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[13px] tracking-[-0.28px] leading-[18px]">
View Similar
                    </span>
</div>
<Button className="w-full h-[41px] rounded-[10px] bg-[linear-gradient(90deg,rgba(1,36,51,1)_0%,rgba(0,122,100,1)_100%)] [font-family:'Mulish',Helvetica] font-bold text-white text-[13px] tracking-[0] leading-[normal]">
Buy Now
                  </Button>
</div>
</CardContent>
</Card>
))}
        </div>
<div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[13px] tracking-[1.30px] leading-[normal]">
DISCOVER ALL
          </span>
<ChevronRightIcon className="w-[7px] h-2.5 text-[#007a64]" />
</div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14 bg-gradient-to-br from-[#f8f6f6] to-transparent">
<div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
<div className="flex items-center gap-2 md:gap-4">
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
<div className="flex flex-col items-center gap-2">
<h2 className="[font-family:'Mulish',Helvetica] font-bold text-[#302f2f] text-lg md:text-xl text-center tracking-[0] leading-[normal]">
BEST SELLERS
              </h2>
<p className="[font-family:'Mulish',Helvetica] font-medium text-[#9f9c9c] text-[12px] md:text-[15px] tracking-[1.5px] md:tracking-[2.25px] leading-[normal] text-center">
DISCOVER YOUR WORLD OF JEWELLERY
              </p>
</div>
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-8 w-full">
{productData.map((product) => (
            <Card key={`best-${product.id}`} className="bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
<CardContent className="p-0">
<div className="relative">
<img
                    className="w-full h-[250px] rounded-t-[20px] object-cover"
                    alt={product.name}
                    src={product.image}
                  />
<Badge
                    className={`absolute top-3 left-2 ${product.badgeColor} rounded-[20px] px-4 py-1 [font-family:'Mulish',Helvetica] font-medium text-[#302f2f] text-[9px] tracking-[-0.28px] leading-[18px]`}
                  >
{product.badge}
                  </Badge>
<div className="absolute top-3 right-3">
<img className="w-[22px] h-[71px]" alt="Group" src="/group-7552.png" />
</div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2f] text-xl tracking-[0] leading-[normal]">
{product.price}
                    </span>
<div className="flex flex-col">
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2f] text-[13px] tracking-[0] leading-[normal] line-through">
{product.originalPrice}
                      </span>
</div>
</div>
<p className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[13px] tracking-[-0.28px] leading-[18px] mb-2">
{product.name}
                  </p>
<p className="[font-family:'Mulish',Helvetica] font-bold text-[#16a06e] text-[11px] tracking-[-0.28px] leading-[18px] mb-3">
{product.discount}
                  </p>
<div className="flex items-center gap-2 mb-3">
<img
                      className="w-3 h-3"
                      alt="Image traced"
                      src="/image-136--traced-.svg"
                    />
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[13px] tracking-[-0.28px] leading-[18px]">
View Similar
                    </span>
</div>
<Button className="w-full h-[41px] rounded-[10px] bg-[linear-gradient(90deg,rgba(1,36,51,1)_0%,rgba(0,122,100,1)_100%)] [font-family:'Mulish',Helvetica] font-bold text-white text-[13px] tracking-[0] leading-[normal]">
Buy Now
                  </Button>
</div>
</CardContent>
</Card>
))}
        </div>
<div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[13px] tracking-[1.30px] leading-[normal]">
DISCOVER ALL
          </span>
<ChevronRightIcon className="w-[7px] h-2.5 text-[#007a64]" />
</div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14">
<div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
<div className="flex items-center gap-2 md:gap-4">
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
<div className="flex flex-col items-center gap-2">
<h2 className="[font-family:'Mulish',Helvetica] font-bold text-[#302f2f] text-lg md:text-xl tracking-[0] leading-[normal]">
CATEGORY
              </h2>
<p className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[12px] md:text-[15px] tracking-[1.5px] md:tracking-[2.25px] leading-[normal] text-center">
DISCOVER YOUR WORLD OF JEWELLERY
              </p>
</div>
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 w-full">
<img
            className="w-full h-[200px] md:h-[300px] rounded-[15px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
            alt="Category"
            src="/image-179.png"
          />
<img
            className="w-full h-[200px] md:h-[300px] rounded-[15px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
            alt="Category"
            src="/image-180.png"
          />
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8 w-full">
{categoryImages.slice(2).map((item) => (
            <img
              key={item.id}
              className="w-full h-[293px] rounded-[15px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
              alt="Category"
              src={item.image}
            />
))}
        </div>
<div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[13px] tracking-[1.30px] leading-[normal]">
DISCOVER ALL
          </span>
<ChevronRightIcon className="w-[7px] h-2.5 text-[#007a64]" />
</div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14 bg-gradient-to-br from-[#f8f6f6] to-transparent">
<div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
<div className="flex items-center gap-2 md:gap-4">
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
<div className="flex flex-col items-center gap-2">
<h2 className="[font-family:'Mulish',Helvetica] font-bold text-[#302f2f] text-lg md:text-xl text-center tracking-[0] leading-[normal]">
SHOP BY GENDER
              </h2>
<p className="[font-family:'Mulish',Helvetica] font-medium text-[#9f9c9c] text-[12px] md:text-[15px] tracking-[1.5px] md:tracking-[2.25px] leading-[normal] text-center">
DISCOVER YOUR WORLD OF JEWELLERY
              </p>
</div>
<div className="w-[50px] md:w-[99px] h-px bg-[#007a64]" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 w-full">
{genderCategories.map((item) => (
            <img
              key={item.id}
              className="w-full h-[285px] rounded-[15px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
              alt="Gender Category"
              src={item.image}
            />
))}
        </div>
<div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[13px] tracking-[1.30px] leading-[normal]">
DISCOVER ALL
          </span>
<ChevronRightIcon className="w-[7px] h-2.5 text-[#007a64]" />
</div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14 bg-gradient-to-br from-[#f8f6f6] to-transparent">
<div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
<div className="flex items-center gap-2 md:gap-4">
<div className="w-[50px] h-px bg-[#00c29f]" />
<div className="flex flex-col items-center gap-2">
<h2 className="[font-family:'Mulish',Helvetica] font-bold text-[#302f2f] text-lg md:text-xl text-center tracking-[0] leading-[normal]">
CUSTOMER REVIEWS
              </h2>
<p className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[12px] md:text-[15px] tracking-[1.5px] md:tracking-[2.25px] leading-[normal] text-center">
KNOW ABOUT WHAT OTHERS THINK
              </p>
</div>
<div className="w-[50px] h-px bg-[#00c29f]" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
{reviewData.map((review) => (
            <Card key={review.id} className="bg-white rounded-[15px] border border-solid border-[#009278] shadow-lg">
<CardContent className="p-6">
<div className="flex items-center gap-3 mb-4">
<img
                    className="w-[15px] h-[15px] object-cover"
                    alt="Profile"
                    src="/image-248.png"
                  />
<div className="flex flex-col">
<span className="[font-family:'Mulish',Helvetica] font-bold text-[#302f2f] text-[15px] tracking-[0] leading-[normal]">
{review.name}
                    </span>
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#5ad8c2] text-[11px] tracking-[0] leading-[normal]">
{review.date}
                    </span>
</div>
</div>
<p className="[font-family:'Mulish',Helvetica] font-normal italic text-[#302f2f] text-[13px] tracking-[-0.28px] leading-[25px] mb-4">
{review.text}
                </p>
<div className="flex items-center gap-1">
<img className="w-3.5 h-3" alt="Star" src="/star-177.svg" />
<img className="w-[15px] h-[15px]" alt="Star" src="/star-176.svg" />
<img className="w-3.5 h-[15px]" alt="Star" src="/star-176.svg" />
<img className="w-[15px] h-[15px]" alt="Star" src="/star-176.svg" />
<img className="w-[15px] h-4" alt="Star" src="/star-175.png" />
</div>
</CardContent>
</Card>
))}
        </div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14">
<div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
<div className="flex items-center gap-2 md:gap-4">
<div className="w-[50px] h-px bg-[#007a64]" />
<div className="flex flex-col items-center gap-2">
<h2 className="[font-family:'Mulish',Helvetica] font-bold text-[#302f2f] text-lg md:text-xl tracking-[0] leading-[normal]">
STAY UPDATE WITH US
              </h2>
<p className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[12px] md:text-[15px] tracking-[1.5px] md:tracking-[2.25px] leading-[normal] text-center">
KNOW ABOUT WHAT OTHERS THINK
              </p>
</div>
<div className="w-[50px] h-px bg-[#007a64]" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 w-full">
{newsData.map((news) => (
            <Card key={news.id} className="bg-white rounded-[15px] border-[0.5px] border-solid border-[#009278] shadow-lg">
<CardContent className="p-6">
<img
                  className="w-[200px] h-7 object-cover mb-6"
                  alt="Logo"
                  src={news.logo}
                />
<div className="flex flex-col gap-2 mb-6">
<p className="[font-family:'Mulish',Helvetica] font-normal italic text-[#302f2f] text-[13px] text-center tracking-[-0.28px] leading-[10px]">
Ratan Tata-backed BlueStonevaluation
                  </p>
<p className="[font-family:'Mulish',Helvetica] font-normal italic text-[#302f2f] text-[13px] text-center tracking-[-0.28px] leading-[10px]">
tops $410Min latest round.
                  </p>
</div>
<div className="flex items-center justify-center mb-4">
<Button className="w-[239px] h-[53px] rounded-[20px] border border-solid border-[#efefef] bg-[linear-gradient(90deg,rgba(248,248,248,1)_0%,rgba(217,253,247,1)_100%)] [font-family:'Mulish',Helvetica] font-medium text-[#302f2f] text-[13px] tracking-[1.95px] leading-[normal]">
READ MORE
                  </Button>
</div>
<p className="[font-family:'Mulish',Helvetica] font-normal italic text-[#ff5400] text-[13px] text-center tracking-[-0.28px] leading-[10px] cursor-pointer hover:underline">
ReadMore&gt;&gt;
                </p>
</CardContent>
</Card>
))}
        </div>
<div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<span className="[font-family:'Mulish',Helvetica] font-medium text-[#007a64] text-[13px] tracking-[1.30px] leading-[normal]">
READ MORE
          </span>
<ChevronRightIcon className="w-[7px] h-2.5 text-[#007a64]" />
</div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14 bg-[linear-gradient(87deg,rgba(248,248,248,0.3)_0%,rgba(255,213,136,0.05)_100%)]">
<div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 mb-6 md:mb-8">
<div className="flex-1 w-full">
<h2 className="[font-family:'Mulish',Helvetica] font-semibold text-[#00392e] text-lg md:text-xl text-center tracking-[-0.28px] leading-[18px] mb-4">
SIGN UP TO BE A GARNET LANEE INSIDER
            </h2>
<p className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[12px] md:text-[13px] tracking-[0] leading-5 max-w-full lg:max-w-[397px] text-center lg:text-left">
Get Promotions, inspirations and the latest news about brands and
              jewellery items directly in your inbox
            </p>
</div>
<div className="flex-1 flex flex-col items-center gap-4 w-full">
<div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-[582px]">
<Input
                className="flex-1 h-[40px] md:h-[45px] bg-[#ffffffdc] rounded-[10px] border border-solid border-[#e6e6e6] [font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[10px] md:text-[11px]"
                placeholder="Email Address"
              />
<Button className="w-full sm:w-[100px] md:w-[118px] h-[40px] md:h-[45px] rounded-[10px] bg-[linear-gradient(90deg,rgba(1,36,51,1)_0%,rgba(0,122,100,1)_100%)] [font-family:'Mulish',Helvetica] font-semibold text-white text-[11px] md:text-[13px] tracking-[0] leading-[normal]">
SUBMIT
              </Button>
</div>
<div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-white rounded-[5px] border border-solid border-[#d9d9d9]" />
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[11px] md:text-[13px] tracking-[0] leading-[normal]">
Female
                </span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-white rounded-[5px] border border-solid border-[#d9d9d9]" />
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[11px] md:text-[13px] tracking-[0] leading-[normal]">
Male
                </span>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-6 md:py-12 px-3 md:px-14 bg-[#f7f7f766]">
<div className="flex flex-col items-center gap-6 md:gap-8 mb-8">
<h2 className="[font-family:'Mulish',Helvetica] font-semibold text-[#00392e] text-[13px] md:text-[15px] text-center tracking-[-0.28px] leading-[18px]">
Buy Gold Jewellery Online in India
          </h2>
<p className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[11px] md:text-[13px] tracking-[0] leading-6 md:leading-7 max-w-full lg:max-w-[983px] text-center">
Buying Jewellery Online in India is becoming common these days. Though
            many people are still sceptical of doing so. Yet, the trend of shopping
            online for anything and everything is surging exponentially. Garnet
            Lanee is one among the many reputed brands that deliver all kinds of
            diamond and gold jewellery direct to your home – Rings, Necklaces,
            Bracelets, Pendants, et al.
            <br />
<br />
History tells the folktales of the importance of jewellery in India.
            Running down through decades, trends and styles may have changed, but
            emotions attached emanates ditto affection and care.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
<div className="flex flex-col gap-4">
<h3 className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[13px] tracking-[-0.28px] leading-[18px]">
Buy Gold Jewellery Online in India
            </h3>
<Separator className="bg-[#d9d9d9ad]" />
<div className="flex items-center gap-2">
<img className="w-2 h-[9px]" alt="Polygon" src="/polygon-4.svg" />
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[13px] tracking-[-0.28px] leading-[18px]">
Variety of options
              </span>
</div>
<Separator className="bg-[#d9d9d9ad]" />
<div className="flex items-center gap-2">
<img className="w-2 h-[9px]" alt="Polygon" src="/polygon-4.svg" />
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[13px] tracking-[-0.28px] leading-[18px]">
Pay as per your convenience
              </span>
</div>
<Separator className="bg-[#d9d9d9ad]" />
<div className="flex items-center gap-2">
<img className="w-2 h-[9px]" alt="Polygon" src="/polygon-4.svg" />
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[13px] tracking-[-0.28px] leading-[18px]">
Customize as you like
              </span>
</div>
<Separator className="bg-[#d9d9d9ad]" />
<div className="flex items-center gap-2">
<img className="w-2 h-[9px]" alt="Polygon" src="/polygon-4.svg" />
<span className="[font-family:'Mulish',Helvetica] font-normal text-[#302f2f] text-[13px] tracking-[-0.28px] leading-5 whitespace-nowrap">
Crowd-free Buying Diamond Jewellery Online in India
              </span>
</div>
</div>
</div>
</section>
<footer className="relative py-6 md:py-12 px-3 md:px-14 bg-white">
<div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
<h2 className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2f] text-[13px] md:text-[15px] text-center tracking-[-0.28px] leading-[18px]">
WE WOULD LOVE TO MEET YOU ON OUR HANDLES
          </h2>
<div className="flex items-center gap-3 md:gap-4">
<img
              className="w-[24px] md:w-[28.65px] h-[24px] md:h-[28.65px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
              alt="Social"
              src="/image-277.png"
            />
<img
              className="w-[24px] md:w-[30.94px] h-[24px] md:h-[30.94px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
              alt="Social"
              src="/image-278.png"
            />
<img
              className="w-[24px] md:w-[30.94px] h-[24px] md:h-[30.94px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
              alt="Social"
              src="/image-279.png"
            />
</div>
</div>
<div className="bg-[#eafffb80] rounded-lg p-4 md:p-12">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mb-8 md:mb-12">
<div className="flex flex-col gap-4">
<h3 className="[font-family:'Mulish',Helvetica] font-bold text-[#00392e] text-[15px] tracking-[0] leading-[normal] mb-2">
OUR SERVICES
              </h3>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
GOLD RATES
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
DIGITAL GOLD
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
VARIOUS PAYMENT METHOD
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
FINANCING OPTIONS
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
GARNET LANEE ASSURANCE
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
FRANCHISE ENQUIRY
              </span>
</div>
<div className="flex flex-col gap-4">
<h3 className="[font-family:'Mulish',Helvetica] font-bold text-[#00392e] text-[15px] tracking-[0] leading-[normal] mb-2">
OUR POLICIES
              </h3>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
15-DAY RETURNS
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
FREE SHIPPING
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
LIFETIME EXCHANGE POLICY
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
RETURN AND REFUND POLICY
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
TERMS & CONDITIONS ON OFFERS
              </span>
</div>
<div className="flex flex-col gap-4">
<h3 className="[font-family:'Mulish',Helvetica] font-bold text-[#00392e] text-[15px] tracking-[0] leading-[normal] mb-2">
JEWELLERY KNOWLEDGE
              </h3>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
GOLD GUIDE
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
DIAMOND GUIDE
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
JEWELLERY GUIDE
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
SOLITIARE DIAMOND GUIDE
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
GEMSTONE GUIDE
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
CERTIFICATION GUIDE
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
JEWELLERY GIFTING
              </span>
</div>
<div className="flex flex-col gap-4">
<h3 className="[font-family:'Mulish',Helvetica] font-bold text-[#00392e] text-[15px] tracking-[0] leading-[normal] mb-2">
ABOUT US
              </h3>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2
fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
OUR VISION
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
WHY GARNET
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
BLOG
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
OUR STORY
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
OUR PROCESS
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
OUR TEAM
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
REVIEWS AND RATINGS
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#007a64] transition-colors">
PRESS RELEASE
              </span>
</div>
<div className="flex flex-col gap-4">
<h3 className="[font-family:'Mulish',Helvetica] font-bold text-[#00392e] text-[15px] tracking-[0] leading-[normal] mb-2">
Get In Touch
              </h3>
<div className="[font-family:'Mulish',Helvetica] font-normal text-[9px] tracking-[0] leading-[normal]">
<span className="font-semibold text-[#302f2fb2]">Toll Free :</span>
<span className="font-bold text-[#302f2fb2]">1800-202-0270</span>
</div>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal]">
Monday to Saturday (10 AM to 7 PM)
              </span>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal]">
99888-98866
              </span>
<a
                className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal] underline hover:text-[#007a64] transition-colors"
                href="mailto:info@garnetlanee.com"
                rel="noopener noreferrer"
                target="_blank"
              >
info@garnetlanee.com
              </a>
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-[9px] tracking-[0] leading-[normal]">
Sco.19,Sector 82 JLPL Mohali Airport Road,160055.
              </span>
<div className="flex items-center gap-2 mt-4">
<div className="w-[31px] h-[31px] bg-[#ffffffbd] rounded-[15.48px] border border-solid border-[#002433] flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
<img className="w-4 h-4" alt="Image traced" src="/image-159--traced-.svg" />
</div>
<div className="w-[31px] h-[31px] bg-white rounded-[15.48px] border border-solid border-[#002433] flex items-center justify-center cursor-pointer hover:bg-[#ffffffbd] transition-colors">
<img className="w-4 h-4" alt="Image traced" src="/image-161--traced-.svg" />
</div>
<div className="w-[31px] h-[31px] bg-white rounded-[15.48px] border border-solid border-[#002433] flex items-center justify-center cursor-pointer hover:bg-[#ffffffbd] transition-colors">
<img className="w-3 h-3" alt="Group" src="/group-26821.svg" />
</div>
</div>
<div className="flex flex-col gap-2 mt-4">
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2fb2] text-xs tracking-[0] leading-[normal]">
Download Our Application
                </span>
<div className="flex items-center gap-2">
<img
                    className="w-[127px] h-[67px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    alt="Google play badge"
                    src="/google-play-badge-logo-1.png"
                  />
<img
                    className="w-[97px] h-[29px] rounded-[5px] border border-solid border-[#736f6f] object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    alt="Download on the app"
                    src="/download-on-the-app-store-png-image-1.png"
                  />
</div>
</div>
</div>
</div>
<div className="mb-6 md:mb-8 px-2 md:px-0">
<span className="[font-family:'Mulish',Helvetica] font-semibold text-[#302f2f] text-[7px] md:text-[8px] tracking-[0] leading-[normal] text-center block">
SITE MAP | PRIVACY POLICY | TERMS AND CONDITIONS | FAQs
            </span>
</div>
<div className="w-full h-[43px] bg-[#004135] flex items-center justify-center">
<span className="[font-family:'Mulish',Helvetica] font-medium text-white text-[9px] tracking-[0] leading-[normal]">
COPYRIGHT GARNET LANEE © 2022
            </span>
</div>
</div>
</footer>
<div className="absolute top-[584px] right-[134px] flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-lg border-[0.4px] border-solid border-[#ffde69bd] flex items-center justify-center">
<div className="w-2 h-2 rounded bg-[linear-gradient(180deg,rgba(255,85,0,1)_0%,rgba(255,153,0,1)_100%)]" />
</div>
<div className="w-4 h-4 bg-white rounded-lg flex items-center justify-center">
<div className="w-2 h-2 bg-[#efefef] rounded" />
</div>
<div className="w-4 h-4 bg-white rounded-lg flex items-center justify-center">
<div className="w-2 h-2 bg-[#efefef] rounded" />
</div>
</div>
</div>
);
};