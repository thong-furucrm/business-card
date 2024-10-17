import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {IconFeather} from '@/helpers/IconHelper';

interface BusinessCardProps {
  name: string;
  email: string;
  phone: string;
  onSelect: () => void;
  isSelected: boolean;
  imageUrl: string;
  showCheckbox: boolean;
  onLongPress: () => void;
  onNavigate: () => void;
}

const BusinessCard = ({
  name,
  email,
  phone,
  onSelect,
  isSelected,
  imageUrl,
  showCheckbox,
  onLongPress,
  onNavigate,
}: BusinessCardProps) => {
  return (
    <>
      <TouchableOpacity
        onLongPress={onLongPress}
        onPress={onNavigate}
        className="bg-white rounded-lg p-4 shadow-md flex-row items-center">
        <Image
          source={{uri: imageUrl}}
          className="w-16 h-16 rounded-lg mr-4"
          resizeMode="cover"
        />
        <View className="flex-1">
          <Text className="font-bold text-black text-lg">{name}</Text>
          <Text className="text-gray-600 text-black">{email}</Text>
          <Text className="text-gray-600 text-black">{phone}</Text>
        </View>
        {showCheckbox ? (
          <TouchableOpacity
            onPress={onSelect}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
              isSelected ? 'border-blue-500' : 'border-black'
            }`}>
            {isSelected && <Text className="text-blue-500">✓</Text>}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <IconFeather name="chevron-right" size={30} color="black" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <View className="border-b border-gray-300 my-3" />
    </>
  );
};

export default BusinessCard;
