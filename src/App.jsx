import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';


export default function App() {

  // create an object:
    const Data = [
    {
      image: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Card 1',
      description: 'This is bag 1',
      items: ['Item A', 'Item B', 'Item C']
    },
    {
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Card 2',
      description: 'This is bag 2',
      items: ['Item A', 'Item B', 'Item C']
    },
    {
      image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Card 3',
      description: 'This is bag 3',
      items: ['Item A', 'Item B', 'Item C']
    },
    {
      image: 'https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Card 4',
      description: 'This is bag 4',
      items: ['Item A', 'Item B', 'Item C']
    },
    {
      image: 'https://images.pexels.com/photos/1986996/pexels-photo-1986996.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Card 5',
      description: 'This is bag 5',
      items: ['Item A', 'Item B', 'Item C']
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
        margin: '20px 0'
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


