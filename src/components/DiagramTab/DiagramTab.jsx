import Chart from 'components/Chart/Chart';
import TableBlock from 'components/Table/Table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { summaryThunk } from 'redux/transactions/operation';
import {
  selectCategories,
  selectCategoriesSummary,
  selectExpenseSummary,
} from 'redux/transactions/selectors';
import { getRandomHexColor } from 'utils/getRandomColor';
import Select from 'react-select';
import css from './DiagramTab.module.css';
import { formatMoney } from 'utils/formatMoney';

const months = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];

const years = [
  { label: '2018', value: 2018 },
  { label: '2019', value: 2019 },
  { label: '2020', value: 2020 },
  { label: '2021', value: 2021 },
  { label: '2022', value: 2022 },
  { label: '2023', value: 2023 },
];
const date = new Date();

const current = {
  year: date.getFullYear(),
  month: date.getMonth() + 1,
};

/*================Selector style=================*/
const customStyles = {
  option: provided => {
    return {
      ...provided,
      background: 'transparent',
      outline: 'none',
      color: '#FBFBFB',
      fontSize: '18px',
      fontWeight: '400',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#FF868D',
        fontWeight: '400',
      },
      textAlign: 'left',
    };
  },
  control: styles => ({
    ...styles,
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: 8,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    height: '50px',
  }),
  /*=== текст в інпуті, обраний з випадаючого списку ===*/
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: '#FBFBFB',
      padding: '8px 20px',
    };
  },
  /*=== випадаячий список ===*/
  menu: (provided, state) => {
    return {
      ...provided,
      background:
        'linear-gradient(0deg,rgba(83, 61, 186, 0.7) 0%,rgba(80, 48, 154, 0.7) 36%,rgba(106, 70, 165, 0.8) 61%,rgba(133, 93, 175, 0.66) 100%)',
      borderRadius: '8px',
    };
  },
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {
      display: 'none',
    },
  }),
  /*=== текст плейсхолдеру ===*/
  placeholder: () => {
    return {
      color: 'rgba(255, 255, 255, 0.5)',
      position: 'absolute',
      left: 10,
      padding: '8px 20px',
    };
  },
  indicatorSeparator: () => ({}),

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },
  /*=== стрілочка для відкриття випадаючого списку===*/
  dropdownIndicator: provided => {
    return {
      ...provided,
      color: 'rgba(255, 255, 255, 0.4)',
      '&:hover': {
        color: '#fbfbfb',
      },
    };
  },
  /*=== текст котрий вводять вручну в інпут ===*/
  input: provided => {
    return {
      ...provided,
      margin: '0px',
      color: '#FBFBFB',
      padding: '8px 20px',
      minWidth: '100%',
    };
  },
};

export default function DiagramTab() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories).filter(
    e => e.type === 'EXPENSE'
  );
  const sum = useSelector(selectCategoriesSummary).filter(
    e => e.type === 'EXPENSE'
  );
  const totalExpenses = useSelector(selectExpenseSummary);
  const sumData = categories
    .map(c => ({
      color: getRandomHexColor(),
      name: c.name,
      total: 0 - sum.find(e => e.name === c.name)?.total || 0,
    }))
    .filter(e => e.total > 0);

  useEffect(() => {
    dispatch(summaryThunk());
  }, [dispatch]);

  return (
    <div className={css.diagram}>
      <div>
        <h2 className={css.statistics}>Statistics</h2>
        <div className={css.totalWrapper}>
          <Chart sumData={sumData} />
          <span className={css.total}>
            &#8372; {formatMoney(0 - totalExpenses)}
          </span>
        </div>
      </div>
      <div>
        <div className={css.selectWrapper}>
          <Select
            className={css.select}
            options={months}
            styles={customStyles}
            defaultValue={months[current.month - 1]}
            onChange={e => {
              if (e.value !== current.month) {
                current.month = e.value;
                dispatch(summaryThunk(current));
              }
            }}
          />
          <Select
            className={css.select}
            styles={customStyles}
            defaultValue={years[2028 - current.year]}
            options={years}
            onChange={e => {
              if (e.value !== current.year) {
                current.year = e.value;
                dispatch(summaryThunk(current));
              }
            }}
          />
        </div>
        <TableBlock data={sumData} />
      </div>
    </div>
  );
}
