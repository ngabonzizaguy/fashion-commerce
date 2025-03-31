# Fashion Commerce Mobile App

A minimalist fashion e-commerce mobile application built with React Native. This project features a clean and modern UI with a focus on user experience and performance.

## Features

- **Minimalist Design**: Clean, black and white aesthetic for a premium look and feel
- **Product Browsing**: Browse products by category, featured collections, and new arrivals
- **Search Functionality**: Search for products with suggestions and filters
- **Product Details**: View detailed product information, select sizes and colors
- **Shopping Cart**: Add products to cart, modify quantities, and checkout
- **User Authentication**: Login and signup functionalities
- **Checkout Process**: Streamlined checkout with shipping and payment options
- **Order Confirmation**: View order details and tracking information

## Tech Stack

- React Native
- TypeScript
- React Navigation (for navigation)
- Expo Vector Icons
- React Native Reanimated (for animations)

## Project Structure

```
src/
├── assets/            # Images, fonts, and other static assets
├── components/        # Reusable UI components
│   ├── Button/
│   ├── CategoryCard/
│   ├── ColorSelector/
│   ├── FilterBar/
│   ├── Header/
│   ├── ProductCard/
│   ├── ProductGrid/
│   ├── SizeSelector/
│   └── ...
├── navigation/        # Navigation configuration
├── screens/           # App screens
│   ├── AuthScreen.tsx
│   ├── CartScreen.tsx
│   ├── CategoriesScreen.tsx
│   ├── CheckoutScreen.tsx
│   ├── HomeScreen.tsx
│   ├── OrderConfirmationScreen.tsx
│   ├── ProductDetailScreen.tsx
│   ├── ProductListScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── SearchScreen.tsx
│   └── ...
├── types.ts           # TypeScript type definitions
└── utils/             # Utility functions and constants
    ├── theme.ts       # App theme (colors, spacing, typography)
    └── ...
```

## Screens

### Home Screen
- Hero section with featured product/collection
- Categories horizontal scroll
- Featured products section
- New arrivals section

### Categories Screen
- Grid of product categories
- Navigation to product lists

### Product List Screen
- Grid of products (standard or large grid view)
- Filter and sort options
- Product cards with favorite toggle

### Product Detail Screen
- Product images carousel with pagination
- Color and size selection
- Add to bag button
- Product description
- Delivery and material information

### Cart Screen
- List of cart items
- Quantity adjustment
- Price summary
- Checkout button

### Checkout Screen
- Shipping address selection
- Payment method selection
- Order summary
- Place order button

### Order Confirmation Screen
- Order details
- Estimated delivery date
- Continue shopping button

### Auth Screen
- Login and signup forms
- Social authentication options

### Search Screen
- Search input
- Recent searches
- Popular search suggestions
- Search results

### Profile Screen
- User information
- Order history
- Addresses
- Payment methods
- Settings

## Components

### Button
A customizable button component with different variants (primary, secondary, outline, text) and sizes.

### ProductCard
Displays product information in a card format, including image, brand, name, price, and color options.

### ColorSelector
A component for selecting color options with a visual representation of each color.

### SizeSelector
A component for selecting size options with a visual indication of the selected size.

### Header
A reusable header component for consistent navigation across screens.

### ProductGrid
A flexible grid for displaying products in different layouts (standard, large).

### FilterBar
A component for filtering and sorting product lists.

### CategoryCard
Displays category information with image and name.

## Setup and Installation

1. Clone the repository:
```
git clone https://github.com/ngabonzizaguy/fashion-commerce.git
cd fashion-commerce
```

2. Install dependencies:
```
npm install
```

3. Run the app:
```
npm start
```

4. Use Expo Go app on your device or run on an emulator/simulator:
```
npm run android
```
or
```
npm run ios
```

## Design Principles

- **Minimalism**: Clean, uncluttered UI with focus on content
- **Typography**: Consistent font hierarchy for readability
- **Spacing**: Consistent spacing for visual harmony
- **Color**: Black and white primary palette with subtle accent colors
- **Responsiveness**: Optimized for various screen sizes
- **Performance**: Optimized rendering and animations for smooth experience

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.