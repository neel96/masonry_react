import React, { Component } from 'react';

var PHOTODATA = [{
    id: 1,
    category: 'fruits',
    imageUrl: 'http://polzavred.ru/wp-content/uploads/klubnika-poleznie-svoistva.jpg'
},{
    id: 2,
    category: 'fruits',
    imageUrl: 'https://blistogreen.com.ua/180-home_default/grusha-noyabrskaya-11-13-m.jpg'
},
{
    id: 3,
    category: 'fruits',
    imageUrl: 'http://3.imimg.com/data3/RD/MF/MY-8642081/juicy-red-apples-250x250.jpg'
},{
    id: 4,
    category: 'vegetables',
    imageUrl: 'http://portamur.ru.opt-images.1c-bitrix-cdn.ru/upload/iblock/60f/kartofell.jpg?146035093210522'
},{
    id: 5,
    category: 'vegetables',
    imageUrl: 'http://www.slim.ru/news_img/2050img2.png'
},{
    id: 6,
    category: 'another',
    imageUrl: 'http://clodo.infoniac.ru/iblock/9c4/9c4b4b7fa55c63d3e4aea77c3f869565/662156de618b3f2010a499c5947b6b19.jpg'
}];

{/*Create a component of the filter panel*/}

var FilterPanel = React.createClass({

render: function(){
return (
    <a onClick={this.props.onClick}>{this.props.category}</a>

)
}

});



{/*Create a layout component for one photo*/}

var Photo =  React.createClass({

render: function(){
return (
        <div className="photo-container" data-category={this.props.category} ><img src={this.props.imageUrl} /></div>
       );
}


});







{/*Create a final collection of photos in photoGallery*/}

var PhotoGallery = React.createClass({

getInitialState: function() {
        return {
            displayedCategories: PHOTODATA,
            active: false
        };
    },
toggleActive: function() {
this.setState({
    active: !this.state.active
});
},

selectCategory: function(element){
console.log('element is: '+ element);
  var categoryName = element.toLowerCase();
        var displayedCategories = PHOTODATA.filter(function(el) {
            
            var searchValue = el.category.toLowerCase();
            return searchValue.indexOf(categoryName) !== -1;
        });

        this.setState({
            displayedCategories: displayedCategories

        });

},
resetFilter: function(element){
this.setState({
            displayedCategories: PHOTODATA

        });
},



render: function(){
var buttonClass = this.state.active ? 'active' : '';
var categoryToSelect = this.selectCategory;
var getUniqueCategories=[];
PHOTODATA.forEach(function(el){
    if(getUniqueCategories.indexOf(el.category) === -1 ) getUniqueCategories.push(el.category);
})

return (
    <div className="overlay-photogallery">
        <div className="filter-panel">
            {
                getUniqueCategories.map(function(el,i){
                    var boundClick = categoryToSelect.bind(null,el);
                    return <FilterPanel onClick={boundClick} category={el} key={i} />
                })

            }		
            <a className="resetBtn" onClick={this.resetFilter}> Reset Filter </a>
        </div>
        <div className="PhotoGallery">
            {

                this.state.displayedCategories.map(function(el){
                            return <Photo key={el.id} imageUrl={el.imageUrl} category={el.category} />
                        })

            }
        </div>
    </div>
    );


}



});

export default PhotoGallery;