function Testimonial() {
    return (
        <>
            <div className="bg-gray-100 items-center mt-5 pt-5 ">
                <div className="flex justify-center items-center ">
                    <h3 data-aos="fade-down"
                        className="font-bold inline-flex items-center justify-center rounded-full text-center p-2 px-4 sm:px-5 text-sm sm:text-base"
                        style={{ backgroundColor: '#CDD9FF', color: "#0057D3" }} // Apply custom background color using inline styles
                    >OUR TESTIMONIALS
                    </h3>
                </div>
                <div data-aos="fade-down" className="items-cente pt-5">
                    <h1 className="sm:pt-2 px-3 font-semibold text-2xl sm:text-3xl  text-center text-[#0057D3]">
                      What Our Students Says About Us
                    </h1>
                </div>
            </div>

        </>
    )
}
export default Testimonial;