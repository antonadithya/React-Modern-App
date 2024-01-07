
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-[20px] justify-start`}>
    {stats.map((stat) => (
      <div key={stat.id} className="flex flex-row items-center justify-start mx-10">

          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              
                <h4 className="font-semibold font-Poppins xs:text-[40px] text-[30px] xs:leading[53] leading-[43px] text-white">
                    <CountUp
                      start={0}
                      end={isVisible ? parseStatValue(stat.value) : 0}
                      duration={3.75}
                      separator=" "
                      decimals=""
                      decimal=","
                      prefix=""
                      suffix={stat.plus}
                    />
                </h4>
             
            )}
          </VisibilitySensor>
        
        <p className="font-normal font-Poppins xs:text-[20px] text-[15px] xs:leading[26] leading-[21px] text-white text-gradient uppercase ml-3 mx-10">
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
