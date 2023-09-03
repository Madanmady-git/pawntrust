<template>
  <div>
    <TopBar />
    <div class="cartTitle">
      <div class="cartTitleTwo">
        <h1 style="text-align: start; padding: 16px 0px 0px 16px;">Cart</h1>
      </div>
    </div>
    <div class="cart">
      <div class="cart-container">
        
        <!-- Cart Items -->
        <div class="cart-items">
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <div style="display: flex;flex-direction: row;align-items: center;">
              <img :src="item.imageUrl" alt="Product Image" class="product-image">
              <div class="product-details">
                <span style="text-align: left;">{{ item.description }}</span>
              </div>
            </div>
            <!-- Display product image, quantity, price, description -->
            <div class="quantity-price">
              <div class="quantity">
                <div style="margin: 8px;">
                  <v-btn @click="changeQuantity(index, 'minus')" color="#F19B14" dense small elevation="0"><v-icon>mdi-minus</v-icon></v-btn>
                </div>
                <h3>{{ item.quantity }}</h3>
                <div style="margin: 8px;">
                  <v-btn @click="changeQuantity(index, 'plus')" color="#F19B14" dense small elevation="0"><v-icon>mdi-plus</v-icon></v-btn>
                </div>
              </div>
              <div class="price">
                <b><span>Price: ${{ item.price }}</span></b>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Billing Details -->
        <div class="billing-details">
          <v-btn color="#F19B14" dense block elevation="0" style="margin: 12px 0;"><span style="color: #FFF;text-transform: capitalize;">Go to Checkout</span></v-btn>
          <div v-for="(value, key) in billDetails" :key="index">
            <div class="billing-detail">
              <div>
                <span>{{ key }}:</span>
              </div>
              <div>
                <span>{{ value }}</span>
              </div>
            </div>
          </div>
          <hr>
          <div class="billing-detail">
            <b><span>Total Amount: </span></b>
            <b><span>{{ calculateTotal() }}</span></b>
          </div>
          <v-btn color="#F19B14" dense block elevation="0" style="margin: 12px 0;"><span style="color: #FFF;text-transform: capitalize;">Continue Shopping</span></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
 
  <script>
  import TopBar from '../components/TopBar.vue';
  export default {
    components : {TopBar},
    data() {
      return {
        cartItems: [
          // Sample cart items data, replace with your actual data
          {
            imageUrl: 'https://images.meesho.com/images/products/41388472/y3kvg_512.jpg',
            description: 'This is rare jewel and special one and contains various models like ear rings, necklace, etc',
            quantity: 1,
            price: 10,
            singleItemPrice : 10
          },
          {
            imageUrl: 'https://images.meesho.com/images/products/41388472/y3kvg_512.jpg',
            description: 'This is rare jewel and special one and contains various models like ear rings, necklace, etc',
            quantity: 1,
            price: 10,
            singleItemPrice : 10
          },
          {
            imageUrl: 'https://images.meesho.com/images/products/41388472/y3kvg_512.jpg',
            description: 'This is rare jewel and special one and contains various models like ear rings, necklace, etc',
            quantity: 1,
            price: 10,
            singleItemPrice : 10
          },
          // Add more items here
        ],
        billDetails : {
          'Total Items' : 3,
          'Amount' : 30,
          'Discount' : 20,
          'Delivery' : 10
        }
      };
    },
    methods: {
      calculateTotal() {
      // Calculate total item price before discount
        let totalItemPrice = this.cartItems.reduce(
          (total, item) => total + item.singleItemPrice * item.quantity,0);

        // Calculate the total amount after applying discount and adding delivery fees
        let totalAmount = totalItemPrice - this.billDetails.Discount + this.billDetails.Delivery;
        return totalAmount;
      },
      continueShopping() {
        // Implement your continue shopping logic here
      },
      changeQuantity(index, type){
        if (type === 'minus') {
          this.cartItems[index].quantity = this.cartItems[index].quantity != 0 ? this.cartItems[index].quantity - 1 : this.cartItems[index].quantity;
        } else if (type === 'plus') {
          this.cartItems[index].quantity = this.cartItems[index].quantity != 5 ? this.cartItems[index].quantity + 1 : this.cartItems[index].quantity;
        }
        this.cartItems[index].price = this.cartItems[index].quantity * this.cartItems[index].singleItemPrice;
      }
    },
    mounted(){
    },
    updated(){
      let totalItems = 0;
      let totalAmount = 0;
      this.cartItems.map(cartItem => {
        totalItems = totalItems + cartItem.quantity;
        totalAmount = totalAmount + cartItem.price;
      })
      this.billDetails['Total Items'] = totalItems;
      this.billDetails['Amount'] = totalAmount;
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .cart-container {
    padding: 20px;
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
    margin-bottom: 12px;
    border: 1px black solid;
    border-radius: 8px;
    padding: 16px;
  }
  .billing-detail{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
  }
  .continue-shopping-btn {
    margin-top: 20px;
  }
  </style>
  <style scoped>
  /* Add your custom styles here */
  .cart-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .cart-items {
    order: 1;
  }
  
  .billing-details {
    order: 2;
  }
  @media screen and (max-width: 767px){
    .cart-item[data-v-c7dd8b8c] {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 20px;
      border: 1px black solid;
      border-radius: 8px;
      padding: 16px;
    }
    .quantity-price{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .quantity {
      display: flex;
      flex-direction: row;
      align-items: center; /* Vertical centering of the buttons and quantity */
    }
  }
  @media (min-width: 768px) {
    /* Desktop view styles (768px and above) */
    .cart-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 80%;
    }
    .cart-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      justify-content: space-between;
      border: 1px black solid;
      border-radius: 8px;
      padding: 16px;
    }
    .cart-items {
      order: 0;
      flex-basis: 70%; /* Adjust the width as needed */
    }
  
    .billing-details {
      order: 1;
      flex-basis: 30%; /* Adjust the width as needed */
      margin-left: 20px; /* Add some spacing between cart items and billing details */
    }
    .quantity {
      display: flex;
      align-items: center; /* Vertical centering of the buttons and quantity */
    }

    .quantity v-btn {
      margin: 0 8px; /* Add spacing between buttons */
      padding: 4px; /* Add padding around buttons */
    }
    .cart{
      display: flex;
      justify-content: center;
    }
    .cartTitle{
      display: flex;justify-content: center;
    }
    .cartTitleTwo{
      width: 80%;
    }
  }
  </style>
  