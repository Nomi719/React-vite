 import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from "./components/Card";
import Header from "./components/Header";
import Text from './components/ThemeText';
import Hero from './components/Hero';
import Modal from './components/Modal';
import End from './components/End';



function App() {

  const [selectedCard, setSelectedCard] = useState(null);

  const items = [{
    title: "Macbook",
      img: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
      price: "$2000",
      id: 1,
  },
  {
    title: "Intel pc",
      img: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 2,
  }, {
    title: "Macbook black",
      img: "https://images.unsplash.com/photo-1660833638050-41f95d8b94e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 1,
  }, {
    title: "Samsung",
      img: "https://plus.unsplash.com/premium_photo-1706548331122-8ac9455da8e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 1,
  },
  {
    title: "Macbook",
      img: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
      price: "$2000",
      id: 1,
  },
  {
    title: "Intel pc",
      img: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 2,
  }, {
    title: "Macbook black",
      img: "https://images.unsplash.com/photo-1660833638050-41f95d8b94e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 1,
  }, {
    title: "Samsung",
      img: "https://plus.unsplash.com/premium_photo-1706548331122-8ac9455da8e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 1,
  }

]


const handleCardClick = (card) => {
  setSelectedCard(card);
};

const handleCloseModal = () => {
  setSelectedCard(null);
};
  
  return(
  
    <>
    <Header />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((data) => (
            <Card
              key={data.id}
              img={data.img}
              title={data.title}
              price={data.price}
              onPress={() => handleCardClick(data)}
            />
          ))}
        </div>
      </div>
      <End/>
      <Modal isOpen={!!selectedCard} onClose={handleCloseModal} card={selectedCard} />

      {/* <Hero />
      <Steps />
      <Footer /> */}
    </>

      );
    }
    
  

export default App







