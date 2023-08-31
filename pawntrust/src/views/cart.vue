<template>
    <div>
      <TopBar />
      <div class="cart-container">
        <div class="row">
          <div class="col-1"></div>
          <h1 style="text-align: start;padding: 16px 0px 0px 16px;">Cart</h1>
        </div>
        <!-- <v-divider style="margin: 24px;"></v-divider> -->
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
                    <div class="col-8">
                      <div class="product-details">
                        <span style="text-align: left;">{{ item.description }}</span>
                      </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-3">
                      <div class="row">
                        <div style="margin-right: 8px;">
                          <v-btn @click="changeQuantity(index, 'minus')" color="#F19B14" dense small elevation="0"><v-icon>mdi-minus</v-icon></v-btn>
                        </div>
                        <h3 style="margin-right: 8px;">{{ item.quantity }}</h3>
                        <div style="margin-right: 8px;">
                          <v-btn @click="changeQuantity(index, 'plus')" color="#F19B14" dense small elevation="0"><v-icon>mdi-plus</v-icon></v-btn>
                        </div>
                      </div>
                      <div class="row" style="margin: 8px;"></div>
                      <div class="row">
                        <p>Price: ${{ item.price }}</p>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="billing-details">
                  <v-btn color="#F19B14" dense block elevation="0" style="margin: 0px 0px 12px 0px;"><span style="color: #FFF;text-transform: capitalize;">Go to Checkout</span></v-btn>
                  <div v-for="(value, key) in billDetails" :key="index">
                    <div style="display: flex;flex-direction: row; justify-content: space-between;margin: 12px;">
                      <div>
                          <span>{{ key }}</span>
                      </div>
                      <div>
                          <span>{{value }}</span>
                      </div>
                    </div>
                  </div>
                  <hr>
                  <div style="display: flex;flex-direction: row; justify-content: space-between;margin: 12px;">
                    <div>
                        <b><span>Total Amount</span></b>
                    </div>
                    <div>
                        <b><span>{{ calculateTotal() }}</span></b>
                    </div>
                  </div>
                </div>
                <v-btn color="#F19B14" dense block elevation="0" style="margin: 0px 0px 12px 0px;"><span style="color: #FFF;text-transform: capitalize;">Continue Shopping</span></v-btn>
              </div>
            </div>
          </div>
          <div class="col-1"></div> <!-- Right margin -->
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
    margin-bottom: 12px;
    border: 1px black solid;
    border-radius: 8px;
    padding: 16px;
  }
  
  .continue-shopping-btn {
    margin-top: 20px;
  }
  </style>
  