import React, { useState } from 'react';
import './Accessories.css';
import './AccessoriesProduct';
import AccessoriesProduct from './AccessoriesProduct';

export default function Accessories() {
  const [selectedOption, setSelectedOption] = useState('');

  // Handle selection of sort order
  const handleOrderSelection = (option) => {
    setSelectedOption(option);
  };

  // Reset sort order selection
  const resetOrderSelection = () => {
    setSelectedOption('');
  };


  const [selectedOptions, setSelectedOptions] = useState({
    categorieBtn: [],
    colorBtn: [],
    sizeBtn: [],
  });

  const handleSelection = (buttonKey, option) => {
    setSelectedOptions((prevState) => {
      const isAlreadySelected = prevState[buttonKey].includes(option);
      return {
        ...prevState,
        [buttonKey]: isAlreadySelected
          ? prevState[buttonKey].filter((item) => item !== option)
          : [...prevState[buttonKey], option],
      };
    });
  };

  const resetSelection = (buttonKey) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [buttonKey]: '',
    }));
  };
  const resetSizeSelection = () => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      sizeBtn: [],
    }));
  };

  // Price Range

  const [minPrice, setMinPrice] = useState(3);
  const [maxPrice, setMaxPrice] = useState(385);
  const [range, setRange] = useState({ min: 1, max: 385 });

  const handleSliderChange = (e, type) => {
    const value = parseInt(e.target.value);
    if (type === "min") {
      setMinPrice(value > maxPrice ? maxPrice : value);
    } else {
      setMaxPrice(value < minPrice ? minPrice : value);
    }
  };

  const handleApply = () => {
    setRange({ min: minPrice, max: maxPrice });
  };

  const handleClear = () => {
    setMinPrice(1);
    setMaxPrice(385);
    setRange({ min: 1, max: 385 });
  };

  return (
    <>
      <section className='container accessories'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='heading'>
              <h2>Accessories</h2>
              <p>We don’t just create outstanding products; we empower you to share your <br /> vision and connect with a community that values creativity like yours.</p>
            </div>
          </div>
        </div>
        <hr style={{ margin: '4rem 0rem' }} />
        {/* Filter Section */}
        <div className='filter-btn'>
          <div className='d-flex gap-2'>
            {/* Price Section */}
            <div class="dropdown">
              <button class="btn price-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-currency-dollar"></i>  Price
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <div className="price-slider-container">
                    <h4>Price range</h4>
                    <div className="slider-wrapper">
                      {/* Slider */}
                      <div className="slider">
                        <input
                          type="range"
                          min="1"
                          max="500"
                          value={minPrice}
                          onChange={(e) => handleSliderChange(e, "min")}
                        />
                        <input
                          type="range"
                          min="1"
                          max="500"
                          value={maxPrice}
                          onChange={(e) => handleSliderChange(e, "max")}
                        />
                      </div>

                      {/* Dynamic slider track */}
                      <div
                        className="slider-track"
                        style={{
                          left: `${(minPrice / 500) * 100}%`,
                          right: `${100 - (maxPrice / 500) * 100}%`,
                        }}
                      ></div>
                    </div>

                    {/* Min and Max Inputs */}
                    <div className="price-inputs">
                      <div>
                        <label>Min price</label>
                        <div className="input-container">
                          <input
                            type="number"
                            value={minPrice}
                            min="1"
                            max="500"
                            onChange={(e) => handleSliderChange(e, "min")}
                          />
                          <span>$</span>
                        </div>
                      </div>
                      <div>
                        <label>Max price</label>
                        <div className="input-container">
                          <input
                            type="number"
                            value={maxPrice}
                            min="1"
                            max="500"
                            onChange={(e) => handleSliderChange(e, "max")}
                          />
                          <span>$</span>
                        </div>
                      </div>
                    </div>

                    {/* Clear and Apply Buttons */}
                    <div className="actions">
                      <button onClick={handleClear} className="cancel-btn">
                        Clear
                      </button>
                      <button onClick={handleApply} className="apply-btn">
                        Apply
                      </button>
                    </div>

                    {/* Display selected range */}
                    <div className="selected-range">
                      Selected Range: ${range.min} - ${range.max}
                    </div>
                  </div>

                </li>

              </ul>
            </div>

            {/* Categorie Section */}
            <ul>
              <li>
                <div className="dropdown">
                  <button
                    className={`btn categorie-btn dropdown-toggle ${selectedOptions.categorieBtn.length ? 'active' : ''
                      }`}
                    type="button"
                    id="product-categorie"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-list-stars"></i> Categorie
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="product-categorie">
                    <li className="p-3">All Categorie</li>
                    <hr style={{ margin: '0 1rem' }} />
                    {['New Arrivals', 'Sale', 'Backpacks', 'Travel Bags', 'Laptop Sleeves', 'Organization', 'Accessories'].map(
                      (item, index) => (
                        <li
                          key={index}
                          className="dropdown-item mt-2"
                          onClick={() => handleSelection('categorieBtn', `option${index + 1}`)}
                        >
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={selectedOptions.categorieBtn.includes(`option${index + 1}`)}
                              readOnly
                            />
                            <label className="form-check-label" htmlFor={`option${index + 1}`}>
                              {item}
                            </label>
                          </div>
                        </li>
                      )
                    )}
                    <li className="dropdown-item">
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <button
                          className="cancel-btn"
                          onClick={() => resetSelection('categorieBtn')}
                        >
                          Cancel
                        </button>
                        <button className="apply-btn">Apply</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {/* Color Section */}
            <ul>
              <li>
                <div className="dropdown">
                  <button
                    className={`btn categorie-btn dropdown-toggle ${selectedOptions.colorBtn.length ? 'active' : ''
                      }`}
                    type="button"
                    id="product-color"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-palette"></i> Color
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="product-color">
                    {[
                      { id: 'White', label: 'White', option: 'option1' },
                      { id: 'Black', label: 'Black', option: 'option2' },
                      { id: 'Beige', label: 'Beige', option: 'option3' },
                      { id: 'Blue', label: 'Blue', option: 'option4' },
                      { id: 'Brown', label: 'Brown', option: 'option5' },
                      { id: 'Green', label: 'Green', option: 'option6' },
                      { id: 'Navy', label: 'Navy', option: 'option7' },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className={`dropdown-item ${selectedOptions.colorBtn.includes(item.option) ? 'active' : ''
                          }`}
                        onClick={() => handleSelection('colorBtn', item.option)}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={item.id}
                            checked={selectedOptions.colorBtn.includes(item.option)}
                            readOnly
                          />
                          <label className="form-check-label" htmlFor={item.id}>
                            {item.label}
                          </label>
                        </div>
                      </li>
                    ))}
                    <li className="dropdown-item">
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <button
                          className="cancel-btn"
                          onClick={() => resetSelection('colorBtn')}
                        >
                          Cancel
                        </button>
                        <button className="apply-btn">Apply</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {/* Sort Order */}
            <ul>
              <li>
                <div className="dropdown">
                  <button
                    className={`btn categorie-btn dropdown-toggle ${selectedOptions.sizeBtn?.length ? 'active' : ''
                      }`}
                    type="button"
                    id="Size"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-arrows-angle-contract"></i> Sizes
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="Size">
                    {/* Size options */}
                    {[
                      { id: 'XXS', label: 'XXS' },
                      { id: 'XS', label: 'XS' },
                      { id: 'S', label: 'S' },
                      { id: 'M', label: 'M' },
                      { id: 'L', label: 'L' },
                      { id: 'XL', label: 'XL' },
                      { id: '2XL', label: '2XL' },
                    ].map((size) => (
                      <li
                        key={size.id}
                        onClick={() => handleSelection('sizeBtn', size.id)}
                        className="dropdown-item mt-2"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={size.id}
                            checked={selectedOptions.sizeBtn?.includes(size.id) || false}
                            readOnly
                          />
                          <label className="form-check-label" htmlFor={size.id}>
                            {size.label}
                          </label>
                        </div>
                      </li>
                    ))}
                    {/* Action buttons */}
                    <li className="dropdown-item">
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <button className="cancel-btn" onClick={resetSizeSelection}>
                          Cancel
                        </button>
                        <button className="apply-btn">Apply</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            {/* Sort Order */}
            <ul className="ms-auto">
              <li>
                <div className="dropdown">
                  <button
                    className={`btn categorie-btn dropdown-toggle ${selectedOption ? 'active' : ''
                      }`}
                    type="button"
                    id="sort-order"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-sort-numeric-down"></i> Sort Order
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="sort-order">
                    {[
                      { id: 'most-popular', label: 'Most Popular', value: 'most-popular' },
                      { id: 'best-rating', label: 'Best Rating', value: 'best-rating' },
                      { id: 'new-product', label: 'Newest', value: 'new-product' },
                      { id: 'product-price', label: 'Price Low - High', value: 'product-price' },
                      { id: 'product-price-high', label: 'Price High - Low', value: 'product-price-high' },
                    ].map((item) => (
                      <li key={item.id} className="dropdown-item mt-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="sortOrder"
                            id={item.id}
                            onChange={() => handleOrderSelection(item.value)}
                            checked={selectedOption === item.value}
                          />
                          <label className="form-check-label" htmlFor={item.id}>
                            {item.label}
                          </label>
                        </div>
                      </li>
                    ))}
                    <li className="dropdown-item">
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <button
                          className="cancel-btn"
                          onClick={resetOrderSelection}
                        >
                          Cancel
                        </button>
                        <button className="apply-btn">Apply</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <AccessoriesProduct />
      </section>
    </>

  )
}
