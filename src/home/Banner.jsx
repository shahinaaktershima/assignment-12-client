

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/NFCHs3Vb/image.png)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl text-white">
      <h1 className="mb-5 text-5xl font-bold">Lets explore the hostel management</h1>
      <p className="mb-5">Hostel management involves overseeing the operations of a lodging facility that accommodates multiple guests, typically students or travelers, in shared accommodations. It encompasses various tasks like managing reservations, maintaining facilities, ensuring safety and security, handling administrative duties, addressing guest needs, fostering a sense of community among residents, and often coordinating social activities</p>
      <div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <button className="btn btn-primary -ml-4">Search</button>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;