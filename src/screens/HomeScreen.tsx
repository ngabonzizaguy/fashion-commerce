import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  FlatList, 
  Image 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList, Category, Product } from '../types';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import ProductCard from '../components/ProductCard/ProductCard';
import theme from '../utils/theme';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

// Mock data
const categories: Category[] = [
  { id: '1', name: 'New In', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' },
  { id: '2', name: 'Clothing', image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' },
  { id: '3', name: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' },
  { id: '4', name: 'Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df41a097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' },
  { id: '5', name: 'Accessories', image: 'https://images.unsplash.com/photo-1611923134239-b9be5816c171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' },
];

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Minimal Cotton T-Shirt',
    brand: 'Essence',
    category: '2',
    price: 29.99,
    description: 'A minimalist cotton t-shirt perfect for everyday wear.',
    colors: ['black', 'white', 'gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'],
    rating: 4.5,
    inStock: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Classic Denim Jacket',
    brand: 'Urbane',
    category: '2',
    price: 89.99,
    description: 'A timeless denim jacket that never goes out of style.',
    colors: ['blue', 'black'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'],
    rating: 4.7,
    inStock: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Minimal Leather Sneakers',
    brand: 'Stride',
    category: '3',
    price: 129.99,
    description: 'Clean and minimal leather sneakers for a sophisticated look.',
    colors: ['white', 'black', 'tan'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'],
    rating: 4.8,
    inStock: true,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Structured Tote Bag',
    brand: 'Harbor',
    category: '4',
    price: 79.99,
    description: 'A structured tote bag perfect for work or weekends.',
    colors: ['black', 'tan', 'navy'],
    sizes: ['One Size'],
    images: ['https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG90ZSUyMGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'],
    rating: 4.6,
    inStock: true,
    isFeatured: true,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleCategoryPress = (categoryId: string, categoryName: string) => {
    navigation.navigate('ProductList', { categoryId, categoryName });
  };

  const handleProductPress = (productId: string) => {
    navigation.navigate('ProductDetail', { productId });
  };

  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Fashion</Text>
            <Text style={styles.headerSubtitle}>Discover your style</Text>
          </View>
          <TouchableOpacity onPress={handleSearchPress} style={styles.searchButton}>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            horizontal
            data={categories}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
            renderItem={({ item }) => (
              <CategoryCard
                name={item.name}
                image={item.image}
                onPress={() => handleCategoryPress(item.id, item.name)}
              />
            )}
          />
        </View>

        <View style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => handleProductPress(product.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  headerTitle: {
    fontSize: theme.typography.fontSize.xxxl,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  headerSubtitle: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.gray600,
    marginTop: theme.spacing.xxs,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesSection: {
    marginBottom: theme.spacing.xl,
  },
  featuredSection: {
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  seeAllText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.gray600,
  },
  categoriesList: {
    paddingVertical: theme.spacing.sm,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;