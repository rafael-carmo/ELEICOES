import './list.css'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);


  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lstTitle">Search</h1>
            <div className="lstItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lstItem">
              <label>Check in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, 'dd/MM/yyyy')} to 
                ${format(date[0].endDate, 'dd/MM/yyyy')}`}
              </span>
              {
                openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )
              }
            </div>
            <div className="lstItem">
              <label>Options</label>
              <div className="lstOptions">
                <div className="lstOptionItem">
                  <span className="lstOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lstOptionInput" />
                </div>
                <div className="lstOptionItem">
                  <span className="lstOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lstOptionInput" />
                </div>
                <div className="lstOptionItem">
                  <span className="lstOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lstOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lstOptionItem">
                  <span className="lstOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lstOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lstOptionItem">
                  <span className="lstOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lstOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
