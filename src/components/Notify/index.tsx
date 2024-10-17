import {IconAntDesign, IconMaterialIcons} from '@/helpers/IconHelper';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

interface NotifyProps {
  visible: boolean;
  message: string;
  type: 'success' | 'warning' | 'error';
  onClose: () => void;
}

const Notify = ({visible, message, type, onClose}: NotifyProps) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  const backgroundColor =
    type === 'success'
      ? 'bg-green-100 dark:bg-green-800'
      : type === 'warning'
      ? 'bg-orange-100 dark:bg-orange-700'
      : 'bg-red-100 dark:bg-red-800';

  const textColor =
    type === 'success'
      ? 'text-green-500 dark:text-green-200'
      : type === 'warning'
      ? 'text-orange-500 dark:text-orange-200'
      : 'text-red-500 dark:text-red-200';

  const icon =
    type === 'success' ? (
      <IconAntDesign name="checkcircle" size={20} color="green" />
    ) : type === 'warning' ? (
      <IconMaterialIcons name="error-outline" size={20} color="orange" />
    ) : (
      <IconAntDesign name="closecircle" size={20} color="red" />
    );

  return (
    <View className="absolute top-5 z-10 left-0 right-0 mx-auto w-full px-2">
      <View
        className={`flex-row items-start p-4 rounded-lg shadow-lg ${backgroundColor}`}>
        <View
          className={`inline-flex flex-shrink-0 w-8 rounded-lg ${textColor}`}>
          {icon}
        </View>
        <View className="flex-1 ms-3">
          <Text className="text-md">{message}</Text>
        </View>
        <TouchableOpacity onPress={onClose} className="ml-3">
          <IconAntDesign name="close" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notify;
