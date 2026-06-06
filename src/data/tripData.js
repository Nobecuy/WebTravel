export const tripData = {
  brandName: "Voyage Luxe",
  
  navbar: {
    logoText: "Voyage Luxe",
    links: [
      { label: "Destinations", href: "#destinations", active: true },
      { label: "Tours", href: "#tours" },
      { label: "About Us", href: "#about" },
    ],
    buttonText: "Book Now"
  },

  hero: {
    // We will use highly detailed background layers for 3D parallax.
    // Far background (sky/clouds)
    skyImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",
    // Midground (mountains)
    midgroundImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80",
    
    // We'll use the main background image from the template as well:
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl8BrEV7KuyiBFmEvKx7pMm3rOOzGpaEKZfEzpIV-KBq_4_WkGNdwtNbaIsr7RRpKt6Frh3Exmqc8gzFLz2gwcZ-b_DHTzXqpu7Y57EiWVgC1cpvMPXgWUv8jE_icUX44ld6M3bAU9Rsd01aaooU0-gtjuwRm904FKVrDyjdKA31RnlqBX2hqAXDn92xor3G4nA8kqi6dC9LygskXpZTXiyEUcP3mXDB28WyE81_cMnllTC7KLMPmwJWNB-_SOj825F2MkxTeuSFc",
    titlePart1: "Discover Your Next",
    titlePart2: "Great Adventure",
    
    searchWidget: {
      inputs: [
        {
          id: "destination",
          label: "Destination",
          placeholder: "Where are you going?",
          icon: "location_on",
          type: "text"
        },
        {
          id: "date",
          label: "Date",
          icon: "calendar_today",
          type: "date"
        }
      ],
      selects: [
        {
          id: "travelers",
          label: "Travelers",
          icon: "group",
          options: ["1 Adult", "2 Adults", "Family"]
        }
      ],
      buttonText: "Explore"
    }
  },

  features: {
    sectionId: "features",
    items: [
      {
        icon: "travel_explore",
        title: "Local Expertise",
        description: "Access hidden gems and authentic experiences curated by our network of local specialists worldwide.",
        accentColor: "primary"
      },
      {
        icon: "calendar_month",
        title: "All-in-One Booking",
        description: "Seamlessly manage flights, stays, and activities in a single, beautiful dashboard designed for luxury.",
        accentColor: "secondary"
      },
      {
        icon: "support_agent",
        title: "24/7 Support",
        description: "Our global concierge team is available around the clock to ensure your journey is absolutely flawless.",
        accentColor: "primary"
      }
    ]
  },

  destinations: {
    sectionId: "destinations",
    tagline: "Inspiration",
    title: "Top Destinations",
    viewAllText: "View All Destinations",
    viewAllLink: "#",
    items: [
      {
        name: "Bali, Indonesia",
        rating: "4.9",
        price: "$1,200",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdQkIX9gqpDwNqRKIrpx0inHotnPsmL9S8vEG7xJIxqkPEHSeigZujdFQ7md6qLqf87o0Jb-ygkfQzf5DRaMPxx905QGgFINMumERtTcQ-vhhOvcPYmA8SraqlEiQ-H988qcQLVj7svmIv3oN443z2Xce5wbTelFYs2eLBa8z9eZm0i_CNNDbOWoAJCHuRkm_XbmJEvpkMcX5drvc9Ikl4orJa3xOL0y5iJj_XJ4JS0MYHZUG5L5AoSG7O0IpU8hFtQ2OR5YYsqdc",
        dataAlt: "A vibrant landscape of lush green terraced rice fields in Ubud, Bali, at golden hour."
      },
      {
        name: "Swiss Alps",
        rating: "4.8",
        price: "$2,500",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoFkAYpkDVXuWx4_dXKae7K1db9f5o4l-v5Mir8a64uclO9HkJpUbQdrPt74JeymvT7bhvzfgU6TKOw2fZkW0bp0DipxPCEJPZy_OoXXO2GXqrjeURvUGb5LCrntf-G2Om5V314ueFXKBwK3mWuhPmiHFBZL2YhjodnSzz2kV4BO9aj1QInB_AsQqxPpkvT7v5X2XowH8qT096B8wRHNseSS3k-dXKZx80_zAsiF3XJzn3rtBis-wkl2m5bpnZFOQ9H0L73Z0znmQ",
        dataAlt: "A pristine winter scene in the Swiss Alps featuring a luxury timber chalet nestled in deep snow."
      },
      {
        name: "Santorini, Greece",
        rating: "5.0",
        price: "$1,850",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuQ-aUAB0naKKVshTSqrRsOiNMAyISnHF9Ce_yLBEPwpFkbBd9Gw_SBp8MDlRKK5lMkGe8OFIrSd8jyewstqb1w6RdlwwShOCOdyg0739ZKmzh0yEXt1Ug1CLJ0rw8UnOlDmEc-JQXdHRP-n3zuBpMUqMVqJJgEb3wac-moGhOyU_GzWPrMAZVs4OHKsZJ7fLrqTBKvlw61yPJsDp-SqCxsgSFPRbJKEqwCYMJ-C8V7Zl7s9WpNQJ_OzDJXftI5XFk4zUHwgYkvs",
        dataAlt: "A breathtaking view of Oia, Santorini, with its iconic white-washed buildings and blue domes."
      },
      {
        name: "Kyoto, Japan",
        rating: "4.9",
        price: "$2,100",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaDvtrXTy86QphjnsZV2hJ1ABwqcO7FkKpn0umNK8LHR18OPIYhxnuzEurQ7g0V7hzB7pMQ3tfdHHxORy8bOIx2cw1jhvnvBVPtiaqx_G23uKOtWbcWP1DBzE5-4USy9V3DNnsf-6Mlm-M5jXdUqrXKnrm1VWzd39oKzQlGtgvAGXx0IK66qaLQ1WTk4bQsFLSWBhTi6pNX-erIoabVZIpSoNIMzg1zovyk7Y0uPaa6GBnf9uqWXG4OJCIb8ypz5qNUgcux2kbglU",
        dataAlt: "A serene temple garden in Kyoto during cherry blossom season, reflecting a wooden pagoda."
      }
    ]
  },

  tours: {
    sectionId: "tours",
    tagline: "Curated Journeys",
    title: "Featured Tour Packages",
    packages: [
      {
        id: "island-hopper",
        title: "Island Hopper Adventure",
        duration: "8 Days",
        badge: "Most Popular",
        description: "Explore the secret coves and pristine beaches of South Asia. A curated journey featuring luxury catamaran sails, private villa stays, and bespoke cultural encounters.",
        price: "$3,499",
        priceSuffix: " / person",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXhsJpI137lbdR8ZJGROffzu6GReacpBNu1XmUGtyb9ZQSjoLdlX7jkuzI9jA71W9MXsFe2TAJb5YGxblH0mdg0bK6O6Dkbqnjo73DREmbPVIomBBQQKfkA_Bili_WvmCKfk9fe18P8D6yY8sdqi8eqIPAPmbYG6eceR-rd3vgLmizpiXMtWJpaWuY3h-61DwjzCJRhPR12sraeY4cXDGvDYSsyv42wkBIka-2FWszWnaCGuj5dI4wxyeA8-km0_PcPmtuoL4naiw",
        dataAlt: "A luxurious catamaran sailing through turquoise waters between limestone islands."
      },
      {
        id: "highland-escape",
        title: "Northern Highland Escape",
        duration: "12 Days",
        badge: "Limited Edition",
        description: "Traverse the rugged beauty of the Scottish Highlands. Includes stays in historic castle-hotels, private distillery tours, and breathtaking scenic flights over the Isle of Skye.",
        price: "$4,850",
        priceSuffix: " / person",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRlXhCcYPFFgKBXv7CrAZyiM1n_PDSEMrftJw1mLT7-qtSWk2AlxSVYcxyy3iVxbLlDbAtcvB_xYMeREZsqnkVtau-Yx7DB-bQNWBE6WxZPbkLjod-lzeQakFq4h7RtrD7bm3mP0eBajA6hgTLFGDaxO60UJi1wkfR-c73uJ4IR3VBSX6NKMlEpHGF8SfnOlt71hrjn5824GEVOLkFDZ646NutBGuChszP_Sl40XMXXaWS5uEYbaVodLl-6-dP3Q8WHzv9Re6xd9Q",
        dataAlt: "A winding mountain road passing through misty, deep green pine forests in the Scottish Highlands."
      }
    ]
  },

  newsletter: {
    tagline: "Join Our Community",
    title: "Stay Updated",
    description: "Subscribe to receive exclusive travel invitations, insider destination guides, and early access to our most prestigious tours.",
    placeholder: "Your email address",
    buttonText: "Subscribe",
    disclaimer: "By subscribing, you agree to our Privacy Policy and Terms of Service."
  },

  footer: {
    logoText: "Voyage Luxe",
    description: "Redefining luxury travel through curated experiences and impeccable service across all continents.",
    socials: [
      { icon: "public", href: "#", name: "Website" },
      { icon: "photo_camera", href: "#", name: "Instagram" },
      { icon: "alternate_email", href: "#", name: "Contact" }
    ],
    columns: [
      {
        title: "Company",
        links: [
          { label: "Destinations", href: "#destinations" },
          { label: "Tours", href: "#tours" },
          { label: "About Us", href: "#about" },
          { label: "Our Story", href: "#story" }
        ]
      },
      {
        title: "Support",
        links: [
          { label: "Contact", href: "#contact" },
          { label: "Privacy Policy", href: "#privacy" },
          { label: "Terms of Service", href: "#terms" },
          { label: "FAQs", href: "#faqs" }
        ]
      }
    ],
    office: {
      title: "Office",
      address: "1201 Ocean Avenue\nSuite 400\nSanta Monica, CA 90401",
      phone: "+1 (800) 555-0199",
      email: "concierge@voyageluxe.com"
    },
    copyright: "© 2024 Voyage Luxe Explorations. All rights reserved.",
    bottomLinks: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" }
    ]
  }
};
