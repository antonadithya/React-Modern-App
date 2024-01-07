import React from 'react';
import CountUp from 'react-countup';
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-[20px] mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className="flex flex-row items-center justify-start flex-1">
        <CountUp
          start={0}
          end={parseStatValue(stat.value)}
          duration={3.75}
          separator=" "
          decimals=""
          decimal=","
          prefix=""
          suffix={stat.plus}
          onEnd={() => console.log(`Animation for ${stat.title} ended!`)}
        >
          {({ countUpRef, start }) => (
            <h4
              ref={countUpRef}
              className="font-semibold font-Poppins xs:text-[40px] text-[30px] xs:leading[53] leading-[43px] text-white "
              onClick={start}
            />
          )}
        </CountUp>
        <p className="font-normal font-Poppins xs:text-[20px] text-[15px] xs:leading[26] leading-[21px] text-white text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

// Helper function to parse numeric values from strings like "$230M+"
const parseStatValue = (value) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  return isNaN(numericValue) ? 0 : numericValue;
};

export default Stats;
