import React from "react";

import { Typography, Avatar, Rating } from "@material-tailwind/react";

function CustomerReview() {
  return (
    <>
      <section className="px-8 text-center border-2 border-[#A5BEC6] m-5">
        <Typography variant="h2" color="blue-gray" className="mb-6 font-medium">
          &quot;This is an excellent product, the documentation is excellent and
          helped me get things done more efficiently.&quot;
        </Typography>
        <Avatar
          className="w-52"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image"
          size="sm"
        />
        <Typography variant="h6" className="mt-4">
          Tania Andrew
        </Typography>
        <Typography color="gray" className="mb-4 font-normal">
          Lead Website Developer
        </Typography>
        <Rating value={5} readonly />
      </section>

      <section className="px-8 text-center border-2 border-[#A5BEC6] m-5">
      <Typography variant="h2" color="blue-gray" className="mb-6 font-medium">
        &quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;
      </Typography>
      <Avatar className='w-52'
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="sm"
      />
      <Typography variant="h6" className="mt-4">
      Tania Andrew
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        Lead Website Developer
      </Typography>
      <Rating value={5} readonly />
    </section>


    <section className="px-8 text-center border-2 border-[#A5BEC6] m-5">
      <Typography variant="h2" color="blue-gray" className="mb-6 font-medium">
        &quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;
      </Typography>
      <Avatar className='w-52'
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="sm"
      />
      <Typography variant="h6" className="mt-4">
      Tania Andrew
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        Lead Website Developer
      </Typography>
      <Rating value={5} readonly />
    </section>
    </>
  );
}

export default CustomerReview;
