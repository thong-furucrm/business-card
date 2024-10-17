import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import {IconAntDesign, IconFeather} from '@/helpers/IconHelper';

interface HeaderProps {
  onSelect: () => void;
  isSelected: boolean;
  onSearch: (query: string) => void;
}

const Header = ({onSelect, isSelected, onSearch}: HeaderProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => {
    setIsSearching(prevState => !prevState);
    if (isSearching) {
      setSearchQuery('');
      onSearch('');
    }
  };

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    onSearch(text);
  };

  return (
    <View className="bg-white flex-row items-center justify-between shadow">
      <View className="flex-row items-center">
        <TouchableOpacity className="bg-gray-200 rounded-full w-10 h-10 items-center justify-center">
          <IconFeather name="menu" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {isSearching ? (
        <View className="flex-row items-center flex-1">
          <TextInput
            className="border border-gray-300 ml-5 flex-1 h-10 px-3 rounded-full"
            placeholder="Search..."
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
          <TouchableOpacity className="mx-2 ml-3" onPress={toggleSearch}>
            <IconAntDesign name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex-row items-center">
          <TouchableOpacity
            className="bg-gray-200 rounded-full w-10 h-10 items-center justify-center mr-2"
            onPress={toggleSearch}>
            <IconAntDesign name="search1" size={28} color="black" />
          </TouchableOpacity>
          <View className="bg-gray-200 rounded-full w-10 h-10 items-center justify-center mr-2">
            <TouchableOpacity
              onPress={onSelect}
              className={`bg-gray-200 rounded-full w-6 h-6 items-center justify-center border-2 flex ${
                isSelected ? 'border-blue-500' : 'border-black'
              }`}>
              {isSelected && <Text className="text-blue-500">✓</Text>}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
