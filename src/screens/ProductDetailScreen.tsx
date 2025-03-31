import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../types';
import theme from '../utils/theme';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
type ProductDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;

const { width } = Dimensions.get('window');

// Mock product data
const product = {
  id: '1',
  name: 'Minimal Cotton T-Shirt',
  brand: 'Essence',
  category: 'Clothing',
  price: 29.99,
  description: 'A minimalist cotton t-shirt perfect for everyday wear. Made from 100% organic cotton for ultimate comfort and breathability.',
  colors: ['#000000', '#FFFFFF', '#CCCCCC'],
  sizes: ['S', 'M', 'L', 'XL'],
  images: [
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0JTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  ],
  rating: 4.5,
  inStock: true,
};

const ProductDetailScreen = () => {
  const navigation = useNavigation<ProductDetailScreenNavigationProp>();
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { productId } = route.params;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAddToCart = () => {
    // Add to cart logic would go here
    navigation.navigate('Main', { screen: 'Cart' });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.iconButton}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFavorite} style={styles.iconButton}>
          <Feather 
            name={isFavorite ? "heart" : "heart"} 
            size={24} 
            color={isFavorite ? theme.colors.error : theme.colors.black} 
            style={isFavorite ? {fill: theme.colors.error} : undefined}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={product.images}
            keyExtractor={(_, index) => index.toString()}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
              setCurrentImageIndex(newIndex);
            }}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
            )}
          />

          <View style={styles.pagination}>
            {product.images.map((_, index) => (
              <View 
                key={index} 
                style={[
                  styles.paginationDot, 
                  currentImageIndex === index && styles.paginationDotActive
                ]} 
              />
            ))}
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          <View style={styles.colorSection}>
            <Text style={styles.sectionTitle}>Color</Text>
            <View style={styles.colorOptions}>
              {product.colors.map((color) => (
                <TouchableOpacity 
                  key={color} 
                  style={[
                    styles.colorOption, 
                    { backgroundColor: color },
                    selectedColor === color && styles.colorOptionSelected
                  ]}
                  onPress={() => setSelectedColor(color)}
                >
                  {selectedColor === color && (
                    <Feather 
                      name="check" 
                      size={16} 
                      color={color === '#FFFFFF' ? 'black' : 'white'} 
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.sizeSection}>
            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.sizeOptions}>
              {product.sizes.map((size) => (
                <TouchableOpacity 
                  key={size} 
                  style={[
                    styles.sizeOption, 
                    selectedSize === size && styles.sizeOptionSelected
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text 
                    style={[
                      styles.sizeText, 
                      selectedSize === size && styles.sizeTextSelected
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Feather name="truck" size={18} color={theme.colors.gray700} />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoTitle}>Delivery & Returns</Text>
                <Text style={styles.infoText}>Free shipping on orders over $50</Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <Feather name="info" size={18} color={theme.colors.gray700} />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoTitle}>Material & Care</Text>
                <Text style={styles.infoText}>100% Cotton, Machine wash cold</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.addToCartContainer}>
        <View style={styles.quantitySelector}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Feather name="minus" size={18} color={theme.colors.black} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Feather name="plus" size={18} color={theme.colors.black} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    height: width,
  },
  image: {
    width: width,
    height: width,
  },
  pagination: {
    position: 'absolute',
    bottom: theme.spacing.md,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.gray300,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: theme.colors.black,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  detailsContainer: {
    padding: theme.spacing.lg,
  },
  brand: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.gray600,
    marginBottom: theme.spacing.xxs,
  },
  name: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.black,
    marginBottom: theme.spacing.sm,
  },
  price: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.black,
    marginBottom: theme.spacing.lg,
  },
  colorSection: {
    marginBottom: theme.spacing.lg,
  },
  sizeSection: {
    marginBottom: theme.spacing.lg,
  },
  descriptionSection: {
    marginBottom: theme.spacing.lg,
  },
  infoSection: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.black,
    marginBottom: theme.spacing.sm,
  },
  colorOptions: {
    flexDirection: 'row',
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: theme.borderRadius.full,
    marginRight: theme.spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.gray300,
  },
  colorOptionSelected: {
    borderWidth: 2,
    borderColor: theme.colors.black,
  },
  sizeOptions: {
    flexDirection: 'row',
  },
  sizeOption: {
    minWidth: 44,
    height: 44,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.gray300,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
    paddingHorizontal: theme.spacing.sm,
  },
  sizeOptionSelected: {
    borderColor: theme.colors.black,
    backgroundColor: theme.colors.black,
  },
  sizeText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.black,
  },
  sizeTextSelected: {
    color: theme.colors.white,
  },
  description: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.gray700,
    lineHeight: 22,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  infoTextContainer: {
    marginLeft: theme.spacing.sm,
  },
  infoTitle: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: '500',
    color: theme.colors.black,
    marginBottom: 2,
  },
  infoText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.gray600,
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray200,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.gray300,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.sm,
    marginRight: theme.spacing.md,
  },
  quantityButton: {
    padding: theme.spacing.sm,
  },
  quantityText: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: '500',
    minWidth: 30,
    textAlign: 'center',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: theme.colors.black,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.md,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;