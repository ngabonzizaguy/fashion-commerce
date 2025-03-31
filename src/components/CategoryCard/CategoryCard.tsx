import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import theme from '../../utils/theme';

interface CategoryCardProps {
  name: string;
  image: string;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground source={{ uri: image }} style={styles.image} resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 180,
    marginRight: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  name: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.md,
    fontWeight: 'bold',
  },
});

export default CategoryCard;