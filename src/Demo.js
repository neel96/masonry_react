import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Masonry from 'react-masonry-component';
import Data from './json';
import image from './demo.png';
 
const masonryOptions = {
    transitionDuration: 0
};

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
    render() {
        const childElements = Data.colors.map(function(element){
           return (
               <ul>
               <Card> 
                   <li>
                   <img src={image} alt={"hii"}/>
                   <CardContent>
               
                    <p>{element.category}</p>
                    <p>{element.color}</p>
                    <p>{element.type}</p>
                </CardContent>
                </li>
                </Card>
                </ul>
            );
        });
    
        return (
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={'my-masonry-grid'} // default ''
                columnClassName="my-masonry-grid_column"
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}
 
export default Gallery;