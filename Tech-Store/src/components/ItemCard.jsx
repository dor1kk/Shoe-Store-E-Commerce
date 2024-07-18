const ItemCard = ({ imgURL, changeBigItemImage, bigItemImg }) => {
    const handleClick = () => {
      if (bigItemImg !== imgURL.bigItem) {
        changeBigItemImage(imgURL.bigItem);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigItemImg === imgURL.bigItem
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-white bg-card shadow-lg bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ItemCard;