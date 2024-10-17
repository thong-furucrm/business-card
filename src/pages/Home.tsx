import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import BusinessCard from '@/components/BusinessCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareModal from '@/components/ShareModal';
import Notify from '@/components/Notify';
import {CardType} from '@/interfaces/ICard';
import {mockData} from '@/mockData/dataProfile';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [selectedCards, setSelectedCards] = useState<{[key: string]: boolean}>(
    {},
  );
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState<CardType[]>(mockData);

  const handleSelect = (name: string) => {
    setSelectedCards(prev => {
      const updatedCards = {
        ...prev,
        [name]: !prev[name],
      };

      const hasSelectedCard = Object.values(updatedCards).some(
        isSelected => isSelected,
      );
      if (!hasSelectedCard) {
        setShowCheckbox(false);
      }

      return updatedCards;
    });
  };

  const handleLongPress = () => {
    setShowCheckbox(true);
  };

  const handleCheckAllCards = () => {
    const allSelected =
      Object.keys(selectedCards).length === mockData.length &&
      Object.values(selectedCards).every(value => value);

    setSelectedCards(
      mockData.reduce((acc, card) => {
        acc[card.name] = !allSelected;
        return acc;
      }, {} as {[key: string]: boolean}),
    );

    setShowCheckbox(!allSelected);
  };

  const allCardsSelected =
    Object.keys(selectedCards).length === mockData.length &&
    Object.values(selectedCards).every(value => value);

  const handleNavigateToDetails = (card: CardType) => {
    navigation.navigate('Details', {card});
  };

  const [notify, setNotify] = useState<{
    visible: boolean;
    message: string;
    type: 'success' | 'error' | 'warning';
  }>({
    visible: false,
    message: '',
    type: 'success',
  });

  const toggleModal = () => {
    const hasSelectedCards = Object.values(selectedCards).some(
      isSelected => isSelected,
    );

    if (hasSelectedCards) {
      setModalVisible(!modalVisible);
      setNotify(prev => ({...prev, visible: false, message: ''}));
    } else {
      setNotify({
        visible: true,
        message:
          'Please select at least one card to share.',
        type: 'error',
      });
    }
  };

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = mockData.filter(card =>
        card.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(mockData);
    }
  };

  return (
    <View className={`p-3 bg-white h-full ${modalVisible ? 'opacity-30' : ''}`}>
      <Notify
        visible={notify.visible}
        message={notify.message}
        type={notify.type}
        onClose={() => setNotify(prev => ({...prev, visible: false}))}
      />
      <Header
        onSelect={handleCheckAllCards}
        isSelected={allCardsSelected}
        onSearch={handleSearch}
      />
      <Text className="text-2xl text-black mt-5">All Business Cards</Text>
      {filteredData.map(card => (
        <BusinessCard
          key={card.name}
          name={card.name}
          email={card.email}
          phone={card.phone}
          imageUrl={card.imageUrl}
          onSelect={() => handleSelect(card.name)}
          isSelected={!!selectedCards[card.name]}
          showCheckbox={showCheckbox}
          onLongPress={handleLongPress}
          onNavigate={() => handleNavigateToDetails(card)}
        />
      ))}
      <ShareModal visible={modalVisible} onClose={toggleModal} />
      <Footer onSharePress={toggleModal} />
    </View>
  );
};

export default HomeScreen;
