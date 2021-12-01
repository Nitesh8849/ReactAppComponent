import React, { useState } from 'react'
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


// for access unique category, which they are repeating..
// ... is a spread operator.


const uniqueList = [
    ...new Set(
        Menu.map( (currElem) => {
            return currElem.category;
})
), 
"All",
];

console.log(uniqueList);





const Restaurant = () => {

    const [menuData, setmenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList); 
    // console.log(Menu);
    // we use map method in an array
    // don't repeat yourself (code repeatition is not a good way)
    // how to use props & how to pass props?(data is passed from one component to other components (hierarchy) - parent to child - top to bottom)

    // event call
    // calling function with argument
    // 2nd useState is reffered to button which are repeating againg & again.
    const filterItem = (category) => {

        if(category === 'All'){
            setmenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;
            
        });
        setmenuData(updatedList);
    };



    return (
        <>
        {/* same comoonent but two props are passed */}
        <Navbar filterItem={filterItem} menuList={menuList}/>


        <MenuCard menuData={menuData}/>

        </>
    );
};

export default Restaurant;