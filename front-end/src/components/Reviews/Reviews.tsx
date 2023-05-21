// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";

// type ReviewType = {
//   id: number;
//   date: string;
//   name: string;
//   email: string;
//   comment: string;
// };
// type FormInput = {
//   name: string;
//   email: string;
//   comment: string;
// };

// const Reviews: React.FC = () => {
//   const [reviews, setReviews] = useState<ReviewType[]>([]);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormInput>();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/reviews")
//       .then((response) => setReviews(response.data));
//   }, []);

//   const onSubmit = (data: FormInput) => {
//     axios
//       .post("http://localhost:3000/reviews", {
//         ...data,
//         id: Math.random(),
//         date: new Date().toISOString().split("T")[0],
//       })
//       .then((response) => {
//         setReviews((prevReviews) => [...prevReviews, response.data]);
//         reset();
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           name="name"
//           ref={register({ required: true })}
//           placeholder="Name"
//         />
//         {errors.name && <p>This field is required</p>}

//         <input
//           name="email"
//           ref={register({ required: true })}
//           placeholder="Email"
//         />
//         {errors.email && <p>This field is required</p>}

//         <textarea
//           name="comment"
//           ref={register({ required: true })}
//           placeholder="Comment"
//         />
//         {errors.comment && <p>This field is required</p>}

//         <button type="submit">Submit</button>
//       </form>

//       {reviews.map((review) => (
//         <div key={review.id}>
//           <h2>{review.name}</h2>
//           <p>{review.comment}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Reviews;

// src/components/Reviews/Reviews.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Button } from "react-bootstrap";

type ReviewType = {
  id: number;
  date: string;
  name: string;
  email: string;
  comment: string;
};

type ReviewInput = {
  name: string;
  email: string;
  comment: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  comment: yup.string().required("Comment is required"),
});

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReviewInput>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/reviews")
      .then((response) => setReviews(response.data));
  }, []);

  const onSubmit = (data: ReviewInput) => {
    axios
      .post("http://localhost:3000/reviews", {
        ...data,
        id: Math.random(),
        date: new Date().toISOString().split("T")[0],
      })
      .then((response) => {
        setReviews((prevReviews) => [...prevReviews, response.data]);
        reset();
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control {...field} type="text" placeholder="Enter name" />
            )}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control {...field} type="email" placeholder="Enter email" />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>

        <Form.Group controlId="formComment">
          <Form.Label>Comment</Form.Label>
          <Controller
            name="comment"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control
                {...field}
                as="textarea"
                rows={3}
                placeholder="Enter comment"
              />
            )}
          />
          {errors.comment && <p>{errors.comment.message}</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.name}</h2>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
