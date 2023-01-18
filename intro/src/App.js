// import React from "react";
import React, { Component } from 'react';
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";
import alertify from "alertifyjs"
import { Route, Switch } from 'react-router-dom';
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

// CategoryList'ten ProductList'e data taşımak istiyoruz. Ancak saf react'te bunu yapamıyoruz ondan dolayı App fonksiyonunu Component'e çeviriyoruz. 
//ChangeCategory CategoryList dosyasında tıklanabilmesi için props olarak bu dosyada ekledik. Burada eklediğimiz changeCategory (fonksiyonunu)event'ini değişken olarak CategoryList dosyasına gönderdik.
//En basit haliyle benim bir event'im var ve bu event'i CategoryList'e değişken (props) olarak gönderiyorum.

export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] }

  changeCategory = category => { //arrowfunction oluşturduk. () demek bir fonksiyondur.
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  // ÖNEMLİ : State değiştiği anda o state'i kullanan tüm component'ler yeniden render edilir. Örneğin; Bu projede yaptığımız state'i kullanan CategoryList dosyasındaki render çalışır ama kullanan ve değişen kısım <h4>{this.props.currentCategory}</h4> bu olduğu için sanalDOM'a göre sadece burası yeniden render edilir.

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart", 2);
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + " removed from cart");
  }

  render() {

    let productInfo = { title: "Product List", baskaBisey: "bisey" } //encapsulation yapmak gerekli çünkü başka bir props eklediğimizde yukarda olduğu gibi tek tek tanımlamak sağlıklı olmayacaktır
    let categoryInfo = { title: "Category List" }

    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory}/*bu şekilde CategoryList'e bir event yolluyoruz*/ info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route path="/form1" component={FormDemo1} />
                <Route path="/form2" component={FormDemo2} />
                <Route component={NotFound} />
              </Switch>

            </Col>


          </Row>
        </Container>
      </div>
    );
  }
}
// function App() {//Class component'ine dönüştürmemiz gerekiyor
//   // let titleProduct= "Product List" //Profesyonel olarak bu kullanılmaz
//   // let titleCategory="Category List"

//   //props = bir component'ten diğerine taşınan data/event. | bir component'ten diğerine component'e data taşıma yöntemi
//   //state = bir component'in datasıdır.
//   let productInfo = {title:"Product List", baskaBisey:"bisey"} //encapsulation yapmak gerekli çünkü başka bir props eklediğimizde yukarda olduğu gibi tek tek tanımlamak sağlıklı olmayacaktır
//   let categoryInfo = {title:"Category List"}


//   return (
//     <div>
//       <Container>
//         <Row>
//           <Navi />
//         </Row>

//         <Row>
//           <Col xs="3">
//             <CategoryList info={categoryInfo} />
//           </Col>
//           <Col xs="9">
//             <ProductList info={productInfo} />
//           </Col>


//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;
