import "@/styles/components/Information.scss";
import {
  BsBoxSeam,
  BsCreditCard,
  BsCurrencyDollar,
  BsHeadphones,
} from "react-icons/bs";

const Information = () => {
  return (
    <section className="information p-11 xl:text-[18px]">
      <div className="boxs max-sm:m-8 max-xl:my-5">
        <p className="icons">
          <BsBoxSeam />
        </p>
        <h2 className="titles">free shipping</h2>
        <p>for order above $150</p>
      </div>

      <div className="boxs max-sm:m-8 max-xl:my-5">
        <p className="icons">
          <BsCurrencyDollar />
        </p>
        <h2 className="titles">money guarantee</h2>
        <p>within 30 days for an exchange</p>
      </div>
      <div className="boxs max-sm:m-8 max-xl:my-5">
        <p className="icons">
          <BsHeadphones />
        </p>
        <h2 className="titles">online support</h2>
        <p>24 hours a day , 7 days a week</p>
      </div>
      <div className="boxs max-sm:m-8 max-xl:my-5">
        <p className="icons">
          <BsCreditCard />
        </p>
        <h2 className="titles">flexible payment</h2>
        <p>pay with multiple credit cards</p>
      </div>
    </section>
  );
};

export default Information;
