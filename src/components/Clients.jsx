
import Slider from 'react-infinite-logo-slider';
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} mb-16`}>
    <div className={`${styles.flexCenter} w-full flex-wrap overflow-hidden`}>
      <Slider width="250px" duration={40} pauseOnHover={true} blurBorders={false} blurBoderColor={'#fff'}>
        {clients.map((client) => (
          <Slider.Slide key={client.id}>
            <div className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt="company" className="sm:w-[192px] w-[100px] object-cover" />
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  </section>
);

export default Clients;
