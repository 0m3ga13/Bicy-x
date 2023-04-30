import {
   
    durability,
    comfort,
    style,
    versatility,
  
    firstBicycle,
    secondBicycle,
    thirdBicycle,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Products",
      title: "Products",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Durability and quality",
      icon: durability,
    },
    {
      title: "Comfort and fit",
      icon: comfort,
    },
    {
      title: "Style and design",
      icon: style,
    },
    {
      title: "Versatility and functionality",
      icon: versatility,
    },
  ];
  

  
  
  const testimonials = [
    {
      testimonial: "I absolutely love my new bicycle! It's the perfect size and handles really well on different types of terrain.",
      name: "Jane Doe",
      age: 28,
      country: "USA",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      testimonial: "After using this bicycle for a few weeks, I can say it's the best one I've ever owned. It's durable, comfortable, and stylish.",
      name: "John Smith",
      age: 35,
      country: "Canada",
      image: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      testimonial: "This bicycle has exceeded my expectations. It's so smooth and easy to ride, and I love the modern design.",
      name: "Lucy Lee",
      age: 42,
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  ];
  
  const projects = [
    {
      name: "Trek Domane SL 5 Disc Road Bike",
      description:
        "A lightweight, endurance road bike with advanced carbon fiber technology, disc brakes, and Shimano 105 groupset for precision and performance.",
      price: " $2,799 ",
      image: firstBicycle,
    },
    {
      name: "Specialized Rockhopper Pro 29 Mountain Bike",
      description:
        "A sturdy, off-road mountain bike with a lightweight aluminum frame, 29-inch wheels, Shimano Deore components, and hydraulic disc brakes for reliable stopping power.",
      price: "$1,500",
        image: secondBicycle,

    },
    {
      name: "Electra Townie Go! 7D Electric Bike",
      description:
      "An electric leisure bike with a lightweight aluminum frame, Bosch Performance motor, 7-speed Shimano drivetrain, and a removable battery for easy charging.",
      price: "$2,799",
      image: thirdBicycle,
    },
  ];
  
  export { services, testimonials, projects };