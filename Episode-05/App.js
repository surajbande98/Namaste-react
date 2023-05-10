import React from "react"

import ReactDOM from "react-dom/client"

/**
 *
 * Header
 * - Logo
 * - Nav items
 * Body
 * - Search
 * - Restro container
 *  - Restro card
 * - Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://th.bing.com/th/id/OIP.LaDpX3rqXRR7kKOG24zPbAHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const resObjList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "676192",
      name: "Sandwich Junction phase 3",
      uuid: "43f30ad9-5744-469e-973a-c3f6cdfb250e",
      city: "6",
      area: "Hinjewadi Phase-3",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "34c3c495bef9e29e61f78194a3b36cff",
      cuisines: ["Fast Food", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant:
          "sandwich-junction-phase-3-hinjewadi-phase-3-hinjewadi-phase-3",
        city: "pune",
      },
      cityState: "6",
      address:
        "HMHR+435, Phase 3, Hinjewadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057, India",
      locality: "Rajiv Gandhi Infotech Park",
      parentId: 342476,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3300,
        message: "",
        title: "Delivery Charge",
        amount: "3300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "676192",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "21 MINS",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "62392",
      name: "Hotel Tabu's",
      uuid: "a4147768-f307-4dee-9650-fcee400ffdf9",
      city: "6",
      area: "Hinjawadi",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "wlussmrxesddy5ztw3yr",
      cuisines: ["Chinese", "North Indian"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "hotel-tabus-hinjewadi-hinjewadi",
        city: "pune",
      },
      cityState: "6",
      address:
        "Fountain Market, Phase 3, Near Fire Station, Next to Megapolis Circle, Hinjawadi, Pune",
      locality: "3rd Phase",
      parentId: 102938,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT100 off",
        shortDescriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3300,
        message: "",
        title: "Delivery Charge",
        amount: "3300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "62392",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "21 MINS",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "513293",
      name: "A1 Biryani House",
      uuid: "abd9defc-9e84-41bd-94ab-59e1b92b7aad",
      city: "6",
      area: "Hinjawadi",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "qzptnexmmniafew4ydqi",
      cuisines: ["Biryani"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 4.599999904632568,
      slugs: {
        restaurant: "a-1-biryani-house-hinjewadi-hinjewadi",
        city: "pune",
      },
      cityState: "6",
      address:
        "SR NO. 358, WIPRO CIRCLE PH-2, HINJEWADI, MAAN, MULSHI, PUNE 411057",
      locality: "2nd Phase",
      parentId: 25041,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4100,
        message: "",
        title: "Delivery Charge",
        amount: "4100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "513293",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 4.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "21 MINS",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "622096",
      name: "MOJO Pizza - 2X Toppings",
      uuid: "d03e546f-d79c-4c2f-839e-56e74bdc02de",
      city: "6",
      area: "Hinjawadi",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "1f869d461b2e02893ff4c42b8f41bc43",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: "mojo-pizza-2x-topping-hinjewadi-hinjewadi-phase-3",
        city: "pune",
      },
      cityState: "6",
      address:
        "Shop No 15/16, Gawariwadi, A/P - Maan, Taluka - Mulshi, Pune, Mulshi & Vella, Pune PMC & Rural, Maharashtra-412115",
      locality: "Hinjewadi",
      parentId: 11329,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3300,
        message: "",
        title: "Delivery Charge",
        amount: "3300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "622096",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "22 MINS",
    },
  },
]

const RestroCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        alt="res"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.cloudinaryImageId
        }
      />

      <div className="res-name">{resData.name}</div>
      <div className="res-cuisines">{resData.cuisines.join(", ")}</div>
      <div className="res-ratings">{resData.avgRating}</div>
      <div className="res-deltime">{resData.deliveryTime} minutes</div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObjList.map((res) => (
          <RestroCard key={res.data.id} resData={res.data} />
        ))}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
