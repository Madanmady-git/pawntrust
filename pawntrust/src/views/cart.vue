<template>
    <div class="cart-container">
      <div class="row">
        <div class="col-1"></div>
        <h1 style="text-align: start;padding: 16px 0px 0px 16px;">Cart</h1>
      </div>
      <v-divider style="margin: 24px;"></v-divider>
      <div class="row">
        <div class="col-1"></div> <!-- Left margin -->
        <div class="col-10">
          <div class="row">
            <div class="col-8">
              <!-- Cart items details -->
              <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
                <!-- Display product image, quantity, price, description -->
                <!-- You can bind item properties using v-bind or shorthand : syntax -->
                <img :src="item.imageUrl" alt="Product Image" class="product-image">
                <div class="row">
                  <div class="col-7">
                    <div class="product-details">
                      <span style="text-align: left;">{{ item.description }}</span>
                    </div>
                  </div>
                  <div class="col-1"></div> <!-- margin -->
                  <div class="col-4">
                    <div class="row">
                      <div>
                        <v-btn dense small elevation="0"><v-icon>mdi-minus</v-icon></v-btn>
                      </div>
                      <h3>4</h3>
                      <v-btn dense small elevation="0"><v-icon>mdi-plus</v-icon></v-btn>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div class="col-3">
              <!-- Cart billing details -->
              <div class="billing-details">
                <p v-for="(item, index) in cartItems" :key="index">
                  {{ item.description }}: {{ item.price }}
                </p>
                <hr>
                <p>Total: {{ calculateTotal() }}</p>
              </div>
              <button @click="continueShopping" class="continue-shopping-btn">Continue Shopping</button>
            </div>
          </div>
        </div>
        <div class="col-1"></div> <!-- Right margin -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
          // Sample cart items data, replace with your actual data
          {
            imageUrl: 'https://images.meesho.com/images/products/41388472/y3kvg_512.jpg',
            description: 'This is rare jewel and special one and contains various models like ear rings, necklace, etc',
            quantity: 2,
            price: 20,
          },
          // Add more items here
        ],
      };
    },
    methods: {
      calculateTotal() {
        // Calculate and return the total amount based on cart items
        return this.cartItems.reduce((total, item) => total + item.price, 0);
      },
      continueShopping() {
        // Implement your continue shopping logic here
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .cart-container {
    padding: 20px;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border: 1px black solid;
    border-radius: 8px;
    padding: 16px;
  }
  
  .product-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
  }
  
  .product-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  
  .billing-details {
    margin-top: 20px;
    border: 1px black solid;
    border-radius: 8px;
    padding: 16px;
  }
  
  .continue-shopping-btn {
    margin-top: 20px;
  }
  </style>
  