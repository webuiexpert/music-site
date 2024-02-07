import React from "react";
import contactimg from "../assets/images/contact-img.png";

function Contact() {
  return (
    <div className="lg:px-20 px-12 py-8 w-full bg-blue-800 h-[100vh] flex items-center mt-[-13vh]">
      <div className="grid lg:grid-cols-2 pt-[20vh] gap-6 items-center">
        <div>
          <img src={contactimg} alt="" />
        </div>
        <div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl">Contact Now</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            id esse eos, earum vitae similique minima doloribus ratione. Animi,
            nesciunt.Explicabo id esse eos, earum vitae similique minima
            doloribus ratione. Animi, nesciunt.
          </p>
        </div>
        <form action="" className=" pb-16 py-2 mt-4 space-y-4">
          <div className="flex flex-col space-y-1">
            <label className="text-1xl font-semibold">Name</label>
            <input className="p-1 border-none" type="text" name="name" id="name" placeholder="Eneter Your Name"/>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-1xl font-semibold">Email</label>
            <input className="p-1 border-none" type="email" name="email" id="email" placeholder="Eneter Your Email"/>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-1xl font-semibold">Write a Message</label> 
           <textarea name="message" id="message" cols="50" rows="7"></textarea>
          </div>
          <div>
            <input className="py-2 px-3 border rounded-lg cursor-pointer hover:bg-black duration-300" type="submit" value="Send Message" />
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
