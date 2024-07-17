import React from 'react';
import './Crousel.scss';
import { ExpandOutlined } from '@ant-design/icons';

const Crousel = () => {
  return (

   <div className='container'>
     <div className="crousel-wrapper">
      <div className="crousel-container">
        <input className='crousel-input' type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="crousel">
          <div className="row">
            <div className="icon"><ExpandOutlined /></div>
            <div className="description">
              <h4>Dubai</h4>
              <p>Population: 2M</p>
            </div>
          </div>
        </label>

        <input className='crousel-input' type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="crousel">
          <div className="row">
            <div className="icon"><ExpandOutlined /></div>
            <div className="description">
              <h4>Antalya</h4>
              <p>Population: 3.5M</p>
            </div>
          </div>
        </label>

        <input className='crousel-input' type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="crousel">
          <div className="row">
            <div className="icon"><ExpandOutlined /></div>
            <div className="description">
              <h4>Istanbul</h4>
              <p>Population: 4.1M</p>
            </div>
          </div>
        </label>

        <input className='crousel-input' type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="crousel">
          <div className="row">
            <div className="icon"><ExpandOutlined /></div>
            <div className="description">
              <h4>Sharm El-Sheikh</h4>
              <p>Population: 4M</p>
            </div>
          </div>
        </label>
        <input className='crousel-input' type="radio" name="slide" id="c5" />
        <label htmlFor="c5" className="crousel">
          <div className="row">
            <div className="icon"><ExpandOutlined /></div>
            <div className="description">
              <h4>Paris</h4>
              <p>Population: 3M</p>
            </div>
          </div>
        </label>
      </div>
    </div>
   </div>
  );
}

export default Crousel;
