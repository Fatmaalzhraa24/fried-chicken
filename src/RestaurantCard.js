import React from 'react';

const HALF_STAR = "https://i.ibb.co/Z1nNqx7/Half-Star.png"
const FULL_STAR = "https://i.ibb.co/tMm9DNj/Star-full.png"
const EMPTY_STAR = "https://i.ibb.co/QcSWq90/Star-empty.webp"

const RestaurantCard = (props) => {
  const generateImages = (raiting) => {
    const createImage = (src) => {
      const onMouseClick = (e) => {
        const element = e.target;
        const elementRect = element.getBoundingClientRect();
        const userMouseX = e.clientX;

        console.log(
          e.clientX
        )
        
        // console.log(elementRect.left + (elementRect.width / 2))
        if (elementRect.left + elementRect.width / 2 < userMouseX) {
          if (element.src === EMPTY_STAR || element.src === HALF_STAR) {
            element.src = FULL_STAR
          }
          else if (element.src === FULL_STAR) {
            element.src = EMPTY_STAR
          }
        }
        else{
          if (element.src === HALF_STAR) {
            element.src = EMPTY_STAR
          }
          else if (element.src === EMPTY_STAR){
            element.src = HALF_STAR
          }
          else if(element.src === FULL_STAR){
            element.src = HALF_STAR
          }
        }

        const allImages = document.querySelectorAll(`[x-resturant="${props.name}"] img`);
        const limit = element.getAttribute("x-id").split("-")[1];
        for(let i = 0; i < allImages.length; i++){
          if(i < limit){
            allImages[i].src = FULL_STAR
          }
          else if(i > limit){
            allImages[i].src = EMPTY_STAR
          }
        }
      }

      return (
        <img onClick={onMouseClick} src={src} alt="star"/>
      )
    }
    
    let arrayOfImages = []
    if(raiting % 1 !== 0){
      arrayOfImages.push(
        createImage(HALF_STAR)
      )
    }
    
    
    const lengthOfRating = parseInt(raiting)
    for(let i = 0; i < lengthOfRating; i++){
      arrayOfImages.push(
        createImage(FULL_STAR)
      )
    }
    
    arrayOfImages = arrayOfImages.reverse();
    const remainingRaiting = parseInt(5 - raiting);
    for(let i = 0; i < remainingRaiting; i++){
      arrayOfImages.push(
        createImage(EMPTY_STAR)
      )
    }

    return arrayOfImages
  }
  return (
    <div id='restaurant'>
      <p>Name: {props.name}</p>
      <p>Location: {props.location}</p>
      <div className="list-of-rating" x-resturant={props.name}>
        {generateImages(props.rating).map((value, idx) => {
          return React.cloneElement(value, {"x-id": `${props.name}-${idx}`})
        })}
      </div>
    </div>
  )
};

export default RestaurantCard;