import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {
  IconFontAwesome,
  IconIon,
  IconMaterialCommunity,
} from '@/helpers/IconHelper';
import {CardType} from '@/interfaces/ICard';

interface DetailsScreenRouteProps {
  card: CardType;
}

interface DetailProps {
  route: RouteProp<{params: DetailsScreenRouteProps}, 'params'>;
}

const DetailsScreen = ({route}: DetailProps) => {
  const {card} = route.params;

  return (
    <>
      <View className="p-4 bg-white h-full">
        <View className="flex-row items-center mb-4">
          <Text className="w-10"></Text>
          <View className="ml-4 w-4/5">
            <Image
              source={{uri: card.imageUrl}}
              className="w-32 h-32 w-full mx-auto mb-4"
              resizeMode="cover"
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="ml-14 text-sm text-black text-lg">Name</Text>
          <View className="flex-row ">
            <IconMaterialCommunity
              className="w-10 flex-row items-end flex"
              name="account-circle"
              size={40}
              color="black"
            />
            <View className="bg-gray-200 ml-4 w-4/5 p-1 rounded-lg">
              <Text className="text-lg text-black pl-3 text-lg uppercase">
                {card.name}
              </Text>
            </View>
          </View>
        </View>
        <View className="mb-4">
          <Text className="ml-14 text-sm text-black text-lg">Company</Text>
          <View className="flex-row ">
            <IconIon
              className="w-10 flex-row items-end flex"
              name="business-sharp"
              size={35}
              color="black"
            />
            <View className="bg-gray-200 ml-4 w-4/5 p-1 rounded-lg">
              <Text className="text-lg text-black pl-3 text-lg uppercase">
                {card.company}
              </Text>
            </View>
          </View>
        </View>
        <View className="mb-4">
          <Text className="ml-14 text-sm text-black text-lg">Email</Text>
          <View className="flex-row ">
            <IconMaterialCommunity
              className="w-10 flex-row items-end flex"
              name="email"
              size={38}
              color="black"
            />
            <View className="bg-gray-200 ml-4 w-4/5 p-1 rounded-lg">
              <Text className="text-lg text-black pl-3 text-lg">
                {card.email}
              </Text>
            </View>
          </View>
        </View>
        <View className="mb-4">
          <Text className="ml-14 text-sm text-black text-lg">Phone</Text>
          <View className="flex-row ">
            <IconFontAwesome
              className="w-10 flex-row items-end flex"
              name="phone"
              size={40}
              color="black"
            />
            <View className="bg-gray-200 ml-4 w-4/5 p-1 rounded-lg">
              <Text className="text-lg text-black pl-3 text-lg uppercase">
                {card.phone}
              </Text>
            </View>
          </View>
        </View>
        <View className="mb-4">
          <Text className="ml-14 text-sm text-black text-lg">Website</Text>
          <View className="flex-row ">
            <IconMaterialCommunity
              className="w-10 flex-row items-end flex"
              name="web"
              size={38}
              color="black"
            />
            <View className="bg-gray-200 ml-4 w-4/5 p-1 rounded-lg">
              <Text className="text-lg text-black pl-3 text-lg">
                {card.website}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity className="absolute bottom-0 w-full bg-gray-300 p-4">
        <Text className="text-black text-xl text-center">Save Card</Text>
      </TouchableOpacity>
    </>
  );
};

export default DetailsScreen;
