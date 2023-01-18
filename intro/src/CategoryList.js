import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  // constructor(props) { //yeni versiyonlarda constructor'a gerek yok
  //   super(props);

  //state nesnesi oluşturma;
  // this.state = { 
  // counter:1 //bir kod değiş bir değişkendir
  state = {
    categories: [
      // { categoryId: 1, categoryName: "Beverages" },
      // { categoryId: 2, categoryName: "Condiments" }
    ]/*,
    currentCategory: ""*/
  };
  // }


  // changeCategory = category => { //arrowfunction oluşturduk. () demek bir fonksiyondur.
  //   this.setState({ currentCategory: category.categoryName })
  // }

  componentDidMount() {
    this.getCategories();
  }  

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  }


  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {/* <h3>{this.state.counter}</h3> */}
        <ListGroup>
          {
            this.state.categories.map(category => (
              // <ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.categoryId} >
              <ListGroupItem
                active={category.categoryName === this.props.currentCategory?true:false}
                onClick={() => this.props.changeCategory(category)}
                key={category.id} >
                {category.categoryName}
              </ListGroupItem>
            ))
          }

          {/* <ListGroupItem>
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem>
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem>
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem>
            Vestibulum at eros
          </ListGroupItem> */}
        </ListGroup>
        {/* <h4>{this.state.currentCategory}</h4> */}{/* state'den silip App.js'e taşıdığımız için artık bu şekilde yazılamaz */}
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
