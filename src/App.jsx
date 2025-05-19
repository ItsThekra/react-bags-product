import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';


export default function App() {

  // create an object: - in Cards page -
    const Data = [
    {
      image: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Bag - 1',
      description: 'This is bag 1',
      items: ['green', 'small bag', '20$']
    },
    {
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Bag - 2',
      description: 'This is bag 2',
      items: ['Orange', 'small bag', '15$']
    },
    {
      image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Bag - 3',
      description: 'This is bag 3',
      items: ['Black', 'Big bag', '20$']
    },
    {
      image: 'https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Bag - 4',
      description: 'This is bag 4',
      items: ['Orange', 'medium bag', '15$']
    },
    {
      image: 'https://images.pexels.com/photos/1986996/pexels-photo-1986996.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Bag - 5 ',
      description: 'This is bag 5',
      items: ['Red', 'Big bag', '30$']
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
    <Navbar /> 
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        margin: '60px 0'
      }}>
        {Data.map((card) => (
          <Card
            image={card.image}
            title={card.title}
            description={card.description}
            items={card.items}
          />
        ))}
      </div>
    <Footer />
    </div>
  )
}


