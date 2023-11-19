import { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, image, job, text } = data[index];
  const checkNumber = (number) => {
    if (number < 0) {
      return data.length - 1;
    }
    if (number > data.length - 1) {
      return 0;
    }
    return number;
  };
  const prePerson = () => {
    setIndex((currentValue) => {
      const newIndex = currentValue - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((currentValue) => {
      const newIndex = currentValue + 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h2 className='author'>{name}</h2>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prePerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
