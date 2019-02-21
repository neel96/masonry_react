import * as React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import FilterList from "@material-ui/icons/FilterList";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// import FilterList from '@material-ui/icons/FilterList';
import CardMedia from '@material-ui/core/CardMedia';
import Masonry from 'react-masonry-component';
import Data from './json';
import image from './demo.png';

const masonryOptions = {
    transitionDuration: 5555
};

// let i = 0;

// var uniqueNames = [];   
// for(i=0; i<Data.length; i++){    
//     if(uniqueNames.indexOf(Data[i].category) === -1){
//         uniqueNames.push(Data[i].category);        
//     }        
// }

// for(i = 0; i< uniqueNames.length; i++){    
//     alert(uniqueNames[i]);      
// }
var uniqueNames = [];   
console.log('dasdasd')
for(var i=0; i<Data.colors.length; i++){    
    if(uniqueNames.indexOf(Data.colors[i].category) === -1){
        uniqueNames.push(Data.colors[i].category);        
    }        
}

function onFilter(uniqueNames){
    alert("hey");
    var categoryName = Data.colors.category;
    console.log(categoryName);
    var displayedCategories = Data.colors.filter(function(el) {
           console.log("oyy",el); 
        var searchValue = el.category;
        return searchValue.indexOf(categoryName) !== -1;
        
    });
    
        this.setState({
            image: displayedCategories
        })
        console.log("chut",this.state.image);
    
    alert("hang");
}

const hii = uniqueNames.map((i) =>

        <div>
            <Button onClick={onFilter}>
                {i}
            </Button>
        </div>
     );

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
    constructor(props){
        super(props);
    this.state={
        image: Data.colors,
    }
        //this.onclick = this.onclick.bind(this);
    }
    handleLayoutComplete() { }

    // onclick(){
    //     const img = Data.colors.map()
    //     alert("oyy nilay");
    // }
 
    componentDidMount() {
        this.masonry.on('layoutComplete', this.handleLayoutComplete);
    }
 
    componentWillUnmount() {
        this.masonry.off('layoutComplete', this.handleLayoutComplete);
    }
    render() {

        const childElements = this.state.image.map(function(element){
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
            <div>
                {/* <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<FilterList />}>
                    <Typography >Filter</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <div>
                    <Button
                    onClick={this.onclick}
                      color="info"
                      round
                      //className={classes.marginRight}
                    >
                      All
                </Button>
                <Button
                      color="info"
                      round
                      //className={classes.marginRight}
                    >
                      Fashion
                </Button>
                <Button
                      color="info"
                      round
                      //className={classes.marginRight}
                    >
                      Accessories
                </Button>
                <Button
                      color="info"
                      round
                      //className={classes.marginRight}
                    >
                      Beauty
                </Button>
                <Button
                      color="info"
                      round
                      //className={classes.marginRight}
                    >
                      Health
                </Button>
                <Button
                      color="info"
                      round
                      //className={classes.marginRight}
                    >
                      Electronics
                </Button>
                <Button
                      color="info"
                      round
                      //className={classes.marginRight}
                    >
                      Sports
                </Button>
                <Button
                      color="info"
                      round
                      //className={classes.marginRight}
                    >
                      HOME & APPLIANCES
                </Button>
                    </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel> */}
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<FilterList />}>
                    <Typography >Filter</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <div>
                    {hii}
                    </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                
                
            <Masonry
            ref={function(c) {this.masonry = this.masonry || c.masonry;}.bind(this)}
            breakpointCols={breakpointColumnsObj}
            className={'my-masonry-grid'} // default ''
            columnClassName="my-masonry-grid_column"
            elementType={'div'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
            onImagesLoaded={false}
            onLayoutComplete={laidOutItems => this.handleLayoutComplete(laidOutItems)}
            onRemoveComplete={removedItems => this.handleRemoveComplete(removedItems)}
            >
                {childElements}
            </Masonry>
            </div>
        );
    }
}

export default Gallery;
