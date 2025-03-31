import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Product } from '../../types';
import theme from '../../utils/theme';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const { name, brand, price, discountPrice, images, isNew } = product;
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: images[0] }} style={styles.image} resizeMode="cover" />
        {isNew && <View style={styles.newBadge}><Text style={styles.newText}>NEW</Text></View>}
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        
        <View style={styles.priceContainer}>
          {discountPrice ? (
            <>
              <Text style={styles.discountPrice}>${discountPrice.toFixed(2)}</Text>
              <Text style={styles.originalPrice}>${price.toFixed(2)}</Text>
            </>
          ) : (
            <Text style={styles.price}>${price.toFixed(2)}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.white,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
    marginBottom: theme.spacing.sm,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  newBadge: {
    position: 'absolute',
    top: theme.spacing.sm,
    left: theme.spacing.sm,
    backgroundColor: theme.colors.black,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xxs,
    borderRadius: theme.borderRadius.sm,
  },
  newText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.xs,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: theme.spacing.xs,
  },
  brand: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.gray600,
    marginBottom: theme.spacing.xxs,
  },
  name: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: '500',
    color: theme.colors.black,
    marginBottom: theme.spacing.xs,
    height: 20, // Fixed height to ensure consistent layout
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  discountPrice: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.black,
    marginRight: theme.spacing.xs,
  },
  originalPrice: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.gray500,
    textDecorationLine: 'line-through',
  },
});

export default ProductCard;