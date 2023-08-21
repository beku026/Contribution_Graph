import dayjs from "dayjs";
import "./Tooltip.css";

const Tooltip = ({ data }) => {
  const formatDate = (dateString) => {
    const formattedDate = dayjs(dateString).format("dddd, MMMM D, YYYY");
    return formattedDate;
  }
  const formattedDate = formatDate(data.day);
  return (
    <>
      <div className="tooltip">
        <h5 className="count">{data.count > 0 ? data.count : 'No' } contributions</h5>
        <div className="contrubutionDate">
         {formattedDate}
        </div>
        <svg
          className="toolotip_svg"
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 6L0.169873 1.38009e-07L8.83013 8.95112e-07L4.5 6Z"
            fill="black"
          />
        </svg>
      </div>
    </>
  );
};

export default Tooltip;
