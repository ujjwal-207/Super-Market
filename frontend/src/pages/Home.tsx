const Home = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] mt-3 ml-5 h-lvh">
      <div className="text-center">
        <p className="text-base">For your</p>
        <div className="mt-7">
          <p className="text-4xl">Comfortable Shopping</p>
          <p className="text-5xl color">Experience</p>
        </div>
      </div>
      <div className="h-40">
        <img src={"/shopping.webp"} alt="" className="h-60 w-60" />
      </div>
    </div>
  );
};

export default Home;
