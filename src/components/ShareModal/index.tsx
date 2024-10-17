import React from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';

import {IconAntDesign, IconFontAwesome5} from '@/helpers/IconHelper';

interface ShareModalProps {
  visible: boolean;
  onClose: () => void;
}

const ShareModal = ({visible, onClose}: ShareModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View className="flex-1 justify-end">
        <View className="bg-gray-300 p-5">
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl text-black">Share As</Text>
            <TouchableOpacity
              onPress={onClose}
              className="w-10 h-10 py-2 flex-row items-center justify-center">
              <IconAntDesign name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="py-2 flex-row" onPress={() => {}}>
            <IconFontAwesome5
              className="w-10"
              name="salesforce"
              size={30}
              color="#009CDA"
            />
            <Text className="text-xl ml-5 text-black">Salesforce</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2 flex-row" onPress={() => {}}>
            <View className="w-10">
              <Image
                source={require('../../assets/icons/microsoft.png')}
                className="w-7 h-7"
              />
            </View>
            <Text className="text-lg ml-5 text-black">Dynamics CRM</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2 flex-row" onPress={() => {}}>
            <View className="w-10">
              <Image
                source={require('../../assets/icons/amazon.png')}
                className="w-7 h-7"
              />
            </View>
            <Text className="text-lg ml-5 text-black">Amazon cloud</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ShareModal;
