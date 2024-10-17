import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { IconEntypo, IconEvilIcons, IconFeather } from '@/helpers/IconHelper';

interface FooterProps {
  onSharePress: () => void;
}

const Footer = ({onSharePress}: FooterProps) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-gray-300 p-4 flex-row justify-around shadow">
      <TouchableOpacity>
      <IconFeather name="image" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray-200 transform translate-y-[-40px] rounded-full w-14 h-14 items-center justify-center mr-2">
        <IconEntypo name="camera" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSharePress}>
        <IconEvilIcons name="share-apple" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
